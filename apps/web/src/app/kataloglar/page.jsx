import { useEffect, useState } from "react";
import { getImageUrl } from "../../utils/imageUtils";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FileText,
  Download,
  Eye,
  Search,
  Filter,
  Calendar,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";

export const meta = () => [
  { title: "Kataloglar - Walmco Pleksi Korkuluk Sistemleri" },
  { name: "description", content: "Walmco ürün katalogları, teknik çizimler, montaj kılavuzları ve ürün broşürlerini indirin. PDF formatında ücretsiz erişim." },
];

export default function KataloglarPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");


  const catalogs = [
    {
      id: 1,
      title: "Pleksi Katalog 2024",
      category: "Pleksi Sistemleri",
      description:
        "Tüm pleksi korkuluk sistemlerimizin detaylı tanıtımı, teknik özellikler ve uygulama örnekleri. Balkon, merdiven ve teras uygulamaları için kapsamlı rehber.",
      pages: 48,
      size: "18.5 MB",
      language: "Türkçe/İngilizce",
      date: "Aralık 2024",
      image:
        "https://ucarecdn.com/5309a376-93ef-463d-ad10-0482e5d78e30/-/format/auto/",
      url: "https://walmco.com/kataloglar/WALMCO%20PLEKS%C4%B0%20KATALOG.pdf",
      featured: true,
      downloads: 4250,
    },
    {
      id: 2,
      title: "Alüminyum Katalog 2024",
      category: "Alüminyum Sistemleri",
      description:
        "Korkuluk sistemleri için özel üretilmiş alüminyum profillerin detaylı teknik bilgileri, renk seçenekleri ve montaj kılavuzları.",
      pages: 36,
      size: "14.2 MB",
      language: "Türkçe/İngilizce",
      date: "Aralık 2024",
      image:
        "https://ucarecdn.com/f80331a7-23ea-47d6-90d2-c8cff0d4e336/-/format/auto/",
      url: "https://walmco.com/kataloglar/WALMCO%20AL%20CATALOGUE.pdf",
      featured: true,
      downloads: 3850,
    },
  ];

  const categories = ["Tümü", "Pleksi Sistemleri", "Alüminyum Sistemleri"];

  // Filter catalogs based on selected category
  const filteredCatalogs =
    selectedCategory === "Tümü"
      ? catalogs
      : catalogs.filter((catalog) => catalog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#b91c1c] to-[#991b1b] text-white py-20 px-6">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-6">
              <FileText size={20} />
              <span className="font-semibold">Dijital Kataloglar</span>
              <Sparkles size={16} className="animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Katalog
              <span className="block">Merkezi</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Tüm ürün kataloglarımız, teknik dokümantasyon ve montaj
              kılavuzları
              <span className="text-yellow-300"> tek tıkla indirilebilir</span>
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Katalog ara..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent outline-none"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center space-x-2 overflow-x-auto">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-[#b91c1c] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Catalogs */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <Star size={24} className="text-[#b91c1c]" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Öne Çıkan Kataloglar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {filteredCatalogs
              .filter((catalog) => catalog.featured)
              .map((catalog) => (
                <div
                  key={catalog.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 relative"
                >
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-bold">
                    Öne Çıkan
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img
                        src={getImageUrl(catalog.image)}
                        alt={catalog.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#b91c1c]/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="text-sm text-[#b91c1c] font-semibold mb-2">
                          {catalog.category}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#b91c1c] transition-colors">
                          {catalog.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {catalog.description}
                        </p>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-[#b91c1c]">
                              {catalog.pages}
                            </div>
                            <div className="text-xs text-gray-600">Sayfa</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-[#b91c1c]">
                              {catalog.size}
                            </div>
                            <div className="text-xs text-gray-600">Boyut</div>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <a
                          href={catalog.url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-[#b91c1c] hover:bg-[#991b1b] text-white rounded-xl font-semibold transition-colors duration-200 group"
                        >
                          <Download size={18} />
                          <span>İndir</span>
                        </a>
                        <a
                          href={catalog.url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors duration-200"
                        >
                          <Eye size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Catalogs */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Tüm Kataloglar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogs.map((catalog) => (
              <div
                key={catalog.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getImageUrl(catalog.image)}
                    alt={catalog.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#b91c1c] rounded-full">
                    <span className="text-white text-xs font-semibold">
                      {catalog.category}
                    </span>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30">
                      <Eye size={14} className="text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30">
                      <Download size={14} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#b91c1c] transition-colors line-clamp-2">
                    {catalog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {catalog.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <span>{catalog.pages} sayfa</span>
                      <span>{catalog.size}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{catalog.date}</span>
                    </div>
                  </div>

                  {/* Language and Downloads */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {catalog.language}
                    </span>
                    <span className="text-xs text-gray-500">
                      {catalog.downloads.toLocaleString()} indirme
                    </span>
                  </div>

                  {/* Action Button */}
                  <a
                    href={catalog.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[#b91c1c] hover:bg-[#991b1b] text-white rounded-xl font-semibold transition-colors duration-200 group"
                  >
                    <Download size={16} />
                    <span>Katalog İndir</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Katalog İstatistikleri
            </h2>
            <p className="text-xl text-gray-600">
              Kataloglarımız dünya çapında tercih ediliyor
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "12,000+", label: "Toplam İndirme" },
              { number: "6", label: "Aktif Katalog" },
              { number: "15", label: "Dil Seçeneği" },
              { number: "24/7", label: "Erişim" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#b91c1c] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b91c1c] to-[#991b1b] text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Özel Katalog Talebiniz mi Var?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Projenize özel katalog ve teknik dokümantasyon hazırlayabiliriz
          </p>
          <a
            href="/iletisim"
            className="px-8 py-4 bg-white text-[#b91c1c] rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Özel Katalog Talebi</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
