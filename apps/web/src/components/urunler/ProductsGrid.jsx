import ProductCard from "./ProductCard";

export default function ProductsGrid({ products, onProductSelect, searchQuery }) {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        {/* Search Results Header */}
        {searchQuery && (
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Arama Sonuçları: "{searchQuery}"
            </h2>
            <p className="text-gray-600">
              {products.length} ürün bulundu
            </p>
          </div>
        )}

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={`${product.id}-${product.detailLink || index}`}
                product={product}
                onProductSelect={onProductSelect}
              />
            ))}
          </div>
        ) : searchQuery ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                "{searchQuery}" için ürün bulunamadı
              </h3>
              <p className="text-gray-600 mb-4">
                Farklı bir ürün kodu veya model adı deneyin.
              </p>
              <div className="text-sm text-gray-500">
                <p>Örnek arama terimleri:</p>
                <p>• 2866, 2701, 2705 (ürün kodları)</p>
                <p>• Dubai, Düz, Boğumlu (model adları)</p>
                <p>• Kral, Duhok, Denver (özel tasarımlar)</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600">Bu kategoride ürün bulunamadı.</p>
          </div>
        )}
      </div>
    </section>
  );
}
