import { getImageUrl, handleImageError } from '@/utils/imageUtils';

/**
 * Enhanced image component that handles different environments and fallbacks
 */
export default function WalmcoImage({ 
  src, 
  alt = 'WALMCO Ürün', 
  className = '', 
  onClick,
  productName,
  ...props 
}) {
  const imageSrc = getImageUrl(src);
  
  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onClick={onClick}
      onError={(e) => handleImageError(e, productName || alt)}
      {...props}
    />
  );
}
