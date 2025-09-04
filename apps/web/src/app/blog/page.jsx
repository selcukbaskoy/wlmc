import { useEffect } from "react";
import { getImageUrl } from "../../utils/imageUtils";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  BookOpen,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  TrendingUp,
  Sparkles,
  Eye,
  Heart,
  Share2,
} from "lucide-react";

export default function BlogPage() {
  useEffect(() => {
    document.title = "Blog - WALMCO Pleksi Korkuluk Sistemleri";

    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Pleksi korkuluk sistemleri, alüminyum profiller ve bahçe düzenleme hakkında güncel makaleler, montaj ipuçları ve sektörel gelişmeler.";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
  }, []);

  const blogPosts = [
    {
      id: 8,
      title: "WALMCO'da Kalite, Güvenlik ve Sürdürülebilirlik: Sertifikalarımızın Müşterilerimize Anlamı",
      category: "Şirket Tanıtımı",
      excerpt:
        "WALMCO'nun ISO 9001, 14001, 45001, 10002 sertifikaları ve uygunluk belgeleriyle güvenli ve sürdürülebilir üretim yaklaşımını keşfedin.",
      content:
        "İmalatını yaptığımız alüminyum çubuk, tel ve profil; tüp, boru ve bağlantı parçaları ile plexiglas/alimünyum korkuluk ve cam babalı küpeşte sistemleri için, süreçlerimizi uluslararası standartlarla güvence altına alıyoruz. Aşağıda yer alan sertifikalarımız, ürün ve hizmetlerimizin kalitesini, güvenliğini ve çevresel/iş sağlığı performansını üçüncü taraf kuruluşlar önünde belgelediğimizi gösterir...",
      author: "WALMCO Kalite Yönetimi",
      publishDate: "28 Ağustos 2025",
      readTime: "15 dk",
      image: "https://walmco.com/sertifikalar/gcr%20cert%20sertifika.jpg",
      tags: [
        "ISO 9001",
        "ISO 14001",
        "ISO 45001",
        "ISO 10002",
        "uygunluk sertifikası",
        "kalite yönetimi",
        "çevre yönetimi",
        "iş sağlığı",
        "müşteri memnuniyeti",
      ],
      featured: true,
      views: 0,
      likes: 0,
      slug: "sertifikalar",
    },
    {
      id: 7,
      title: "WALMCO Pleksi Korkuluk: Şeffaf, Dayanıklı ve Estetik Korkuluk Sistemleri",
      category: "Şirket Tanıtımı",
      excerpt:
        "WALMCO'nun yenilikçi üretim anlayışıyla geliştirilen pleksi korkuluk çözümlerini keşfedin. Şeffaf estetik, yüksek dayanım, hızlı montaj ve satış sonrası destek.",
      content:
        "WALMCO'da yenilikçi üretim anlayışıyla pleksi korkuluk ve alüminyum sistemler geliştiriyoruz. Bilgiye, güzel ahlaka ve yenilikçi ticarete dayanan büyüme modelimizle müşterilerimize güven veren çözümler üretiyoruz. Uzmanlık alanımız pleksi (akrilik) ve alüminyum sistemler. Tasarım, Ar-Ge ve üretimi aynı çatı altında toplayarak projenize özel çözümler geliştiriyoruz...",
      author: "WALMCO Kurucu Ortağı",
      publishDate: "26 Ağustos 2025",
      readTime: "12 dk",
      image: "https://walmco.com/blog/almyap%C4%B1%20r%C3%B6portaj.jpg",
      tags: [
        "walmco pleksi korkuluk",
        "pleksi korkuluk sistemleri",
        "akrilik korkuluk",
        "şeffaf korkuluk",
        "walmco üretim",
      ],
      featured: true,
      views: 0,
      likes: 0,
      slug: "walmco-pleksi-korkuluk",
    },

    {
      id: 1,
      title: "Pleksi Korkuluk Montaj Rehberi - Adım Adım Kurulum",
      category: "Montaj Rehberi",
      excerpt:
        "Pleksi korkuluk montajının tüm aşamalarını detaylı olarak anlatan kapsamlı rehberimiz. Plexi küpeşte ve pleksi dikme montajı için profesyonel ipuçları.",
      content:
        "Pleksi korkuluk montajı için gerekli malzemeler: pleksi dikme baba, pleksi topuz, alüminyum aksesuar ve montaj aparatları. Pleksi korkulukcu ekibimizin 15 yıllık deneyimi ile hazırladığımız bu rehberde, pleksi küpeşte montajının her aşamasını bulacaksınız. Pleksi dayanıklılık testleri, pleksi garanti şartları ve uzun ömürlü kullanım için bakım önerileri. Evime pleksi korkuluk yaptırmak istiyorum diyen müşterilerimiz için hazırladığımız kapsamlı kılavuz...",
      author: "WALMCO Teknik Ekip",
      publishDate: "15 Ağustos 2025",
      readTime: "8 dk",
      image:
        "https://ucarecdn.com/5309a376-93ef-463d-ad10-0482e5d78e30/-/format/auto/",
      tags: [
        "pleksi korkuluk montaj",
        "pleksi küpeşte",
        "pleksi dikme baba",
        "korkuluk kurulum",
      ],
      featured: true,
      views: 4250,
      likes: 287,
      slug: "pleksi-korkuluk-montaj-rehberi",
    },

    {
      id: 3,
      title: "Evime Pleksi Küpeşte Yaptırmak İstiyorum - Komple Rehber",
      category: "Ev Sahipleri İçin",
      excerpt:
        "Evime pleksi korkuluk yaptırmak istiyorum diyen ev sahipleri için kapsamlı rehber. Pleksi merdiven korkuluk montajından plexi küpeşte fiyatlarına kadar her detay.",
      content:
        "Evine camlı korkuluk veya pleksi merdiven korkuluğu yaptırmak isteyenler için adım adım süreç. Pleksi küpeşteci seçimi, pleksi korkulukcu referansları, evime küpeşte yaptırmak istiyorum başvuru süreci. Ucuz pleksi korkuluk seçenekleri, pleksi garanti şartları ve montaj sonrası bakım önerileri. İstanbul alüminyum aksesuar üreticisi WALMCO'nun ev projeleri deneyimi...",
      author: "Ev Projeleri Uzmanı",
      publishDate: "10 Ağustos 2025",
      readTime: "10 dk",
      image:
        "https://ucarecdn.com/3fddc0f5-97ce-4425-a887-0d4de3d30d0e/-/format/auto/",
      tags: [
        "evime korkuluk",
        "pleksi merdiven korkuluk",
        "plexi küpeşte",
        "ev korkuluk montaj",
      ],
      featured: true,
      views: 2670,
      likes: 145,
      slug: "evime-pleksi-kupeste-yaptirmak",
    },
    {
      id: 4,
      title: "Pleksi vs Plexi vs Fleksi - Hangi Yazım Doğru?",
      category: "Teknik Bilgiler",
      excerpt:
        "Pleksi korkuluk, plexi korkuluk, fleksi korkuluk yazımları arasındaki farklar. Pleksiglas, pleksiglass ve pileksi terimlerinin doğru kullanımı.",
      content:
        "Pleksi, plexi, fleksi, pleksiglas, pleksiglass ve pileksi yazımları arasındaki farklar ve doğru kullanım alanları. Türkçe'de pleksi korkuluk mu, plexi korkuluk mu denilmeli? Fleksi korkuluk terimi nereden geliyor? Pleksiglass küpeşte ile pleksiglas küpeşte arasındaki fark nedir? Sektörde 25 yıllık deneyimimizle, bu terimlerin doğru kullanımını ve hangi durumlarda hangi yazımın tercih edilmesi gerektiğini açıklıyoruz...",
      author: "Dil Uzmanı Dr. Elif Yılmaz",
      publishDate: "8 Ağustos 2025",
      readTime: "5 dk",
      image:
        "https://ucarecdn.com/147ae364-769b-4380-be34-36694fdb3dcb/-/format/auto/",
      tags: [
        "pleksi vs plexi",
        "fleksi korkuluk",
        "pleksiglas korkuluk",
        "terminoloji",
      ],
      featured: false,
      views: 1890,
      likes: 112,
      slug: "pleksi-plexi-fleksi-yazim-farklari",
    },
    {
      id: 5,
      title: "Paslanmaz ve Pirinç Korkuluk Sistemleri - Premium Seçenekler",
      category: "Premium Malzemeler",
      excerpt:
        "Paslanmaz korkuluk, pirinç küpeşte ve bakır korkuluk sistemlerinin özellikleri. Alüminyum pleksi korkuluk kombinasyonları ile lüks çözümler.",
      content:
        "Paslanmaz küpeşte ve pirinç korkuluk sistemlerinin avantajları. Paslanmaz pleksi korkuluk kombinasyonları, pirinç plexi küpeşte uygulamaları ve bakır pleksiglas korkuluk seçenekleri. Premium malzemelerle üretilen korkuluk sistemlerinin uzun ömür garantisi ve estetik üstünlükleri. Alüminyum kompozit ve alüminyum cephe sistemleri ile entegrasyon olanakları. Lüks villa ve özel projelerde tercih edilen çözümler...",
      author: "Premium Ürünler Uzmanı",
      publishDate: "6 Ağustos 2025",
      readTime: "7 dk",
      image:
        "https://ucarecdn.com/5309a376-93ef-463d-ad10-0482e5d78e30/-/format/auto/",
      tags: [
        "paslanmaz korkuluk",
        "pirinç küpeşte",
        "bakır korkuluk",
        "premium malzemeler",
      ],
      featured: false,
      views: 2450,
      likes: 156,
      slug: "paslanmaz-pirinc-korkuluk-sistemleri",
    },
    {
      id: 6,
      title: "İstanbul Pleksi Üretici Rehberi - Güvenilir Firma Seçimi",
      category: "Üretici Rehberi",
      excerpt:
        "İstanbul alüminyum aksesuar üreticisi ve Türkiye pleksi üreticisi firmalarının karşılaştırması. Pleksi ithalat vs yerli üretim avantajları.",
      content:
        "İstanbul pleksi üreticisi firmalar arasından doğru seçimi nasıl yapılır? Türkiye alüminyum üreticisi WALMCO'nun 28 ülkeye pleksi ihracat deneyimi. Pleksi ithalat vs yerli üretim karşılaştırması, pleksiglas ithalat maliyetleri ve plexi ithalat prosedürleri. Güvenilir pleksi üreticisi seçerken dikkat edilecek kriterler: CE sertifikası, pleksi garanti şartları, referans projeler ve müşteri memnuniyeti. Çekmeköy fabrika avantajları ve üretim kapasitesi bilgileri...",
      author: "Sektör Analisti",
      publishDate: "4 Ağustos 2025",
      readTime: "9 dk",
      image:
        "https://ucarecdn.com/f80331a7-23ea-47d6-90d2-c8cff0d4e336/-/format/auto/",
      tags: [
        "İstanbul pleksi üretici",
        "türkiye pleksi üreticisi",
        "pleksi ithalat",
        "güvenilir üretici",
      ],
      featured: false,
      views: 3120,
      likes: 189,
      slug: "istanbul-pleksi-uretici-rehberi",
    },
  ];

  const categories = [
    "Tümü",
    "Şirket Tanıtımı",
    "Montaj Rehberi",
    "Karşılaştırma",
    "Ev Sahipleri İçin",
    "Teknik Bilgiler",
    "Premium Malzemeler",
    "Üretici Rehberi",
  ];
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  const handleReadMore = (slug) => {
    // Navigate to individual blog post page
    window.location.href = `/blog/${slug}`;
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
              <BookOpen size={20} />
              <span className="font-semibold">Bilgi Paylaşımı</span>
              <Sparkles size={16} className="animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Blog &<span className="block">Makaleler</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Pleksi korkuluk dünyasındaki
              <span className="text-yellow-300"> güncel gelişmeler</span> ve
              uzman görüşleri
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="relative flex-1 max-w-md">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Makale ara..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent outline-none"
              />
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
                    index === 0
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

      {/* Featured Posts */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp size={24} className="text-[#b91c1c]" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Öne Çıkan Makaleler
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => handleReadMore(post.slug)}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={getImageUrl(post.image)}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-red-900/70 group-hover:via-red-800/40 group-hover:to-transparent transition-all duration-500" />

                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#b91c1c] rounded-full">
                    <span className="text-white text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 rounded-full">
                    <span className="text-white text-xs font-bold">
                      Öne Çıkan
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-white/80 text-sm">
                      <div className="flex items-center space-x-1">
                        <Eye size={14} />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart size={14} />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Hover overlay with "İçeriği Oku" text */}
                    <div className="absolute inset-0 bg-red-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <BookOpen size={48} className="mx-auto mb-4" />
                        <h4 className="text-2xl font-bold mb-2">İçeriği Oku</h4>
                        <p className="text-lg opacity-90">Makaleyi görüntülemek için tıklayın</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{post.publishDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2 px-4 py-2 bg-[#b91c1c] text-white rounded-lg font-semibold">
                      <span>Devamını Oku</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Tüm Makaleler
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => handleReadMore(post.slug)}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getImageUrl(post.image)}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-red-900/70 group-hover:via-red-800/40 group-hover:to-transparent transition-all duration-500" />

                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#b91c1c] rounded-full">
                    <span className="text-white text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/80 text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye size={12} />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart size={12} />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Hover overlay with "İçeriği Oku" text */}
                  <div className="absolute inset-0 bg-red-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <BookOpen size={32} className="mx-auto mb-3" />
                      <h4 className="text-xl font-bold mb-2">İçeriği Oku</h4>
                      <p className="text-sm opacity-90">Makaleyi görüntülemek için tıklayın</p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#b91c1c] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User size={12} />
                      <span>{post.author.split(" ")[0]}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{post.publishDate}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[#b91c1c] text-white rounded-xl font-semibold">
                    <BookOpen size={16} />
                    <span>Makaleyi Oku</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-gradient-to-r from-[#b91c1c] to-[#991b1b] rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Blog Güncellemelerini Kaçırmayın
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Yeni makalelerimizden haberdar olmak için e-posta listemize
              katılın
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full px-4 py-3 rounded-xl text-gray-800 placeholder-gray-400 outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="w-full md:w-auto px-6 py-3 bg-white text-[#b91c1c] rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Blog İstatistikleri
            </h2>
            <p className="text-xl text-gray-600">
              İçeriklerimiz binlerce kişiye ulaşıyor
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "6", label: "Yayınlanmış Makale", icon: BookOpen },
              { number: "25K+", label: "Toplam Okuma", icon: Eye },
              { number: "1.2K+", label: "Blog Abonesi", icon: Heart },
              { number: "6", label: "Uzman Yazar", icon: User },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-[#b91c1c] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
