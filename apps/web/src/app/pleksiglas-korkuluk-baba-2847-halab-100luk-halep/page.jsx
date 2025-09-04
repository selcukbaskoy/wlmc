"use client";

import { useState, useEffect } from "react";
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

export default function PleksiBaba2847HalabHalepPage() {
  const [selectedFinish, setSelectedFinish] = useState("eloksal");
  const [selectedType, setSelectedType] = useState("standart");
  const [quantity, setQuantity] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [activeTab, setActiveTab] = useState("one-cikanlar");

  useEffect(() => {
    document.title =
      "Pleksiglas Korkuluk Baba 2847 Halab 100'lük Halep Model | Walmco";
  }, []);

  const handleQuoteRequest = () => {
    const productName = "Pleksiglas Korkuluk Baba – 2847 Halab 100'lük Halep Model";
    const productDetails = `Aksesuar: ${selectedFinish === "eloksal" ? "Eloksal Renk" : "RAL Kodu"}, Tip: ${selectedType === "standart" ? "Standart" : "Premium"}, Adet: ${quantity}`;
    window.location.href = `/iletisim?product=${encodeURIComponent(`${productName} (${productDetails})`)}`;
  };

  const handleWhatsAppClick = () => {
    const productName = "Pleksiglas Korkuluk Baba – 2847 Halab 100'lük Halep Model";
    const productDetails = `Aksesuar: ${selectedFinish === "eloksal" ? "Eloksal Renk" : "RAL Kodu"}, Tip: ${selectedType === "standart" ? "Standart" : "Premium"}, Adet: ${quantity}`;
    const message = `Merhaba, ${productName} (${productDetails}) ürünü için teklif almak istiyorum.`;
    window.open(
      `https://wa.me/902169092834?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+902169092834";
  };

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
              <span className="text-gray-900">2847 Halab 100'lük Halep Model</span>
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

                  src="https://walmco.com/urunler/Plexsi%20Babalar/2847%20halab%20100%20l%C3%BCk%20halep%20pleksi%20baba.png"

                  alt="Pleksiglas Korkuluk Baba 2847 Halab 100'lük Halep Model"

                  productName="2847 Halep Model"

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
                    SKU: 2847-HALAB-HALEP
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
                  2847 Halab 100'lük Halep Model
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
                    (4.8 • 73 değerlendirme)
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  2847 Halab 100'lük Halep model pleksiglas korkuluk babası. 
                  Halep özel dekoratif tasarımı ile zarif ve estetik görünüm, 
                  dikey çubuklu klasik mimari çözüm sunan premium kalite ürün.
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

                {/* Type Selection */}
                <div className="mb-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Tip Seçimi
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        value="standart"
                        checked={selectedType === "standart"}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`p-4 border-2 rounded-lg transition-all ${
                          selectedType === "standart"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-medium text-gray-900">
                          Standart
                        </div>
                        <div className="text-sm text-gray-500">
                          Klasik Halab tasarım
                        </div>
                      </div>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        value="premium"
                        checked={selectedType === "premium"}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`p-4 border-2 rounded-lg transition-all ${
                          selectedType === "premium"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-medium text-gray-900">
                          Premium
                        </div>
                        <div className="text-sm text-gray-500">
                          Özel işçilik detayları
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
                          Halab Özel Tasarım
                        </h3>
                        <p className="text-gray-600">
                          Halep şehrinin mimarisinden ilham alan özel dekoratif tasarım
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 bg-blue-50 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Grid3X3 size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Dikey Çubuklu Yapı
                        </h3>
                        <p className="text-gray-600">
                          Klasik dikey çubuklu yapı ile şık ve zarif görünüm
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 bg-green-50 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Shield size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Premium Kalite
                        </h3>
                        <p className="text-gray-600">
                          PMMA pleksiglas malzeme ile uzun ömürlü kullanım
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 bg-purple-50 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Check size={20} className="text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Klasik Mimari Uyum
                        </h3>
                        <p className="text-gray-600">
                          Geleneksel ve modern mimari projelere uyum
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
                          2847 Halab 100'lük Halep
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
                        <span className="text-gray-900">Halab Dekoratif Dikey Çubuklu</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-700">
                          Aksesuar
                        </span>
                        <span className="text-gray-900">
                          Metal Aksesuar
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
                      "Klasik mimari korkuluk sistemleri",
                      "Geleneksel ev dekorasyonu",
                      "Tarihi bina restorasyonları", 
                      "Özel dekoratif projeler",
                      "Dikey çubuklu korkuluk uygulamaları",
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
                      <li>• Dikey çubukların düzgün hizalanması sağlanmalı</li>
                      <li>• Halab tasarımının doğru yönlendirilmesi önemli</li>
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
                        • Metal aksesuar için özel temizlik ürünleri önerilir
                      </li>
                      <li>
                        • Dikey çubuklar arası temizlik için ince fırça kullanın
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
                      "1 adet Pleksiglas Korkuluk Baba (2847 Halab 100'lük Halep Model)",
                      "Halab özel dekoratif tasarım",
                      "Dikey çubuklu yapı",
                      "Premium kalite metal aksesuar",
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
                      q: "Halab tasarımının özel özellikleri nelerdir?",
                      a: "Halab modeli, Halep şehrinin klasik mimarisinden ilham alan özel dekoratif tasarıma sahiptir. Dikey çubuklu yapısı ile zarif ve şık görünüm sunar.",
                    },
                    {
                      q: "Bu model hangi mimari stillere uygun?",
                      a: "Klasik, geleneksel ve neo-klasik mimari stillere mükemmel uyum sağlar. Modern projelerde de nostalji etkisi yaratmak için kullanılabilir.",
                    },
                    {
                      q: "Dikey çubuklu yapının avantajları nelerdir?",
                      a: "Dikey çubuklu yapı hem görsel derinlik katlar hem de klasik estetik sunar. Aynı zamanda temizlik ve bakım açısından da pratik çözüm sağlar.",
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
                      name: "2819 100'lük Duhok Model",
                      description: "Duhok özel tasarımı",
                      image:
                        "https://ucarecdn.com/cd6fdb68-8960-483d-8fe5-dc137e75072c/-/format/auto/",
                    },
                    {
                      name: "2841 İstanbul Model",
                      description: "İstanbul dekoratif tasarım",
                      image:
                        "https://walmco.com/urunler/Plexsi%20Babalar/2841%20istanbul%20%20pleksi%20baba.png",
                    },
                  ].map((product, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <img

                        src={getImageUrl(product.image)}

                        alt={product.name}

                        productName="2847 Halep Model"

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
        </div>
      </div>

      <Footer />
    </>
  );
}