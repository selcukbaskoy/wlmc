import { useEffect, useState } from 'react';

/**
 * Ürün sayfalarında güvenlik önlemlerini yöneten hook
 * Sadece ürün detay sayfalarında aktif olur
 */
export function useProductPageGuards() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    // Sadece ürün sayfalarında çalışsın
    const isProductPage = window.location.pathname.includes('/pleksiglas-korkuluk');
    if (!isProductPage) return;

    console.log('🛡️ Ürün sayfası güvenlik önlemleri aktif');

    // Klavye kısayol engelleyicileri
    const handleKeyDown = (e) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const ctrlKey = isMac ? e.metaKey : e.ctrlKey;

      // Zararlı kısayolları engelle
      if (ctrlKey && ['s', 'u', 'p'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        e.stopPropagation();
        
        setIsBlurred(true);
        setShowWarning(true);
        
        setTimeout(() => {
          setIsBlurred(false);
          setShowWarning(false);
        }, 2000);
        
        return false;
      }

      // PrintScreen tuşu
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        e.stopPropagation();
        
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        
        return false;
      }

      // F12 - Developer tools
      if (e.key === 'F12') {
        e.preventDefault();
        e.stopPropagation();
        
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 2000);
        
        return false;
      }
    };

    // Sağ tık menüsünü engelle
    const handleContextMenu = (e) => {
      // Sadece görseller ve medya içerikleri için engelle
      const target = e.target;
      if (target.tagName === 'IMG' || 
          target.tagName === 'CANVAS' || 
          target.closest('.product-image') ||
          target.closest('.secure-image')) {
        e.preventDefault();
        e.stopPropagation();
        
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 1500);
        
        return false;
      }
    };

    // Drag & drop engelleyici
    const handleDragStart = (e) => {
      const target = e.target;
      if (target.tagName === 'IMG' || 
          target.tagName === 'CANVAS' ||
          target.closest('.product-image') ||
          target.closest('.secure-image')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Seçim engelleyici (sadece görseller için)
    const handleSelectStart = (e) => {
      const target = e.target;
      if (target.tagName === 'IMG' || 
          target.tagName === 'CANVAS' ||
          target.closest('.product-image') ||
          target.closest('.secure-image')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Copy/Cut engelleyici
    const handleCopy = (e) => {
      // Sadece form alanları dışında engelle
      const target = e.target;
      if (!target.matches('input, textarea, [contenteditable]')) {
        e.preventDefault();
        e.stopPropagation();
        
        // Selection'ı temizle
        if (window.getSelection) {
          window.getSelection().removeAllRanges();
        }
        
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 1500);
        
        return false;
      }
    };

    // Event listener'ları ekle
    document.addEventListener('keydown', handleKeyDown, { passive: false, capture: true });
    document.addEventListener('contextmenu', handleContextMenu, { passive: false, capture: true });
    document.addEventListener('dragstart', handleDragStart, { passive: false, capture: true });
    document.addEventListener('selectstart', handleSelectStart, { passive: false, capture: true });
    document.addEventListener('copy', handleCopy, { passive: false, capture: true });
    document.addEventListener('cut', handleCopy, { passive: false, capture: true });

    // Developer tools açılma tespiti (heuristic)
    let devToolsOpen = false;
    const threshold = 160;
    
    const detectDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      const isOpen = widthThreshold || heightThreshold;
      
      if (isOpen && !devToolsOpen) {
        devToolsOpen = true;
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
      } else if (!isOpen) {
        devToolsOpen = false;
      }
    };

    // DevTools tespiti için interval
    const devToolsInterval = setInterval(detectDevTools, 1000);

    // Cleanup fonksiyonu
    return () => {
      document.removeEventListener('keydown', handleKeyDown, { capture: true });
      document.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      document.removeEventListener('dragstart', handleDragStart, { capture: true });
      document.removeEventListener('selectstart', handleSelectStart, { capture: true });
      document.removeEventListener('copy', handleCopy, { capture: true });
      document.removeEventListener('cut', handleCopy, { capture: true });
      clearInterval(devToolsInterval);
    };
  }, []);

  // CSS sınıflarını body'ye ekle/çıkar
  useEffect(() => {
    const isProductPage = window.location.pathname.includes('/pleksiglas-korkuluk');
    if (!isProductPage) return;

    if (isBlurred) {
      document.body.classList.add('product-page-blur');
    } else {
      document.body.classList.remove('product-page-blur');
    }

    return () => {
      document.body.classList.remove('product-page-blur');
    };
  }, [isBlurred]);

  return {
    isBlurred,
    showWarning,
    isProtected: window.location.pathname.includes('/pleksiglas-korkuluk')
  };
}
