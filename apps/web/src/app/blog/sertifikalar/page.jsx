"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "WALMCO Sertifikalarımız | ISO 9001, 14001, 45001, 10002",
  description: "WALMCO'nun kalite, çevre, İSG ve müşteri memnuniyeti sertifikalarıyla güvenli ve sürdürülebilir üretim yaklaşımını keşfedin.",
  keywords: "alüminyum profil üretimi, korkuluk sistemleri, ISO 9001, ISO 14001, ISO 45001, ISO 10002, uygunluk sertifikası, CE, cam korkuluk, küpeşte",
  openGraph: {
    title: "WALMCO Sertifikalarımız | ISO 9001, 14001, 45001, 10002",
    description: "WALMCO'nun kalite, çevre, İSG ve müşteri memnuniyeti sertifikalarıyla güvenli ve sürdürülebilir üretim yaklaşımını keşfedin.",
    type: "article",
    url: "https://walmco.com/blog/sertifikalar",
  },
  twitter: {
    card: "summary_large_image",
    title: "WALMCO Sertifikalarımız | ISO 9001, 14001, 45001, 10002",
    description: "WALMCO'nun kalite, çevre, İSG ve müşteri memnuniyeti sertifikalarıyla güvenli ve sürdürülebilir üretim yaklaşımını keşfedin.",
  },
};

export default function SertifikalarBlog() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Sertifikalar hangi ürünleri kapsıyor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Belge kapsamlarında belirtilen alüminyum ürün grupları ile korkuluk/küpeşte sistemleri kapsanır. Ürün bazlı teknik dosyalar talep üzerine paylaşılır."
                }
              },
              {
                "@type": "Question",
                "name": "Belge geçerlilik tarihleri nelerdir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Geçerlilik ve yayın tarihleri sertifikaların üzerinde yer alır; web sitemizdeki sürümler periyodik olarak güncellenir."
                }
              },
              {
                "@type": "Question",
                "name": "Sertifikalar üretimi nasıl etkiler?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Planlama, üretim, teslimat ve satış sonrası süreçler ISO standartlarına göre yönetilir; performans düzenli ölçülür ve iyileştirilir."
                }
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              WALMCO'da Kalite, Güvenlik ve Sürdürülebilirlik
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Sertifikalarımızın Müşterilerimize Anlamı
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                ISO 9001:2015
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                ISO 14001:2015
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                ISO 45001:2018
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                ISO 10002:2018
              </span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              İmalatını yaptığımız <strong>akrilik çubuk, pleksi korkuluk sistemleri, pleksi mobilya ürünler, pleksi aksesuar sistemleri</strong> için süreçlerimizi uluslararası standartlarla güvence altına alıyoruz.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aşağıda yer alan sertifikalarımız, ürün ve hizmetlerimizin <strong>kalitesini, güvenliğini ve çevresel/iş sağlığı performansını</strong> üçüncü taraf kuruluşlar önünde belgelediğimizi gösterir.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-lg shadow-md mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 px-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "overview"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Genel Bakış
                </button>
                <button
                  onClick={() => setActiveTab("certificates")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "certificates"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Sertifikalar
                </button>
                <button
                  onClick={() => setActiveTab("benefits")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "benefits"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Faydalar
                </button>
                <button
                  onClick={() => setActiveTab("faq")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "faq"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  SSS
                </button>
              </nav>
            </div>

            <div className="p-8">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Neden Önemli?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Riskin Azaltılması</h3>
                      <p className="text-blue-800">Standartlar, ürün güvenliği ve süreç risklerini düşürür.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-2">Projelerde Kolaylık</h3>
                      <p className="text-green-800">Şartnamelere uyum ve teknik dokümantasyon hazırdır.</p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-yellow-900 mb-2">İzlenebilirlik</h3>
                      <p className="text-yellow-800">Parti/lot takibi ve kayıtlı üretim.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Sürdürülebilirlik</h3>
                      <p className="text-purple-800">Enerji/verimlilik ve atık yönetimi performansı.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "certificates" && (
                <div className="space-y-8">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">1) Uygunluk Sertifikası (Certificate of Conformity)</h3>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Kapsam:</strong> Plexiglas Korkuluk, Alüminyum Cam Korkuluk (Glass Balustrade), Alüminyum Küpeşte Sistemleri</p>
                      <p><strong>Dayanak:</strong> 2001/95/EC Genel Ürün Güvenliği Direktifi ve ilgili ulusal/Avrupa standartları (ör. TS EN 1627)</p>
                      <p><strong>Ne İfade Eder?</strong> Ürünlerimizin tasarım ve üretiminde güvenlik gereklerini karşıladığını, bağımsız bir kuruluş tarafından doğrulandığını gösterir.</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">2) ISO 9001:2015 – Kalite Yönetim Sistemi</h3>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Belgelendiren Kuruluş:</strong> IQR (IAS akreditasyonlu)</p>
                      <p><strong>Kapsam:</strong> Alüminyum bar, çubuk, tel ve profil; tüp, boru ve bağlantı parçaları imalatı</p>
                      <p><strong>Ne İfade Eder?</strong> Tasarımdan teslimata kadar tüm süreçlerde standartlaşma, risk temelli düşünme ve sürekli iyileştirme uygularız.</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">3) ISO 14001:2015 – Çevre Yönetim Sistemi</h3>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Belgelendiren Kuruluş:</strong> IQR (IAS akreditasyonlu)</p>
                      <p><strong>Ne İfade Eder?</strong> Üretim faaliyetlerimizin çevresel etkilerini tanımlar, ölçer ve azaltırız.</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">4) ISO 45001:2018 – İş Sağlığı ve Güvenliği</h3>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Belgelendiren Kuruluş:</strong> GCR CERT</p>
                      <p><strong>Ne İfade Eder?</strong> Tüm çalışanlarımız için risk değerlendirmesi, ergonomi, eğitim ve acil durum hazırlığı dahil proaktif İSG yönetimi.</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">5) ISO 10002:2018 – Müşteri Memnuniyeti</h3>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Belgelendiren Kuruluş:</strong> GCR CERT</p>
                      <p><strong>Ne İfade Eder?</strong> Müşteri geri bildirimlerini sistematik olarak toplar, analiz eder ve düzeltici/önleyici faaliyetlere dönüştürürüz.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "benefits" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Müşteriye Faydaları</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">Güvenlik ve Dayanıklılık</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Korkuluk ve küpeşte sistemlerinde güvenlik güvencesi</li>
                        <li>• Standartlara uygunluk sayesinde saha denetimlerinde kolaylık</li>
                        <li>• Ürün değişiklikleri/izlenebilirlik için düzenli kontrol</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">Kalite ve Teslimat</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Tutarlı kalite ve düşük hatalı ürün oranı</li>
                        <li>• Zamanında teslim ve süreç şeffaflığı</li>
                        <li>• Tedarik zincirinde güvenilir iş ortağı olma</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">Sürdürülebilirlik</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Sürdürülebilir tedarik zinciri</li>
                        <li>• Projelerde çevresel uygunluk gerekliliklerini karşılayan üretim</li>
                        <li>• Kaynakların verimli kullanımıyla maliyet ve risklerin azalması</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">İş Güvenliği</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Kesintisiz üretim ve iş sürekliliği</li>
                        <li>• Sahada güvenli montaj/uygulama kültürü</li>
                        <li>• Yasal uyum ve denetimlerde şeffaf kayıt</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "faq" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Bu sertifikalar hangi ürünleri kapsıyor?</h3>
                      <p className="text-gray-700">Belge üzerinde belirtilen kapsam dahilindeki alüminyum ürün grupları ile korkuluk/küpeşte sistemleri kapsanır. Ürün bazlı sorular için ek teknik dosyalar paylaşılabilir.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Belge geçerlilik tarihleri nelerdir?</h3>
                      <p className="text-gray-700">Her sertifikanın üzerinde yayın ve geçerlilik tarihleri yer alır. Web sitemizdeki sürümler periyodik olarak güncellenir.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Sertifikalar gerçek üretimi nasıl etkiler?</h3>
                      <p className="text-gray-700">Satın almadan montaja kadar tüm süreçlerimiz, ilgili standartlara göre planlanır, ölçülür ve raporlanır.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-blue-600 rounded-lg shadow-md p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Projelerinize En Uygun Çözümü Birlikte Planlayalım</h2>
            <p className="text-blue-100 mb-6">
              Teklif, teknik dosya veya güncel sertifika kopyası talebi için bizimle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                İletişime Geç
              </a>
              <a
                href="/teklif-al"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Teklif Al
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
      );
  }