"use client";

import { useState, useEffect } from "react";
import { getRandomRelatedProducts } from "../../utils/productUtils";
import {
  Star,
  Check,
  Phone,
  MessageCircle,
  ZoomIn,
  ZoomOut,
  FileText,
  Heart,
  Share2,
  Shield,
  Award,
  Truck,
  RotateCcw,
  Package,
  Palette,
  Circle,
  Info,
  MapPin,
  Wrench,
  HelpCircle,
  Grid3X3,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { products } from "../../data/productsData";

export default function PleksiBaba2817BombeliPage() {
  const [selectedFinish, setSelectedFinish] = useState("eloksal");
  const [selectedBubble, setSelectedBubble] = useState("kabarcikli");
  const [quantity, setQuantity] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [activeTab, setActiveTab] = useState("one-cikanlar");

  useEffect(() => {
    document.title =
      "Pleksiglas Korkuluk Baba 2817 100'lük Bombeli Model | Walmco";
  }, []);

  const handleQuoteRequest = () => {
    const productInfo = {
      name: "Pleksiglas Korkuluk Baba – 2817 100'lük Bombeli Model",
      category: "Pleksi Korkuluk Babaları",
      description: "100'lük bombeli model, özel tasarım ve premium kalite. Aksesuar seçenekleri ile uyumlu.",
      image: "https://walmco.com/urunler/Plexsi%20Babalar/2817%20100%20l%C3%BCk%20bombeli%20baba.png",
      price: "Fiyat için teklif alın",
      specifications: {
        finish: selectedFinish === "eloksal" ? "Eloksal Renk" : "RAL Kodu",
        bubble: selectedBubble === "kabarcikli" ? "Kabarcıklı" : "Kabarcıksız",
        quantity: quantity
      }
    };

    window.location.href = `/iletisim?product=${encodeURIComponent(JSON.stringify(productInfo))}`;
  };

  const handleWhatsAppClick = () => {
    const productName = "Pleksiglas Korkuluk Baba – 2817 100'lük Bombeli Model";
    const productDetails = `Aksesuar: ${selectedFinish === "eloksal" ? "Eloksal Renk" : "RAL Kodu"}, Yüzey: ${selectedBubble === "kabarcikli" ? "Kabarcıklı" : "Kabarcıksız"}, Adet: ${quantity}`;
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
  const currentProductId = 44;

    return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex items-center space-x-2 text-sm">
              <a
                href="/"
                className="text-gray-500 hover:text-red-600 transition-colors"
              >
                Ana Sayfa
              </a>
              <span className="text-gray-300">/</span>
              <a
                href="/urunler"
                className="text-gray-500 hover:text-red-600 transition-colors"
              >
                Ürünler
              </a>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900">2817 100'lük Bombeli Model</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-50">
                <img

                  src="https://walmco.com/urunler/Plexsi%20Babalar/2817%20100%20l%C3%BCk%20bombeli%20baba.png"

                  alt="Pleksiglas Korkuluk Baba 2817 100'lük Bombeli Model"

                  productName="2817 Bombeli Model"

                  className="w-full h-full object-contain transition-transform duration-300"
                  style={{ transform: `scale(${zoom})` }}
                

                />

                {/* Zoom Controls */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <button
                    onClick={() => setZoom((prev) => Math.min(prev + 0.2, 2))}
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                  >
                    <ZoomIn size={18} className="text-gray-700" />
                  </button>
                  <button
                    onClick={() => setZoom((prev) => Math.max(prev - 0.2, 1))}
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                  >
                    <ZoomOut size={18} className="text-gray-700" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    SKU: 2817-BOMBELI
                  </span>
                  <div className="flex items-center space-x-2">
                    <button className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-red-300 flex items-center justify-center transition-colors">
                      <Heart size={18} className="text-gray-400" />
                    </button>
                    <button className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center transition-colors">
                      <Share2 size={18} className="text-gray-400" />
                    </button>
                  </div>
                </div>

                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  Pleksiglas Korkuluk Baba
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  2817 100'lük Bombeli Model
                </p>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    (4.7 • 89 değerlendirme)
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  2817 100'lük bombeli model pleksiglas korkuluk babası. Bombeli
                  özel tasarım ile estetik görünüm sunan, modern mimari
                  projelerde tercih edilen çözüm.
                </p>

                {/* Finish Selection */}
                <div className="mb-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Aksesuar Yüzeyi Seçimi
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="finish"
                        value="eloksal"
                        checked={selectedFinish === "eloksal"}
                        onChange={(e) => setSelectedFinish(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`p-4 border-2 rounded-lg transition-all ${
                          selectedFinish === "eloksal"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-medium text-gray-900">
                          Eloksal Renk
                        </div>
                        <div className="text-sm text-gray-500">
                          Standart eloksal kaplama
                        </div>
                      </div>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="finish"
                        value="ral"
                        checked={selectedFinish === "ral"}
                        onChange={(e) => setSelectedFinish(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`p-4 border-2 rounded-lg transition-all ${
                          selectedFinish === "ral"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-medium text-gray-900">
                          RAL Kodu
                        </div>
                        <div className="text-sm text-gray-500">
                          Özel renk seçenekleri
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Bubble Selection */}
                <div className="mb-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Yüzey Seçimi
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="bubble"
                        value="kabarcikli"
                        checked={selectedBubble === "kabarcikli"}
                        onChange={(e) => setSelectedBubble(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`p-4 border-2 rounded-lg transition-all ${
                          selectedBubble === "kabarcikli"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-medium text-gray-900">
                          Kabarcıklı
                        </div>
                        <div className="text-sm text-gray-500">
                          Bombeli korkuluk
                        </div>
                      </div>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="bubble"
                        value="kabarcıksız"
                        checked={selectedBubble === "kabarcıksız"}
                        onChange={(e) => setSelectedBubble(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`p-4 border-2 rounded-lg transition-all ${
                          selectedBubble === "kabarcıksız"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-medium text-gray-900">
                          Kabarcıksız
                        </div>
                        <div className="text-sm text-gray-500">
                          Bombeli korkuluk
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <label className="text-base font-semibold text-gray-900 block mb-3">
                    Adet:
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-50"
                    >
                      -
                    </button>
                    <span className="w-12 h-10 flex items-center justify-center border border-gray-300 rounded-lg bg-white font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 mb-6">
                  <button
                    onClick={handleQuoteRequest}
                    className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <FileText size={18} />
                    <span>Teklif Al</span>
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleWhatsAppClick}
                      className="flex items-center justify-center space-x-2 bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp</span>
                    </button>
                    <button
                      onClick={handlePhoneCall}
                      className="flex items-center justify-center space-x-2 bg-white border-2 border-red-600 text-red-600 py-3 px-4 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                    >
                      <Phone size={18} />
                      <span>Ara</span>
                    </button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Truck size={18} className="text-blue-600" />
                    </div>
                    <p className="text-xs font-semibold text-gray-900">
                      24-72 Saat
                    </p>
                    <p className="text-xs text-gray-500">Hızlı Kargo</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <RotateCcw size={18} className="text-green-600" />
                    </div>
                    <p className="text-xs font-semibold text-gray-900">
                      14 Gün
                    </p>
                    <p className="text-xs text-gray-500">İade</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield size={18} className="text-purple-600" />
                    </div>
                    <p className="text-xs font-semibold text-gray-900">5 Yıl</p>
                    <p className="text-xs text-gray-500">Garanti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-12 bg-white rounded-2xl shadow-sm">
            <div className="border-b border-gray-200">
              <nav className="flex flex-wrap gap-1 px-6">
                {[
                  { id: "one-cikanlar", name: "Öne Çıkanlar", icon: Star },
                  { id: "teknik", name: "Teknik Bilgiler", icon: Info },
                  { id: "uygulama", name: "Uygulama Alanları", icon: MapPin },
                  { id: "montaj", name: "Montaj & Bakım", icon: Wrench },
                  { id: "paket", name: "Paket İçeriği", icon: Package },
                  { id: "sss", name: "SSS", icon: HelpCircle },
                  { id: "ilgili", name: "İlgili Ürünler", icon: Grid3X3 },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-4 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? "border-red-600 text-red-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <tab.icon size={16} />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === "one-cikanlar" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-red-500 bg-red-50 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Star size={20} className="text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Klasik Görünüm
                        </h3>
                        <p className="text-gray-600">
                          Düz klasik tasarım ile her tür mimariye uygun evrensel
                          çözüm
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 bg-blue-50 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Shield size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Sağlam & Hafif
                        </h3>
                        <p className="text-gray-600">
                          Pleksi (PMMA) + altın aksesuar; uzun ömür, korozyon
                          direnci
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 bg-red-50 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Grid3X3 size={20} className="text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Özelleştirilebilir
                        </h3>
                        <p className="text-gray-600">
                          Altın, eloksal ve RAL boya seçenekleri,
                          kabarcıklı/kabarcıksız varyasyonları
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 bg-pink-50 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Check size={20} className="text-pink-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Kolay Bakım
                        </h3>
                        <p className="text-gray-600">
                          Nötr temizlik ürünleri ile hızlı temizlik
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "teknik" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Teknik Özellikler
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-700">Model</span>
                        <span className="text-gray-900">
                          2817 100'lük Bombeli
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-700">
                          Malzeme
                        </span>
                        <span className="text-gray-900">PMMA Pleksiglas</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-700">
                          Tasarım
                        </span>
                        <span className="text-gray-900">100'lük Bombeli</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-700">
                          Aksesuar
                        </span>
                        <span className="text-gray-900">
                          Eloksal/RAL Kaplama
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-700">
                          Garanti
                        </span>
                        <span className="text-gray-900">5 Yıl</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-700">
                          Kullanım
                        </span>
                        <span className="text-gray-900">İç/Dış Mekân</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "uygulama" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Uygulama Alanları
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Bombeli merdiven korkuluk sistemleri",
                      "Modern mimari projeler",
                      "Estetik korkuluk uygulamaları",
                      "Özel tasarım gerektiren alanlar",
                    ].map((area, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <Check size={18} className="text-red-600" />
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "montaj" && (
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-blue-900 mb-3">
                      Montaj Talimatları
                    </h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Düz/sağlam zemine montaj yapın</li>
                      <li>
                        • Üretici tavsiyesine uygun ankraj/bağlantı kullanın
                      </li>
                      <li>• Montaj öncesi zemin düzlüğünü kontrol edin</li>
                      <li>• Bombeli tasarımın doğru hizalama kontrolü yapın</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-green-900 mb-3">
                      Bakım ve Temizlik
                    </h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• Aşındırıcı kimyasallardan kaçının</li>
                      <li>• Mikrofiber bez + nötr deterjan kullanın</li>
                      <li>
                        • Altın aksesuar için özel temizlik ürünleri önerilir
                      </li>
                      <li>
                        • Dış mekân için UV ve hava şartlarına uygun
                        kaplama/aksesuar önerilir
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "paket" && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    Paket İçeriği
                  </h4>
                  <div className="space-y-4">
                    {[
                      "1 adet Pleksiglas Korkuluk Baba (2817 100'lük Bombeli Model)",
                      "Bombeli özel tasarım",
                      "Premium kalite altın aksesuar",
                      "Seçilen varyasyona uygun üst/alt aksesuarlar",
                      "Montaj kılavuzu",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                          <Check size={16} className="text-white" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "sss" && (
                <div className="space-y-4">
                  {[
                    {
                      q: "100'lük bombeli tasarımının avantajları nelerdir?",
                      a: "Bombeli tasarım estetik görünüm sunar ve modern mimari projelerde tercih edilir. Işığı farklı açılardan yansıtarak derinlik etkisi yaratır.",
                    },
                    {
                      q: "Bu model hangi alanlarda kullanılır?",
                      a: "Bombeli merdiven korkulukları, modern mimari projeler, estetik korkuluk uygulamaları ve özel tasarım gerektiren alanlarda kullanılır.",
                    },
                    {
                      q: "Kabarcıklı ve kabarcıksız seçenekleri arasındaki fark nedir?",
                      a: "Kabarcıklı yüzey ışığı kırarak daha dekoratif görünüm sunar, kabarcıksız yüzey ise daha minimal ve şeffaf bir çizgi sağlar.",
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
              )}

              {activeTab === "ilgili" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: "2701 Düz Model",
                      description: "Klasik düz tasarım",
                      image:
                        "https://ucarecdn.com/14e5d127-1d1c-4554-9759-e08be3dd64e8/-/format/auto/",
                    },
                    {
                      name: "Bombeli Aksesuar Sistemleri",
                      description: "Bombeli tasarım aksesuarları",
                      image:
                        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
                    },
                    {
                      name: "Modern Korkuluk Çözümleri",
                      description: "Çağdaş tasarım seçenekleri",
                      image:
                        "https://images.unsplash.com/photo-1600566753051-f0eac4a5c972?auto=format&fit=crop&w=400&q=80",
                    },
                  ].map((product, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <img

                        src={getImageUrl(product.image)}

                        alt={product.name}

                        productName="2817 Bombeli Model"

                        className="w-full h-48 object-cover"
                      

                      />
                      <div className="p-4">
                        <h5 className="font-bold text-gray-900 mb-2">
                          {product.name}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {product.description}
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
      </div>

      <Footer />
    </>
  );
}
