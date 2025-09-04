"use client";
import { useState } from "react";
import { getImageUrl } from "../../utils/imageUtils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PleksiglasKorkulukDikme3500Kosegen100LukSiseDikmeDiamond() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [zoomLevel, setZoomLevel] = useState(1);

  const images = [
    "https://walmco.com/urunler/pleksi%20diamond%20seri%20%C3%BCr%C3%BCnler/3500%20k%C3%B6%C5%9Fegen%20100%20lik%20%C5%9Fi%C5%9Fe%20dikme.png",
  ];

  const handleQuoteRequest = () => {
    const productInfo = {
      name: "3500 Köşegen 100 Lük Şişe Dikme Diamond seri pleksiglas korkuluk dikme",
      model: "3500 Köşegen 100 Lük",
      category: "Pleksi Diamond seri",
    };
    const params = new URLSearchParams();
    params.append("product", JSON.stringify(productInfo));
    window.location.href = `/iletisim?${params.toString()}`;
  };

  const handleWhatsApp = () => {
    const message = "Merhaba! 3500 Köşegen 100 Lük Şişe Dikme Diamond seri pleksiglas korkuluk dikme ürünü hakkında bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/902169092834?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCall = () => {
    window.location.href = "/iletisim";
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
        <nav className="text-sm text-gray-600 mb-6">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-blue-600">Ana Sayfa</a></li>
            <li>/</li>
            <li><a href="/pleksi" className="hover:text-blue-600">Pleksi</a></li>
            <li>/</li>
            <li><a href="/pleksi/diamond" className="hover:text-blue-600">Diamond Seri</a></li>
            <li>/</li>
            <li className="text-gray-900">3500 Köşegen 100 Lük</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative">
              <div className="overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={getImageUrl(images[currentImageIndex])}
                  alt="3500 Köşegen 100 Lük Şişe Dikme Diamond seri Pleksiglas Korkuluk Dikme"
                  className="w-full h-96 object-contain cursor-pointer transition-transform duration-200"
                  style={{ transform: `scale(${zoomLevel})` }}
                  onClick={() => setLightboxOpen(true)}
                />
              </div>
              
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button
                  onClick={handleZoomOut}
                  className="bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all duration-200"
                  title="Yakınlaştır"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                  </svg>
                </button>
                <button
                  onClick={handleZoomIn}
                  className="bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all duration-200"
                  title="Uzaklaştır"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </button>
                <button
                  onClick={handleResetZoom}
                  className="bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all duration-200"
                  title="Zoom Sıfırla"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>

              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                {Math.round(zoomLevel * 100)}%
              </div>
            </div>

            <div className="flex space-x-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    index === currentImageIndex ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  <img
                    src={getImageUrl(image)}
                    alt={`3500 Köşegen 100 Lük Şişe Dikme ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                3500 Köşegen 100 Lük Şişe Dikme Diamond Seri Pleksiglas Korkuluk Dikme
              </h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-gray-600">4.9</span>
                </div>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">Diamond Seri</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                3500 Köşegen 100 Lük Şişe Dikme model pleksiglas korkuluk dikmesi. Diamond seri özel tasarımı ile premium görünüm sunan, köşegen detayı ile estetik çözüm.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Özelleştirme Seçenekleri</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Farklı boyutlarda üretim</li>
                  <li>• Özel renk seçenekleri</li>
                  <li>• Toplu sipariş indirimleri</li>
                  <li>• Hızlı teslimat</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleQuoteRequest}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Teklif Al
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  WhatsApp
                </button>
                <button
                  onClick={handleCall}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ara
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "description"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Ürün Açıklaması
              </button>
              <button
                onClick={() => setActiveTab("specs")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "specs"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Teknik Özellikler
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "features"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Özellikler
              </button>
            </nav>
          </div>

          <div className="py-6">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  3500 Köşegen 100 Lük Şişe Dikme, Diamond seri pleksiglas korkuluk dikmelerimizin en özel modellerinden biridir. 
                  Bu model, modern mimari projelerde kullanılan premium pleksiglas malzemeden üretilmiştir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Köşegen tasarımı ile estetik görünüm sunan bu ürün, 1000 mm boyunda ve özel kesit yapısına sahiptir. 
                  Şeffaf pleksiglas malzemesi sayesinde mekanlara ferahlık katar ve ışık geçirgenliği sağlar.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Özellikle villa, ofis, mağaza ve konut projelerinde tercih edilen bu model, 
                  uzun ömürlü kullanım ve kolay temizlik özellikleri ile öne çıkar.
                </p>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Fiziksel Özellikler</h4>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Model:</dt>
                      <dd className="font-medium">3500 Köşegen 100 Lük</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Boy:</dt>
                      <dd className="font-medium">1000 mm</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Malzeme:</dt>
                      <dd className="font-medium">Pleksiglas (PMMA)</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Seri:</dt>
                      <dd className="font-medium">Diamond Seri</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Garanti:</dt>
                      <dd className="font-medium">5 Yıl</dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Teknik Detaylar</h4>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Yoğunluk:</dt>
                      <dd className="font-medium">1.18 g/cm³</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Erime Sıcaklığı:</dt>
                      <dd className="font-medium">160°C</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Işık Geçirgenliği:</dt>
                      <dd className="font-medium">%92</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">UV Dayanımı:</dt>
                      <dd className="font-medium">Yüksek</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Renk:</dt>
                      <dd className="font-medium">Şeffaf</dd>
                    </div>
                  </dl>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Ana Özellikler</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Köşegen Tasarım</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">100 Lüks Model</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Diamond Seri</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Premium Estetik</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Kullanım Alanları</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Villa ve Konutlar</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Ofis ve İş Merkezleri</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Mağaza ve Showroom</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Restoran ve Kafeler</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

                 <div className="mt-12">
           <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Ürünler</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
               <img
                   src="https://walmco.com/urunler/pleksi%20diamond%20seri%20%C3%BCr%C3%BCnler/3504%20ruby%2080%20lik%20pleksi%20dikme.png"
                   alt="3504 Ruby 80 Lik Diamond seri"
                   productName="3500 diamond Model"
                   className="w-full h-48 object-cover"
               
                 />
               <div className="p-4">
                 <h3 className="font-semibold text-gray-900 mb-2">3504 Ruby 80 Lik</h3>
                 <p className="text-gray-600 text-sm mb-3">Diamond seri ruby tasarım</p>
                 <a
                   href="/pleksiglas-korkuluk-dikme-3504-ruby-80-lik-diamond"
                   className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                 >
                   Detayları Gör →
                 </a>
               </div>
             </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                   src="https://walmco.com/urunler/pleksi%20diamond%20seri%20%C3%BCr%C3%BCnler/3500%20burgu%20kanal%20100%20l%C3%BCk%20pleksi%20dikme.png"
                   alt="3501 Burgu Kanal 100 Lük Diamond seri"
                   productName="3500 diamond Model"
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
                   productName="3500 diamond Model"
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
                   productName="3500 diamond Model"
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

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={getImageUrl(images[currentImageIndex])}
              alt="3500 Köşegen 100 Lük Şişe Dikme Diamond seri Pleksiglas Korkuluk Dikme"
              className="w-full h-auto max-h-full object-contain"
            />
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
