import React from 'react';

/**
 * En basit test bileşeni - sadece div background ile görsel
 */
export default function SimpleTestImage({ alt, className = '' }) {
  console.log('🧪 SimpleTestImage render:', { alt, className });
  
  return (
    <div 
      className={`${className} bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center`}
      style={{
        minHeight: '200px',
        border: '2px solid #d1d5db'
      }}
    >
      <div className="text-center p-4">
        <div className="text-2xl font-bold text-gray-600 mb-2">WALMCO</div>
        <div className="text-sm text-gray-500">Test Görseli</div>
        <div className="text-xs text-gray-400 mt-1">{alt}</div>
      </div>
      
      {/* Watermark */}
      <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
        © WALMCO
      </div>
    </div>
  );
}
