import { useState, useEffect, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Search, ShoppingCart, Star, ArrowRight } from "lucide-react";
import { products } from "../data/productsData";
import { getImageUrl } from "../utils/imageUtils";

export default function MainProductsSection() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Get featured products (first 3 products for display)
  const featuredProducts = products.slice(0, 3);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Search by product code/model number
    const searchResults = products.filter(product => {
      const productCode = product.specs?.Model || "";
      const productName = product.name.toLowerCase();
      const searchLower = searchQuery.toLowerCase();
      
      return productCode.toLowerCase().includes(searchLower) || 
             productName.includes(searchLower);
    });

    setFilteredProducts(searchResults);
    setIsSearching(false);
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      // Search is already handled by useEffect
    }
  };

  const handleProductClick = (product) => {
    if (product.detailLink) {
      window.location.href = product.detailLink;
    }
  };

  const handleQuoteRequest = (product) => {
    const productInfo = {
      name: product.name,
      category: product.category,
      description: product.description,
      image: product.image,
      price: product.price || "Fiyat için teklif alın"
    };
    window.location.href = `/iletisim?product=${encodeURIComponent(
      JSON.stringify(productInfo)
    )}`;
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#b91c1c]/10 text-[#b91c1c] rounded-full text-sm font-medium mb-6">
            <ShoppingCart size={16} />
            <span>{t("products.catalog")}</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t("products.premiumSeries")}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t("products.description")}
          </p>

          {/* Search Section */}
          <div className="max-w-md mx-auto mb-8">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t("products.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b91c1c] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-[#b91c1c] text-white rounded-md hover:bg-[#991b1b] transition-colors"
                >
                  {t("products.search")}
                </button>
              </div>
            </form>
          </div>

          {/* All Products Button */}
          <a
            href="/urunler"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#b91c1c] hover:bg-[#991b1b] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
{t("products.allProducts")} ({products.length})
          </a>
        </div>

        {/* Category Bar */}
        <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 text-gray-700 font-medium">
            <span>PLEKSİ ({products.length})</span>
            <ArrowRight size={20} className="text-[#b91c1c]" />
          </div>
        </div>

        {/* Search Results or Featured Products */}
        {searchQuery.trim() && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Arama Sonuçları: "{searchQuery}"
            </h3>
            {isSearching ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#b91c1c]"></div>
                <p className="mt-2 text-gray-600">Aranıyor...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onProductClick={handleProductClick}
                    onQuoteRequest={handleQuoteRequest}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-lg">
                  "{searchQuery}" için ürün bulunamadı.
                </p>
                <p className="text-gray-500 mt-2">
                  Farklı bir ürün kodu veya model adı deneyin.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Featured Products Grid */}
        {(!searchQuery.trim() || filteredProducts.length === 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={handleProductClick}
                onQuoteRequest={handleQuoteRequest}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Product Card Component
function ProductCard({ product, onProductClick, onQuoteRequest }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-80 product-image">
        <img
          src={getImageUrl(product.image)}
          alt={product.name}
          className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
          onClick={() => onProductClick(product)}
        />
      </div>

      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">
              {product.rating}
            </span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b91c1c] transition-colors">
          {product.name}
        </h3>

        {/* Product Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => onProductClick(product)}
            className="flex items-center space-x-2 text-[#b91c1c] font-semibold text-sm hover:gap-3 transition-all group"
          >
            <span>{t("products.viewDetails")}</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <button
            onClick={() => onQuoteRequest(product)}
            className="px-4 py-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-sm font-semibold rounded-lg transition-colors"
          >
            {t("products.getQuote")}
          </button>
        </div>
      </div>
    </div>
  );
}
