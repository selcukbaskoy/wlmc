import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Shield, Eye, Lock, FileText, AlertTriangle, Clock } from "lucide-react";

export default function GizlilikPolitikasiPage() {
  useEffect(() => {
    document.title = "Gizlilik Politikası - Walmco Pleksi Korkuluk ve Alüminyum Sistemleri";
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Walmco gizlilik politikası. Kişisel verilerinizin korunması, kullanımı ve işlenmesi hakkında detaylı bilgiler.";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
  }, []);

  const sections = [
    {
      icon: Shield,
      title: "Veri Güvenliği",
      content: "Kişisel verileriniz en yüksek güvenlik standartlarıyla korunmaktadır. SSL şifreleme ve güvenli sunucular kullanılmaktadır."
    },
    {
      icon: Eye,
      title: "Veri Toplama",
      content: "Sadece hizmet kalitemizi artırmak için gerekli olan veriler toplanır. İzniniz olmadan üçüncü taraflarla paylaşılmaz."
    },
    {
      icon: Lock,
      title: "Erişim Kontrolü",
      content: "Verilerinize sadece yetkili personelimiz erişebilir. Tüm erişimler kayıt altına alınır ve denetlenir."
    }
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Page Hero */}
        <section className="py-16 md:py-20 px-6 bg-gradient-to-r from-gray-50 to-white">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#b91c1c]/10 text-[#b91c1c] rounded-full text-sm font-medium mb-6">
              <Shield size={16} />
              <span>Gizlilik Politikası</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Gizlilik <span className="text-[#b91c1c]">Politikası</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kişisel verilerinizin korunması bizim için en önemli konulardan biridir. Bu politika, verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
            </p>
            
            <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>Son güncelleme: 16 Ağustos 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1000px] mx-auto">
            
            {/* Quick Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-[#b91c1c]/10 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent size={24} className="text-[#b91c1c]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                    <p className="text-gray-600">{section.content}</p>
                  </div>
                );
              })}
            </div>

            {/* Detailed Content */}
            <div className="prose max-w-none">
              
              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText size={24} className="text-[#b91c1c] mr-3" />
                  1. Genel Bilgiler
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Bu Gizlilik Politikası, <strong>Walmco Pleksi ve Alüminyum Sistemleri San. Tic. Ltd. Şti.</strong> (bundan sonra "Walmco" veya "Şirket") tarafından işletilen web sitesi ve hizmetler kapsamında kişisel verilerinizin toplanması, işlenmesi, saklanması ve korunması ile ilgili uygulamaları açıklamaktadır.
                  </p>
                  <p>
                    Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuat çerçevesinde hazırlanmıştır.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Toplanan Kişisel Veriler</h2>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900">2.1 Kimlik Verileri</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ad, soyad</li>
                    <li>E-posta adresi</li>
                    <li>Telefon numarası</li>
                    <li>Firma bilgileri (varsa)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6">2.2 İletişim Verileri</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Adres bilgileri</li>
                    <li>İletişim tercihleri</li>
                    <li>Sosyal medya hesap bilgileri</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6">2.3 Teknik Veriler</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP adresi</li>
                    <li>Tarayıcı bilgileri</li>
                    <li>Cihaz bilgileri</li>
                    <li>Çerez verileri</li>
                    <li>Site kullanım istatistikleri</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Kişisel Verilerin İşlenme Amaçları</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-2">Hizmet Sunumu</h3>
                      <p className="text-sm">Pleksi korkuluk ve alüminyum profil hizmetlerimizin sunulması</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-2">İletişim</h3>
                      <p className="text-sm">Müşteri talepleri, sorular ve şikayetlerin cevaplanması</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-2">Pazarlama</h3>
                      <p className="text-sm">Ürün ve hizmet tanıtımları, kampanya bilgilendirmeleri</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-2">Analiz</h3>
                      <p className="text-sm">Web sitesi performansının analizi ve iyileştirilmesi</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Kişisel Verilerin Aktarımı</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Kişisel verileriniz aşağıdaki durumlarda üçüncü taraflarla paylaşılabilir:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Yasal Yükümlülükler:</strong> Kanuni düzenlemelerin gerektirdiği hallerde resmi kurumlara</li>
                    <li><strong>Hizmet Sağlayıcılar:</strong> Hosting, e-posta servisi gibi teknik hizmet sağlayıcılara</li>
                    <li><strong>İş Ortakları:</strong> Hizmet sunumu için gerekli olan iş ortaklarımıza</li>
                    <li><strong>Açık Rızanız:</strong> Açık rızanızın bulunduğu diğer durumlarda</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Kişisel Verilerin Saklanması</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Kişisel verileriniz, işleme amacının gerektirdiği süre kadar veya yasal saklama süresi boyunca saklanır:
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle size={20} className="text-amber-600 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-amber-900">Saklama Süreleri</h3>
                        <ul className="text-amber-800 mt-2 space-y-1">
                          <li>• Müşteri verileri: 10 yıl (Ticaret Kanunu)</li>
                          <li>• İletişim kayıtları: 3 yıl</li>
                          <li>• Web sitesi kullanım verileri: 2 yıl</li>
                          <li>• Pazarlama izinleri: İzin geri çekilene kadar</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Veri Güvenliği</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Kişisel verilerinizin güvenliği için aşağıdaki teknik ve idari tedbirler alınmaktadır:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <h3 className="font-semibold text-green-900 mb-2">Teknik Tedbirler</h3>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>• SSL şifreleme</li>
                        <li>• Güvenlik duvarı koruması</li>
                        <li>• Düzenli güvenlik taramaları</li>
                        <li>• Veri yedekleme sistemleri</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-2">İdari Tedbirler</h3>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• Erişim yetkilendirmesi</li>
                        <li>• Personel eğitimleri</li>
                        <li>• Gizlilik sözleşmeleri</li>
                        <li>• Düzenli denetimler</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Çerez Politikası</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanılmaktadır:</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900">Çerez Türleri:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Zorunlu Çerezler:</strong> Web sitesinin çalışması için gerekli</li>
                    <li><strong>Analitik Çerezler:</strong> Site kullanımının analiz edilmesi için</li>
                    <li><strong>Pazarlama Çerezler:</strong> Kişiselleştirilmiş reklam sunumu için</li>
                    <li><strong>Fonksiyonel Çerezler:</strong> Kullanıcı tercihlerinin hatırlanması için</li>
                  </ul>
                  
                  <p>Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Veri Sahibi Hakları</h2>
                <div className="space-y-4 text-gray-700">
                  <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#b91c1c] rounded-full"></div>
                        <span className="font-semibold">Bilgi talep etme</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#b91c1c] rounded-full"></div>
                        <span className="font-semibold">Verilerin düzeltilmesi</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#b91c1c] rounded-full"></div>
                        <span className="font-semibold">Verilerin silinmesi</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#b91c1c] rounded-full"></div>
                        <span className="font-semibold">Verilerin aktarımı</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#b91c1c] rounded-full"></div>
                        <span className="font-semibold">İşlemeye itiraz</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#b91c1c] rounded-full"></div>
                        <span className="font-semibold">Otomatik karar verme</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#b91c1c] rounded-full"></div>
                        <span className="font-semibold">Zararın giderilmesi</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#b91c1c]/5 border border-[#b91c1c]/20 rounded-xl p-4 mt-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Başvuru Yöntemi</h3>
                    <p>Haklarınızı kullanmak için aşağıdaki yöntemlerle başvurabilirsiniz:</p>
                    <ul className="mt-2 space-y-1">
                      <li>• E-posta: <a href="mailto:kvkk@walmco.com" className="text-[#b91c1c]">kvkk@walmco.com</a></li>
                      <li>• Posta: Güngören Mah. Yapıt Sok. No:19G, Çekmeköy/İstanbul</li>
                      <li>• Telefon: +90 (216) 909 28 34</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">9. İletişim</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Gizlilik politikası ile ilgili sorularınız için:</p>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Veri Sorumlusu</h3>
                        <p className="text-sm">Walmco Pleksi ve Alüminyum Sistemleri San. Tic. Ltd. Şti.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Adres</h3>
                        <p className="text-sm">Güngören Mah. Yapıt Sok. No:19G, Çekmeköy/İstanbul</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">E-posta</h3>
                        <p className="text-sm">info@walmco.com</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
                        <p className="text-sm">+90 (216) 909 28 34</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Politika Güncellemeleri</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Bu gizlilik politikası gerekli durumlarda güncellenebilir. Önemli değişiklikler web sitemizde duyurulacak ve e-posta ile bilgilendirileceksiniz.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Son güncelleme tarihi:</strong> 16 Ağustos 2025
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}