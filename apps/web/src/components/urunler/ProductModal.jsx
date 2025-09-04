import { Download, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import WalmcoImage from "../WalmcoImage";

export default function ProductModal({ product, onClose }) {
  const { t } = useTranslation();
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <WalmcoImage
                src={product.image}
                alt={product.name}
                productName={product.name}
                loading="lazy"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                {product.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#b91c1c]/10 text-[#b91c1c] text-sm font-semibold rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Özellikler</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">
                  Teknik Özellikler
                </h3>
                <div className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between py-2 border-b border-gray-100"
                    >
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    window.location.href = `/iletisim?product=${encodeURIComponent(
                      product.name
                    )}`;
                  }}
                  className="flex-1 bg-[#b91c1c] hover:bg-[#991b1b] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
{t("products.getQuote")}
                </button>
                <button className="px-6 py-3 border border-gray-200 hover:border-[#b91c1c] rounded-xl font-semibold transition-colors">
                  <Download size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
