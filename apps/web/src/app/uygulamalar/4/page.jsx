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
  Check,
  X,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const meta = () => [
  { title: "Kayseri Pleksi Korkuluk Montajı - Walmco" },
  { name: "description", content: "Kayseri'de gerçekleştirilen pleksi korkuluk montajı projesinin görselleri ve detayları." },
  { name: "robots", content: "index, follow" },
];

export default function KayseriUygulamaPage() {
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
    "https://walmco.com/uygulamalar/pleksi%20korkuluk%20%C3%BCretim.png",
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

  const features = [
    { title: "Şeffaf Estetik", description: "Modern mimariye uyumlu şeffaf görünüm" },
    { title: "Güvenli Yapı", description: "Dayanıklı pleksi ve profil kombinasyonu" },
    { title: "Hızlı Montaj", description: "Yerinde hızlı kurulum ve temiz işçilik" },
  ];

  const specifications = [
    { label: "Konum", value: "Kayseri, Türkiye" },
    { label: "Yıl", value: "2023" },
    { label: "Sertifika", value: "CE Sertifikalı" },
  ];

  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proje Hakkında</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kayseri'de gerçekleştirilen pleksi korkuluk montajı projesi. Şeffaf görünüm ve sağlam yapı
                ile modern bir çözüm sunar.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <span className="text-[#b91c1c] font-bold text-lg">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{f.title}</h4>
                    <p className="text-gray-600">{f.description}</p>
                  </div>
                </div>
              ))}
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
      case "gallery":
        return (
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Proje Galerisi</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, i) => (
                <img key={i} src={src} alt={`Kayseri pleksi korkuluk ${i + 1}`} className="w-full h-40 object-cover rounded-lg" />
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
            <span className="text-gray-900 font-medium">Kayseri Pleksi Korkuluk Montajı</span>
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
                  alt="Kayseri pleksi korkuluk"
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
                    <img src={src} alt={`Kayseri pleksi korkuluk ${i + 1}`} className="w-full h-16 object-cover hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-100 text-[#b91c1c] rounded-full text-sm font-semibold">
                <Grid3X3 size={16} />
                <span>Bahçe Uygulamaları</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Kayseri Pleksi Korkuluk Montajı</h1>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2"><MapPin size={18} /><span>Kayseri, Türkiye</span></div>
                <div className="flex items-center space-x-2"><Calendar size={18} /><span>2023</span></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Lüks projelerde sınırlandırma ve güvenlik için şık ve dayanıklı pleksi korkuluk çözümü.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Kompozit Panel", "Galvaniz Profil", "5 Yıl Garanti"].map((t, i) => (
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
          <button
            aria-label="Kapat"
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full"
            onClick={closeLightbox}
          >
            <X className="text-white" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <button
              className="px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white inline-flex items-center gap-2"
              onClick={() => setZoom((z) => Math.max(1, parseFloat((z - 0.1).toFixed(2))))}
            >
              <ZoomOut size={18} /> Uzaklaştır
            </button>
            <div className="px-3 py-2 bg-white/10 rounded-lg text-white">{Math.round(zoom * 100)}%</div>
            <button
              className="px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white inline-flex items-center gap-2"
              onClick={() => setZoom((z) => Math.min(5, parseFloat((z + 0.1).toFixed(2))))}
            >
              <ZoomIn size={18} /> Yakınlaştır
            </button>
          </div>

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

          <div
            className="max-w-[90vw] max-h-[85vh] overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={startDrag}
          >
            <img
              src={images[selectedImage]}
              alt="Kayseri pleksi korkuluk - büyük"
              style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`, maxWidth: '90vw', maxHeight: '85vh' }}
              className="select-none pointer-events-none object-contain"
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

      <Footer />
    </div>
  );
}


