import { Star, ArrowRight, Eye, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import WalmcoImage from "../WalmcoImage";

export default function ProductCard({ product, onProductSelect }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 product-image">
        <WalmcoImage
          src={product.image}
          alt={product.name}
          productName={product.name}
          className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
          onClick={() => {
            if (product.detailLink) {
              window.location.href = product.detailLink;
            } else {
              onProductSelect(product);
            }
          }}
        />

        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onProductSelect(product);
            }}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <Eye size={16} className="text-gray-700" />
          </button>
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
            <Download size={16} className="text-gray-700" />
          </button>
        </div>
      </div>

      <div className="p-6">
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

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b91c1c] transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          {product.detailLink ? (
            <a
              href={product.detailLink}
              className="flex items-center space-x-2 text-[#b91c1c] font-semibold text-sm hover:gap-3 transition-all group"
            >
              <span>{t("products.viewDetails")}</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          ) : (
            <button
              onClick={() => onProductSelect(product)}
              className="flex items-center space-x-2 text-[#b91c1c] font-semibold text-sm hover:gap-3 transition-all group"
            >
              <span>{t("products.viewDetails")}</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          )}

          <button
            onClick={() => {
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
            }}
            className="px-4 py-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-sm font-semibold rounded-lg transition-colors"
          >
{t("products.getQuote")}
          </button>
        </div>
      </div>
    </div>
  );
}
