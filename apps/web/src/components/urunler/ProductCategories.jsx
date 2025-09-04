import { useState, useEffect } from "react";
import { ArrowRight, Search } from "lucide-react";

export default function ProductCategories({
  mainCategories,
  selectedCategory,
  setSelectedCategory,
  expandedMainCategory,
  handleMainCategoryClick,
  setExpandedMainCategory,
  totalCount,
  onSearchResults, // Yeni prop ekliyoruz
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleAllProductsClick = () => {
    setSelectedCategory("all");
    setExpandedMainCategory(null);
    setSearchQuery(""); // Arama sorgusunu temizle
  };

  const handleSubcategoryClick = (subcategoryId) => {
    setSelectedCategory(subcategoryId);
    setSearchQuery(""); // Arama sorgusunu temizle
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      // Arama sonuçlarını parent component'e gönder
      if (onSearchResults) {
        onSearchResults(searchQuery.trim());
      }
      setIsSearching(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    if (onSearchResults) {
      onSearchResults(""); // Arama sonuçlarını temizle
    }
  };

  return (
    <section className="py-12 px-6 bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        {/* Search Section */}
        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Ürün kodu veya model ara... (örn: 2866, Dubai, 2701)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-20 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b91c1c] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-[#b91c1c] text-white rounded-md hover:bg-[#991b1b] transition-colors"
                >
                  {isSearching ? "Aranıyor..." : "Ara"}
                </button>
              </div>
            </form>
            {searchQuery && (
              <div className="mt-2 text-center">
                <button
                  onClick={clearSearch}
                  className="text-sm text-gray-500 hover:text-[#b91c1c] transition-colors"
                >
                  Arama sonuçlarını temizle
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={handleAllProductsClick}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
              selectedCategory === "all"
                ? "bg-[#b91c1c] text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Tüm Ürünler ({totalCount})
          </button>
        </div>

        {/* Categories - Sadece arama yapılmadığında göster */}
        {!searchQuery && (
          <div className="space-y-6">
            {mainCategories.map((category) => (
              <div
                key={category.id}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => handleMainCategoryClick(category.id)}
                  className={`w-full px-8 py-6 text-left font-bold text-xl transition-all duration-200 flex items-center justify-between ${
                    expandedMainCategory === category.id
                      ? "bg-[#b91c1c] text-white"
                      : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <span>
                    {category.name} ({category.count})
                  </span>
                  <ArrowRight
                    size={20}
                    className={`transition-transform duration-200 ${
                      expandedMainCategory === category.id ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {expandedMainCategory === category.id && (
                  <div className="bg-white border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                      {category.subcategories.map((subcategory) => (
                        <button
                          key={subcategory.id}
                          onClick={() => handleSubcategoryClick(subcategory.id)}
                          className={`px-6 py-4 rounded-lg font-semibold text-sm transition-all duration-200 text-left ${
                            selectedCategory === subcategory.id
                              ? "bg-[#b91c1c] text-white shadow-md"
                              : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm leading-tight">
                              {subcategory.name}
                            </span>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                selectedCategory === subcategory.id
                                  ? "bg-white/20 text-white"
                                  : "bg-[#b91c1c]/10 text-[#b91c1c]"
                              }`}
                            >
                              {subcategory.count}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
