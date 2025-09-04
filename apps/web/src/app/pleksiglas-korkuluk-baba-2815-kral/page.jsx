"use client";

import { useState, useEffect } from "react";
// import { getRandomRelatedProducts } from "../../utils/productUtils";
import {
  Star,
  Check,
  Info,
  Truck,
  RotateCcw,
  Shield,
  Phone,
  MessageCircle,
  ZoomIn,
  X,
  Package,
  Wrench,
  MapPin,
  FileText,
  HelpCircle,
  Grid3X3,
  Heart,
  Share2,
  Crown,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { products } from "../../data/productsData";

export default function PleksiBaba2815KralPage() {
  const [activeTab, setActiveTab] = useState("features");
  const [selectedImage, setSelectedImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageZoom, setImageZoom] = useState(1);

  useEffect(() => {
    document.title = "Pleksiglas Korkuluk Baba 2815 Kral Model | Walmco";
  }, []);

  const getRandomRelatedProducts = (count = 3) => {
    const currentProductId = 46; // Bu ürünün ID'si (2815 Kral)
    const filteredProducts = products.filter(
      (product) => product.id !== currentProductId
    );
    const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const productImages = [
    {
      url: "https://walmco.com/urunler/Plexsi%20Babalar/2815%20kral%20pleksi%20baba.png",
      alt: "Pleksiglas korkuluk baba 2815 Kral model",
      title: "Ana Görünüm",
    },
  ];

  const tabs = [
    { id: "features", label: "Öne Çıkanlar", icon: Star },
    { id: "specs", label: "Teknik Bilgiler", icon: Info },
    { id: "applications", label: "Uygulama Alanları", icon: MapPin },
    { id: "assembly", label: "Montaj & Bakım", icon: Wrench },
    { id: "package", label: "Paket İçeriği", icon: Package },
    { id: "faq", label: "SSS", icon: HelpCircle },
    { id: "related", label: "İlgili Ürünler", icon: Grid3X3 },
  ];



  const handleQuoteRequest = () => {
    const productInfo = {
      name: "Pleksiglas Korkuluk Baba – 2815 Kral Model",
      category: "Pleksi Korkuluk Babaları",
      description: "Kral modeli premium tasarımı ile lüks ve gösterişli görünüm sunan çözüm. Sağlam & hafif, premium kalite.",
      image: "https://walmco.com/urunler/Plexsi%20Babalar/2815%20kral%20pleksi%20baba.png",
      price: "Fiyat için teklif alın",
      specifications: {
        quantity: quantity
      }
    };

    window.location.href = `/iletisim?product=${encodeURIComponent(JSON.stringify(productInfo))}`;
  };

  const handleWhatsAppClick = () => {
    const productName = "Pleksiglas Korkuluk Baba – 2815 Kral Model";
    const productDetails = `Adet: ${quantity}`;
    const message = `Merhaba, ${productName} (${productDetails}) ürünü için teklif almak istiyorum.`;

    window.open(
      `https://wa.me/902169092834?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+902169092834";
  };

  // 2815 Kral ürününün ID'si
  const currentProductId = 41;

  const Lightbox = () => {
    if (!showLightbox) return null;

    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="relative">
            <img

              src={getImageUrl(productImages[selectedImage].url)}

              alt={productImages[selectedImage].alt}

              productName="2815 Kral Model"

              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            

            />
          </div>

          <div className="text-center mt-4">
            <h3 className="text-white text-lg font-semibold">
              {productImages[selectedImage].title}
            </h3>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Kral Özel Tasarım",
                  description:
                    "Kral modeli premium tasarımı ile lüks ve gösterişli görünüm sunan çözüm",
                  icon: Crown,
                },
                {
                  title: "Sağlam & Hafif",
                  description:
                    "Pleksi (PMMA) + altın aksesuar; uzun ömür, korozyon direnci",
                  icon: Shield,
                },
                {
                  title: "Premium Kalite",
                  description:
                    "Altın, eloksal ve RAL boya seçenekleri, kabarcıklı/kabarcıksız varyasyonları",
                  icon: Grid3X3,
                },
                {
                  title: "Kolay Bakım",
                  description: "Nötr temizlik ürünleri ile hızlı temizlik",
                  icon: Check,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#b91c1c]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#b91c1c]/10 rounded-xl flex items-center justify-center">
                      <feature.icon size={24} className="text-[#b91c1c]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "specs":
        return (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-6 bg-gray-50 border-b border-gray-200">
              <h4 className="text-xl font-bold text-gray-900">
                Teknik Özellikler
              </h4>
            </div>
            <div className="divide-y divide-gray-200">
              {[
                ["Model", "2815 Kral"],
                ["Gövde Malzemesi", "Pleksiglas (PMMA)"],
                ["Aksesuar Malzemesi", "Alüminyum (altın kaplama)"],
                ["Tasarım", "Kral Premium Tasarım"],
                [
                  "Yüzey Seçenekleri",
                  "Altın aksesuar, eloksal ve RAL boya seçenekleri",
                ],
                [
                  "Kullanım",
                  "İç mekân (özel projeler için dış mekân uygunluğu proje bazında)",
                ],
                ["Uyum", "Standart bağlantı elemanlarıyla çalışır"],
              ].map(([key, value], index) => (
                <div
                  key={index}
                  className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-700">{key}</span>
                  <span className="text-gray-900 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "applications":
        return (
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Uygulama Alanları
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Lüks merdiven korkuluk sistemleri",
                "Gösterişli ve premium bina tasarımları",
                "Özel projeler için ideal seçim",
                "Kral modeli tasarım gerektiren alanlar",
                "Altın aksesuar uygun uygulamalar",
              ].map((area, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <Check size={20} className="text-[#b91c1c]" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div>İçerik yükleniyor...</div>;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-red-600 transition-colors">
                Ana Sayfa
              </a>
              <span className="text-gray-300">/</span>
              <a href="/urunler" className="text-gray-500 hover:text-red-600 transition-colors">
                Ürünler
              </a>
              <span className="text-gray-300">/</span>
              <a
                href="/urunler?category=pleksi-babalar"
                className="text-gray-500 hover:text-red-600 transition-colors"
              >
                Pleksi Babalar
              </a>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900">2815 Kral Model</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <div className="space-y-4">
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-square">
                <WalmcoImage
                  src={getImageUrl(productImages[selectedImage].url)}
                  alt={productImages[selectedImage].alt}
                  productName="2815 Kral Model"
                  className="w-full h-full object-contain cursor-zoom-in hover:scale-105 transition-transform duration-300"
                  onClick={() => setShowLightbox(true)}
                />

                {/* Premium Badge */}
                <div className="absolute top-4 left-4 px-3 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-xs font-bold flex items-center space-x-1">
                  <Crown size={14} />
                  <span>KRAL MODELİ</span>
                </div>

                <button
                  onClick={() => setShowLightbox(true)}
                  className="absolute top-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ZoomIn size={20} className="text-gray-700" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 font-medium">
                    SKU: 2815-KRAL
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isWishlisted
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-red-300"
                      }`}
                    >
                      <Heart
                        size={20}
                        className={
                          isWishlisted
                            ? "text-red-500 fill-red-500"
                            : "text-gray-400"
                        }
                      />
                    </button>
                    <button className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center transition-colors">
                      <Share2 size={20} className="text-gray-400" />
                    </button>
                  </div>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Pleksiglas Korkuluk Baba – 2815 Kral Model
                </h1>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="text-gray-600 ml-2">
                      (4.9 • 38 değerlendirme)
                    </span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  2815 Kral model pleksiglas korkuluk babası. Kral modeli
                  premium tasarımı ile lüks ve gösterişli görünüm sunan, altın
                  aksesuar ile özel projeler için ideal seçim.
                </p>
              </div>



              {/* Purchase Section */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Crown size={20} className="text-yellow-600" />
                    <span className="text-sm font-bold text-yellow-800">
                      PREMIUM KRAL MODELİ
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      <Check size={16} />
                      <span>Stokta</span>
                    </div>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-4 mb-6">
                  <label className="text-sm font-medium text-gray-700">
                    Adet:
                  </label>
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-16 h-10 text-center border-x border-gray-200 focus:outline-none"
                      min="1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleQuoteRequest}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <FileText size={20} />
                    <span>Premium Teklif Al</span>
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleWhatsAppClick}
                      className="py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp</span>
                    </button>
                    <button
                      onClick={handlePhoneCall}
                      className="py-3 px-4 border-2 border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c] hover:text-white rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <Phone size={18} />
                      <span>Ara</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Truck size={24} className="text-blue-600" />
                  </div>
                  <div className="text-xs text-gray-600">
                    <div className="font-semibold">24-72 Saat</div>
                    <div>Hızlı Kargo</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <RotateCcw size={24} className="text-green-600" />
                  </div>
                  <div className="text-xs text-gray-600">
                    <div className="font-semibold">14 Gün</div>
                    <div>Ücretsiz İade</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Shield size={24} className="text-purple-600" />
                  </div>
                  <div className="text-xs text-gray-600">
                    <div className="font-semibold">5 Yıl</div>
                    <div>Garanti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <div className="flex flex-wrap gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-all ${
                      activeTab === tab.id
                        ? "text-[#b91c1c] border-b-2 border-[#b91c1c]"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <tab.icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="py-8">{renderTabContent()}</div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              İlgili Ürünler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getRandomRelatedProducts(3).map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={getImageUrl(product.image)}
                      alt={product.name}
                      productName={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                      />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      {product.badges?.slice(0, 2).map((badge, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(product.rating || 0)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">
                        ({product.rating || 0})
                      </span>
                    </div>
                    <a
                      href={product.detailLink}
                      className="block w-full text-center bg-[#b91c1c] hover:bg-[#991b1b] text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                    >
                      Ürünü İncele
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <Lightbox />
    </>
  );
}
