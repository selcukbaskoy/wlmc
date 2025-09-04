import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Shield,
  Award,
  Globe,
  Calendar,
  CheckCircle2,
  X,
  AlertTriangle,
  FileText,
  Phone,
  Clock,
} from "lucide-react";

export default function GarantiKosullariPage() {
  useEffect(() => {
    document.title = "Garanti Koşulları - Walmco Pleksi Korkuluk Sistemleri";

    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Walmco ürünlerinin 5 yıl garanti koşulları, yurtiçi ve yurtdışı garanti kapsamı, CE sertifikası ve uluslararası kalite standartları.";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
  }, []);

  const warrantyFeatures = [
    {
      icon: Calendar,
      title: "5 Yıl Garanti",
      description:
        "Firmamız yurtiçi ve yurtdışına satışını yaptığı tüm ürünler 5 (BEŞ) yıl garantili dir.",
      color: "bg-green-500",
    },
    {
      icon: Globe,
      title: "Dünya Çapında Geçerli",
      description:
        "28 ülkeye ihracat yaptığımız ürünlerimiz dünya standartlarında olup, tüm ülkelerde garanti kapsamındadır.",
      color: "bg-blue-500",
    },
    {
      icon: Award,
      title: "CE Sertifikalı",
      description:
        "Tüm ürünlerimiz CE sertifikası ile üretilmiş olup, Avrupa Birliği kalite standartlarını karşılamaktadır.",
      color: "bg-purple-500",
    },
    {
      icon: Shield,
      title: "ISO 9001 Kalite",
      description:
        "ISO 9001:2015 kalite yönetim sistemi ile üretilen ürünlerimiz uluslararası standartlardadır.",
      color: "bg-red-500",
    },
  ];

  const warrantyScope = {
    covered: [
      "Üretim kaynaklı malzeme hataları",
      "İmalat kusurları ve kalite sorunları",
      "UV dayanıklılığında beklenmeyen azalma",
      "Renk değişimi ve solma problemleri (normal kullanımda)",
      "Yapıştırıcı ve montaj elemanlarındaki hatalar",
      "CE sertifikası standartlarından sapma",
      "Termal genleşme hesaplamalarındaki hatalar",
      "Alüminyum profillerde korozyon (normal şartlarda)",
    ],
    notCovered: [
      "Yanlış montaj ve kullanım hatalarından kaynaklı sorunlar",
      "Doğal afetler (deprem, sel, fırtına) nedeniyle oluşan hasarlar",
      "Kazara çarpma, darbe ve mekanik hasarlar",
      "Uygun olmayan temizlik malzemeleri kullanımı",
      "Aşırı yük bindirme ve yanlış kullanım",
      "Yetkisiz kişilerce yapılan onarım denemeleri",
      "İklim koşulları (aşırı sıcak, soğuk, nem) nedeniyle oluşan hasarlar",
      "Normal aşınma ve yaşlanma belirtileri",
    ],
  };

  const internationalStandards = [
    {
      standard: "EN 1991-1-4",
      description: "Rüzgar yükleri hesaplama standartı",
      region: "Avrupa",
    },
    {
      standard: "EN 1993-1-1",
      description: "Çelik yapı tasarım kuralları",
      region: "Avrupa",
    },
    {
      standard: "ASTM D4802",
      description: "Pleksi cam kalite test standartı",
      region: "Amerika",
    },
    {
      standard: "ISO 7823-1",
      description: "Plastik optik özellikler testi",
      region: "Uluslararası",
    },
    {
      standard: "DIN EN 356",
      description: "Güvenlik camı darbe dayanımı",
      region: "Almanya",
    },
    {
      standard: "BS 6206",
      description: "İnsan güvenliği için cam standardı",
      region: "İngiltere",
    },
  ];

  const warrantyProcess = [
    {
      step: "1",
      title: "Garanti Başvurusu",
      description:
        "Garanti belgeniz ve faturanız ile müşteri hizmetlerimize başvurun",
      icon: FileText,
      duration: "Anında",
    },
    {
      step: "2",
      title: "Teknik İnceleme",
      description:
        "Uzman teknik ekibimiz sorunu yerinde veya fotoğraflar ile inceler",
      icon: Shield,
      duration: "2-3 iş günü",
    },
    {
      step: "3",
      title: "Garanti Değerlendirmesi",
      description: "Sorunun garanti kapsamında olup olmadığı değerlendirilir",
      icon: CheckCircle2,
      duration: "1-2 iş günü",
    },
    {
      step: "4",
      title: "Çözüm ve Uygulama",
      description:
        "Garanti kapsamında ise ücretsiz onarım veya değişim yapılır",
      icon: Award,
      duration: "5-10 iş günü",
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
              <span>Kalite Garantisi</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Garanti <span className="text-[#b91c1c]">Koşulları</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dünya standartlarında üretilen ürünlerimiz için kapsamlı garanti
              hizmetleri ve uluslararası kalite güvencesi
            </p>
          </div>
        </section>

        {/* Main Warranty Promise */}
        <section className="py-16 px-6 bg-green-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-green-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={32} className="text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                  5 Yıl Kapsamlı Garanti
                </h2>
                <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
                  <strong>
                    Firmamız yurtiçi ve yurtdışına satışını yaptığı ürünler 5
                    (BEŞ) yıl garantilidir.
                  </strong>
                  Bu garanti, ürünün kalitesi, dayanıklılığı ve performansı için
                  verdiğimiz güvencedir.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {warrantyFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                    >
                      <div
                        className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Warranty Scope */}
        <section className="py-16 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Garanti Kapsamı
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hangi durumlar garanti kapsamında, hangi durumlar garanti
                kapsamı dışındadır? Detaylı açıklamalar aşağıdadır.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Covered */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-green-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center">
                    <CheckCircle2
                      size={24}
                      className="text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">
                    Garanti Kapsamında
                  </h3>
                </div>

                <div className="space-y-3">
                  {warrantyScope.covered.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not Covered */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-red-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center">
                    <X size={24} className="text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-red-800">
                    Garanti Kapsamı Dışında
                  </h3>
                </div>

                <div className="space-y-3">
                  {warrantyScope.notCovered.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* International Standards */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Uluslararası Kalite Standartları
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ürünlerimiz dünya çapında kabul edilen kalite standartlarına
                uygun olarak üretilmektedir
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internationalStandards.map((std, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#b91c1c] mb-2">
                        {std.standard}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        {std.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      {std.region}
                    </span>
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warranty Process */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Garanti Sürecí
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Garanti talebinizin nasıl işleme alındığı ve çözümlendiği
                sürecin adımları
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {warrantyProcess.map((step, index) => {
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
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      <Clock size={14} />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 px-6 bg-gray-900 text-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ek Bilgiler ve Önemli Uyarılar
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Garanti hizmetimizle ilgili önemli bilgiler ve dikkat edilmesi
                gereken hususlar
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                  <AlertTriangle size={24} className="text-yellow-500" />
                  <span>Önemli Uyarılar</span>
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    • <strong>Garanti belgesi:</strong> Garanti talebiniz için
                    mutlaka garanti belgenizi ve faturanızı saklayınız.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    • <strong>Montaj:</strong> Ürünlerin yetkilendirilmiş
                    teknisyenler tarafından montaj edilmesi garanti şartıdır.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    • <strong>Kullanım talimatları:</strong> Ürün kullanım
                    kılavuzundaki talimatlar dışında kullanım garanti kapsamını
                    geçersiz kılar.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    • <strong>Onarım girişimi:</strong> Yetkisiz kişilerce
                    yapılan onarım denemeleri garanti kapsamını sonlandırır.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                  <Globe size={24} className="text-blue-500" />
                  <span>Dünya Çapında Hizmet</span>
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    • <strong>28 ülke:</strong> Ürünlerimiz ihraç ettiğimiz 28
                    ülkede garanti kapsamındadır.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    • <strong>Yerel destek:</strong> Ana pazarlarımızda yerel
                    teknik destek ağımız mevcuttur.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    • <strong>Hızlı çözüm:</strong> Yurtdışı garanti talepleri
                    için özel hızlı çözüm süreçlerimiz bulunmaktadır.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    • <strong>Kalite güvencesi:</strong> Tüm ürünlerimiz aynı
                    kalite standartlarında üretilmektedir.
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
