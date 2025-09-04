"use client";

import { useState, useEffect } from "react";
import { getImageUrl } from "../../utils/imageUtils";
import { getRandomRelatedProducts } from "../../utils/productUtils";
import {
  ArrowLeft,
  Heart,
  Share2,
  ShoppingCart,
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
  ChevronLeft,
  ChevronRight,
  Package,
  Wrench,
  MapPin,
  FileText,
  HelpCircle,
  Grid3X3,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { products } from "../../data/productsData";

export default function PleksiDikme2530BoncukPage() {
  const [selectedBodyType, setSelectedBodyType] = useState("kabarcikli");
  const [selectedFinish, setSelectedFinish] = useState("eloksal");
  const [activeTab, setActiveTab] = useState("features");
  const [selectedImage, setSelectedImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageZoom, setImageZoom] = useState(1);

  useEffect(() => {
    document.title = "Pleksiglas Korkuluk Dikme 2530 Boncuk Model | Walmco";

    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "2530 Boncuk model pleksiglas korkuluk dikme. Boncuk desenli tasarım, dekoratif detaylar, eloksal aksesuar. Hızlı kargo, garanti.";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
  }, []);

  const productImages = [
    {
      url: "https://ucarecdn.com/439c76bb-1d3f-4aa5-a91b-9fb3bd953a0d/-/format/auto/",
      alt: "Pleksiglas korkuluk dikme 2530 Boncuk model",
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
  ];

  const bodyTypeOptions = [
    {
      id: "kabarcikli",
      label: "Kabarcıklı",
      description: "Işığı kırarak derinlik etkisi",
    },
    {
      id: "kabarcıksız",
      label: "Kabarcıksız",
      description: "Minimal ve şeffaf çizgi",
    },
  ];

  const finishOptions = [
    {
      id: "eloksal",
      label: "Eloksal Renk",
      description: "Standart eloksal kaplama",
    },
    { id: "ral", label: "RAL Kodu", description: "Özel renk seçenekleri" },
  ];

  const handleQuoteRequest = () => {
    const productInfo = {
      name: "Pleksiglas Korkuluk Dikme – 2530 Boncuk Model",
      category: "Pleksi Korkuluk Dikmeleri",
      description: "2530 Boncuk model pleksiglas korkuluk dikme. Boncuk desenli tasarım, dekoratif detaylar, eloksal aksesuar. Hızlı kargo, garanti.",
      image: "https://ucarecdn.com/439c76bb-1d3f-4aa5-a91b-9fb3bd953a0d/-/format/auto/",
      price: "Fiyat için teklif alın",
      specifications: {
        bodyType: selectedBodyType === "kabarcikli" ? "Kabarcıklı" : "Kabarcıksız",
        finish: selectedFinish === "eloksal" ? "Eloksal Renk" : "RAL Kodu",
        quantity: quantity
      }
    };

    window.location.href = `/iletisim?product=${encodeURIComponent(JSON.stringify(productInfo))}`;
  };

  const getRandomRelatedProducts = (count = 3) => {
    const currentProductId = 47; // Bu ürünün ID'si (tek tanım)
    const filteredProducts = products.filter(
      (product) => product.id !== currentProductId
    );
    const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handleWhatsAppClick = () => {
    const productName = "Pleksiglas Korkuluk Dikme – 2530 Boncuk Model";
    const productDetails = `Gövde Tipi: ${selectedBodyType === "kabarcikli" ? "Kabarcıklı" : "Kabarcıksız"}, Aksesuar: ${selectedFinish === "eloksal" ? "Eloksal Renk" : "RAL Kodu"}, Adet: ${quantity}`;
    const message = `Merhaba, ${productName} (${productDetails}) ürünü için teklif almak istiyorum.`;

    window.open(
      `https://wa.me/902169092834?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+902169092834";
  };

  // Not: İkinci ve üçüncü kopya tanımları kaldırıldı

  const Lightbox = () => {
    if (!showLightbox) return null;

    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Lightbox'ı kapat"
          >
            <X size={24} />
          </button>

          <div className="relative">
            <img
                  src={getImageUrl(productImages[selectedImage].url)}
                  alt={productImages[selectedImage].alt}
                  productName="2530 boncuk Model"
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
                  title: "Modern Görünüm",
                  description:
                    "Kabarcıklı pleksi ışığı kırarak derinlik etkisi; kabarcıksız minimal çizgi",
                  icon: Star,
                },
                {
                  title: "Sağlam & Hafif",
                  description:
                    "Pleksi (PMMA) + eloksallı alüminyum aksesuar; uzun ömür, korozyon direnci",
                  icon: Shield,
                },
                {
                  title: "Özelleştirilebilir",
                  description:
                    "Eloksal renk ve RAL boya, kabarcıklı/kabarcıksız varyasyonları",
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
                ["Model", "2530 Boncuk"],
                ["Gövde Malzemesi", "Pleksiglas (PMMA)"],
                ["Aksesuar Malzemesi", "Alüminyum (eloksal kaplama)"],
                ["Tasarım", "Boncuk Desenli"],
                [
                  "Yüzey Seçenekleri",
                  "Eloksal renkler ve RAL boya seçenekleri",
                ],
                [
                  "Kullanım",
                  "İç mekân (dış mekân uygunluğu proje bazında doğrulanır)",
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
                "Dekoratif merdiven korkulukları",
                "Modern cafe ve restoran tasarımları",
                "Konut projelerinde estetik çözümler",
                "Dekoratif iç mekan düzenlemeleri",
                "Tekstür odaklı mimari projeler",
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

      case "assembly":
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-blue-900 mb-3">
                Montaj Talimatları
              </h4>
              <ul className="space-y-2 text-blue-800">
                <li>• Düz/sağlam zemine montaj yapın</li>
                <li>• Üretici tavsiyesine uygun ankraj/bağlantı kullanın</li>
                <li>• Montaj öncesi zemin düzlüğünü kontrol edin</li>
                <li>• Boncuk deseninin doğru yönlenmesine dikkat edin</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-900 mb-3">
                Bakım ve Temizlik
              </h4>
              <ul className="space-y-2 text-green-800">
                <li>• Aşındırıcı kimyasallardan kaçının</li>
                <li>• Mikrofiber bez + nötr deterjan kullanın</li>
                <li>• Boncuk deseninin detaylarını özenle temizleyin</li>
                <li>
                  • Dış mekân için UV ve hava şartlarına uygun kaplama/aksesuar
                  önerilir
                </li>
              </ul>
            </div>
          </div>
        );

      case "package":
        return (
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Paket İçeriği
            </h4>
            <div className="space-y-4">
              {[
                "1 adet Pleksiglas Korkuluk Dikme (2530 Boncuk Model)",
                "Boncuk desenli özel tasarım",
                "Seçilen varyasyona uygun üst/alt aksesuarlar",
                "Montaj kılavuzu",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#b91c1c] rounded-full flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "faq":
        return (
          <div className="space-y-4">
            {[
              {
                q: "Boncuk tasarımının özellikleri nelerdir?",
                a: "Boncuk desenli tasarım, estetik görünüm ve dekoratif detaylar sunar. Zarif çizgiler ile modern mimariye uyum sağlar.",
              },
              {
                q: "Bu model hangi alanlarda kullanılır?",
                a: "Dekoratif projeler, modern cafe-restoran tasarımları, konut projeleri ve tekstür odaklı mimari çözümlerde tercih edilir.",
              },
              {
                q: "Boncuk desen detayları zamanla bozulur mu?",
                a: "Kaliteli PMMA malzeme kullanıldığı için boncuk desen detayları uzun süre korunur. Düzenli temizlik önerilir.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h5 className="font-bold text-gray-900 mb-3">{faq.q}</h5>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        );

      case "related":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Dekoratif Tasarım Aksesuarları",
                image:
                  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Tekstürel Korkuluk Sistemleri",
                image:
                  "https://images.unsplash.com/photo-1600566753051-f0eac4a5c972?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Modern Tasarım Dikmeler",
                image:
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={getImageUrl(product.image)}
                  alt={product.name}
                  productName="2530 boncuk Model"
                  className="w-full h-48 object-cover"
                
                />
                <div className="p-4">
                  <h5 className="font-bold text-gray-900 mb-2">
                    {product.name}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
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
                href="/urunler?category=pleksi-dikmeler"
                className="text-gray-500 hover:text-red-600 transition-colors"
              >
                Pleksi Dikmeler
              </a>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900">2530 Boncuk Model</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <div className="space-y-4">
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-square">
                <img
                  src={getImageUrl(productImages[selectedImage].url)}
                  alt={productImages[selectedImage].alt}
                  className="w-full h-full object-contain cursor-zoom-in hover:scale-105 transition-transform duration-300"
                  style={{ transform: `scale(${imageZoom})` }}
                  onClick={() => setShowLightbox(true)}
                />

                {/* Zoom Controls */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setImageZoom((prev) => Math.min(prev + 0.2, 2));
                    }}
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Yakınlaştır"
                  >
                    +
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setImageZoom((prev) => Math.max(prev - 0.2, 0.8));
                    }}
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Uzaklaştır"
                  >
                    -
                  </button>
                </div>

                <button
                  onClick={() => setShowLightbox(true)}
                  className="absolute top-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Büyütmek için tıklayın"
                >
                  <ZoomIn size={20} className="text-gray-700" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 font-medium">
                    SKU: 2530-BONCUK
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isWishlisted
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-red-300"
                      }`}
                      aria-label="Favorilere ekle"
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
                    <button
                      className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center transition-colors"
                      aria-label="Paylaş"
                    >
                      <Share2 size={20} className="text-gray-400" />
                    </button>
                  </div>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Pleksiglas Korkuluk Dikme – 2530 Boncuk Model
                </h1>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-gray-600 ml-2">
                      (4.6 • 28 değerlendirme)
                    </span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Boncuk desenli özel tasarım ile estetik görünüm sunan
                  pleksiglas korkuluk dikmesi. Dekoratif detaylar ve zarif
                  çizgiler ile modern mimari projeler için ideal çözüm.
                </p>
              </div>

              {/* Product Variations */}
              <div className="space-y-6">
                {/* Body Type Selection */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Gövde Tipi
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {bodyTypeOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedBodyType(option.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedBodyType === option.id
                            ? "border-[#b91c1c] bg-[#b91c1c]/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-semibold text-gray-900">
                          {option.label}
                        </div>
                        <div className="text-sm text-gray-600">
                          {option.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Finish Selection */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Aksesuar Yüzeyi
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {finishOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedFinish(option.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedFinish === option.id
                            ? "border-[#b91c1c] bg-[#b91c1c]/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-semibold text-gray-900">
                          {option.label}
                        </div>
                        <div className="text-sm text-gray-600">
                          {option.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Purchase Section */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
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
                    className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center space-x-2"
                    aria-label="Teklif al"
                  >
                    <FileText size={20} />
                    <span>Teklif Al</span>
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleWhatsAppClick}
                      className="py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                      aria-label="WhatsApp ile hızlı teklif"
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp</span>
                    </button>
                    <button
                      onClick={handlePhoneCall}
                      className="py-3 px-4 border-2 border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c] hover:text-white rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                      aria-label="Telefon ile ara"
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