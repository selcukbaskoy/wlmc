"use client";

import { useState } from "react";
import { getImageUrl } from "../../utils/imageUtils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PleksiglasKorkulukDikme2527KareModel() {
  const [selectedBodyType, setSelectedBodyType] = useState("kabarcikli");
  const [selectedFinish, setSelectedFinish] = useState("eloksal");
  const [activeTab, setActiveTab] = useState("ozellikler");
  const [quantity, setQuantity] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const images = [
    "https://walmco.com/urunler/Pleksi%20Dikmeler/2527%2040x40%20kare%20pleksi%20dikme%20.jpeg",
  ];

  const handleQuoteRequest = () => {
    const productInfo = {
      name: "Pleksiglas Korkuluk Dikme – 2527 40x40 Kare Model",
      category: "Pleksi Korkuluk Dikmeleri",
      description: "2527 40x40 kare model pleksiglas korkuluk dikme. 40x40mm kare kesit, modern ve şık görünüm. Hızlı kargo, garanti.",
      image: "https://walmco.com/urunler/Pleksi%20Dikmeler/2527%2040x40%20kare%20pleksi%20dikme%20.jpeg",
      price: "₺750",
      specifications: {
        "Model": "2527 40x40 Kare",
        "Boy": "900 mm",
        "Kesit": "40x40 mm",
        "Malzeme": "Pleksiglas (PMMA)",
        "Gövde Tipi": selectedBodyType === "kabarcikli" ? "Kabarcıklı" : "Kabarcıksız",
        "Aksesuar Yüzeyi": selectedFinish === "eloksal" ? "Eloksal Renk" : "RAL Kodu",
        "Miktar": quantity,
      },
    };
    const message = encodeURIComponent(JSON.stringify(productInfo));
    window.location.href = `/iletisim?product=${message}`;
  };

  const handleCall = () => {
    window.location.href = "/iletisim";
  };

  const handleWhatsApp = () => {
    const message = `Merhaba, 2527 40x40 Kare Model pleksiglas korkuluk dikme ürünü hakkında bilgi almak istiyorum.\n\nÜrün Detayları:\n- Model: 2527 40x40 Kare Model\n- Boy: 900 mm\n- Kesit: 40x40 mm\n- Malzeme: Pleksiglas (PMMA)\n- Fiyat: ₺750\n\nDetaylı bilgi ve teklif almak istiyorum.`;
    const whatsappUrl = `https://wa.me/902169092834?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="hover:text-blue-600">Ana Sayfa</a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <a href="/urunler" className="hover:text-blue-600">Ürünler</a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <a href="/urunler/pleksi-dikmeler" className="hover:text-blue-600">Pleksi Dikmeler</a>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-900">2527 40x40 Kare Model</li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
                             <div className="overflow-hidden rounded-lg bg-gray-100">
                 <img
                   src={getImageUrl(images[currentImageIndex])}
                   alt="2527 40x40 Kare Model Pleksiglas Korkuluk Dikme"
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
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
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
                Pleksiglas Korkuluk Dikme – 2527 40x40 Kare Model
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">4.7 (12 değerlendirme)</span>
              </div>
              <p className="text-gray-700 text-lg">
                40x40 mm kare kesit ile modern ve şık görünüm sunan pleksiglas korkuluk dikmesi. 
                Kare form tasarımı ile farklı projelerde kullanım imkanı.
              </p>
            </div>

            {/* Customization Options */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Gövde Tipi</h3>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="bodyType"
                      value="kabarcikli"
                      checked={selectedBodyType === "kabarcikli"}
                      onChange={(e) => setSelectedBodyType(e.target.value)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Kabarcıklı</div>
                      <div className="text-sm text-gray-600">Ayırt edici estetik doku</div>
                    </div>
                  </label>
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="bodyType"
                      value="kabarciksiz"
                      checked={selectedBodyType === "kabarciksiz"}
                      onChange={(e) => setSelectedBodyType(e.target.value)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Kabarcıksız</div>
                      <div className="text-sm text-gray-600">Minimal ve şeffaf çizgi</div>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Aksesuar Yüzeyi</h3>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="finish"
                      value="eloksal"
                      checked={selectedFinish === "eloksal"}
                      onChange={(e) => setSelectedFinish(e.target.value)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Eloksal Renk</div>
                      <div className="text-sm text-gray-600">Standart eloksal kaplama</div>
                    </div>
                  </label>
                  <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="finish"
                      value="ral"
                      checked={selectedFinish === "ral"}
                      onChange={(e) => setSelectedFinish(e.target.value)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">RAL Kodu</div>
                      <div className="text-sm text-gray-600">Özel renk seçenekleri</div>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Adet</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border rounded-lg flex items-center justify-center hover:bg-gray-100"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="text-xl font-semibold w-16 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border rounded-lg flex items-center justify-center hover:bg-gray-100"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleQuoteRequest}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
              >
                Teklif Al
              </button>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp</span>
              </button>
              <button
                onClick={handleCall}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
              >
                Ara
              </button>
            </div>

            {/* Delivery & Warranty */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-gray-900">3-5 İş Günü</div>
                <div className="text-xs text-gray-600">Kargo</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-gray-900">10 Gün</div>
                <div className="text-xs text-gray-600">İade Garantisi</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-gray-900">5 Yıl</div>
                <div className="text-xs text-gray-600">Garanti</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mb-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: "ozellikler", name: "Öne Çıkanlar" },
                { id: "teknik", name: "Teknik Bilgiler" },
                { id: "uygulama", name: "Uygulama Alanları" },
                { id: "montaj", name: "Montaj & Bakım" },
                { id: "paket", name: "Paket İçeriği" },
                { id: "sss", name: "SSS" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-6">
            {activeTab === "ozellikler" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3">40x40 Kare Kesit</h3>
                  <p className="text-gray-600">40x40 mm kare kesit ile modern ve şık görünüm</p>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3">Sağlam & Hafif</h3>
                  <p className="text-gray-600">Pleksi (PMMA) + eloksal alüminyum aksesuar; uzun ömür, korozyon direnci</p>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3">Özelleştirilebilir</h3>
                  <p className="text-gray-600">Eloksal renk ve RAL boya, kabarcıklı/kabarcıksız varyasyonları</p>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3">Kolay Bakım</h3>
                  <p className="text-gray-600">Nötr temizlik ürünleri ile hızlı temizlik</p>
                </div>
              </div>
            )}

            {activeTab === "teknik" && (
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Teknik Özellikler</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium">Model:</span> 2527 40x40 Kare
                  </div>
                  <div>
                    <span className="font-medium">Boy:</span> 900 mm
                  </div>
                  <div>
                    <span className="font-medium">Kesit:</span> 40x40 mm
                  </div>
                  <div>
                    <span className="font-medium">Malzeme:</span> Pleksiglas (PMMA)
                  </div>
                  <div>
                    <span className="font-medium">Aksesuar:</span> Eloksal Alüminyum
                  </div>
                  <div>
                    <span className="font-medium">Garanti:</span> 5 Yıl
                  </div>
                </div>
              </div>
            )}

            {activeTab === "uygulama" && (
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Uygulama Alanları</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ev ve villa korkulukları</li>
                  <li>• Ofis ve işyeri güvenlik bariyerleri</li>
                  <li>• Hastane ve sağlık kuruluşları</li>
                  <li>• Okul ve eğitim kurumları</li>
                  <li>• Otel ve restoran dekorasyonu</li>
                  <li>• Endüstriyel tesis güvenlik sistemleri</li>
                </ul>
              </div>
            )}

            {activeTab === "montaj" && (
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Montaj & Bakım</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Montaj</h4>
                    <p className="text-gray-600">Profesyonel montaj ekibi tarafından hızlı ve güvenli kurulum</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Bakım</h4>
                    <p className="text-gray-600">Nötr temizlik ürünleri ile düzenli temizlik yeterlidir</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "paket" && (
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Paket İçeriği</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pleksiglas dikme gövdesi</li>
                  <li>• Eloksal alüminyum aksesuarlar</li>
                  <li>• Montaj vidaları</li>
                  <li>• Montaj kılavuzu</li>
                  <li>• Garanti belgesi</li>
                </ul>
              </div>
            )}

            {activeTab === "sss" && (
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Sık Sorulan Sorular</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Ürün ne kadar dayanıklı?</h4>
                    <p className="text-gray-600">5 yıl garanti ile uzun ömürlü kullanım sağlar.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Renk seçenekleri nelerdir?</h4>
                    <p className="text-gray-600">Standart eloksal renkler ve özel RAL kodları mevcuttur.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Ürünler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border overflow-hidden hover:shadow-lg transition duration-200">
              <img
                   src="https://walmco.com/urunler/Pleksi%20Dikmeler/2512%20halab%20pleksi%20dikme.png"
                   alt="2512 Halab Model"
                   productName="2527 model Model"
                   className="w-full h-48 object-cover"
              
                 />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">2512 Halab Model</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">4.7</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">Halka desenli özel tasarım pleksiglas korkuluk dikmesi</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                  Ürünü İncele
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg border overflow-hidden hover:shadow-lg transition duration-200">
              <img
                   src="https://walmco.com/urunler/Pleksi%20Dikmeler/2502%20%C5%9Feffaf%20bo%C4%9Fumlu%20pleksi%20dikme.png"
                   alt="2502 Şeffaf Boğumlu Model"
                   productName="2527 model Model"
                   className="w-full h-48 object-cover"
              
                 />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">2502 Şeffaf Boğumlu Model</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">4.6</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">Şeffaf boğumlu tasarım ile modern estetik</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                  Ürünü İncele
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg border overflow-hidden hover:shadow-lg transition duration-200">
              <img
                   src="https://walmco.com/urunler/Pleksi%20Dikmeler/2504%20kanall%C4%B1%20pleksi%20dikme.png"
                   alt="2504 Kanallı Model"
                   productName="2527 model Model"
                   className="w-full h-48 object-cover"
              
                 />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">2504 Kanallı Model</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">4.5</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">Kanallı tasarım ile fonksiyonel ve estetik</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                  Ürünü İncele
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
