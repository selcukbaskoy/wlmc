"use client";

import { useState, useEffect } from "react";
// import { getRandomRelatedProducts } from "../../utils/productUtils";
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

export default function PleksiBaba2866DubaiPage() {
  const [selectedBodyType, setSelectedBodyType] = useState("kabarcikli");
  const [selectedFinish, setSelectedFinish] = useState("eloksal");
  const [activeTab, setActiveTab] = useState("features");
  const [selectedImage, setSelectedImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageZoom, setImageZoom] = useState(1);

  useEffect(() => {
    document.title = "Pleksiglas Korkuluk Baba 2866 Dubai Model | Walmco";

    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "2866 Dubai model pleksiglas korkuluk babası. Dubai özel tasarımı, lüks görünüm, altın aksesuar, premium kalite. Hızlı kargo, garanti.";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
  }, []);

  const getRandomRelatedProducts = (count = 3) => {
    const currentProductId = 50; // Bu ürünün ID'si (2866 Dubai)
    const filteredProducts = products.filter(
      (product) => product.id !== currentProductId
    );
    const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const productImages = [
    {
      url: "https://walmco.com/urunler/Plexsi%20Babalar/2866%20dubai%20pleksi%20baba.png",
      alt: "Pleksiglas korkuluk baba 2866 Dubai model",
      title: "Ana Görünüm",
    },
  ];

  const tabs = [
    { id: "features", label: "Öne Çıkanlar", icon: Star },
    { id: "specs", label: "Teknik Bilgiler", icon: Info },
    { id: "applications", label: "Uygulama Alanları", icon: MapPin },
    { id: "installation", label: "Montaj & Bakım", icon: Wrench },
    { id: "package", label: "Paket İçeriği", icon: Package },
    { id: "faq", label: "SSS", icon: HelpCircle },
  ];

  const bodyTypes = [
    {
      id: "kabarcikli",
      name: "Kabarcıklı",
      description: "Işığı kırarak derinlik etkisi",
      popular: true,
    },
    {
      id: "kabarciksiz",
      name: "Kabarcıksız",
      description: "Minimal ve şeffaf çizgi",
      popular: false,
    },
  ];

  const finishes = [
    {
      id: "eloksal",
      name: "Eloksal Renk",
      description: "Standart eloksal kaplama",
      popular: true,
    },
    {
      id: "ral",
      name: "RAL Kodu",
      description: "Özel renk seçenekleri",
      popular: false,
    },
  ];

  const features = [
    {
      icon: Star,
      title: "Dubai Özel Tasarım",
      description: "Dubai lüks mimarisi ilhamlı özel tasarım ile prestijli görünüm",
    },
    {
      icon: Shield,
      title: "Sağlam & Hafif",
      description: "Pleksi (PMMA) + altın aksesuar; uzun ömür, korozyon direnci",
    },
    {
      icon: Grid3X3,
      title: "Özelleştirilebilir",
      description: "Altın, eloksal ve RAL boya seçenekleri, kabarcıklı/kabarcıksız varyasyonları",
    },
    {
      icon: Check,
      title: "Kolay Bakım",
      description: "Nötr temizlik ürünleri ile hızlı temizlik",
    },
  ];

  const specs = [
    { label: "Model", value: "2866 Dubai" },
    { label: "Malzeme", value: "Pleksiglas (PMMA) + Altın Aksesuar" },
    { label: "Tasarım", value: "Dubai Özel Lüks" },
    { label: "Garanti", value: "5 Yıl" },
    { label: "Renk Seçenekleri", value: "Altın, Eloksal, RAL" },
    { label: "Gövde Tipi", value: "Kabarcıklı/Kabarcıksız" },
  ];

  const applications = [
    "Lüks Villa ve Evler",
    "5 Yıldızlı Oteller",
    "Prestijli Ofisler",
    "Dubai Tarzı Mimari",
    "Modern Dekorasyon",
    "Premium Projeler",
  ];

  const installation = [
    "Profesyonel montaj gerekli",
    "Standart pleksi montaj yöntemleri",
    "Düzenli temizlik ve bakım",
    "Aşırı sıcak ve soğuktan korunmalı",
    "Kimyasal temizleyiciler kullanılmamalı",
  ];

  const packageContents = [
    "1 Adet Pleksiglas Korkuluk Baba",
    "Montaj Aksesuarları",
    "Montaj Talimatları",
    "Garanti Belgesi",
    "Kalite Sertifikası",
  ];

  const faqs = [
    {
      question: "Bu ürün hangi alanlarda kullanılabilir?",
      answer: "2866 Dubai model, lüks villa, otel, prestijli ofis ve Dubai tarzı mimari projelerde kullanıma uygundur.",
    },
    {
      question: "Hangi renk seçenekleri mevcut?",
      answer: "Altın, eloksal ve RAL kodlu özel renk seçenekleri bulunmaktadır.",
    },
    {
      question: "Montaj nasıl yapılır?",
      answer: "Profesyonel montaj gerekli olup, standart pleksi montaj yöntemleri kullanılır.",
    },
    {
      question: "Garanti süresi nedir?",
      answer: "Ürün 5 yıl garanti kapsamındadır.",
    },
  ];

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleImageZoom = (direction) => {
    if (direction === "in" && imageZoom < 3) {
      setImageZoom(imageZoom + 0.5);
    } else if (direction === "out" && imageZoom > 1) {
      setImageZoom(imageZoom - 0.5);
    }
  };

  const resetZoom = () => {
    setImageZoom(1);
  };

    const handleQuoteRequest = () => {
    const productInfo = {
      name: "Pleksiglas Korkuluk Baba – 2866 Dubai Model",
      category: "Pleksi Korkuluk Babaları",
      description: "2866 Dubai model pleksiglas korkuluk babası. Dubai özel tasarımı, lüks görünüm, altın aksesuar, premium kalite. Hızlı kargo, garanti.",
      image: "https://walmco.com/urunler/Plexsi%20Babalar/2866%20dubai%20pleksi%20baba.png",
      price: "Fiyat için teklif alın",
      specifications: {
        bodyType: selectedBodyType === "kabarcikli" ? "Kabarcıklı" : "Kabarcıksız",
        finish: selectedFinish === "eloksal" ? "Eloksal Renk" : "RAL Kodu",
        quantity: quantity
      }
    };
    window.location.href = `/iletisim?product=${encodeURIComponent(JSON.stringify(productInfo))}`;
  };

  const handleWhatsAppClick = () => {
    const productName = "Pleksiglas Korkuluk Baba – 2866 Dubai Model";
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

  // Product ID for related products
  const currentProductId = 50;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <a
                  href="/"
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  Ana Sayfa
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight size={16} className="text-gray-400" />
                  <a
                    href="/urunler"
                    className="ml-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    Ürünler
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight size={16} className="text-gray-400" />
                  <a
                    href="/urunler/pleksi-babalar"
                    className="ml-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    Pleksi Babalar
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight size={16} className="text-gray-400" />
                  <span className="ml-4 text-gray-900 font-medium">
                    2866 Dubai Model
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
              {/* Zoom Controls */}
              <div className="absolute top-4 left-4 z-10 flex space-x-2">
                <button
                  onClick={() => handleImageZoom("in")}
                  className="p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors duration-200"
                >
                  <ZoomIn size={20} className="text-gray-700" />
                </button>
                <button
                  onClick={() => handleImageZoom("out")}
                  className="p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors duration-200"
                >
                  <X size={20} className="text-gray-700" />
                </button>
              </div>

              {/* Fullscreen Button */}
              <button
                onClick={() => setShowLightbox(true)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors duration-200 z-10"
              >
                <ZoomIn size={20} className="text-gray-700" />
              </button>

              {/* Main Image */}
              <div className="relative overflow-hidden">
                <img
                  src={getImageUrl(productImages[selectedImage].url)}
                  alt={productImages[selectedImage].alt}
                  productName="2866 Dubai Model"
                  className="w-full h-auto transition-transform duration-300"
                  style={{
                    transform: `scale(${imageZoom})`,
                    transformOrigin: "center",
                  }}
                />
                {imageZoom > 1 && (
                  <button
                    onClick={resetZoom}
                    className="absolute bottom-4 right-4 px-3 py-2 bg-[#b91c1c] text-white rounded-lg text-sm font-medium hover:bg-[#991b1b] transition-colors duration-200"
                  >
                    Zoom Sıfırla
                  </button>
                )}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex space-x-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? "border-[#b91c1c] shadow-lg"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img

                    src={getImageUrl(image.url)}

                    alt={image.alt}

                    productName="2866 Dubai Model"

                    className="w-full h-full object-cover"
                  

                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Header Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 rounded-xl transition-all duration-200 ${
                    isWishlisted
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Heart
                    size={20}
                    className={isWishlisted ? "fill-current" : ""}
                  />
                </button>
                <button className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors duration-200">
                  <Share2 size={20} className="text-gray-400" />
                </button>
              </div>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Pleksiglas Korkuluk Baba – 2866 Dubai Model
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
                  (4.8 • 28 değerlendirme)
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              2866 Dubai model pleksiglas korkuluk babası. Dubai özel tasarımı ile
              lüks görünüm sunan, altın aksesuar ile premium estetik çözüm.
            </p>

            {/* Product Variations */}
            <div className="space-y-6">
              {/* Body Type Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Gövde Tipi
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {bodyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedBodyType(type.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                        selectedBodyType === type.id
                          ? "border-[#b91c1c] bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">
                          {type.name}
                        </span>
                        {type.popular && (
                          <span className="px-2 py-1 bg-[#b91c1c] text-white text-xs rounded-full">
                            Popüler
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Finish Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Aksesuar Yüzeyi
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {finishes.map((finish) => (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                        selectedFinish === finish.id
                          ? "border-[#b91c1c] bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">
                          {finish.name}
                        </span>
                        {finish.popular && (
                          <span className="px-2 py-1 bg-[#b91c1c] text-white text-xs rounded-full">
                            Popüler
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{finish.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl border border-green-200">
                <Check size={20} className="text-green-600" />
                <span className="text-green-800 font-medium">Stokta</span>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adet:
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-lg font-medium">-</span>
                  </button>
                  <span className="text-xl font-semibold text-gray-900 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-lg font-medium">+</span>
                  </button>
                </div>
              </div>

                             {/* Action Buttons */}
               <div className="space-y-3">
                 <button 
                   onClick={handleQuoteRequest}
                   className="w-full flex items-center justify-center space-x-3 px-8 py-5 bg-[#b91c1c] hover:bg-[#991b1b] text-white rounded-2xl font-bold transition-colors duration-200 transform hover:scale-105"
                 >
                   <FileText size={20} />
                   <span>Teklif Al</span>
                 </button>
                 <button 
                   onClick={handleWhatsAppClick}
                   className="w-full flex items-center justify-center space-x-3 px-8 py-5 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold transition-colors duration-200 transform hover:scale-105"
                 >
                   <MessageCircle size={20} />
                   <span>WhatsApp</span>
                 </button>
                 <button 
                   onClick={handlePhoneCall}
                   className="w-full flex items-center justify-center space-x-3 px-8 py-5 bg-white hover:bg-gray-50 text-gray-700 border-2 border-[#b91c1c] rounded-2xl font-bold transition-colors duration-200 transform hover:scale-105"
                 >
                   <Phone size={20} />
                   <span>Ara</span>
                 </button>
               </div>

              {/* Service Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <Truck size={20} className="text-[#b91c1c]" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      24-72 Saat
                    </p>
                    <p className="text-xs text-gray-600">Hızlı Kargo</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw size={20} className="text-[#b91c1c]" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">14 Gün</p>
                    <p className="text-xs text-gray-600">Ücretsiz İade</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield size={20} className="text-[#b91c1c]" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">5 Yıl</p>
                    <p className="text-xs text-gray-600">Garanti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === tab.id
                        ? "border-[#b91c1c] text-[#b91c1c]"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon size={18} />
                      <span>{tab.label}</span>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="py-8">
            {/* Features Tab */}
            {activeTab === "features" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <Icon size={24} className="text-[#b91c1c]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === "specs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-3 border-b border-gray-100"
                  >
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Applications Tab */}
            {activeTab === "applications" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl"
                  >
                    <MapPin size={20} className="text-[#b91c1c]" />
                    <span className="text-gray-700">{application}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Installation Tab */}
            {activeTab === "installation" && (
              <div className="space-y-4">
                {installation.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl"
                  >
                    <Wrench size={20} className="text-[#b91c1c] mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Package Tab */}
            {activeTab === "package" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packageContents.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl"
                  >
                    <Package size={20} className="text-[#b91c1c]" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === "faq" && (
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
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

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200 z-10"
            >
              <X size={24} className="text-white" />
            </button>
            <img

              src={getImageUrl(productImages[selectedImage].url)}

              alt={productImages[selectedImage].alt}

              productName="2866 Dubai Model"

              className="w-full h-auto max-h-[90vh] object-contain"
            

            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
