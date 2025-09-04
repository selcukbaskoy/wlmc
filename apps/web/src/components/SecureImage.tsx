import React, { useRef, useEffect, useState, useCallback } from 'react';

interface SecureImageProps {
  /** Görsel ID'si veya kaynak URL'i */
  src: string;
  /** Alt metin */
  alt: string;
  /** CSS sınıfları */
  className?: string;
  /** Watermark metni (varsayılan: kullanıcı adı + tarih) */
  watermarkText?: string;
  /** Watermark opaklığı (0-1 arası) */
  watermarkOpacity?: number;
  /** Watermark tekrar aralığı (piksel) */
  watermarkGap?: number;
  /** Görsel kalitesi (1-3 arası, 1=yüksek kalite) */
  quality?: number;
  /** Click olayı */
  onClick?: () => void;
  /** Yükleme durumu callback'i */
  onLoad?: () => void;
  /** Hata durumu callback'i */
  onError?: (error: Error) => void;
}

interface WatermarkOverlayProps {
  isVisible: boolean;
  text: string;
}

// Blur efekti için CSS stilleri
const blurStyles = `
  .secure-image-blur {
    filter: blur(4px);
    transition: filter 0.3s ease;
  }
`;

// Screenshot caydırıcı overlay bileşeni
const WatermarkOverlay: React.FC<WatermarkOverlayProps> = ({ isVisible, text }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div 
        className="absolute inset-0 bg-black/20"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
              <text x="50%" y="50%" text-anchor="middle" dy=".3em" 
                    fill="rgba(185,28,28,0.15)" font-size="24" font-weight="bold"
                    transform="rotate(-45 150 150)">${text}</text>
            </svg>
          `)}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px'
        }}
      />
    </div>
  );
};

export const SecureImage: React.FC<SecureImageProps> = ({
  src,
  alt,
  className = '',
  watermarkText,
  watermarkOpacity = 0.3,
  watermarkGap = 200,
  quality = 1,
  onClick,
  onLoad,
  onError
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [imageData, setImageData] = useState<string | null>(null);
  
  // Auth bilgisi (gerçek auth sistemi entegre edildiğinde güncellenecek)
  const user = { name: 'WALMCO', id: Date.now().toString() };

  // Varsayılan watermark metni
  const defaultWatermarkText = watermarkText || 
    `${user?.name || 'WALMCO'} - ${new Date().toLocaleDateString('tr-TR')}`;

  // Stil injection
  useEffect(() => {
    if (!document.getElementById('secure-image-styles')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'secure-image-styles';
      styleSheet.type = 'text/css';
      styleSheet.innerText = blurStyles;
      document.head.appendChild(styleSheet);
    }
  }, []);

  // Görsel yükleme ve canvas'a çizme
  const loadAndDrawImage = useCallback(async () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      setIsLoading(true);
      setHasError(false);

      // Development modunda doğrudan görseli kullan
      const isDev = process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';
      
      console.log('🖼️ SecureImage yükleniyor:', { src, isDev });
      
      let imageUrl;
      if (isDev || src.startsWith('http')) {
        // Development'ta veya HTTP URL'lerde doğrudan kullan
        imageUrl = src;
        console.log('📷 Doğrudan görsel kullanılıyor:', imageUrl);
      } else {
        // Production'da güvenli endpoint kullan
        const response = await fetch(`/api/images/secure/${encodeURIComponent(src)}`, {
          credentials: 'include',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token') || ''}`,
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: Görsel yüklenemedi`);
        }

        const blob = await response.blob();
        imageUrl = URL.createObjectURL(blob);
      }
      
      setImageData(imageUrl);

      const img = new Image();
      // Sadece farklı domain'lerden gelen görseller için crossOrigin kullan
      if (!imageUrl.startsWith(window.location.origin) && imageUrl.startsWith('http')) {
        img.crossOrigin = 'anonymous';
      }
      
      img.onload = () => {
        try {
          // Canvas boyutlarını ayarla
          const containerWidth = containerRef.current?.clientWidth || 500;
          const containerHeight = containerRef.current?.clientHeight || 300;
          
          // Retina ekranlar için ölçekleme
          const scale = window.devicePixelRatio || 1;
          canvas.width = containerWidth * scale;
          canvas.height = containerHeight * scale;
          canvas.style.width = `${containerWidth}px`;
          canvas.style.height = `${containerHeight}px`;
          
          ctx.scale(scale, scale);

          // Görseli çiz
          const aspectRatio = img.width / img.height;
          const containerAspect = containerWidth / containerHeight;
          
          let drawWidth, drawHeight, offsetX = 0, offsetY = 0;
          
          if (aspectRatio > containerAspect) {
            drawHeight = containerHeight;
            drawWidth = drawHeight * aspectRatio;
            offsetX = (containerWidth - drawWidth) / 2;
          } else {
            drawWidth = containerWidth;
            drawHeight = drawWidth / aspectRatio;
            offsetY = (containerHeight - drawHeight) / 2;
          }

          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

          // Watermark ekle
          addWatermark(ctx, containerWidth, containerHeight, defaultWatermarkText);

          // Sadece blob URL'lerini temizle
          if (imageUrl.startsWith('blob:')) {
            URL.revokeObjectURL(imageUrl);
          }
          setIsLoading(false);
          onLoad?.();
        } catch (error) {
          console.error('Canvas çizim hatası:', error);
          setHasError(true);
          onError?.(error as Error);
        }
      };

      img.onerror = (e) => {
        console.error('🚨 Görsel yükleme hatası:', { src, imageUrl, error: e });
        const error = new Error(`Görsel yüklenemedi: ${src}`);
        setHasError(true);
        setIsLoading(false);
        onError?.(error);
        // Sadece blob URL'lerini temizle
        if (imageUrl.startsWith('blob:')) {
          URL.revokeObjectURL(imageUrl);
        }
      };

      img.src = imageUrl;
    } catch (error) {
      console.error('Güvenli görsel yükleme hatası:', error);
      setHasError(true);
      setIsLoading(false);
      onError?.(error as Error);
    }
  }, [src, defaultWatermarkText, onLoad, onError]);

  // Watermark ekleme fonksiyonu
  const addWatermark = (
    ctx: CanvasRenderingContext2D, 
    width: number, 
    height: number, 
    text: string
  ) => {
    ctx.save();
    
    // Watermark stil ayarları
    const fontSize = Math.max(12, Math.min(width, height) / 30);
    ctx.font = `bold ${fontSize}px Inter, Arial, sans-serif`;
    ctx.fillStyle = `rgba(185, 28, 28, ${watermarkOpacity})`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Diyagonal tekrar pattern
    ctx.translate(width / 2, height / 2);
    ctx.rotate(-Math.PI / 6); // -30 derece

    const textWidth = ctx.measureText(text).width;
    const gap = Math.max(watermarkGap, textWidth + 50);

    // Watermark'ları grid pattern olarak çiz
    for (let x = -width; x < width * 2; x += gap) {
      for (let y = -height; y < height * 2; y += gap) {
        ctx.fillText(text, x, y);
      }
    }

    ctx.restore();
  };

  // Sayfa visibility değişikliklerini izle
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setShowOverlay(true);
      } else {
        // Sayfa odaklandığında overlay'i kısa süre sonra kaldır
        setTimeout(() => setShowOverlay(false), 1000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Klavye kısayollarını engelle (sadece ürün sayfalarında)
  useEffect(() => {
    const isProductPage = window.location.pathname.includes('/pleksiglas-korkuluk');
    if (!isProductPage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const ctrlKey = isMac ? e.metaKey : e.ctrlKey;

      // Zararlı kısayolları engelle
      if (ctrlKey && ['s', 'u', 'p'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        setIsBlurred(true);
        setTimeout(() => setIsBlurred(false), 2000);
        return false;
      }

      // PrintScreen tuşu
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        setShowOverlay(true);
        setTimeout(() => setShowOverlay(false), 3000);
        return false;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Mouse olaylarını engelle
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  const handleSelectStart = (e: React.SyntheticEvent) => {
    e.preventDefault();
    return false;
  };

  // Component mount olduğunda görseli yükle
  useEffect(() => {
    loadAndDrawImage();
  }, [loadAndDrawImage]);

  if (hasError) {
    return (
      <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="text-gray-500 text-sm mb-2">
            <svg className="w-8 h-8 mx-auto mb-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            Görsel yüklenemedi
          </div>
          <button 
            onClick={loadAndDrawImage}
            className="mt-2 text-[#b91c1c] text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-opacity-50 rounded px-2 py-1"
          >
            Tekrar dene
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        ref={containerRef}
        className={`relative overflow-hidden ${className} ${isBlurred ? 'secure-image-blur' : ''}`}
        style={{
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none',
          WebkitUserDrag: 'none',
          pointerEvents: 'auto'
        }}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        onSelectStart={handleSelectStart}
        onClick={onClick}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#b91c1c]"></div>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
          style={{
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            WebkitUserDrag: 'none'
          }}
        />

        {/* Görünür telif bildirimi */}
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
          © WALMCO
        </div>
      </div>

      {/* Screenshot caydırıcı overlay */}
      <WatermarkOverlay 
        isVisible={showOverlay} 
        text={`${defaultWatermarkText} - KORUNMUŞ İÇERİK`} 
      />
    </>
  );
};

export default SecureImage;
