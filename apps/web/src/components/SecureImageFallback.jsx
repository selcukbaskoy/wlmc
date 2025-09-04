import React, { useState } from 'react';

/**
 * Geçici fallback bileşeni - Normal img etiketi ile watermark overlay
 * Güvenlik sistemi debug edilene kadar kullanılacak
 */
export default function SecureImageFallback({ 
  src, 
  alt, 
  className = '', 
  onClick,
  watermarkText,
  watermarkOpacity = 0.3
}) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Data URL anında yüklenir
  
  // CORS sorununu çözmek için inline SVG kullan
  const getImageSrc = (originalSrc) => {
    console.log('🖼️ Processing image:', originalSrc);
    
    // Ürün model numarasını al
    const modelMatch = originalSrc?.match(/(\d{4})/);
    const modelNumber = modelMatch ? modelMatch[1] : '0000';
    
    // Her model için farklı renk
    const colors = [
      '#ef4444', '#f97316', '#eab308', '#22c55e', 
      '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'
    ];
    const colorIndex = parseInt(modelNumber) % colors.length;
    const primaryColor = colors[colorIndex];
    
    // Güzel SVG placeholder oluştur
    const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <!-- Gradient Background -->
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${primaryColor};stop-opacity:0.1"/>
            <stop offset="100%" style="stop-color:${primaryColor};stop-opacity:0.3"/>
          </linearGradient>
          <linearGradient id="border" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${primaryColor};stop-opacity:0.8"/>
            <stop offset="100%" style="stop-color:${primaryColor};stop-opacity:0.4"/>
          </linearGradient>
        </defs>
        
        <!-- Background -->
        <rect width="400" height="300" fill="url(#bg)"/>
        
        <!-- Border Frame -->
        <rect x="10" y="10" width="380" height="280" fill="none" stroke="url(#border)" stroke-width="2" rx="8"/>
        
        <!-- WALMCO Logo Area -->
        <circle cx="200" cy="120" r="40" fill="${primaryColor}" opacity="0.1"/>
        <circle cx="200" cy="120" r="30" fill="${primaryColor}" opacity="0.2"/>
        
        <!-- Product Icon -->
        <rect x="180" y="100" width="40" height="40" fill="${primaryColor}" opacity="0.3" rx="4"/>
        <rect x="185" y="105" width="30" height="30" fill="${primaryColor}" opacity="0.5" rx="2"/>
        
        <!-- WALMCO Text -->
        <text x="200" y="165" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${primaryColor}">WALMCO</text>
        
        <!-- Model Number -->
        <text x="200" y="185" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#6b7280">Model ${modelNumber}</text>
        
        <!-- Product Name -->
        <text x="200" y="205" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#9ca3af">${(alt || 'Pleksiglas Korkuluk').substring(0, 35)}${(alt || '').length > 35 ? '...' : ''}</text>
        
        <!-- Premium Badge -->
        <rect x="320" y="20" width="60" height="20" fill="${primaryColor}" rx="10"/>
        <text x="350" y="32" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="white">PREMIUM</text>
        
        <!-- Watermark Pattern -->
        <g opacity="0.05">
          <text x="100" y="80" font-family="Arial" font-size="24" font-weight="bold" fill="${primaryColor}" transform="rotate(-20 100 80)">WALMCO</text>
          <text x="300" y="180" font-family="Arial" font-size="24" font-weight="bold" fill="${primaryColor}" transform="rotate(-20 300 180)">WALMCO</text>
          <text x="200" y="250" font-family="Arial" font-size="24" font-weight="bold" fill="${primaryColor}" transform="rotate(-20 200 250)">WALMCO</text>
        </g>
      </svg>
    `)}`;
    
    return svgDataUrl;
  };
  
  const finalSrc = getImageSrc(src);
  
  console.log('🖼️ SecureImageFallback:', { 
    originalSrc: src, 
    finalSrc, 
    alt,
    isPlaceholder: finalSrc.includes('placeholder')
  });

  const handleImageLoad = () => {
    console.log('✅ Görsel yüklendi:', finalSrc);
    setIsLoading(false);
    setImageError(false);
  };

  const handleImageError = (e) => {
    setIsLoading(false);
    setImageError(true);
    console.error('🚨 Görsel yükleme hatası:', { 
      src, 
      error: e,
      message: 'CORS veya 404 hatası olabilir'
    });
  };

  if (imageError) {
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
            onClick={() => {
              setImageError(false);
              setIsLoading(true);
            }}
            className="mt-2 text-[#b91c1c] text-sm hover:underline"
          >
            Tekrar dene
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`relative ${className} cursor-pointer`} 
      onClick={onClick}
      style={{ pointerEvents: 'auto' }} // Container tıklanabilir
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#b91c1c]"></div>
        </div>
      )}
      
      <img
        src={finalSrc}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          WebkitTouchCallout: 'none',
          WebkitUserDrag: 'none',
          pointerEvents: 'none' // Sağ tık ve drag'i engelle
        }}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        draggable={false}
      />

      {/* Basit watermark overlay */}
      {!isLoading && !imageError && watermarkText && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" 
                      fill="rgba(185,28,28,${watermarkOpacity})" 
                      font-size="12" font-weight="bold"
                      transform="rotate(-45 100 100)">${watermarkText}</text>
              </svg>
            `)}")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}
        />
      )}

      {/* Telif bildirimi */}
      {!isLoading && !imageError && (
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
          © WALMCO
        </div>
      )}
    </div>
  );
}
