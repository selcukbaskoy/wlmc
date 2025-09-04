import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  Grid3X3,
  MapPin,
  Calendar,
  Download,
  Share2,
  Heart,
  Eye,
  Check,
  Award,
  Shield,
  Zap,
  X,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const meta = () => [
  { title: "İstanbul Sarıyer Villa Korkuluk Projesi - Walmco" },
  { name: "description", content: "İstanbul Sarıyer'de villa iç merdivenlerinde uygulanan şeffaf pleksi korkuluk sistemi. Fiyat, montaj, dayanıklılık ve tasarım detayları ile SEO uyumlu açıklama." },
  { name: "keywords", content: "Sarıyer pleksi korkuluk, villa korkuluk projesi, pleksi korkuluk montajı, pleksi korkuluk fiyatları, şeffaf korkuluk, iç merdiven korkuluk" },
  { name: "robots", content: "index, follow" },
  { property: "og:title", content: "İstanbul Sarıyer Villa Korkuluk Projesi" },
  { property: "og:description", content: "Sarıyer'de modern villa projesinde şeffaf pleksi korkuluk uygulaması. Güvenlik, estetik ve uzun ömürlü kullanım bir arada." },
  { property: "og:type", content: "website" },
];

export default function SariyerProjePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [drag, setDrag] = useState({ isDown: false, startX: 0, startY: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    "https://walmco.com/uygulamalar/pleksi%20korkuluk%20montaj%C4%B1.png",
    "https://walmco.com/uygulamalar/pleksi%20korkuluk%20ne%20kadar.jpeg",
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

  const features = [
    { icon: Eye, title: "Şeffaf Estetik", description: "Villa mimarisine uyumlu şeffaf görünüm ve ferahlık" },
    { icon: Shield, title: "Güvenli Yapı", description: "CE sertifikalı, dayanıklı pleksi ve alüminyum profil" },
    { icon: Zap, title: "Hızlı Montaj", description: "Yerinde hızlı kurulum ve temiz işçilik" },
    { icon: Award, title: "Uzun Ömür", description: "Çizilme ve darbelere dayanıklı malzeme yapısı" },
  ];

  const specifications = [
    { label: "Pleksi Kalınlığı", value: "10mm Şeffaf Pleksi" },
    { label: "Profil", value: "Mat Alüminyum" },
    { label: "Kullanım", value: "İç Mekân (Merdiven)" },
    { label: "Sertifika", value: "CE Sertifikalı" },
    { label: "Garanti", value: "2 Yıl" },
  ];

  const applicationAreas = [
    "Villa iç merdiven sistemleri",
    "Özel konut projeleri",
    "Modern iç mimari uygulamaları",
  ];

  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proje Hakkında</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                İstanbul Sarıyer'deki modern villa projesinde iç merdivenlerde şeffaf pleksi korkuluk sistemi uygulanmıştır. Pleksi panel ve alüminyum profil kombinasyonu; güvenlik, estetik ve uzun ömürlü kullanım sunar.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <Icon size={24} className="text-[#b91c1c]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{f.title}</h4>
                      <p className="text-gray-600">{f.description}</p>
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
            <h4 className="text-xl font-bold text-gray-900 mb-4">Teknik Özellikler</h4>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {specifications.map((s, i) => (
                <div key={i} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
                  <span className="font-semibold text-gray-700">{s.label}</span>
                  <span className="text-gray-900 font-medium">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "applications":
        return (
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Uygulama Alanları</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applicationAreas.map((a, i) => (
                <div key={i} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Check size={20} className="text-[#b91c1c]" />
                  <span className="text-gray-700">{a}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "gallery":
        return (
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Proje Galerisi</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, i) => (
                <img key={i} src={src} alt={`Sarıyer pleksi korkuluk ${i + 1}`} className="w-full h-40 object-cover rounded-lg" />
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

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-[#b91c1c]">Ana Sayfa</a>
            <span>/</span>
            <a href="/uygulamalar" className="hover:text-[#b91c1c]">Uygulamalar</a>
            <span>/</span>
            <span className="text-gray-900 font-medium">İstanbul Sarıyer Villa Korkuluk Projesi</span>
          </nav>
        </div>
      </div>

      <section className="bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={images[selectedImage]}
                  alt="Sarıyer villa pleksi korkuluk"
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
              <div className="grid grid-cols-5 gap-2">
                {images.map((src, i) => (
                  <div
                    key={i}
                    className={`cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${selectedImage === i ? "border-[#b91c1c]" : "border-transparent"}`}
                    onClick={() => setSelectedImage(i)}
                  >
                    <img src={src} alt={`Sarıyer pleksi korkuluk ${i + 1}`} className="w-full h-16 object-cover hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-100 text-[#b91c1c] rounded-full text-sm font-semibold">
                <Grid3X3 size={16} />
                <span>Merdiven Uygulamaları</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">İstanbul Sarıyer Villa Korkuluk Projesi</h1>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2"><MapPin size={18} /><span>Sarıyer, İstanbul</span></div>
                <div className="flex items-center space-x-2"><Calendar size={18} /><span>2024</span></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Şeffaf pleksi malzeme ile modern villa iç merdivenlerinde kusursuz estetik ve güvenlik. Montajı hızlı, bakımı kolay ve uzun ömürlü kullanım sağlar.
              </p>
              <div className="flex flex-wrap gap-2">
                {["10mm Pleksi", "Mat Alüminyum", "CE Sertifikalı", "Modern Tasarım"].map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">{t}</span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href="/kataloglar" className="flex-1 bg-[#b91c1c] hover:bg-[#991b1b] text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
                  <Download size={18} />
                  <span>Katalog İndir</span>
                </a>
                <a href="/iletisim" className="px-6 py-3 border border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c] hover:text-white rounded-xl font-semibold transition-colors">Teklif Al</a>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="text-center"><div className="text-2xl font-bold text-[#b91c1c]">500+</div><div className="text-sm text-gray-600">Tamamlanan Proje</div></div>
                <div className="text-center"><div className="text-2xl font-bold text-[#b91c1c]">%100</div><div className="text-sm text-gray-600">Müşteri Memnuniyeti</div></div>
                <div className="text-center"><div className="text-2xl font-bold text-[#b91c1c]">15</div><div className="text-sm text-gray-600">Yıllık Deneyim</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onWheel={handleWheel}
          onMouseMove={onDrag}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
        >
          <button className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full" onClick={closeLightbox} aria-label="Kapat">
            <X className="text-white" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 text-white">
            <button className="px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg" onClick={() => setZoom((z) => Math.max(1, parseFloat((z - 0.1).toFixed(2))))}>-</button>
            <div className="px-3 py-2 bg-white/10 rounded-lg">{Math.round(zoom * 100)}%</div>
            <button className="px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg" onClick={() => setZoom((z) => Math.min(5, parseFloat((z + 0.1).toFixed(2))))}>+</button>
          </div>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white" onClick={() => setSelectedImage((i) => (i - 1 + images.length) % images.length)} aria-label="Önceki görsel">
            <ChevronLeft />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white" onClick={() => setSelectedImage((i) => (i + 1) % images.length)} aria-label="Sonraki görsel">
            <ChevronRight />
          </button>
          <div className="max-w-[90vw] max-h-[85vh] overflow-hidden cursor-grab active:cursor-grabbing" onMouseDown={startDrag}>
            <img
              src={images[selectedImage]}
              alt="Sarıyer villa pleksi korkuluk - büyük"
              style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})` }}
              className="select-none pointer-events-none"
              draggable={false}
            />
          </div>
        </div>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
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
          <div className="min-h-[350px]">{renderTab()}</div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#b91c1c] to-[#991b1b] text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Projeniz İçin Teklif Alın</h2>
          <p className="text-xl mb-8 opacity-90">Sarıyer'deki örnek projemiz gibi şeffaf pleksi korkuluk çözümleri için bizimle iletişime geçin.</p>
          <a href="/iletisim" className="px-8 py-4 bg-white text-[#b91c1c] rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">Teklif Al</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}


