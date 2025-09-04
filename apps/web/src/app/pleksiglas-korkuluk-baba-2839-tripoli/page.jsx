import React, { useState } from "react";
import { getImageUrl } from "../../utils/imageUtils";
import { Star, ChevronDown, ChevronUp, Phone, MessageCircle, ShoppingCart, Zap, Shield, Award, Truck, RotateCcw, Calendar, CheckCircle2, Eye, ZoomIn, X} from "lucide-react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductPageGuard from '../../components/ProductPageGuard';
export default function Pleksi2839TripoliPage() {
  const [activeTab, setActiveTab] = useState('ozellikler');
  const [selectedBodyType, setSelectedBodyType] = useState('kabarcikli');
  const [selectedAccessory, setSelectedAccessory] = useState('altin');
  const [showLightbox, setShowLightbox] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Pleksiglas Korkuluk Baba – 2839 Tripoli Model",
    model: "2839 Tripoli",
    image: "https://walmco.com/urunler/Plexsi%20Babalar/2839%20tripoli%20pleksi%20baba.png",
    rating: 4.9,
    reviewCount: 178,
    description: "2839 Tripoli model pleksiglas korkuluk babası. Tripoli özel dekoratif tasarımı ile premium estetik sunan, altın aksesuar ile lüks görünümlü çözüm.",
    features: [
      "Tripoli Özel Tasarım",
      "Dekoratif İşçilik",
      "Premium Estetik",
      "Altın Aksesuar"
    ],
    specs: {
      "Model": "2839 Tripoli",
      "Malzeme": "Pleksiglas (PMMA) + Altın Aksesuar",
      "Tasarım": "Tripoli Dekoratif",
      "Garanti": "5 Yıl"
    }
  };

  const bodyTypes = [
    { id: 'kabarcikli', name: 'Kabarcıklı Gövde', popular: true },
    { id: 'kabarcikisz', name: 'Kabarcıksız Gövde', popular: false }
  ];

  const accessories = [
    { id: 'altin', name: 'Altın Renkli', color: '#FFD700', popular: true },
    { id: 'eloksal', name: 'Eloksal', color: '#C0C0C0', popular: false },
    { id: 'ral9005', name: 'RAL 9005 Siyah', color: '#000000', popular: false },
    { id: 'ral7016', name: 'RAL 7016 Gri', color: '#3E3E3E', popular: false }
  ];



  const tabs = [
    { id: 'ozellikler', name: 'Özellikler' },
    { id: 'teknik', name: 'Teknik Bilgiler' },
    { id: 'uygulama', name: 'Uygulama Alanları' },
    { id: 'montaj', name: 'Montaj Kılavuzu' },
    { id: 'paket', name: 'Paket İçeriği' },
    { id: 'sss', name: 'Sıkça Sorulan Sorular' },
    { id: 'ilgili', name: 'İlgili Ürünler' }
  ];

  return (
    <ProductPageGuard>
      <div className="min-h-screen bg-gray-50">
        <Header />
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-red-600">Ana Sayfa</a>
            <span>/</span>
            <a href="/urunler" className="hover:text-red-600">Ürünler</a>
            <span>/</span>
            <a href="/urunler?category=pleksi-babalar" className="hover:text-red-600">Pleksi Babalar</a>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.model}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm border product-image">
              <img
                src={getImageUrl(product.image)}
                alt={product.name}
                productName={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              />
              <button 
                onClick={() => setShowLightbox(true)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              >
                <ZoomIn size={20} className="text-gray-700" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border cursor-pointer hover:shadow-md transition-shadow product-image">
                                    <img
                      src={getImageUrl(product.image)}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star 
                      key={star} 
                      size={16} 
                      className={`${star <= Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-sm font-medium text-gray-900 ml-2">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviewCount} değerlendirme)</span>
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-xs font-bold rounded-full">
                  ⭐ EN YÜKSEKPUANLı
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Configuration */}
            <div className="space-y-6 bg-white p-6 rounded-xl border">
              {/* Body Type */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Gövde Tipi</h3>
                <div className="grid grid-cols-1 gap-2">
                  {bodyTypes.map((type) => (
                    <label key={type.id} className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="bodyType"
                        value={type.id}
                        checked={selectedBodyType === type.id}
                        onChange={(e) => setSelectedBodyType(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                        selectedBodyType === type.id 
                          ? 'border-red-600 bg-red-50' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}>
                        <span className="font-medium text-gray-900">{type.name}</span>
                        {type.popular && (
                          <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                            Popüler
                          </span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Accessory Surface */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Aksesuar Yüzey</h3>
                <div className="grid grid-cols-2 gap-2">
                  {accessories.map((acc) => (
                    <label key={acc.id} className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="accessory"
                        value={acc.id}
                        checked={selectedAccessory === acc.id}
                        onChange={(e) => setSelectedAccessory(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-all ${
                        selectedAccessory === acc.id 
                          ? 'border-red-600 bg-red-50' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}>
                        <div 
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: acc.color }}
                        />
                        <div className="flex-1 min-w-0">
                          <span className="font-medium text-gray-900 text-sm">{acc.name}</span>
                          {acc.popular && (
                            <div className="text-xs text-red-600 font-medium">Popüler</div>
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>


              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Adet</h3>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 h-10 text-center border border-gray-300 rounded-lg"
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-yellow-500 via-red-600 to-red-700 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-yellow-600 hover:via-red-700 hover:to-red-800 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Zap size={20} />
                <span>Ücretsiz Teklif Al</span>
                <Award size={20} />
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <a href="https://wa.me/902169092834" className="flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
                <a href="tel:+902169092834" className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  <Phone size={18} />
                  <span>Ara</span>
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck size={24} className="text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">24-72 Saat</p>
                <p className="text-xs text-gray-500">Hızlı Kargo</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <RotateCcw size={24} className="text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">14 Gün</p>
                <p className="text-xs text-gray-500">İade Garantisi</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield size={24} className="text-purple-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">5 Yıl</p>
                <p className="text-xs text-gray-500">Ürün Garantisi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'ozellikler' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ürün Özellikleri</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Avantajlar</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Tripoli özel dekoratif tasarım</li>
                    <li>• Premium estetik ile lüks görünüm</li>
                    <li>• Altın renkli aksesuar ile görsellik</li>
                    <li>• Yüksek kalite pleksiglas malzeme</li>
                    <li>• Profesyonel dekoratif işçilik</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'teknik' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Teknik Özellikler</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="bg-white p-4 rounded-lg border">
                      <dt className="text-sm font-medium text-gray-500">{key}</dt>
                      <dd className="mt-1 text-lg font-semibold text-gray-900">{value}</dd>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'uygulama' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Uygulama Alanları</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white rounded-lg border">
                    <h4 className="font-semibold text-gray-900 mb-2">Lüks Konutlar</h4>
                    <p className="text-sm text-gray-600">Premium konut projelerinde estetik çözüm</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg border">
                    <h4 className="font-semibold text-gray-900 mb-2">Ticari Alanlar</h4>
                    <p className="text-sm text-gray-600">Otel, AVM gibi prestijli mekanlar</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg border">
                    <h4 className="font-semibold text-gray-900 mb-2">Sanat Galerisi</h4>
                    <p className="text-sm text-gray-600">Müze ve galeri korkuluk sistemleri</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'montaj' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Montaj Kılavuzu</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Gerekli Araçlar</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Hassas matkap ve özel uçlar</li>
                      <li>Dijital su terazisi</li>
                      <li>Lazer mesafe ölçer</li>
                      <li>Premium tornavida seti</li>
                      <li>Silikon tabancası</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Montaj Adımları</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Hassas ölçüm ve işaretleme</li>
                      <li>Kontrollü delme işlemi</li>
                      <li>Premium baba parçasını yerleştirme</li>
                      <li>Altın aksesuar montajı</li>
                      <li>Final kalite kontrolü</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'paket' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Paket İçeriği</h3>
                <div className="bg-white p-6 rounded-lg border">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle2 size={18} className="text-green-600" />
                      <span>1 adet Pleksiglas Korkuluk Baba (2839 Tripoli Model)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle2 size={18} className="text-green-600" />
                      <span>Premium montaj vida seti</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle2 size={18} className="text-green-600" />
                      <span>Altın renkli aksesuar parçaları</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle2 size={18} className="text-green-600" />
                      <span>Detaylı montaj kılavuzu</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle2 size={18} className="text-green-600" />
                      <span>Premium ürün garanti belgesi</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'sss' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Sıkça Sorulan Sorular</h3>
                {[
                  {
                    q: "2839 Tripoli modeli neden en yüksek puanlı ürün?",
                    a: "Özel dekoratif tasarımı, altın aksesuar kalitesi ve müşteri memnuniyeti ile 4.9/5 puana sahiptir."
                  },
                  {
                    q: "Altın aksesuar gerçek altın mı?",
                    a: "Gerçek altın kaplama değil, ancak altın rengi UV dayanımlı özel kaplama teknolojisi kullanılmıştır."
                  },
                  {
                    q: "Hangi projeler için önerilir?",
                    a: "Lüks konutlar, prestijli ofisler, otel ve AVM gibi yüksek kalite gerektiren projeler için idealdir."
                  },
                  {
                    q: "Profesyonel montaj zorunlu mu?",
                    a: "Premium kalite için profesyonel montaj önerilir. Ücretsiz montaj danışmanlığı sunmaktayız."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'ilgili' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">İlgili Ürünler</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { name: "2815 Kral Model", image: "https://walmco.com/urunler/Plexsi%20Babalar/2815%20kral%20pleksi%20baba.png" },
                    { name: "2840 Erciyes Model", image: "https://walmco.com/urunler/Plexsi%20Babalar/2840%20erciyes%20pleksi%20baba.png" },
                    { name: "2804 Denver Model", image: "https://walmco.com/urunler/Plexsi%20Babalar/2804%20denver%20pleksi%20baba.png" }
                  ].map((relatedProduct, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border hover:shadow-lg transition-shadow cursor-pointer product-image">
                      <img
                        src={getImageUrl(relatedProduct.image)}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover rounded-lg mb-3"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,' + btoa(`
                            <svg width="400" height="192" xmlns="http://www.w3.org/2000/svg">
                              <rect width="400" height="192" fill="#f3f4f6"/>
                              <text x="200" y="90" text-anchor="middle" font-family="Arial" font-size="16" fill="#6b7280">WALMCO</text>
                              <text x="200" y="110" text-anchor="middle" font-family="Arial" font-size="14" fill="#9ca3af">Ürün Görseli</text>
                              <text x="200" y="130" text-anchor="middle" font-family="Arial" font-size="12" fill="#9ca3af">${relatedProduct.name.substring(0, 20)}...</text>
                            </svg>
                          `);
                        }}
                      />
                      <h4 className="font-semibold text-gray-900 text-sm">{relatedProduct.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">Pleksiglas Korkuluk Baba</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Secure Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={getImageUrl(product.image)}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
            <button 
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
      
      <Footer />
      </div>
    </ProductPageGuard>
  );
}