"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Truck, RotateCcw, Shield, Crown, Circle, Grid3X3, Check, Search, Heart, Share2, ChevronRight } from "lucide-react";

export default function PleksiMumlukPage() {
  const [selectedBodyType, setSelectedBodyType] = useState("bubbled");
  const [selectedSurface, setSelectedSurface] = useState("anodized");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("highlights");

  const handleQuoteRequest = () => {
    const productInfo = encodeURIComponent("Pleksi Mumluk Premium Aksesuar - 2815 Mumluk Model");
    window.location.href = `/teklif-al?urun=${productInfo}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Merhaba! Pleksi Mumluk Premium Aksesuar hakkında bilgi almak istiyorum.");
    window.open(`https://wa.me/902169092834?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = "tel:+902169092834";
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <a href="/" className="hover:text-blue-600">Ana Sayfa</a>
            <ChevronRight size={16} />
            <a href="/urunler" className="hover:text-blue-600">Ürünler</a>
            <ChevronRight size={16} />
            <a href="/urunler?category=pleksi-aksesuarlar" className="hover:text-blue-600">Pleksi Aksesuarlar</a>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-medium">2815 Mumluk Model</span>
          </nav>

          {/* Main Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Side - Product Image */}
            <div className="relative">
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                <img

                  src="https://walmco.com/urunler/pleksi%20mumluklar/pleksi%20mumluk1.jpg"

                  alt="Pleksi Mumluk Premium Aksesuar - 2815 Mumluk Model"

                  productName="Aksesuar Model"

                  className="w-full h-auto object-cover"
                

                />
                
                {/* Premium Badge */}
                <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                  MUMLUK MODELİ
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-80 p-2 rounded-full cursor-pointer hover:bg-opacity-100 transition-all">
                  <Search size={20} className="text-gray-700" />
                </div>
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="space-y-6">
              {/* SKU and Basic Info */}
              <div>
                <p className="text-sm text-gray-500 mb-2">SKU: 2815-MUMLUK</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Pleksiglas Mumluk Premium Aksesuar - 2815 Mumluk Model
                </h1>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-gray-700 font-medium">4.9</span>
                  <span className="text-gray-500">(42 değerlendirme)</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                2815 Mumluk model pleksiglas premium aksesuar. Mumluk modeli özel tasarımı ile dekoratif ve şık görünüm sunan, 
                mum ve dekoratif objeler için ideal seçim. Premium kalite ve estetik tasarım.
              </p>

              {/* Body Type Selection */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Gövde Tipi</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedBodyType("bubbled")}
                    className={`p-3 rounded-lg border-2 text-left transition-all ${
                      selectedBodyType === "bubbled"
                        ? "border-yellow-400 bg-yellow-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium text-gray-900">Kabarcıklı</div>
                    <div className="text-sm text-gray-600">Işığı kırarak derinlik etkisi</div>
                  </button>
                  <button
                    onClick={() => setSelectedBodyType("non-bubbled")}
                    className={`p-3 rounded-lg border-2 text-left transition-all ${
                      selectedBodyType === "non-bubbled"
                        ? "border-yellow-400 bg-yellow-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium text-gray-900">Kabarcıksız</div>
                    <div className="text-sm text-gray-600">Minimal ve şeffaf çizgi</div>
                  </button>
                </div>
              </div>

              {/* Surface Selection */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Aksesuar Yüzeyi</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedSurface("anodized")}
                    className={`p-3 rounded-lg border-2 text-left transition-all ${
                      selectedSurface === "anodized"
                        ? "border-yellow-400 bg-yellow-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium text-gray-900">Eloksal Renk</div>
                    <div className="text-sm text-gray-600">Standart eloksal kaplama</div>
                  </button>
                  <button
                    onClick={() => setSelectedSurface("ral")}
                    className={`p-3 rounded-lg border-2 text-left transition-all ${
                      selectedSurface === "ral"
                        ? "border-yellow-400 bg-yellow-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium text-gray-900">RAL Kodu</div>
                    <div className="text-sm text-gray-600">Özel renk seçenekleri</div>
                  </button>
                </div>
              </div>

              {/* Premium Badge */}
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Crown size={24} />
                  <div>
                    <div className="font-bold text-lg">PREMIUM MUMLUK MODELİ</div>
                    <div className="text-yellow-100">Stokta</div>
                  </div>
                </div>
                <Check size={24} className="text-green-300" />
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-medium text-gray-900">Adet:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={decrementQuantity}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-16 text-center border-none focus:outline-none"
                      min="1"
                    />
                    <button
                      onClick={incrementQuantity}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={handleQuoteRequest}
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Premium Teklif Al</span>
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={handleCall}
                    className="bg-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Ara</span>
                  </button>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Truck size={16} />
                  <span>24-72 Saat Hızlı Kargo</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <RotateCcw size={16} />
                  <span>14 Gün Ücretsiz İade</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield size={16} />
                  <span>5 Yıl Garanti</span>
                </div>
              </div>
            </div>
          </div>

          {/* Information Tabs */}
          <div className="bg-white rounded-lg shadow-lg mb-12">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-8">
                {[
                  { id: "highlights", name: "Öne Çıkanlar" },
                  { id: "specs", name: "Teknik Bilgiler" },
                  { id: "applications", name: "Uygulama Alanları" },
                  { id: "maintenance", name: "Montaj & Bakım" },
                  { id: "package", name: "Paket İçeriği" },
                  { id: "faq", name: "SSS" },
                  { id: "related", name: "İlgili Ürünler" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? "border-red-500 text-red-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8">
              {activeTab === "highlights" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <Crown size={24} className="text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Mumluk Özel Tasarım</h3>
                      <p className="text-gray-700">Mumluk modeli premium tasarımı ile dekoratif ve şık görünüm sunan çözüm</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Circle size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Sağlam & Hafif</h3>
                      <p className="text-gray-700">Pleksi (PMMA) + eloksal aksesuar; uzun ömür, korozyon direnci</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Grid3X3 size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Premium Kalite</h3>
                      <p className="text-gray-700">Eloksal ve RAL boya seçenekleri, kabarcıklı/kabarcıksız varyasyonları</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Check size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Kolay Bakım</h3>
                      <p className="text-gray-700">Nötr temizlik ürünleri ile hızlı temizlik</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "specs" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Teknik Özellikler</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">Fiziksel Özellikler</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>Model:</strong> 2815 Mumluk</li>
                        <li><strong>Malzeme:</strong> Pleksiglas (PMMA)</li>
                        <li><strong>Boyut:</strong> 150mm x 25mm</li>
                        <li><strong>Ağırlık:</strong> 85g</li>
                        <li><strong>Renk:</strong> Şeffaf / Renkli</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">Teknik Detaylar</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>Yüzey:</strong> Eloksal / RAL Boya</li>
                        <li><strong>Gövde Tipi:</strong> Kabarcıklı / Kabarcıksız</li>
                        <li><strong>UV Direnci:</strong> Yüksek</li>
                        <li><strong>Isı Direnci:</strong> -40°C / +80°C</li>
                        <li><strong>Garanti:</strong> 5 Yıl</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "applications" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Uygulama Alanları</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">Ev Dekorasyonu</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Mumluk ve dekoratif objeler</li>
                        <li>• Vitrin ve sergi alanları</li>
                        <li>• Oturma odası aksesuarları</li>
                        <li>• Yatak odası dekorasyonu</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">Ticari Mekanlar</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Restoran ve kafeler</li>
                        <li>• Otel lobileri</li>
                        <li>• Mağaza vitrinleri</li>
                        <li>• Ofis dekorasyonu</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "maintenance" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Montaj & Bakım</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-3">Montaj</h3>
                      <ul className="space-y-2 text-blue-800">
                        <li>• Basit vida montajı</li>
                        <li>• Yüzeye uygun delik açma</li>
                        <li>• Güvenli sabitleme</li>
                        <li>• Hızlı kurulum</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-3">Bakım</h3>
                      <ul className="space-y-2 text-green-800">
                        <li>• Nötr temizlik ürünleri</li>
                        <li>• Yumuşak bez kullanımı</li>
                        <li>• Düzenli temizlik</li>
                        <li>• Uzun ömür garantisi</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "package" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Paket İçeriği</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center space-x-3">
                        <Check size={20} className="text-green-500" />
                        <span>1 adet Pleksi Mumluk Premium Aksesuar</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Check size={20} className="text-green-500" />
                        <span>Montaj vidaları ve dübeller</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Check size={20} className="text-green-500" />
                        <span>Montaj kılavuzu</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Check size={20} className="text-green-500" />
                        <span>Garanti belgesi</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Check size={20} className="text-green-500" />
                        <span>Ürün katalog kartı</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "faq" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Bu ürün hangi yüzeylere montaj edilebilir?</h3>
                      <p className="text-gray-700">Ahşap, alçı, beton ve metal yüzeylere kolayca montaj edilebilir. Uygun delik açma ve vida kullanımı ile güvenli sabitleme sağlanır.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Kabarcıklı ve kabarcıksız seçenekler arasındaki fark nedir?</h3>
                      <p className="text-gray-700">Kabarcıklı seçenek ışığı kırarak derinlik etkisi yaratır, kabarcıksız seçenek ise minimal ve şeffaf bir çizgi sunar.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Temizlik için hangi ürünler kullanılmalı?</h3>
                      <p className="text-gray-700">Nötr pH değerine sahip temizlik ürünleri ve yumuşak bezler kullanılmalıdır. Aşındırıcı kimyasallar yüzeye zarar verebilir.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "related" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">İlgili Ürünler</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <img

                        src="https://walmco.com/urunler/pleksi%20mumluklar/pleksi%20mumluk1.jpg"

                        alt="Pleksi Mumluk"

                        productName="Aksesuar Model"

                        className="w-full h-48 object-cover"
                      

                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Pleksi Mumluk</h3>
                        <p className="text-gray-600 text-sm mb-3">Premium pleksi mumluk aksesuarı</p>
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                          İncele
                        </button>
                      </div>
                    </div>
                    {/* Diğer ilgili ürünler buraya eklenebilir */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
