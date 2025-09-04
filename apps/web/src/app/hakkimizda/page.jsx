import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import About from "../../components/About";
import Footer from "../../components/Footer";
import {
  Building2,
  Users,
  Award,
  Target,
  Calendar,
  MapPin,
  CheckCircle,
  Lightbulb,
  Heart,
} from "lucide-react";

export const meta = () => [
  { title: "Hakkımızda - WALMCO Pleksi Korkuluk Sistemleri | Türkiye'nin Lider Markası" },
  { name: "description", content: "WALMCO hakkında detaylı bilgi. 2021'den beri Türkiye'de faaliyet gösteren, 28 ülkeye ihracat yapan pleksi korkuluk ve alüminyum profil üreticisi. Misyon, vizyon ve değerlerimiz." },
];

export default function HakkimizdaPage() {
  const { t } = useTranslation();
  
  useEffect(() => {
    // sayfa içi yan etkiler burada kalabilir (SEO artık SSR)
  }, []);

  const companyValues = [
    {
      icon: CheckCircle,
      title: t("aboutPage.values.quality"),
      description: t("aboutPage.values.qualityDesc"),
    },
    {
      icon: Lightbulb,
      title: t("aboutPage.values.innovation"),
      description: t("aboutPage.values.innovationDesc"),
    },
    {
      icon: Heart,
      title: t("aboutPage.values.satisfaction"),
      description: t("aboutPage.values.satisfactionDesc"),
    },
    {
      icon: Award,
      title: t("aboutPage.values.reliability"),
      description: t("aboutPage.values.reliabilityDesc"),
    },
    {
      icon: Building2,
      title: t("aboutPage.values.environment"),
      description: t("aboutPage.values.environmentDesc"),
    },
    {
      icon: Users,
      title: t("aboutPage.values.people"),
      description: t("aboutPage.values.peopleDesc"),
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
        <section className="relative bg-gradient-to-r from-[#b91c1c] to-[#991b1b] text-white py-20 px-6">
          <div className="absolute inset-0 bg-black/20" />
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-6">
                <Building2 size={20} />
                <span className="font-semibold">{t("nav.about")}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                Walmco'yu
                <span className="block">Tanıyın</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-8">
                Türkiye'nin Pleksi Korkuluk, Pleksi Mobilya ürünleri ve Pleksi Aksesuar ürün gruplarında sektördeki öncü marka olarak,
                <span className="text-yellow-300"> kalite ve yenilikçi bir araya getiren çözümler sunuyoruz.</span>
              </p>

              <div className="max-w-4xl mx-auto space-y-6 text-left">
                <p className="text-lg leading-relaxed opacity-90">
                  Walmco, 2021 yılında İstanbul'da, Türkiye'nin yerli üretim gücünü global pazarlarda temsil etme vizyonuyla kurulmuştur. Kurucularının sektördeki deneyimi ve teknolojik altyapı hedefiyle yola çıkan firma, özellikle pleksi (PMMA) ve alüminyum korkuluk sistemleri üretiminde uzmanlaşmıştır.
                </p>

                <p className="text-lg leading-relaxed opacity-90">
                  Şirketin temel amacı; estetik, güvenli ve sürdürülebilir yapı çözümleri sunan ürünleri, hem yurtiçi projelere hem de dünya genelindeki müşterilere ulaştırmaktır. Kısa sürede ihracat kabiliyeti kazanan Walmco, bugün 28 ülkeye aktif şekilde ürün göndererek Türk mühendisliği ve tasarımını global mimari projelere taşımaktadır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("aboutPage.valuesSection.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("aboutPage.valuesSection.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-[#b91c1c] rounded-xl flex items-center justify-center mb-6">
                      <IconComponent
                        size={24}
                        className="text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main About Section */}
        <About />

        <Footer />
      </div>
    </>
  );
}
