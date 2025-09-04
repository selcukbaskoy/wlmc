import React, { useState } from "react";
import {
  Star,
  Phone,
  MessageCircle,
  Truck,
  RotateCcw,
  Shield,
  CheckCircle2,
  Heart,
  Share2,
  FileText,
} from "lucide-react";

export default function Pleksi2845AbudhabiPage() {
  const [selectedBodyType, setSelectedBodyType] = useState("kabarcikli");
  const [selectedAccessory, setSelectedAccessory] = useState("altin");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("one-cikanlar");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sol - Ürün Görseli */}
          <div className="space-y-4">
            <div className="relative bg-gray-200 rounded-lg overflow-hidden p-8">
              <img

                src="https://walmco.com/urunler/Plexsi%20Babalar/2845%20%20abudhabi%20pleksi%20baba.png"

                alt="Pleksiglas Korkuluk Baba 2845 Abudhabi Model"

                productName="2845 Abudhabi Model"

                className="w-full h-[500px] object-contain"
              

              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
                  <Heart size={18} className="text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
                  <Share2 size={18} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Sağ - Ürün Bilgileri */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">SKU: 2845-ABU</p>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                Pleksiglas Korkuluk Baba – 2845 Abudhabi Model
              </h1>

              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={`${star <= 4 || (star === 5 && Math.random() > 0.2) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  (4.8 • 156 değerlendirme)
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                2845 Abudhabi model pleksiglas korkuluk babası. Abudhabi özel
                tasarım ile lüks ve zarif görünüm sunan, altın aksesuar ile
                premium çözüm.
              </p>
            </div>

            {/* Gövde Tipi */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                Gövde Tipi
              </h3>
              <div className="space-y-3">
                <label className="block cursor-pointer">
                  <div
                    className={`p-3 border-2 rounded-lg transition-all ${
                      selectedBodyType === "kabarcikli"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-gray-900">
                          Kabarcıklı
                        </span>
                        <p className="text-sm text-gray-500">
                          Işığı kırarak derinlik etkisi
                        </p>
                      </div>
                      <input
                        type="radio"
                        name="bodyType"
                        value="kabarcikli"
                        checked={selectedBodyType === "kabarcikli"}
                        onChange={(e) => setSelectedBodyType(e.target.value)}
                        className="w-4 h-4 text-red-600"
                      />
                    </div>
                  </div>
                </label>

                <label className="block cursor-pointer">
                  <div
                    className={`p-3 border-2 rounded-lg transition-all ${
                      selectedBodyType === "kabarcikisz"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-gray-900">
                          Kabarcıksız
                        </span>
                        <p className="text-sm text-gray-500">
                          Minimal ve şeffaf çizgi
                        </p>
                      </div>
                      <input
                        type="radio"
                        name="bodyType"
                        value="kabarcikisz"
                        checked={selectedBodyType === "kabarcikisz"}
                        onChange={(e) => setSelectedBodyType(e.target.value)}
                        className="w-4 h-4 text-red-600"
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Aksesuar Yüzeyi */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                Aksesuar Yüzeyi
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <label className="block cursor-pointer">
                  <div
                    className={`p-3 border-2 rounded-lg text-center transition-all ${
                      selectedAccessory === "altin"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="accessory"
                      value="altin"
                      checked={selectedAccessory === "altin"}
                      onChange={(e) => setSelectedAccessory(e.target.value)}
                      className="sr-only"
                    />
                    <span className="font-medium text-gray-900 text-sm block">
                      Altın Aksesuar
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      Premium altın renkli kaplama
                    </p>
                  </div>
                </label>

                <label className="block cursor-pointer">
                  <div
                    className={`p-3 border-2 rounded-lg text-center transition-all ${
                      selectedAccessory === "eloksal"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="accessory"
                      value="eloksal"
                      checked={selectedAccessory === "eloksal"}
                      onChange={(e) => setSelectedAccessory(e.target.value)}
                      className="sr-only"
                    />
                    <span className="font-medium text-gray-900 text-sm block">
                      Eloksal Renk
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      Standart eloksal kaplama
                    </p>
                  </div>
                </label>

                <label className="block cursor-pointer">
                  <div
                    className={`p-3 border-2 rounded-lg text-center transition-all ${
                      selectedAccessory === "ral"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="accessory"
                      value="ral"
                      checked={selectedAccessory === "ral"}
                      onChange={(e) => setSelectedAccessory(e.target.value)}
                      className="sr-only"
                    />
                    <span className="font-medium text-gray-900 text-sm block">
                      RAL Kodu
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      Özel renk seçenekleri
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Stok Durumu */}
            <div className="flex items-center space-x-2 bg-green-50 border border-green-200 rounded-lg p-3">
              <CheckCircle2 size={18} className="text-green-600" />
              <span className="text-green-700 font-medium">Stokta</span>
            </div>

            {/* Adet */}
            <div>
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
            <div className="space-y-3">
              <button className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                <FileText size={18} />
                <span>Teklif Al</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/902169092834"
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+902169092834"
                  className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  <Phone size={18} />
                  <span>Ara</span>
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck size={20} className="text-blue-600" />
                </div>
                <p className="text-xs font-semibold text-gray-900">
                  24-72 Saat
                </p>
                <p className="text-xs text-gray-500">Hızlı Kargo</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <RotateCcw size={20} className="text-green-600" />
                </div>
                <p className="text-xs font-semibold text-gray-900">14 Gün</p>
                <p className="text-xs text-gray-500">Ücretsiz İade</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield size={20} className="text-purple-600" />
                </div>
                <p className="text-xs font-semibold text-gray-900">5 Yıl</p>
                <p className="text-xs text-gray-500">Garanti</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 overflow-x-auto">
              {[
                { id: "one-cikanlar", name: "Öne Çıkanlar" },
                { id: "teknik", name: "Teknik Bilgiler" },
                { id: "uygulama", name: "Uygulama Alanları" },
                { id: "montaj", name: "Montaj & Bakım" },
                { id: "paket", name: "Paket İçeriği" },
                { id: "sss", name: "SSS" },
                { id: "ilgili", name: "İlgili Ürünler" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "border-red-600 text-red-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "one-cikanlar" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-start space-x-3">
                    <Star
                      size={24}
                      className="text-red-500 flex-shrink-0 mt-1"
                    />
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

                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start space-x-3">
                    <Shield
                      size={24}
                      className="text-blue-500 flex-shrink-0 mt-1"
                    />
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

                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded flex-shrink-0 mt-1 flex items-center justify-center">
                      <div className="w-3 h-3 grid grid-cols-2 gap-0.5">
                        <div className="bg-white rounded-sm"></div>
                        <div className="bg-white rounded-sm"></div>
                        <div className="bg-white rounded-sm"></div>
                        <div className="bg-white rounded-sm"></div>
                      </div>
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

                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2
                      size={24}
                      className="text-green-500 flex-shrink-0 mt-1"
                    />
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
          </div>
        </div>
      </div>
    </div>
  );
}
