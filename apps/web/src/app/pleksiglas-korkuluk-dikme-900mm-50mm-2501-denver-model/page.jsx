import { useState, useEffect } from "react";
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
  Maximize2,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { products } from "../../data/productsData";

export default function PleksiDikme2501DenverModelPage() {
  const [selectedBodyType, setSelectedBodyType] = useState("kabarcikli");
  const [selectedFinish, setSelectedFinish] = useState("eloksal");
  const [activeTab, setActiveTab] = useState("features");
  const [selectedImage, setSelectedImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageZoom, setImageZoom] = useState(1);

  useEffect(() => {
    document.title = "Pleksiglas Korkuluk Dikme 2501 Denver Model | Walmco";

    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "2501 Denver model pleksiglas korkuluk dikme. 900mm yükseklik, Ø50mm çap, şeffaf ve modern görünüm. Hızlı kargo, garanti.";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
  }, []);

  const productImages = [
    {
      url: "https://walmco.com/urunler/Pleksi%20Dikmeler/2501%20denver%20model%20pleksi%20dikme.png",
      alt: "Pleksiglas korkuluk dikme 2501 Denver model, şeffaf ve modern tasarım",
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
      name: "Pleksiglas Korkuluk Dikme – 2501 Denver Model",
      category: "Pleksi Korkuluk Dikmeleri",
      description: "2501 Denver model pleksiglas korkuluk dikme. 900mm yükseklik, Ø50mm çap, şeffaf ve modern görünüm. Hızlı kargo, garanti.",
      image: "https://walmco.com/urunler/Pleksi%20Dikmeler/2501%20denver%20model%20pleksi%20dikme.png",
      price: "₺850",
      specifications: {
        "Model": "2501 Denver Model",
        "Boy": "900 mm",
        "Çap": "Ø50 mm",
        "Malzeme": "Pleksiglas (PMMA)",
        "Gövde Tipi": selectedBodyType === "kabarcikli" ? "Kabarcıklı" : "Kabarcıksız",
        "Aksesuar Yüzeyi": selectedFinish === "eloksal" ? "Eloksal Renk" : "RAL Kodu",
        "Miktar": quantity,
      },
    };

    // İletişim sayfasına yönlendir ve ürün bilgilerini gönder
    const productParam = encodeURIComponent(JSON.stringify(productInfo));
    window.location.href = `/iletisim?product=${productParam}`;
  };

  const handleCall = () => {
    // İletişim sayfasına yönlendir
    window.location.href = "/iletisim";
  };

  const handleWhatsApp = () => {
    const message = `Merhaba, 2501 Denver Model pleksiglas korkuluk dikme ürünü hakkında bilgi almak istiyorum.

Ürün Detayları:
- Model: 2501 Denver Model
- Boy: 900 mm
- Çap: Ø50 mm
- Malzeme: Pleksiglas (PMMA)
- Fiyat: ₺850

Detaylı bilgi ve teklif almak istiyorum.`;
    
    // Gerçek WhatsApp numarasına bağla
    const whatsappUrl = `https://wa.me/902169092834?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleImageZoom = (direction) => {
    if (direction === "in" && imageZoom < 3) {
      setImageZoom(imageZoom + 0.5);
    } else if (direction === "out" && imageZoom > 0.5) {
      setImageZoom(imageZoom - 0.5);
    }
  };

  const resetZoom = () => {
    setImageZoom(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="flex-shrink-0 h-4 w-4 text-gray-400" />
                  <a href="/urunler" className="ml-4 text-gray-500 hover:text-gray-700">
                    Ürünler
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="flex-shrink-0 h-4 w-4 text-gray-400" />
                  <a href="/urunler/pleksi-dikmeler" className="ml-4 text-gray-500 hover:text-gray-700">
                    Pleksi Dikmeler
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="flex-shrink-0 h-4 w-4 text-gray-400" />
                  <span className="ml-4 text-gray-900 font-medium">2501 Denver Model</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="relative aspect-square">
                <img
                  src={getImageUrl(productImages[selectedImage].url)}
                  alt={productImages[selectedImage].alt}
                  productName="2501 Denver Model"
                  className="w-full h-full object-cover"
                  style={{ transform: `scale(${imageZoom})` }}
                />
                
                {/* Zoom Controls */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <button
                    onClick={() => handleImageZoom("in")}
                    className="bg-white/80 hover:bg-white p-2 rounded-full shadow-sm transition-colors"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleImageZoom("out")}
                    className="bg-white/80 hover:bg-white p-2 rounded-full shadow-sm transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <button
                    onClick={resetZoom}
                    className="bg-white/80 hover:bg-white p-2 rounded-full shadow-sm transition-colors"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={() => setShowLightbox(true)}
                  className="absolute bottom-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-sm transition-colors"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {productImages.length > 1 && (
              <div className="flex space-x-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg border-2 overflow-hidden ${
                      selectedImage === index
                        ? "border-blue-500"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={getImageUrl(image.url)}
                      alt={image.alt}
                      productName="2501 Denver Model"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* SKU and Rating */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">SKU: 2501-DENVER-MODEL</span>
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= 4
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">4.8 (24 değerlendirme)</span>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="text-3xl font-bold text-gray-900">
              Pleksiglas Korkuluk Dikme - 2501 Denver Model
            </h1>

            {/* Product Description */}
            <p className="text-gray-600 leading-relaxed">
              Şeffaf ve modern görünüm sunan pleksiglas korkuluk dikmesi. 900 mm yükseklik, Ø50 mm çap. 
              Kabarcıklı/kabarcıksız gövde seçenekleri ile özelleştirilebilir tasarım.
            </p>

            {/* Body Type Selection */}
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Gövde Tipi</h3>
              <div className="grid grid-cols-2 gap-3">
                {bodyTypeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedBodyType(option.id)}
                    className={`p-3 rounded-lg border-2 text-left transition-colors ${
                      selectedBodyType === option.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium text-gray-900">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Finish Selection */}
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Aksesuar Yüzeyi</h3>
              <div className="grid grid-cols-2 gap-3">
                {finishOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedFinish(option.id)}
                    className={`p-3 rounded-lg border-2 text-left transition-colors ${
                      selectedFinish === option.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium text-gray-900">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2 text-green-600">
              <Check className="h-5 w-5" />
              <span className="font-medium">Stokta</span>
            </div>

            {/* Quantity */}
            <div className="flex items-center space-x-3">
              <label className="font-medium text-gray-900">Adet:</label>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-0 focus:ring-0"
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleQuoteRequest}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Teklif Al
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </button>
                
                <button
                  onClick={handleCall}
                  className="bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Ara</span>
                </button>
              </div>
            </div>

            {/* Service Info */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <Truck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">24-72 Saat</div>
                <div className="text-xs text-gray-600">Hızlı Kargo</div>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">14 Gün</div>
                <div className="text-xs text-gray-600">Ücretsiz İade</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">5 Yıl</div>
                <div className="text-xs text-gray-600">Garanti</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <tab.icon className="h-4 w-4 inline mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "features" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">
                    Şeffaf ve Modern Tasarım
                  </h3>
                  <p className="text-gray-600">
                    Şeffaf yapı ve modern tasarım ile estetik görünüm sunar. 
                    Doğal ışık geçirgenliği ile mekanları aydınlatır.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">
                    Sağlam & Hafif Yapı
                  </h3>
                  <p className="text-gray-600">
                    Pleksi (PMMA) + eloksallı alüminyum aksesuar; uzun ömür, 
                    korozyon direnci ve hafiflik sağlar.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">
                    Özelleştirilebilir
                  </h3>
                  <p className="text-gray-600">
                    Eloksal renk ve RAL boya seçenekleri, kabarcıklı/kabarcıksız 
                    gövde varyasyonları ile kişiselleştirilebilir.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">
                    Kolay Bakım
                  </h3>
                  <p className="text-gray-600">
                    Nötr temizlik ürünleri ile hızlı temizlik. 
                    Uzun ömürlü kullanım için minimal bakım gerektirir.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="bg-white rounded-lg border overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Teknik Özellikler
                  </h3>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="px-6 py-4 flex justify-between">
                    <span className="font-medium text-gray-900">Model</span>
                    <span className="text-gray-600">2501 Denver Model</span>
                  </div>
                  <div className="px-6 py-4 flex justify-between">
                    <span className="font-medium text-gray-900">Boy</span>
                    <span className="text-gray-600">900 mm</span>
                  </div>
                  <div className="px-6 py-4 flex justify-between">
                    <span className="font-medium text-gray-900">Çap</span>
                    <span className="text-gray-600">Ø50 mm</span>
                  </div>
                  <div className="px-6 py-4 flex justify-between">
                    <span className="font-medium text-gray-900">Malzeme</span>
                    <span className="text-gray-600">Pleksiglas (PMMA)</span>
                  </div>
                  <div className="px-6 py-4 flex justify-between">
                    <span className="font-medium text-gray-900">Aksesuar</span>
                    <span className="text-gray-600">Eloksallı Alüminyum</span>
                  </div>
                  <div className="px-6 py-4 flex justify-between">
                    <span className="font-medium text-gray-900">Garanti</span>
                    <span className="text-gray-600">5 Yıl</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">
                    Konut Projeleri
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Balkon korkulukları</li>
                    <li>• Merdiven korkulukları</li>
                    <li>• Teras güvenlik sistemleri</li>
                    <li>• Bahçe düzenlemeleri</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">
                    Ticari Projeler
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Ofis binaları</li>
                    <li>• Alışveriş merkezleri</li>
                    <li>• Oteller ve restoranlar</li>
                    <li>• Sergi alanları</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "assembly" && (
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">
                    Montaj Talimatları
                  </h3>
                  <ol className="text-gray-600 space-y-2 list-decimal list-inside">
                    <li>Yüzey hazırlığı ve işaretleme</li>
                    <li>Ankraj deliklerinin açılması</li>
                    <li>Dikme montajı ve sabitleme</li>
                    <li>Korkuluk profillerinin takılması</li>
                    <li>Son kontrol ve test</li>
                  </ol>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">
                    Bakım Önerileri
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Düzenli temizlik (3-6 ayda bir)</li>
                    <li>• Nötr pH temizlik ürünleri kullanımı</li>
                    <li>• Aşındırıcı malzemelerden kaçınma</li>
                    <li>• Periyodik kontrol ve sıkma</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "package" && (
              <div className="bg-white rounded-lg border overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Paket İçeriği
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>1 adet pleksiglas dikme (900mm x Ø50mm)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Eloksallı alüminyum aksesuar seti</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Montaj vidaları ve ankrajlar</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Montaj kılavuzu</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Garanti belgesi</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "faq" && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg border">
                  <button className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">
                        Bu ürün hangi yüksekliklerde mevcut?
                      </span>
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    </div>
                  </button>
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">
                      2501 Denver Model pleksiglas dikme şu anda 900mm yüksekliğinde üretilmektedir. 
                      Özel siparişler için farklı yüksekliklerde üretim yapılabilir.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border">
                  <button className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">
                        Hangi renk seçenekleri mevcut?
                      </span>
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    </div>
                  </button>
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">
                      Standart eloksal renk seçenekleri mevcuttur. Özel RAL kodları ile 
                      istenen renklerde üretim yapılabilir.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
                 </div>

         {/* Related Products */}
         <div className="mt-16">
           <div className="text-center mb-8">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">
               İlgili Ürünler
             </h2>
             <p className="text-gray-600 max-w-2xl mx-auto">
               Benzer pleksi dikme modellerimizi keşfedin. Her biri farklı tasarım ve özellikler sunar.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* 2512 Halab Model */}
             <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
               <div className="aspect-square overflow-hidden">
                                                                     <img
                   src="https://walmco.com/urunler/Pleksi%20Dikmeler/2512%20halab%20pleksi%20dikme.png"
                   alt="Pleksiglas korkuluk dikme 2512 Halab model"
                   productName="2512 Halab Model"
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                 />
               </div>
               <div className="p-4">
                 <div className="flex items-center space-x-2 mb-2">
                   <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                     2512 Halab
                   </span>
                   <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                     Halka Desenli
                   </span>
                 </div>
                 <h3 className="font-semibold text-gray-900 mb-2">
                   Pleksiglas Korkuluk Dikme – 2512 Halab Model
                 </h3>
                 <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                   Halka (halab) desenli özel tasarım pleksiglas korkuluk dikmesi. Estetik görünüm ve dayanıklılığı bir arada.
                 </p>
                 <div className="flex items-center justify-between">
                   <div className="flex items-center space-x-1">
                     <Star className="h-4 w-4 text-yellow-400 fill-current" />
                     <span className="text-sm text-gray-600">4.7</span>
                   </div>
                   <a
                     href="/pleksiglas-korkuluk-dikme-2512-halab"
                     className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center space-x-1"
                   >
                     <span>Detayları Gör</span>
                     <ArrowLeft className="h-4 w-4 rotate-180" />
                   </a>
                 </div>
               </div>
             </div>

             {/* 2502 Şeffaf Boğumlu Model */}
             <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
               <div className="aspect-square overflow-hidden">
                                                                     <img
                   src="https://walmco.com/urunler/Pleksi%20Dikmeler/2502%20%C5%9Feffaf%20bo%C4%9Fumlu%20pleksi%20dikme.png"
                   alt="Pleksiglas korkuluk dikme 2502 Şeffaf Boğumlu model"
                   productName="2502 Şeffaf Boğumlu Model"
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                 />
               </div>
               <div className="p-4">
                 <div className="flex items-center space-x-2 mb-2">
                   <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                     2502 Şeffaf
                   </span>
                   <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded">
                     Boğumlu Tasarım
                   </span>
                 </div>
                 <h3 className="font-semibold text-gray-900 mb-2">
                   Pleksiglas Korkuluk Dikme – 2502 Şeffaf Boğumlu Model
                 </h3>
                 <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                   Şeffaf boğumlu tasarım ile modern estetik sunan pleksiglas korkuluk dikmesi. Doğal ışık geçirgenliği.
                 </p>
                 <div className="flex items-center justify-between">
                   <div className="flex items-center space-x-1">
                     <Star className="h-4 w-4 text-yellow-400 fill-current" />
                     <span className="text-sm text-gray-600">4.6</span>
                   </div>
                   <a
                     href="/pleksiglas-korkuluk-dikme-2502-seffaf-bogumlu"
                     className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center space-x-1"
                   >
                     <span>Detayları Gör</span>
                     <ArrowLeft className="h-4 w-4 rotate-180" />
                   </a>
                 </div>
               </div>
             </div>

             {/* 2504 Kanallı Model */}
             <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
               <div className="aspect-square overflow-hidden">
                                                                     <img
                   src="https://walmco.com/urunler/Pleksi%20Dikmeler/2504%20kanall%C4%B1%20pleksi%20dikme.png"
                   alt="Pleksiglas korkuluk dikme 2504 Kanallı model"
                   productName="2504 Kanallı Model"
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                 />
               </div>
               <div className="p-4">
                 <div className="flex items-center space-x-2 mb-2">
                   <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                     2504 Kanallı
                   </span>
                   <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded">
                     Fonksiyonel
                   </span>
                 </div>
                 <h3 className="font-semibold text-gray-900 mb-2">
                   Pleksiglas Korkuluk Dikme – 2504 Kanallı Model
                 </h3>
                 <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                   Kanallı tasarım ile fonksiyonel ve estetik görünüm sunan pleksiglas korkuluk dikmesi. Endüstriyel uygun.
                 </p>
                 <div className="flex items-center justify-between">
                   <div className="flex items-center space-x-1">
                     <Star className="h-4 w-4 text-yellow-400 fill-current" />
                     <span className="text-sm text-gray-600">4.5</span>
                   </div>
                   <a
                     href="/pleksiglas-korkuluk-dikme-2504-kanalli"
                     className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center space-x-1"
                   >
                     <span>Detayları Gör</span>
                     <ArrowLeft className="h-4 w-4 rotate-180" />
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </main>

       {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={getImageUrl(productImages[selectedImage].url)}
            alt={productImages[selectedImage].alt}
            productName="2501 Denver Model"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}

      <Footer />
    </div>
  );
}
