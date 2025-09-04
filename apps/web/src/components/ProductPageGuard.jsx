import React from 'react';
import { useProductPageGuards } from '../hooks/useProductPageGuards';
import { Shield, AlertTriangle, Eye } from 'lucide-react';

/**
 * Ürün sayfalarında güvenlik önlemlerini görsel olarak destekleyen bileşen
 */
export function ProductPageGuard({ children }) {
  const { isBlurred, showWarning, isProtected } = useProductPageGuards();

  return (
    <>
      {children}
      
      {/* Uyarı bildirimi */}
      {showWarning && (
        <div className="fixed top-4 right-4 z-50 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg max-w-sm animate-fade-in">
          <div className="flex items-start space-x-3">
            <AlertTriangle size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="font-semibold text-sm">Korumalı İçerik</h4>
              <p className="text-xs mt-1">
                Bu içerik telif hakları ile korunmaktadır. 
                Kopyalama, indirme veya ekran görüntüsü alma işlemleri engellenmiştir.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Korumalı sayfa göstergesi (sadece ürün sayfalarında) */}
      {isProtected && (
        <div className="fixed bottom-4 left-4 z-40 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-2 shadow-sm">
          <div className="flex items-center space-x-2 text-xs text-gray-600">
            <Shield size={14} className="text-green-600" />
            <span>Güvenli Görüntüleme</span>
          </div>
        </div>
      )}

      {/* CSS stilleri */}
      <style jsx global>{`
        /* Blur efekti için genel stiller */
        .product-page-blur img,
        .product-page-blur canvas {
          filter: blur(4px) !important;
          transition: filter 0.3s ease !important;
        }

        /* No-copy sınıfı */
        .no-copy {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-user-drag: none !important;
          -khtml-user-drag: none !important;
          -moz-user-drag: none !important;
          -o-user-drag: none !important;
          user-drag: none !important;
          pointer-events: auto !important;
        }

        /* Ürün görselleri için özel koruma */
        .product-image,
        .secure-image {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-user-drag: none !important;
          -khtml-user-drag: none !important;
          -moz-user-drag: none !important;
          -o-user-drag: none !important;
          user-drag: none !important;
        }

        .product-image img,
        .secure-image img,
        .product-image canvas,
        .secure-image canvas {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-user-drag: none !important;
          pointer-events: auto !important;
        }

        /* Mobil cihazlar için ek koruma */
        @media (max-width: 768px) {
          .product-image,
          .secure-image {
            -webkit-touch-callout: none !important;
            -webkit-user-select: none !important;
            -webkit-tap-highlight-color: transparent !important;
          }
        }

        /* Fade-in animasyonu */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        /* Print medya sorgusu - yazdırma engelleyici */
        @media print {
          .product-image,
          .secure-image,
          img[src*="products/"],
          canvas {
            display: none !important;
            visibility: hidden !important;
          }
          
          .product-image::after,
          .secure-image::after {
            content: "Bu görsel telif hakları ile korunmaktadır - © WALMCO";
            display: block !important;
            padding: 20px;
            background: #f3f4f6;
            border: 2px solid #d1d5db;
            text-align: center;
            font-size: 14px;
            color: #374151;
          }
        }

        /* High contrast mode için koruma */
        @media (prefers-contrast: high) {
          .product-image,
          .secure-image {
            outline: 2px solid transparent !important;
          }
        }

        /* Developer tools açık olduğunda blur */
        .devtools-detected {
          filter: blur(5px) !important;
          pointer-events: none !important;
        }
      `}</style>
    </>
  );
}

export default ProductPageGuard;
