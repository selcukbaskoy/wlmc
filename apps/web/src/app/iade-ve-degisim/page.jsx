import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  RotateCcw,
  Package,
  Clock,
  AlertTriangle,
  CheckCircle2,
  X,
  ShieldCheck,
  Droplets,
} from "lucide-react";

export default function IadeVeDegisimPage() {
  useEffect(() => {
    document.title = "İade ve Değişim - Walmco Pleksi Korkuluk Sistemleri";

    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Walmco ürünlerinin iade ve değişim koşulları. Ürün temizliği, bakım önerileri ve garanti kapsamı dışı durumlar hakkında detaylı bilgiler.";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
  }, []);

  const returnConditions = [
    {
      icon: X,
      title: "İade Kabul Edilmeyen Durumlar",
      type: "not-accepted",
      items: [
        "Kullanıcı kaynaklı hasar ve kırılmalar",
        "Yanlış montaj sonucu oluşan sorunlar",
        "Uygun olmayan temizlik malzemeleri kullanımı",
        "Hatalı ölçüm ve sipariş nedeniyle uyumsuzluk",
        "Doğal afetler ve dış etkenlerden kaynaklanan hasarlar",
        "Garanti süresi sonunda ortaya çıkan problemler",
        "Özel sipariş ve kişiye özel üretilen ürünler",
        "30 günü aşan kullanım sonrası talepler",
      ],
    },
    {
      icon: CheckCircle2,
      title: "İade Kabul Edilen Durumlar",
      type: "accepted",
      items: [
        "Üretim hatası kaynaklı kalite sorunları",
        "Teslimat sırasında oluşan hasar",
        "Yanlış ürün gönderimi",
        "Eksik parça teslimatı",
        "Katalogda belirtilen özelliklerle uyumsuzluk",
        "CE sertifikası ve kalite standartlarına uygun olmayan ürün",
        "Garanti kapsamındaki malzeme hataları",
        "Firmamız kaynaklı üretim ve teslimat sorunları",
      ],
    },
  ];

  const cleaningInstructions = [
    {
      icon: Droplets,
      title: "Doğru Temizlik Yöntemleri",
      description:
        "Pleksi korkuluk ürünlerinizin uzun ömürlü olması için doğru temizlik yöntemlerini uygulamak çok önemlidir.",
      recommendations: [
        "İlk yıl ayda bir, sonraki yıllarda 3 ayda bir temizlik yapın",
        "Yumuşak mikrofiber bez kullanın",
        "pH değeri 7-8 arası olan nötr deterjan tercih edin",
        "Bol su ile durulama yapın",
        "Hemen kuru mikrofiber bezle silme işlemi yapın",
        "Güneş ışığından koruma için özel koruyucu film uygulayın",
      ],
      prohibited: [
        "Alkol içerikli temizlik maddeleri",
        "Aseton, tiner gibi solvent bazlı ürünler",
        "Aşındırıcı ovucu ve sert fırçalar",
        "Amonyak içerikli cam temizleyiciler",
        "Yüksek basınçlı su ile temizlik",
        "Metal kazıyıcı araçlar",
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
              <RotateCcw size={16} />
              <span>İade ve Değişim</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              İade ve <span className="text-[#b91c1c]">Değişim Koşulları</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Walmco ürünlerinin iade ve değişim süreçleri, Türkiye Cumhuriyeti
              yasaları çerçevesinde düzenlenmiştir
            </p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 px-6 bg-red-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-200">
              <div className="flex items-start space-x-4">
                <AlertTriangle size={32} className="text-red-500 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-red-800 mb-4">
                    Önemli Uyarı
                  </h2>
                  <p className="text-red-700 text-lg leading-relaxed mb-6">
                    <strong>
                      Firmamız, kullanıcıdan kaynaklı olmayan sorunlar dışında
                      iade ve değişim kabul etmemektedir.
                    </strong>{" "}
                    Bu kapsamda üretim hataları, malzeme kusurları ve teslimat
                    sırasındaki hasarlar firmamızın sorumluluğunda olup, bu
                    durumlar için ücretsiz değişim veya iade hizmeti
                    sunulmaktadır.
                  </p>
                  <div className="bg-red-100 p-4 rounded-lg">
                    <p className="text-red-800 text-sm leading-relaxed">
                      <strong>Ürün Temizliğinde Dikkat:</strong> Alkol veya
                      solvent içeren maddeler kullanmayın. Bu tip temizlik
                      malzemeleri pleksi yüzeyde kalıcı hasara neden olur ve
                      garanti kapsamı dışında kalır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Return Conditions */}
        <section className="py-16 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                İade ve Değişim Koşulları
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hangi durumlarda iade/değişim kabul edilir, hangi durumlarda
                edilmez? Detaylı açıklamalar aşağıdadır.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {returnConditions.map((condition, index) => {
                const IconComponent = condition.icon;
                const isAccepted = condition.type === "accepted";

                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl shadow-lg p-8 border-2 ${
                      isAccepted ? "border-green-200" : "border-red-200"
                    } hover:shadow-xl transition-shadow duration-300`}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          isAccepted ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        <IconComponent
                          size={24}
                          className="text-white"
                          strokeWidth={2}
                        />
                      </div>
                      <h3
                        className={`text-2xl font-bold ${
                          isAccepted ? "text-green-800" : "text-red-800"
                        }`}
                      >
                        {condition.title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {condition.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start space-x-3"
                        >
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              isAccepted ? "bg-green-500" : "bg-red-500"
                            }`}
                          ></div>
                          <p className="text-gray-700 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cleaning Instructions */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ürün Temizlik ve Bakım Rehberi
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Pleksi korkuluk ürünlerinizin uzun ömürlü olması ve garanti
                kapsamında kalması için doğru temizlik yöntemlerini uygulayın.
              </p>
            </div>

            {cleaningInstructions.map((instruction, index) => {
              const IconComponent = instruction.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center">
                      <IconComponent
                        size={24}
                        className="text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {instruction.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {instruction.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Recommendations */}
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h4 className="text-xl font-bold text-green-800 mb-4 flex items-center space-x-2">
                        <CheckCircle2 size={20} />
                        <span>Önerilen Yöntemler</span>
                      </h4>
                      <div className="space-y-3">
                        {instruction.recommendations.map((rec, recIndex) => (
                          <div
                            key={recIndex}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-green-700 leading-relaxed">
                              {rec}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Prohibited */}
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center space-x-2">
                        <X size={20} />
                        <span>Kullanmayın</span>
                      </h4>
                      <div className="space-y-3">
                        {instruction.prohibited.map((prob, probIndex) => (
                          <div
                            key={probIndex}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-red-700 leading-relaxed">
                              {prob}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Return Process */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                İade Süreci
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kabul edilebilir durumlar için iade sürecinin adımları
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Başvuru",
                  description:
                    "İade talebinizi +90 (216) 909 28 34 numaralı telefondan iletiniz",
                  icon: Package,
                },
                {
                  step: "2",
                  title: "Değerlendirme",
                  description:
                    "Teknik ekibimiz iade gerekçenizi 2-3 iş günü içinde değerlendirir",
                  icon: ShieldCheck,
                },
                {
                  step: "3",
                  title: "Onay",
                  description:
                    "İade onayı alındıktan sonra ürün toplama randevusu alınır",
                  icon: CheckCircle2,
                },
                {
                  step: "4",
                  title: "Tamamlama",
                  description:
                    "İade kabul edildiğinde 14 iş günü içinde ödeme iadesi yapılır",
                  icon: Clock,
                },
              ].map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {step.step}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Legal Information */}
        <section className="py-16 px-6 bg-gray-900 text-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Yasal Haklar ve Bilgilendirme
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Türkiye Cumhuriyeti yasaları çerçevesinde tüketici hakları
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Tüketici Hakları</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında,
                  ayıplı mal nedeniyle tüketicinin sözleşmeyi feshetme, ayıbın
                  giderilmesini isteme veya ayıp oranında bedel indirimi talep
                  etme hakları bulunmaktadır.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">İtiraz Mercii</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Herhangi bir uyuşmazlık durumunda İstanbul Tüketici Hakem
                  Heyetleri ve İstanbul Tüketici Mahkemelerine başvuru
                  yapılabilir. Tüketici problemleri için 175 ALO Tüketici Hattı
                  aranabilir.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Garanti Kapsamı</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ürünlerimiz 5 yıl üretici garantisi altındadır. Garanti
                  kapsamında olan sorunlar için herhangi bir ücret
                  alınmamaktadır. Detaylı garanti koşulları için garanti
                  belgenizdeki şartlara bakınız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-gradient-to-r from-[#b91c1c] to-[#991b1b] rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">İade Başvurusu</h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                İade talebiniz için lütfen müşteri hizmetlerimizle iletişime
                geçin. Uzman ekibimiz size yardımcı olmaya hazır.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/902169092834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-[#b91c1c] font-semibold rounded-xl hover:bg-gray-50 transition-colors inline-block"
                >
                  Müşteri Hizmetleri Ara
                </a>
                <a
                  href="/iletisim"
                  className="px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-xl transition-colors inline-block"
                >
                  İletişim Formu
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
