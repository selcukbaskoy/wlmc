import React, { useState } from 'react';

/**
 * Çalışan görsel test bileşeni - img etiketi ile
 */
export default function WorkingImageTest({ alt, className = '' }) {
  const [hasError, setHasError] = useState(false);
  
  console.log('🖼️ WorkingImageTest render:', { alt, className });
  
  // Basit test görseli - 1x1 pixel PNG data URL
  const testImageSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
  
  if (hasError) {
    // Hata durumunda gri kutu göster
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <div className="text-center p-4">
          <div className="text-lg font-bold text-gray-600">WALMCO</div>
          <div className="text-sm text-gray-500">Görsel Hatası</div>
          <div className="text-xs text-red-500">IMG Error</div>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`relative ${className}`}>
      {/* Test img etiketi */}
      <img
        src={testImageSrc}
        alt={alt}
        onError={() => {
          console.error('🚨 IMG Error:', alt);
          setHasError(true);
        }}
        onLoad={() => {
          console.log('✅ IMG Success:', alt);
        }}
        className="w-full h-full object-cover"
        style={{
          backgroundColor: '#e5e7eb', // Fallback color
          userSelect: 'none'
        }}
      />
      
      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200/80 to-gray-300/80">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-700 mb-2">WALMCO</div>
          <div className="text-sm text-gray-600">IMG Test</div>
          <div className="text-xs text-gray-500 mt-1">{alt?.substring(0, 25)}...</div>
        </div>
      </div>
      
      {/* Watermark */}
      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
        © WALMCO
      </div>
    </div>
  );
}
