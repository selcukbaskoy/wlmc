import { useState, useEffect } from 'react';
import { getImageUrl } from '../../utils/imageUtils';
import {
  Building2, 
  Home, 
  Store, 
  TreePine, 
  Building, 
  ShoppingBag,
  Grid3x3,
  List,
  Search,
  Filter,
  ArrowUpDown
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function UygulamalarPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [applications, setApplications] = useState([]);

  // Uygulama kategorileri
  const categories = [
    { id: 'all', name: 'Tümü', icon: Grid3x3, count: 0 },
    { id: 'balkon', name: 'Balkon Uygulamaları', icon: Building2, folder: 'Balkon Uygulamaları', count: 0 },
    { id: 'merdiven', name: 'Merdiven Uygulamaları', icon: ArrowUpDown, folder: 'Merdiven Uygulamaları', count: 0 },
    { id: 'teras', name: 'Teras Uygulamaları', icon: Home, folder: 'Teras Uygulamaları', count: 0 },
    { id: 'bahce', name: 'Bahçe Uygulamaları', icon: TreePine, folder: 'Bahçe Uygulamaları', count: 0 },
    { id: 'ofis', name: 'Ofis Uygulamaları', icon: Building, folder: 'Ofis Uygulamaları', count: 0 },
    { id: 'villa', name: 'Villa Uygulamaları', icon: Home, folder: 'Villa Uygulamaları', count: 0 },
    { id: 'avm', name: 'AVM ve İş Merkezi', icon: ShoppingBag, folder: 'AVM ve İş Merkezi', count: 0 }
  ];

  // Örnek uygulama verileri - Bu verileri dinamik olarak yükleyebilirsiniz
  const sampleApplications = [
    {
      id: 1,
      title: "Modern Balkon Korkuluğu",
      description: "Şeffaf pleksiglas ile modern balkon uygulaması. Minimal tasarım, maksimum görüş açısı.",
      category: 'balkon',
      image: "/urunler/Uygulamalar/Balkon Uygulamaları/sample1.jpg",
      year: "2024",
      location: "İstanbul",
      features: ["12mm Pleksi", "Alüminyum Profil", "CE Sertifikalı"]
    },
    {
      id: 2,
      title: "Ofis Binası İç Merdiven",
      description: "Profesyonel ofis binası için iç merdiven korkuluk uygulaması.",
      category: 'merdiven',
      image: "/urunler/Uygulamalar/Merdiven Uygulamaları/sample1.jpg",
      year: "2024",
      location: "Ankara",
      features: ["10mm Pleksi", "Mat Alüminyum", "Özel Tasarım"]
    },
    {
      id: 3,
      title: "Cafe Teras Korkuluğu",
      description: "Açık hava cafe terasları için estetik korkuluk çözümü.",
      category: 'teras',
      image: "/urunler/Uygulamalar/Teras Uygulamaları/sample1.jpg",
      year: "2023",
      location: "İzmir",
      features: ["8mm Pleksi", "Ahşap Detay", "Hava Dayanımı"]
    }
  ];

  useEffect(() => {
    // Gerçek uygulamada burada API'den veri çekersiniz
    setApplications(sampleApplications);
  }, []);

  // Filtrelenmiş uygulamalar
  const filteredApplications = applications.filter(app => {
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
    const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const ApplicationCard = ({ application }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={getImageUrl(application.image)}
          alt={application.title}
          productName={application.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-[#b91c1c] text-white px-3 py-1 rounded-full text-sm font-semibold">
          {application.year}
        </div>
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {application.location}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#b91c1c] transition-colors">
          {application.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {application.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {application.features.map((feature, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <button className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white py-2 px-4 rounded-lg transition-colors font-semibold">
          Detayları Görüntüle
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#b91c1c] to-[#991b1b] text-white py-20 px-6">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-6">
              <Building2 size={20} />
              <span className="font-semibold">Uygulama Örnekleri</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Gerçek
              <span className="block">Proje Örnekleri</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              WALMCO pleksiglas korkuluk sistemlerinin farklı mekan ve projelerdeki uygulama örneklerini keşfedin.
              <span className="text-yellow-300"> Her projede kalite ve estetik birleşiyor.</span>
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sol Sidebar - Kategoriler */}
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Kategoriler</h2>
              
              {/* Arama */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Uygulama ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent"
                />
              </div>

              {/* Kategori Listesi */}
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.id;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-left ${
                        isActive 
                          ? 'bg-[#b91c1c]/10 text-[#b91c1c] border border-[#b91c1c]/20' 
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium flex-1">{category.name}</span>
                      <span className="text-sm text-gray-500">
                        {category.id === 'all' 
                          ? applications.length 
                          : applications.filter(app => app.category === category.id).length
                        }
                      </span>
                    </button>
                  );
                })}
              </div>
                    </div>
                  </div>

          {/* Ana İçerik */}
          <div className="flex-1">
            {/* Üst Bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'all' 
                    ? 'Tüm Uygulamalar' 
                    : categories.find(c => c.id === selectedCategory)?.name
                  }
                </h2>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                  {filteredApplications.length} sonuç
                    </span>
                  </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-[#b91c1c]/10 text-[#b91c1c]' : 'text-gray-400'}`}
                >
                  <Grid3x3 size={20} />
                    </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-[#b91c1c]/10 text-[#b91c1c]' : 'text-gray-400'}`}
                >
                  <List size={20} />
                    </button>
                  </div>
                </div>

            {/* Uygulamalar Grid */}
            {filteredApplications.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredApplications.map((application) => (
                  <ApplicationCard key={application.id} application={application} />
                      ))}
                    </div>
            ) : (
              <div className="text-center py-12">
                <Filter className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sonuç Bulunamadı
                </h3>
                <p className="text-gray-600">
                  Seçtiğiniz kriterlere uygun uygulama bulunamadı. Filtreleri değiştirmeyi deneyin.
                </p>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}