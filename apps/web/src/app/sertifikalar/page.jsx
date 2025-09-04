import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FileText, Download, ExternalLink, Award, Eye, X } from "lucide-react";

export const meta = () => [
  { title: "Sertifikalar - Walmco Pleksi ve Alüminyum Sistemleri" },
  { name: "description", content: "Walmco'nun ISO ve uygunluk sertifikaları. PDF olarak görüntüleyin veya indirin." },
];

const certificates = [
  {
    id: 1,
    title: "ISO 9001:2015 Kalite Yönetim Sistemi",
    description: "Kalite yönetim sistemi standardına uygunluk sertifikası",
    category: "ISO Standartları",
    validUntil: "2026",
    href: "/sertifikalar/iso-9001-2015.pdf",
    badge: "Kalite Yönetimi",
    icon: Award,
  },
  {
    id: 2,
    title: "ISO 14001:2015 Çevre Yönetim Sistemi",
    description: "Çevre yönetim sistemi standardına uygunluk sertifikası",
    category: "ISO Standartları",
    validUntil: "2026",
    href: "/sertifikalar/iso-14001-2015.pdf",
    badge: "Çevre Yönetimi",
    icon: Award,
  },
  {
    id: 3,
    title: "ISO 45001:2018 İş Sağlığı ve Güvenliği",
    description: "İş sağlığı ve güvenliği yönetim sistemi sertifikası",
    category: "ISO Standartları",
    validUntil: "2026",
    href: "/sertifikalar/iso-45001-2018.pdf",
    badge: "İş Güvenliği",
    icon: Award,
  },
  {
    id: 4,
    title: "Uygunluk Onayı (CE)",
    description: "Avrupa Birliği uygunluk işareti sertifikası",
    category: "Uygunluk Belgeleri",
    validUntil: "Süresiz",
    href: "/sertifikalar/ce-uygunluk-onayi.pdf",
    badge: "CE Belgesi",
    icon: Award,
  },
  {
    id: 5,
    title: "Ek Sertifika",
    description: "Ürün ve hizmet kalitesi ek belgelendirmesi",
    category: "Ek Belgeler",
    validUntil: "2025",
    href: "/sertifikalar/ek-sertifika.pdf",
    badge: "Ek Belge",
    icon: FileText,
  },
];

export default function SertifikalarPage() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleViewCertificate = (certificate) => {
    window.open(certificate.href, '_blank');
  };

  const handleDownloadCertificate = (certificate) => {
    const link = document.createElement('a');
    link.href = certificate.href;
    link.download = `${certificate.title}.pdf`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#b91c1c] to-[#991b1b] text-white py-20 px-6">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-6">
              <Award size={20} />
              <span className="font-semibold">Sertifikalar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Kalite
              <span className="block">Sertifikalarımız</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              ISO ve uygunluk belgelerimizi görüntüleyebilir veya indirebilirsiniz.
              <span className="text-yellow-300"> Kalite standartlarımızı belgeleyen resmi dokümantasyonumuz.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate) => {
              const IconComponent = certificate.icon;
              return (
                <div key={certificate.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Certificate Preview Area */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#b91c1c]/5 to-[#991b1b]/10" />
                    <div className="relative z-10 text-center">
                      <IconComponent className="text-[#b91c1c] mx-auto mb-3" size={48} />
                      <div className="bg-[#b91c1c] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {certificate.badge}
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => handleViewCertificate(certificate)}
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                      >
                        <Eye size={16} />
                        Önizle
                      </button>
                    </div>
                  </div>
                  
                  {/* Certificate Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2 leading-tight">
                          {certificate.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {certificate.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Metadata */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {certificate.category}
                      </span>
                      <span>
                        Geçerli: {certificate.validUntil}
                      </span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleViewCertificate(certificate)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#b91c1c] text-white rounded-lg hover:bg-[#991b1b] transition-colors font-semibold"
                      >
                        <Eye size={16} />
                        Görüntüle
                      </button>
                      <button
                        onClick={() => handleDownloadCertificate(certificate)}
                        className="px-4 py-2 border border-[#b91c1c] text-[#b91c1c] rounded-lg hover:bg-[#b91c1c] hover:text-white transition-colors"
                        title="İndir"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


