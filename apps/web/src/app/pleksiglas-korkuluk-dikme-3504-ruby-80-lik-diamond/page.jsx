"use client";

import { useState } from "react";
import { getImageUrl } from "../../utils/imageUtils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PleksiglasKorkulukDikme3504Ruby80LikDiamond() {
  const [selectedBodyType, setSelectedBodyType] = useState("kabarcikli");
  const [selectedFinish, setSelectedFinish] = useState("eloksal");
  const [activeTab, setActiveTab] = useState("ozellikler");
  const [quantity, setQuantity] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const images = [
    "https://walmco.com/urunler/pleksi%20diamond%20seri%20%C3%BCr%C3%BCnler/3504%20ruby%2080%20lik%20pleksi%20dikme.png",
  ];

  const handleQuoteRequest = () => {
    const productInfo = {
      name: "3504 Ruby 80 Lik Diamond seri pleksiglas korkuluk dikme",
      model: "3504 Ruby 80 Lik",
      category: "Pleksi Diamond seri",
    };
    
    const params = new URLSearchParams();
    params.append("product", JSON.stringify(productInfo));
    window.location.href = `/iletisim?${params.toString()}`;
  };

  const handleCall = () => {
    window.location.href = "/iletisim";
  };

  const handleWhatsApp = () => {
    const message = `Merhaba, 3504 Ruby 80 Lik Diamond seri pleksiglas korkuluk dikme ürünü hakkında bilgi almak istiyorum.\n\nÜrün Detayları:\n- Model: 3504 Ruby 80 Lik\n- Boy: 800 mm\n- Seri: Diamond Seri\n- Malzeme: Pleksiglas (PMMA)\n\n\nDetaylı bilgi ve teklif almak istiyorum.`;
    const whatsappUrl = `https://wa.me/902169092834?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-blue-600">Ana Sayfa</a></li>
            <li>/</li>
            <li><a href="/pleksi" className="hover:text-blue-600">Pleksi</a></li>
            <li>/</li>
            <li><a href="/pleksi/diamond" className="hover:text-blue-600">Diamond Seri</a></li>
            <li>/</li>
            <li className="text-gray-900">3504 Ruby 80 Lik</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <div className="overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={getImageUrl(images[currentImageIndex])}
                  alt="3504 Ruby 80 Lik Diamond seri Pleksiglas Korkuluk Dikme"
                  className="w-full h-96 object-contain cursor-pointer transition-transform duration-200"
                  style={{ transform: `scale(${zoomLevel})` }}
                  onClick={() => setLightboxOpen(true)}
                />
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={handleZoomIn}
                  className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                  title="Yakınlaştır"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </button>
                <button
                  onClick={handleZoomOut}
                  className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                  title="Uzaklaştır"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10h3m-3 0H7" />
                  </svg>
                </button>
                <button
                  onClick={handleResetZoom}
                  className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                  title="Zoom Sıfırla"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              {/* Zoom Level Indicator */}
              <div className="text-center text-sm text-gray-600 mt-2">
                Zoom: {Math.round(zoomLevel * 100)}%
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                3504 Ruby 80 Lik Diamond Seri Pleksiglas Korkuluk Dikme
              </h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">4.8 (128 değerlendirme)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                3504 Ruby 80 Lik model pleksiglas korkuluk dikmesi. Diamond seri özel tasarımı ile premium görünüm sunan, ruby detayı ile estetik çözüm.
              </p>

              {/* Customization Options */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gövde Tipi
                  </label>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setSelectedBodyType("kabarcikli")}
                      className={`px-4 py-2 rounded-lg border ${
                        selectedBodyType === "kabarcikli"
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      Kabarcıklı
                    </button>
                    <button
                      onClick={() => setSelectedBodyType("kabarciksiz")}
                      className={`px-4 py-2 rounded-lg border ${
                        selectedBodyType === "kabarciksiz"
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      Kabarcıksız
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yüzey İşlemi
                  </label>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setSelectedFinish("eloksal")}
                      className={`px-4 py-2 rounded-lg border ${
                        selectedFinish === "eloksal"
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      Eloksal
                    </button>
                    <button
                      onClick={() => setSelectedFinish("boyali")}
                      className={`px-4 py-2 rounded-lg border ${
                        selectedFinish === "boyali"
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      Boyalı
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adet
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium w-16 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={handleQuoteRequest}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Teklif Al
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  WhatsApp
                </button>
                <button
                  onClick={handleCall}
                  className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  Ara
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("ozellikler")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "ozellikler"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Özellikler
              </button>
              <button
                onClick={() => setActiveTab("teknik")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "teknik"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Teknik Özellikler
              </button>
              <button
                onClick={() => setActiveTab("uygulama")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "uygulama"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Uygulama Alanları
              </button>
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "ozellikler" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Ürün Özellikleri</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Ruby tasarım ile estetik görünüm
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    80 Lik model boyutunda
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Diamond seri premium kalite
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dayanıklı pleksiglas malzeme
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "teknik" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Teknik Özellikler</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <dt className="text-sm font-medium text-gray-500">Model</dt>
                    <dd className="mt-1 text-lg font-semibold text-gray-900">3504 Ruby 80 Lik</dd>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <dt className="text-sm font-medium text-gray-500">Boy</dt>
                    <dd className="mt-1 text-lg font-semibold text-gray-900">800 mm</dd>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <dt className="text-sm font-medium text-gray-500">Malzeme</dt>
                    <dd className="mt-1 text-lg font-semibold text-gray-900">Pleksiglas (PMMA)</dd>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <dt className="text-sm font-medium text-gray-500">Seri</dt>
                    <dd className="mt-1 text-lg font-semibold text-gray-900">Diamond Seri</dd>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <dt className="text-sm font-medium text-gray-500">Garanti</dt>
                    <dd className="mt-1 text-lg font-semibold text-gray-900">5 Yıl</dd>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "uygulama" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Uygulama Alanları</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Konut Projeleri</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Villa ve lüks konutlar</li>
                      <li>• Balkon ve teras korkulukları</li>
                      <li>• Merdiven korkulukları</li>
                      <li>• İç mekan dekoratif elemanlar</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Ticari Projeler</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Otel ve restoranlar</li>
                      <li>• Ofis binaları</li>
                      <li>• Alışveriş merkezleri</li>
                      <li>• Sergi ve fuar alanları</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Ürünler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                   src="https://walmco.com/urunler/pleksi%20diamond%20seri%20%C3%BCr%C3%BCnler/3500%20burgu%20kanal%20100%20l%C3%BCk%20pleksi%20dikme.png"
                   alt="3500 Burgu Kanal 100 Lük Diamond seri"
                   productName="3504 diamond Model"
                   className="w-full h-48 object-cover"
              
                 />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">3501 Burgu Kanal 100 Lük</h3>
                <p className="text-gray-600 text-sm mb-3">Diamond seri burgu kanal tasarım</p>
                <a
                  href="/pleksiglas-korkuluk-dikme-3501-burgu-kanal-100-luk-diamond"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Detayları Gör →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                   src="https://walmco.com/urunler/pleksi%20diamond%20seri%20%C3%BCr%C3%BCnler/3502%20twisted%20100%20l%C3%BCk%20pleksi%20dikme.png"
                   alt="3502 Twisted 100 Lük Diamond seri"
                   productName="3504 diamond Model"
                   className="w-full h-48 object-cover"
              
                 />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">3502 Twisted 100 Lük</h3>
                <p className="text-gray-600 text-sm mb-3">Diamond seri twisted tasarım</p>
                <a
                  href="/pleksiglas-korkuluk-dikme-3502-twisted-100-luk-diamond"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Detayları Gör →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                   src="https://walmco.com/urunler/pleksi%20diamond%20seri%20%C3%BCr%C3%BCnler/3503%20burgulu%2080%20lik%20pleksi%20dikme.jpeg"
                   alt="3503 Burgulu 80 Lik Diamond seri"
                   productName="3504 diamond Model"
                   className="w-full h-48 object-cover"
              
                 />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">3503 Burgulu 80 Lik</h3>
                <p className="text-gray-600 text-sm mb-3">Diamond seri burgulu tasarım</p>
                <a
                  href="/pleksiglas-korkuluk-dikme-3503-burgulu-80-lik-diamond"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Detayları Gör →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Image Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl"
            >
              ×
            </button>
            <img
              src={getImageUrl(images[currentImageIndex])}
              alt="3504 Ruby 80 Lik Diamond seri Pleksiglas Korkuluk Dikme"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
