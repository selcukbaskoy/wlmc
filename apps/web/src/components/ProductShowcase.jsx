import { useState, useRef } from "react";
import {
  ArrowRight,
  Rocket,
  Crown,
  Star,
  Shield,
  Zap,
} from "lucide-react";

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  const products = [
    {
      name: "Pleksi Babalar",
      category: "Pleksi Sistemleri",
      description: "Şeffaf cam görünümü ile modern mimariyle uyumlu, dayanıklı pleksi baba sistemleri.",
      image: "https://ucarecdn.com/147ae364-769b-4380-be34-36694fdb3dcb/-/resize/1200x/-/quality/smart/-/format/auto/",
      gradient: "from-red-600/20 via-red-500/10 to-transparent",
      badge: "Premium",
      particles: 8,
      features: ["5 Yıl Garanti", "CE Sertifikalı", "UV Dayanımlı"],
    },
    {
      name: "Pleksi Dikmeler",
      category: "Pleksi Sistemleri",
      description: "Şeffaf ve dayanıklı pleksi dikme sistemleri ile modern korkuluk çözümleri.",
      image: "https://ucarecdn.com/4e5169b2-ca32-421a-ad33-832abea18751/-/resize/1200x/-/quality/smart/-/format/auto/",
      gradient: "from-purple-600/20 via-purple-500/10 to-transparent",
      badge: "Premium",
      particles: 7,
      features: ["5 Yıl Garanti", "CE Sertifikalı", "UV Dayanımlı"],
    },
    {
      name: "Pleksi Mobilya Ürünleri",
      category: "Mobilya Aksesuarları",
      description: "Mobilya ayakları ve dekoratif aksesuarlar için özel tasarım pleksi çözümleri.",
      image: "https://ucarecdn.com/147ae364-769b-4380-be34-36694fdb3dcb/-/resize/1200x/-/quality/smart/-/format/auto/",
      gradient: "from-orange-600/20 via-orange-500/10 to-transparent",
      badge: "Özel Tasarım",
      particles: 5,
      features: ["Özel Ölçü", "Çoklu Renk", "Dayanıklı Yapı"],
    },
  ];

  const activeProductData = products[activeProduct];

  return (
    <>
      <section
        ref={sectionRef}
        className="py-16 md:py-24 px-6 overflow-hidden relative"
        id="urunler"
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6"
              style={{ boxShadow: "0 0 15px rgba(185, 28, 28, 0.5)" }}
            >
              <Rocket size={20} className="text-white" />
              <span className="text-white">Premium Ürün Serisi</span>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#b91c1c" }} />
              <Crown size={18} className="text-white" />
            </div>

            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <span className="block">Yüksek Kalite</span>
              <span className="block">
                <span className="relative">Pleksi</span> Ürünler
              </span>
            </h2>

            <p
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Modern mimariye uygun, güvenlik standartlarını karşılayan ve
              estetik açıdan üstün premium ürün serimiz.
            </p>
          </div>

          {/* Main Product Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Product Image */}
            <div
              className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${activeProductData.gradient})`,
                boxShadow: `0 30px 70px #b91c1c40`,
              }}
            >
              {/* Product Image */}
              <img
                src={activeProductData.image}
                alt={`${activeProductData.name} - ${activeProductData.category}`}
                className="w-full h-full object-cover transition-all duration-1000"
                loading="lazy"
                decoding="async"
                width="600"
                height="600"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />

              {/* Gradient Overlays */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#b91c1c]/30 to-transparent"
              />

              {/* Additional Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Enhanced Category Badge */}
              <div className="absolute top-6 left-6 flex items-center space-x-3 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                <span
                  className="text-sm font-bold text-white"
                  style={{ textShadow: "0 0 5px rgba(0,0,0,0.5)" }}
                >
                  {activeProductData.category}
                </span>
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              {/* Product Navigation */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProduct(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeProduct
                        ? "bg-white scale-125"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Switch to ${products[index].name}`}
                  />
                ))}
              </div>
            </div>

            {/* Product Details Card */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {activeProductData.name}
                </h3>
                <div
                  className="px-4 py-2 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: "#b91c1c" }}
                >
                  {activeProductData.badge}
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                {activeProductData.description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {activeProductData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div
                      className="w-3 h-3 rounded-full group-hover:scale-125 transition-transform"
                      style={{
                        backgroundColor: "#b91c1c",
                      }}
                    />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="/urunler"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#b91c1c] to-red-600 text-white font-semibold rounded-lg hover:from-[#dc2626] hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Ürünleri İncele</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                  index === activeProduct
                    ? "bg-white/10 scale-105"
                    : "bg-white/5 hover:bg-white/10 hover:scale-105"
                }`}
                onClick={() => setActiveProduct(index)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Product Image */}
                <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} - ${product.category}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width="300"
                    height="200"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 rounded-full">
                    <span className="text-xs font-bold text-gray-900">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Features Preview */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.slice(0, 2).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-500/50 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
