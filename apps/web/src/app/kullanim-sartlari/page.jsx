import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FileText, AlertCircle, CheckCircle, XCircle, Info, Clock } from "lucide-react";

export default function KullanimSartlariPage() {
  useEffect(() => {
    document.title = "Kullanım Şartları - Walmco Pleksi Korkuluk ve Alüminyum Sistemleri";
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Walmco web sitesi kullanım şartları, hüküm ve koşulları. Pleksi korkuluk hizmetlerimizi kullanmadan önce lütfen okuyunuz.";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
  }, []);

  const sections = [
    {
      icon: CheckCircle,
      title: "Kabul Edilen Kullanım",
      content: "Web sitemizi ticari amaçlarla, bilgi edinme ve teklif alma için kullanabilirsiniz.",
      color: "text-green-600"
    },
    {
      icon: XCircle,
      title: "Yasak Kullanımlar",
      content: "Zararlı aktiviteler, telif hakkı ihlali ve yetkisiz erişim denemesi yasaktır.",
      color: "text-red-600"
    },
    {
      icon: Info,
      title: "Sorumluluklar",
      content: "Kullanıcı ve şirket sorumluluklarının açık tanımları ve sınırları.",
      color: "text-blue-600"
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
              <FileText size={16} />
              <span>Kullanım Şartları</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Kullanım <span className="text-[#b91c1c]">Şartları</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bu kullanım şartları, Walmco web sitesini kullanımınız ile ilgili hüküm ve koşulları belirler. 
              Sitemizi kullanarak bu şartları kabul etmiş sayılırsınız.
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
                      <IconComponent size={24} className={section.color} />
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
                  1. Genel Hükümler
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Bu kullanım şartları, <strong>Walmco Pleksi ve Alüminyum Sistemleri San. Tic. Ltd. Şti.</strong> ("Walmco", "Şirket", "Biz") tarafından işletilen www.walmco.com web sitesinin ("Site") kullanımına ilişkin şartları düzenler.
                  </p>
                  <p>
                    Siteyi kullanarak, bu kullanım şartlarını tamamen okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş sayılırsınız. Bu şartları kabul etmiyorsanız, siteyi kullanmamalısınız.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle size={20} className="text-amber-600 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-amber-900">Önemli Uyarı</h3>
                        <p className="text-amber-800 mt-1">
                          Bu şartlar herhangi bir zamanda önceden haber verilmeksizin değiştirilebilir. 
                          Değişiklikler sitede yayınlandığı andan itibaren geçerli olur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Tanımlar</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-2">Site</h3>
                      <p className="text-sm">www.walmco.com web sitesi ve tüm alt sayfaları</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-2">Kullanıcı</h3>
                      <p className="text-sm">Siteye erişen ve kullanan gerçek veya tüzel kişiler</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-2">Hizmetler</h3>
                      <p className="text-sm">Pleksi korkuluk, alüminyum profil ve ilgili tüm hizmetler</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-2">İçerik</h3>
                      <p className="text-sm">Sitede yer alan tüm metin, görsel, video ve diğer materyaller</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Site Kullanım Kuralları</h2>
                <div className="space-y-6 text-gray-700">
                  
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="font-semibold text-green-900 mb-4 flex items-center">
                      <CheckCircle size={20} className="text-green-600 mr-2" />
                      İzinli Kullanımlar
                    </h3>
                    <ul className="space-y-2 text-green-800">
                      <li>• Ürün ve hizmetlerimiz hakkında bilgi edinme</li>
                      <li>• Teklif talep etme ve iletişime geçme</li>
                      <li>• Katalog ve dökümanları indirme</li>
                      <li>• Referans projelerimizi inceleme</li>
                      <li>• Blog yazılarını okuma ve paylaşma</li>
                      <li>• İletişim formlarını doldurma</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="font-semibold text-red-900 mb-4 flex items-center">
                      <XCircle size={20} className="text-red-600 mr-2" />
                      Yasak Kullanımlar
                    </h3>
                    <ul className="space-y-2 text-red-800">
                      <li>• Siteye zarar verici yazılım yükleme</li>
                      <li>• Başkalarının hesap bilgilerini çalma</li>
                      <li>• Spam veya istenmeyen e-posta gönderme</li>
                      <li>• Telif hakkı olan içeriği izinsiz kullanma</li>
                      <li>• Yanıltıcı veya yanlış bilgi verme</li>
                      <li>• Siteyi ticari olmayan amaçlarla kopyalama</li>
                      <li>• Otomatik botlar veya scraper kullanma</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Fikri Mülkiyet Hakları</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Sitede yer alan tüm içerik, tasarım, logo, metin, görsel, video, yazılım ve diğer materyaller Walmco'nun fikri mülkiyeti olup, telif hakları ve diğer fikri mülkiyet hakları ile korunmaktadır.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">Korunan İçerikler:</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Walmco logosu ve marka öğeleri</li>
                        <li>• Ürün fotoğrafları ve teknik çizimler</li>
                        <li>• Katalog ve broşürler</li>
                        <li>• Blog yazıları ve makaleler</li>
                        <li>• Web sitesi tasarımı</li>
                        <li>• Yazılım ve kod yapısı</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">İzin Verilen Kullanım:</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Kişisel bilgilendirme amaçlı görüntüleme</li>
                        <li>• Teklif sürecinde referans gösterme</li>
                        <li>• Eğitim amaçlı inceleme</li>
                        <li>• Basın ve medya paylaşımı (izinli)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#b91c1c]/5 border border-[#b91c1c]/20 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Telif Hakkı İhlali Bildirimi</h3>
                    <p>Telif hakkı ihlali durumunda <a href="mailto:info@walmco.com" className="text-[#b91c1c]">info@walmco.com</a> adresine bildirim yapabilirsiniz.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Kullanıcı Sorumlulukları</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Site kullanıcısı olarak aşağıdaki konularda sorumlusunuz:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-2">Bilgi Doğruluğu</h3>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• Doğru iletişim bilgileri verme</li>
                        <li>• Gerçek proje detayları paylaşma</li>
                        <li>• Yetkili kişi olarak temsil etme</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                      <h3 className="font-semibold text-purple-900 mb-2">Güvenlik</h3>
                      <ul className="text-purple-800 text-sm space-y-1">
                        <li>• Hesap bilgilerini koruma</li>
                        <li>• Güvenli internet bağlantısı kullanma</li>
                        <li>• Şüpheli aktiviteleri bildirme</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <h3 className="font-semibold text-amber-900 mb-2">Yasal Uyumluluk</h3>
                    <p className="text-amber-800">
                      Yerel, ulusal ve uluslararası yasalara uygun davranmak, site kullanımında hukuki kurallara riayet etmek zorunda­sınız.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Şirket Sorumlulukları ve Sınırlamalar</h2>
                <div className="space-y-4 text-gray-700">
                  
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="font-semibold text-green-900 mb-4">Şirketin Sorumlulukları</h3>
                    <ul className="space-y-2 text-green-800">
                      <li>• Sitenin düzenli çalışmasını sağlama</li>
                      <li>• Güvenlik önlemlerini alma</li>
                      <li>• Gizlilik politikasına uyma</li>
                      <li>• Müşteri taleplerine yanıt verme</li>
                      <li>• Doğru ürün bilgileri sunma</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Sorumluluk Sınırlamaları</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        Walmco, aşağıdaki durumlarda meydana gelebilecek zararlardan sorumlu tutulamaz:
                      </p>
                      <ul className="space-y-1">
                        <li>• Teknik arızalar ve sistem kesintileri</li>
                        <li>• Üçüncü taraf hizmet sağlayıcı sorunları</li>
                        <li>• Kullanıcının yanlış bilgi vermesi</li>
                        <li>• Mücbir sebep durumları</li>
                        <li>• İnternet bağlantı sorunları</li>
                        <li>• Yetkisiz erişim ve siber saldırılar</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Gizlilik ve Kişisel Veriler</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Kişisel verilerinizin işlenmesi, saklanması ve korunması <a href="/gizlilik-politikasi" className="text-[#b91c1c] font-semibold hover:underline">Gizlilik Politikamız</a> kapsamında düzenlenmektedir.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-xl text-center">
                      <h3 className="font-semibold text-blue-900 mb-2">KVKK Uyumlu</h3>
                      <p className="text-blue-800 text-sm">6698 sayılı kanuna uygun veri işleme</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl text-center">
                      <h3 className="font-semibold text-green-900 mb-2">SSL Güvenlik</h3>
                      <p className="text-green-800 text-sm">Şifreli veri aktarımı</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl text-center">
                      <h3 className="font-semibold text-purple-900 mb-2">Kullanıcı Hakları</h3>
                      <p className="text-purple-800 text-sm">Veri sahibi haklarına saygı</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Hizmet Koşulları</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Teklif ve Fiyatlandırma</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Tüm teklifler geçici ve değişkendir</li>
                        <li>• Fiyatlar proje bazında belirlenir</li>
                        <li>• Özel indirimler belirli koşullara tabidir</li>
                        <li>• KDV ve diğer vergiler ayrıca hesaplanır</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Teslimat ve Montaj</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Teslimat süreleri tahmini olup değişebilir</li>
                        <li>• Montaj hizmeti isteğe bağlıdır</li>
                        <li>• Nakliye koşulları ayrıca belirlenir</li>
                        <li>• Mücbir sebep durumları istisna tutar</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">9. İhlal ve Yaptırımlar</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Bu kullanım şartlarına aykırı davranılması durumunda Walmco aşağıdaki yaptırımları uygulama hakkına sahiptir:
                  </p>
                  
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="font-semibold text-red-900 mb-4">Uygulanabilir Yaptırımlar</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-red-800 text-sm">
                        <li>• Site erişimini engelleme</li>
                        <li>• Hesabı askıya alma veya kapatma</li>
                        <li>• Hizmet sunumunu durdurma</li>
                        <li>• Hukuki yollara başvurma</li>
                      </ul>
                      <ul className="space-y-2 text-red-800 text-sm">
                        <li>• Tazminat talep etme</li>
                        <li>• Ceza davası açma</li>
                        <li>• İlgili otoritelere bildirim</li>
                        <li>• Ticari ilişkiyi sonlandırma</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Uygulanacak Hukuk ve Uyuşmazlıklar</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Uygulanacak Hukuk</h3>
                        <p className="text-sm">Türkiye Cumhuriyeti kanunları ve mevzuatı geçerlidir.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Yetkili Mahkeme</h3>
                        <p className="text-sm">İstanbul Anadolu Adliyesi mahkemeleri yetkilidir.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Alternatif Çözüm</h3>
                        <p className="text-sm">Arabuluculuk ve tahkim yöntemleri tercih edilebilir.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Tüketici Hakları</h3>
                        <p className="text-sm">Tüketici hakları 6502 sayılı kanun kapsamında saklıdır.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">11. İletişim Bilgileri</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Bu kullanım şartları ile ilgili sorularınız için bizimle iletişime geçebilirsiniz:</p>
                  
                  <div className="bg-[#b91c1c]/5 border border-[#b91c1c]/20 rounded-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Şirket Adı</h3>
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
                  
                  <p className="text-sm text-gray-500 mt-4">
                    <strong>Yürürlük tarihi:</strong> 16 Ağustos 2025<br />
                    <strong>Son güncelleme:</strong> 16 Ağustos 2025
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