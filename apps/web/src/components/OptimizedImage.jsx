import React, { useState, useRef, useEffect } from 'react';

/**
 * 🚀 LIGHTHOUSE PERFORMANCE OPTIMIZED IMAGE COMPONENT
 * ✅ WebP Format Support with fallback
 * ✅ Lazy Loading with Intersection Observer
 * ✅ Progressive Enhancement
 * ✅ Modern placeholder system
 * ✅ WALMCO watermark integration
 */
export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  onClick,
  watermarkText = "WALMCO",
  watermarkOpacity = 0.25,
  lazy = true,
  sizes = "100vw",
  priority = false
}) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(lazy && !priority);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);
  
  // ⚡ Intersection Observer for Performance
  useEffect(() => {
    if (!lazy || isInView || priority) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setIsLoading(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Preload 50px before viewport
      }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => observer.disconnect();
  }, [lazy, isInView, priority]);

  // 📸 WebP Conversion + CDN Optimization
  const generateImageSources = (originalSrc) => {
    if (!originalSrc || originalSrc.includes('data:image/svg')) {
      return { webpSrc: originalSrc, fallbackSrc: originalSrc };
    }
    
    // Ucarecdn optimization for existing images
    if (originalSrc.includes('ucarecdn.com')) {
      const optimizedBase = originalSrc.split('/-/')[0];
      return {
        webpSrc: `${optimizedBase}/-/format/webp/-/quality/smart/-/resize/800x/`,
        fallbackSrc: `${optimizedBase}/-/format/auto/-/quality/smart/-/resize/800x/`
      };
    }
    
    // Walmco.com images - convert to WebP if possible
    if (originalSrc.includes('walmco.com')) {
      const webpSrc = originalSrc.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      return {
        webpSrc,
        fallbackSrc: originalSrc
      };
    }
    
    return {
      webpSrc: originalSrc,
      fallbackSrc: originalSrc
    };
  };

  const { webpSrc, fallbackSrc } = generateImageSources(src);

  const handleImageLoad = () => {
    setIsLoading(false);
    setImageError(false);
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setImageError(true);
  };

  // 🎨 Error State with Branded Design
  if (imageError) {
    return (
      <div ref={imgRef} className={`bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="w-14 h-14 mx-auto mb-3 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-7 h-7 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-slate-600 text-sm font-semibold mb-1">WALMCO</p>
          <p className="text-slate-500 text-xs mb-3">Görsel yüklenemedi</p>
          <button 
            onClick={() => {
              setImageError(false);
              setIsLoading(true);
              setIsInView(true);
            }}
            className="text-red-600 text-sm hover:text-red-700 font-medium transition-colors"
          >
            Tekrar dene
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} onClick={onClick}>
      {/* ⚡ Modern Loading Skeleton */}
      {isLoading && !imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-2 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
              <div className="text-lg font-bold text-slate-400">WALMCO</div>
              <div className="text-xs text-slate-400 mt-1">Yükleniyor...</div>
            </div>
          </div>
        </div>
      )}
      
      {/* 🚀 OPTIMIZED IMAGE with WebP Support */}
      {isInView && (
        <picture>
          {/* WebP for modern browsers (60% smaller) */}
          <source srcSet={webpSrc} type="image/webp" />
          
          {/* Fallback for older browsers */}
          <img
            src={fallbackSrc}
            alt={alt}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading={lazy && !priority ? "lazy" : "eager"}
            sizes={sizes}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoading || !imageLoaded ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
            style={{
              userSelect: 'none',
              WebkitUserSelect: 'none',
              WebkitTouchCallout: 'none',
              WebkitUserDrag: 'none'
            }}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            // Performance hints
            decoding="async"
            fetchpriority={priority ? "high" : "auto"}
          />
        </picture>
      )}

      {/* 🔒 WALMCO Security Watermark */}
      {imageLoaded && !imageError && watermarkText && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" 
                      fill="rgba(185,28,28,${watermarkOpacity})" 
                      font-size="10" font-weight="600" font-family="system-ui"
                      transform="rotate(-45 80 80)">${watermarkText}</text>
              </svg>
            `)}")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '160px 160px'
          }}
        />
      )}

      {/* 🏷️ WALMCO Brand Badge */}
      {imageLoaded && !imageError && (
        <div className="absolute bottom-2 right-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs px-2 py-1 rounded shadow-lg backdrop-blur-sm font-semibold">
          WALMCO
        </div>
      )}
    </div>
  );
}
