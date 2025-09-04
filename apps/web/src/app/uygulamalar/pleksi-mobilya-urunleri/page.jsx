import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  ArrowLeft,
  Download,
  Share2,
  Heart,
  Star,
  Check,
  Award,
  Shield,
  Zap,
  Eye,
  Grid3X3,
  MapPin,
  Calendar,
  Users,
  Building,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const meta = () => [
  { title: "Pleksi Mobilya Ürünleri - Walmco Şeffaf Mobilya Çözümleri" },
  { name: "description", content: "Walmco pleksi mobilya ürünleri ile modern tasarımda şeffaf güzellik. Şeffaf mobilya ayakları, plexi mobilya sistemleri ve özel mobilya tasarımları." },
  { name: "keywords", content: "pleksi mobilya, şeffaf mobilya, plexi mobilya ayakları, şeffaf mobilya tasarımı, modern mobilya, pleksi mobilya ürünleri" },
  { name: "robots", content: "index, follow" },
  { property: "og:title", content: "Pleksi Mobilya Ürünleri - Walmco Şeffaf Mobilya Çözümleri" },
  { property: "og:description", content: "Walmco pleksi mobilya ürünleri ile modern tasarımda şeffaf güzellik. Şeffaf mobilya ayakları ve özel mobilya tasarımları." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://walmco.com/uygulamalar/pleksi-mobilya-urunleri" },
];

export default function PleksiMobilyaUrunleriPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [drag, setDrag] = useState({ isDown: false, startX: 0, startY: 0 });

  useEffect(() => {
    // Sayfa yüklendiğinde scroll to top
    window.scrollTo(0, 0);
  }, []);

  const images = [
    "https://walmco.com/uygulamalar/pleksi-mobilya-1.jpg",
    "https://walmco.com/uygulamalar/pleksi-mobilya-10.jpg",
    "https://walmco.com/uygulamalar/pleksi-mobilya-15.jpg",
    "https://walmco.com/uygulamalar/pleksi-mobilya-18.jpg",
    "https://walmco.com/uygulamalar/pleksi-mobilya-2.jpg",
    "https://walmco.com/uygulamalar/pleksi-mobilya-20.jpg",
    "https://walmco.com/uygulamalar/pleksi-mobilya-21.jpg",
    "https://walmco.com/uygulamalar/pleksi-mobilya-23.jpg",
    "https://walmco.com/uygulamalar/pleksi-mobilya-4.jpg",
    "https://walmco.com/uygulamalar/pleksi-mobilya-6.jpg",
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  // keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setSelectedImage((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setSelectedImage((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isLightboxOpen, images.length]);

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((z) => Math.min(5, Math.max(1, parseFloat((z + delta).toFixed(2)))));
  };

  const startDrag = (e) => {
    e.preventDefault();
    setDrag({ isDown: true, startX: e.clientX - offset.x, startY: e.clientY - offset.y });
  };
  const onDrag = (e) => {
    if (!drag.isDown) return;
    setOffset({ x: e.clientX - drag.startX, y: e.clientY - drag.startY });
  };
  const endDrag = () => setDrag((d) => ({ ...d, isDown: false }));

  const features = [
    {
      icon: Eye,
      title: "Şeffaf Görünüm",
      description: "Modern mobilya tasarımlarında şeffaf pleksi malzeme ile görsel derinlik ve estetik"
    },
    {
      icon: Shield,
      title: "Dayanıklı Yapı",
      description: "Yüksek kaliteli pleksi malzeme ile uzun ömürlü ve güvenli mobilya çözümleri"
    },
    {
      icon: Zap,
      title: "Kolay Montaj",
      description: "Pratik montaj sistemi ile hızlı kurulum ve esnek kullanım imkanı"
    },
    {
      icon: Award,
      title: "Premium Kalite",
      description: "CE sertifikalı malzemeler ve profesyonel üretim standartları"
    }
  ];

  const specifications = [
    { label: "Malzeme", value: "12mm Pleksi Panel" },
    { label: "Profil", value: "Alüminyum Sistem" },
    { label: "Renk", value: "Şeffaf / Renkli Seçenekler" },
    { label: "Sertifika", value: "CE Sertifikalı" },
    { label: "Garanti", value: "2 Yıl" },
    { label: "Kullanım", value: "İç Mekan" }
  ];

  const applications = [
    "Modern ev mobilyaları",
    "Ofis mobilya sistemleri",
    "Mağaza vitrin düzenlemeleri",
    "Restoran ve cafe mobilyaları",
    "Otel lobi ve odaları",
    "Sergi ve fuar standları"
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pleksi Mobilya Ürünleri Hakkında
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Walmco pleksi mobilya ürünleri, modern tasarım anlayışı ile şeffaf güzelliği bir araya getiren 
                yenilikçi çözümlerdir. Şeffaf pleksi malzeme kullanarak üretilen mobilya sistemleri, 
                hem estetik görünüm hem de işlevsellik sunar.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Özellikle şeffaf mobilya ayakları, plexi mobilya panel sistemleri ve özel tasarım mobilya 
                çözümlerinde uzmanlaşmış ekibimiz, her projeye özel çözümler üretir. 
                Modern ev, ofis ve ticari mekanlarda kullanıma uygun, dayanıklı ve şık mobilya sistemleri.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <Icon size={24} className="text-[#b91c1c]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case "specs":
        return (
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Teknik Özellikler
            </h4>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-700">{spec.label}</span>
                  <span className="text-gray-900 font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "applications":
        return (
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Uygulama Alanları
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applications.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <Check size={20} className="text-[#b91c1c]" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "gallery":
        return (
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Proje Galerisi
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`Pleksi Mobilya Ürünleri - ${index + 1}`}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-[#b91c1c]">Ana Sayfa</a>
            <span>/</span>
            <a href="/uygulamalar" className="hover:text-[#b91c1c]">Uygulamalar</a>
            <span>/</span>
            <span className="text-gray-900 font-medium">Pleksi Mobilya Ürünleri</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={images[selectedImage]}
                  alt="Pleksi Mobilya Ürünleri"
                  className="w-full h-96 object-cover cursor-zoom-in"
                  onClick={() => openLightbox(selectedImage)}
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors">
                    <Heart size={18} className="text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors">
                    <Share2 size={18} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-5 gap-2">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index ? "border-[#b91c1c]" : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`Pleksi Mobilya Ürünleri - ${index + 1}`}
                      className="w-full h-16 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Product Info */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-100 text-[#b91c1c] rounded-full text-sm font-semibold">
                <Grid3X3 size={16} />
                <span>Mobilya Uygulamaları</span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900">
                Pleksi Mobilya Ürünleri
              </h1>

              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin size={18} />
                  <span>İstanbul, Türkiye</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>2024</span>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Şeffaf pleksi malzeme ile modern mobilya tasarımlarında kusursuz estetik ve işlevsellik. 
                Şeffaf mobilya ayakları, plexi mobilya panel sistemleri ve özel tasarım çözümler.
              </p>

              {/* Features Tags */}
              <div className="flex flex-wrap gap-2">
                {["12mm Pleksi", "Alüminyum Profil", "CE Sertifikalı", "Modern Tasarım"].map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                                 <a
                   href="/kataloglar"
                   className="flex-1 bg-[#b91c1c] hover:bg-[#991b1b] text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                 >
                   <Download size={18} />
                   <span>Katalog İndir</span>
                 </a>
                                 <a
                   href="/iletisim"
                   className="px-6 py-3 border border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c] hover:text-white rounded-xl font-semibold transition-colors inline-flex items-center justify-center"
                 >
                   Teklif Al
                 </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#b91c1c]">500+</div>
                  <div className="text-sm text-gray-600">Tamamlanan Proje</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#b91c1c]">%100</div>
                  <div className="text-sm text-gray-600">Müşteri Memnuniyeti</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#b91c1c]">15</div>
                  <div className="text-sm text-gray-600">Yıllık Deneyim</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox with Zoom */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onWheel={handleWheel}
          onMouseMove={onDrag}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full"
            onClick={closeLightbox}
            aria-label="Kapat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 text-white">
            <button className="px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg" onClick={() => setZoom((z) => Math.max(1, parseFloat((z - 0.1).toFixed(2))))}>-
            </button>
            <div className="px-3 py-2 bg-white/10 rounded-lg">{Math.round(zoom * 100)}%</div>
            <button className="px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg" onClick={() => setZoom((z) => Math.min(5, parseFloat((z + 0.1).toFixed(2))))}>+
            </button>
          </div>

          {/* prev/next controls */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white"
            onClick={() => setSelectedImage((i) => (i - 1 + images.length) % images.length)}
            aria-label="Önceki görsel"
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white"
            onClick={() => setSelectedImage((i) => (i + 1) % images.length)}
            aria-label="Sonraki görsel"
          >
            <ChevronRight />
          </button>

          <div className="max-w-[90vw] max-h-[85vh] overflow-hidden cursor-grab active:cursor-grabbing" onMouseDown={startDrag}>
            <img
              src={images[selectedImage]}
              alt="Pleksi Mobilya Ürünleri - büyük"
              style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})` }}
              className="select-none pointer-events-none"
              draggable={false}
            />
          </div>
        </div>
      )}

      {/* Tabs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {[
                { id: "overview", label: "Genel Bakış" },
                { id: "specs", label: "Teknik Özellikler" },
                { id: "applications", label: "Uygulama Alanları" },
                { id: "gallery", label: "Galeri" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-[#b91c1c] text-[#b91c1c]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {renderTabContent()}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b91c1c] to-[#991b1b] text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pleksi Mobilya Projeniz İçin Teklif Alın
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Modern tasarım ve şeffaf güzellik için uzman ekibimizle iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="px-8 py-4 bg-white text-[#b91c1c] rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>Ücretsiz Teklif Al</span>
            </a>
            <a
              href="/urunler?category=pleksi-mobilya"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#b91c1c] transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>Ürünleri İncele</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
