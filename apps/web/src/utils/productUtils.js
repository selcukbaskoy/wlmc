// Ortak ürün utility fonksiyonları
import { products } from '../data/productsData.js';

/**
 * Rastgele ilgili ürünleri getir (mevcut ürün hariç)
 * @param {number} currentProductId - Mevcut ürünün ID'si
 * @param {number} count - Döndürülecek ürün sayısı
 * @returns {Array} Rastgele seçilmiş ürünler
 */
export const getRandomRelatedProducts = (currentProductId, count = 3) => {
  const filteredProducts = products.filter(product => product.id !== currentProductId);
  
  // Ürünleri karıştır
  const shuffled = [...filteredProducts].sort(() => 0.5 - Math.random());
  
  // İstenen sayıda ürün döndür
  return shuffled.slice(0, count);
};

export default {
  getRandomRelatedProducts
};
