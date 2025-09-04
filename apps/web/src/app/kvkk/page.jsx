import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Shield,
  FileText,
  Users,
  Lock,
  Eye,
  AlertCircle,
  Check,
} from "lucide-react";

export default function KVKKPage() {
  useEffect(() => {
    document.title =
      "KVKK Aydınlatma Metni - Walmco Pleksi Korkuluk Sistemleri";

    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Walmco KVKK aydınlatma metni. Kişisel verilerinizin işlenmesi, korunması ve haklarınız hakkında detaylı bilgiler.";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
  }, []);

  const kvkkSections = [
    {
      icon: Users,
      title: "Veri Sorumlusu",
      content: [
        "Walmco Pleksi ve Alüminyum Sistemleri (Walmco) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatıyla hareket etmekteyiz.",
        "İletişim Bilgileri:",
        "• Ticaret Unvanı: Walmco Pleksi ve Alüminyum Sistemleri",
        "• Adres: Güngören Mah. Yapıt Sok. No:19G Çekmeköy/İSTANBUL",
        "• E-posta: kvkk@walmco.com",
        "• Telefon: +90 (216) 909 28 34",
      ],
    },
    {
      icon: FileText,
      title: "Hangi Kişisel Veriler İşlenmektedir?",
      content: [
        "Firmamız tarafından aşağıdaki kişisel verileriniz işlenebilmektedir:",
        "• Kimlik Bilgileri: Ad, soyad, T.C. kimlik numarası",
        "• İletişim Bilgileri: Telefon, e-posta, adres bilgileri",
        "• Müşteri İşlem Bilgileri: Sipariş geçmişi, ödeme bilgileri",
        "• Pazarlama Bilgileri: Tercih ve beğenileriniz",
        "• Teknik Bilgiler: IP adresi, çerez bilgileri, site kullanım verileri",
        "• Görsel/İşitsel Kayıtlar: Güvenlik kamerası kayıtları, çağrı merkezi kayıtları",
      ],
    },
    {
      icon: Lock,
      title: "Kişisel Verilerin İşlenme Amacı",
      content: [
        "Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:",
        "• Ürün ve hizmetlerimizin sunulması",
        "• Müşteri memnuniyetinin sağlanması ve geliştirilmesi",
        "• Sipariş takibi ve teslimat işlemleri",
        "• Faturalama ve muhasebe işlemleri",
        "• Yasal yükümlülüklerimizin yerine getirilmesi",
        "• Pazarlama faaliyetlerinin yürütülmesi (açık rızanız dahilinde)",
        "• İstatistiksel çalışmalar yapılması",
        "• Güvenlik tedbirlerinin uygulanması",
      ],
    },
    {
      icon: Shield,
      title: "Kişisel Verilerin İşlenme Hukuki Sebepleri",
      content: [
        "KVKK md.5 ve md.6 kapsamında kişisel verileriniz aşağıdaki hukuki sebepler dahilinde işlenmektedir:",
        "• Açık rızanızın bulunması",
        "• Sözleşmenin kurulması veya ifasının gerekliliği",
        "• Kanuni yükümlülüklerimizin yerine getirilmesi",
        "• Meşru menfaatlerimizin bulunması",
        "• Temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatlerimizin varlığı",
      ],
    },
    {
      icon: Eye,
      title: "Kişisel Verilerin Paylaşılması",
      content: [
        "Kişisel verileriniz aşağıdaki taraflarla paylaşılabilir:",
        "• İş ortaklarımız ve tedarikçilerimiz",
        "• Kargo ve lojistik firmalar",
        "• Bankalar ve ödeme kuruluşları",
        "• Yasal yükümlülükler gereği kamu kurum ve kuruluşları",
        "• Bilgi işlem ve teknik destek sağlayıcıları",
        "• Hukuki danışman ve denetim firmalar",
      ],
    },
    {
      icon: Check,
      title: "KVKK Kapsamındaki Haklarınız",
      content: [
        "KVKK md.11 kapsamında aşağıdaki haklara sahipsiniz:",
        "• Kişisel veri işlenip işlenmediğini öğrenme",
        "• Kişisel verileri işlenmişse buna ilişkin bilgi talep etme",
        "• Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme",
        "• Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme",
        "• Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme",
        "• Kişisel verilerin silinmesini veya yok edilmesini isteme",
        "• Düzeltme, silme veya yok etme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme",
        "• İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin aleyhine bir sonucun ortaya çıkmasına itiraz etme",
        "• Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğranması halinde zararın giderilmesini talep etme",
      ],
    },
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
              <span>Kişisel Verilerin Korunması</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              KVKK <span className="text-[#b91c1c]">Aydınlatma Metni</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında
              verilerinizin işlenmesi hakkında detaylı bilgilendirme
            </p>
          </div>
        </section>

        {/* Last Update */}
        <section className="py-8 px-6 bg-yellow-50 border-b border-yellow-200">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-center space-x-3 text-yellow-800">
              <AlertCircle size={20} />
              <span className="font-semibold">
                Son Güncellenme: 15 Ağustos 2025
              </span>
            </div>
          </div>
        </section>

        {/* KVKK Content */}
        <section className="py-16 px-6">
          <div className="max-w-[1200px] mx-auto">
            {/* Introduction */}
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kişisel Verilerinizi Koruyoruz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Walmco olarak, kişisel verilerinizin güvenliğini en üst düzeyde
                tutmak ve yasal yükümlülüklerimizi eksiksiz yerine getirmek
                önceliğimizdir. Bu aydınlatma metni ile verilerinizin nasıl
                işlendiği konusunda tam şeffaflık sağlıyoruz.
              </p>
            </div>

            {/* KVKK Sections */}
            <div className="space-y-12">
              {kvkkSections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-[#b91c1c] rounded-xl flex items-center justify-center">
                        <IconComponent
                          size={24}
                          className="text-white"
                          strokeWidth={2}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {section.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          {item.startsWith("•") ? (
                            <div className="flex items-start space-x-3 ml-4">
                              <div className="w-2 h-2 bg-[#b91c1c] rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 leading-relaxed">
                                {item.substring(2)}
                              </p>
                            </div>
                          ) : (
                            <p className="text-gray-700 leading-relaxed font-medium">
                              {item}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Data Request Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Veri Sorumlusuna Başvuru
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  KVKK kapsamındaki haklarınızı kullanmak için başvurularınızı
                  aşağıdaki kanallar üzerinden iletebilirsiniz.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Yazılı Başvuru
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Güngören Mah. Yapıt Sok. No:19G Çekmeköy/İSTANBUL adresine
                    kimliğinizi tespit edici belgeler ile birlikte başvuru
                    yapabilirsiniz.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Güvenli E-posta
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    kvkk@walmco.com e-posta adresine güvenli elektronik imza ile
                    başvurularınızı iletebilirsiniz.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Müşteri Hizmetleri
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    +90 (216) 909 28 34 numaralı telefon üzerinden müşteri
                    hizmetlerimize başvurabilirsiniz.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-yellow-50 rounded-2xl border border-yellow-200">
                <div className="flex items-start space-x-3">
                  <AlertCircle size={20} className="text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">
                      Önemli Uyarı
                    </h4>
                    <p className="text-yellow-700 text-sm leading-relaxed">
                      Başvurularınız en geç 30 gün içinde yanıtlanacaktır.
                      Başvuru ile ilgili herhangi bir ücret talep edilmemektedir.
                      Ancak, fotokopi, gönderim masrafı gibi maliyetler
                      başvurandan talep edilebilir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-gradient-to-r from-[#b91c1c] to-[#991b1b] rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Sorularınız mı Var?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                KVKK kapsamındaki haklarınız veya veri işleme süreçlerimiz
                hakkında detaylı bilgi almak için bizimle iletişime geçin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kvkk@walmco.com"
                  className="px-8 py-4 bg-white text-[#b91c1c] font-semibold rounded-xl hover:bg-gray-50 transition-colors inline-block"
                >
                  KVKK E-posta Gönder
                </a>
                <a
                  href="/iletisim"
                  className="px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-xl transition-colors inline-block"
                >
                  İletişim Sayfası
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}