/**
 * Image utility functions for handling different environments
 */

const PRODUCTION_IMAGE_BASE = 'https://walmco.com/';
const LOCAL_IMAGE_BASE = '/';

/**
 * Mapping between production folder names and local folder names
 */
const FOLDER_MAPPING = {
  'Plexsi%20Babalar': 'Pleksi%20Baba',
  'Plexsi Babalar': 'Pleksi Baba',
  'Pleksi%20Dikmeler': 'Pleksi%20dikme', 
  'Pleksi Dikmeler': 'Pleksi dikme',
  'pleksi%20mumluklar': 'Pleksi%20Aksesuar',
  'pleksi mumluklar': 'Pleksi Aksesuar',
  'Diamond%20Seri': 'Pleksi%20Diamond%20Seri%20Dikmeler',
  'Diamond Seri': 'Pleksi Diamond Seri Dikmeler',
  // Uygulamalar mapping
  'uygulamalar': 'Uygulamalar',
  'applications': 'Uygulamalar'
};

/**
 * Get the appropriate image URL based on environment
 * @param {string} imageUrl - Original image URL 
 * @returns {string} Processed image URL
 */
export function getImageUrl(imageUrl) {
  // If it's already a full URL or starts with /, return as is for non-walmco URLs
  if (!imageUrl || imageUrl.startsWith('data:') || imageUrl.startsWith('/')) {
    return imageUrl;
  }
  
  // Handle ucarecdn and other external URLs
  if (imageUrl.startsWith('http') && !imageUrl.includes('walmco.com/')) {
    return imageUrl;
  }
  
  // In development, replace production URLs with local ones
  if (import.meta.env.DEV && imageUrl.includes('walmco.com/')) {
    // Extract the path after walmco.com
    const match = imageUrl.match(/walmco\.com\/(.+)/);
    if (match) {
      let localPath = decodeURIComponent(match[1]);
      
      // Apply folder mapping (before encoding)
      Object.entries(FOLDER_MAPPING).forEach(([prodFolder, localFolder]) => {
        // Decode both for comparison
        const decodedProdFolder = decodeURIComponent(prodFolder);
        const decodedLocalFolder = decodeURIComponent(localFolder);
        localPath = localPath.replace(decodedProdFolder, decodedLocalFolder);
        localPath = localPath.replace(prodFolder, localFolder);
      });
      
      // Encode the path properly for URL
      const pathParts = localPath.split('/');
      const encodedParts = pathParts.map(part => encodeURIComponent(part));
      
      return `/${encodedParts.join('/')}`;
    }
  }
  
  // For production, return the original URL
  if (!import.meta.env.DEV) {
    return imageUrl;
  }
  
  // For relative paths in dev, prepend local base
  return `${LOCAL_IMAGE_BASE}${imageUrl}`;
}

/**
 * Create a fallback SVG placeholder for missing images
 * @param {string} productName - Product name for the placeholder
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @returns {string} Data URL for SVG placeholder
 */
export function createImagePlaceholder(productName = 'WALMCO Ürün', width = 400, height = 300) {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#f3f4f6"/>
      <text x="${width/2}" y="${height/2 - 20}" text-anchor="middle" font-family="Arial" font-size="16" fill="#6b7280">WALMCO</text>
      <text x="${width/2}" y="${height/2}" text-anchor="middle" font-family="Arial" font-size="14" fill="#9ca3af">Ürün Görseli</text>
      <text x="${width/2}" y="${height/2 + 20}" text-anchor="middle" font-family="Arial" font-size="12" fill="#9ca3af">${productName.substring(0, 30)}...</text>
    </svg>
  `;
  return 'data:image/svg+xml;base64,' + btoa(svg);
}

/**
 * Handle image error by setting a fallback placeholder
 * @param {Event} e - Image error event
 * @param {string} productName - Product name for placeholder
 */
export function handleImageError(e, productName = 'WALMCO Ürün') {
  const img = e.target;
  if (img.dataset.hasFallback) return; // Prevent infinite loops
  
  const { width, height } = img.getBoundingClientRect();
  img.dataset.hasFallback = '1';
  img.onerror = null;
  img.src = createImagePlaceholder(productName, Math.round(width) || 400, Math.round(height) || 300);
  img.style.objectFit = 'cover';
}
