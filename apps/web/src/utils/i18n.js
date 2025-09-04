import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Dil dosyaları
const resources = {
  tr: {
    translation: {
      // Header navigation
      "nav.home": "Ana Sayfa",
      "nav.about": "Hakkımızda", 
      "nav.products": "Ürünler",
      "nav.applications": "Uygulamalar",
      "nav.catalogs": "Kataloglar",
      "nav.blog": "Blog",
      "nav.contact": "İletişim",
      
      // Language switcher
      "language.turkish": "Türkçe",
      "language.english": "English",
      
      // Hero section
      "hero.title": "Pleksi Korkuluk Sistemleri",
      "hero.subtitle": "Modern Mimariye Uygun Premium Kalite",
      "hero.description": "Şeffaf cam görünümü ile modern mimariyle uyumlu, dayanıklı pleksi korkuluk sistemleri. 5 yıl garanti ile güvenle tercih edin.",
      "hero.viewProducts": "Ürünleri İncele",
      "hero.freeQuote": "Ücretsiz Keşif",
      "hero.yearsBrand": "Uzman Marka",
      "hero.yearsGuarantee": "Yıl Garanti",
      "hero.projectsCompleted": "Proje Tamamlandı",
      
      // Main products section
      "products.catalog": "Ürün Kataloğu",
      "products.premiumSeries": "Premium Ürün Serimiz",
      "products.description": "CE Sertifikalı , Yüksek kaliteli Pleksi Korkuluk,Pleksi Mobilya Ürünleri,Pleksi Aksesuarları Keşfedin . Her ihtiyaca uygun,kaliteli çözümler sunuyoruz.",
      "products.searchPlaceholder": "Ürün kodu veya model ara... (örn: 2866, Dubai, 2701)",
      "products.search": "Ara",
      "products.allProducts": "Tüm Ürünler",
      "products.viewDetails": "Detayları Gör",
      "products.getQuote": "Teklif Al",
      "products.getFreeQuote": "Ücretsiz Teklif Al",
      
      // Features section
      "features.whyChoose": "Neden WALMCO?",
      "features.advantages": "Avantajlarımız",
      "features.premiumQuality": "Premium Kalite",
      "features.premiumQualityDesc": "Yüksek kaliteli malzemelerle üretilen dayanıklı ürünler",
      "features.fiveYearWarranty": "5 Yıl Garanti",
      "features.fiveYearWarrantyDesc": "Uzun dönem güvence ile huzurlu kullanım",
      "features.internationalExport": "28 Ülkeye İhracat",
      "features.internationalExportDesc": "Dünya standardında kalite ve güvenilirlik",
      "features.expertTeam": "Uzman Ekip",
      "features.expertTeamDesc": "Alanında deneyimli profesyonel kadro",
      "features.customDesign": "Özel Tasarım",
      "features.customDesignDesc": "Projenize özel tasarım ve üretim çözümleri",
      "features.fastDelivery": "Hızlı Teslimat",
      "features.fastDeliveryDesc": "Zamanında teslimat garantisi",
      
      // Footer
      "footer.company": "Şirket",
      "footer.aboutUs": "Hakkımızda",
      "footer.ourStory": "Hikayemiz",
      "footer.certificates": "Sertifikalar", 
      "footer.career": "Kariyer",
      "footer.products": "Ürünler",
      "footer.plexiRailings": "Pleksi Korkuluklar",
      "footer.aluminumProfiles": "Alüminyum Profiller",
      "footer.accessories": "Aksesuarlar",
      "footer.projects": "Projeler",
      "footer.support": "Destek",
      "footer.contact": "İletişim",
      "footer.technicalSupport": "Teknik Destek",
      "footer.installationGuide": "Montaj Kılavuzu",
      "footer.faq": "Sık Sorulan Sorular",
      "footer.follow": "Takip Edin",
      "footer.rights": "Tüm hakları saklıdır.",
      "footer.privacyPolicy": "Gizlilik Politikası",
      "footer.termsOfService": "Kullanım Şartları",
      
      // Common
      "common.loading": "Yükleniyor...",
      "common.error": "Hata oluştu",
      "common.success": "Başarılı",
      "common.close": "Kapat",
      "common.save": "Kaydet",
      "common.cancel": "İptal",
      "common.continue": "Devam Et",
      "common.back": "Geri",
      "common.next": "İleri",
      "common.previous": "Önceki",
      "common.readMore": "Devamını Oku",
      "common.learnMore": "Daha Fazla Bilgi",
      
      // Product categories
      "category.plexiBabas": "Pleksi Babalar",
      "category.plexiPosts": "Pleksi Dikmeler", 
      "category.plexiDiamond": "Pleksi Diamond Seri",
      "category.plexiFurniture": "Pleksi Mobilya Ayakları",
      "category.plexiAccessories": "Pleksi Aksesuarlar",
      
      // Product descriptions
      "product.transparentDurable": "Şeffaf ve dayanıklı pleksi baba sistemleri",
      "product.modernDesign": "Modern tasarım pleksi dikme çözümleri",
      "product.premiumDiamond": "Premium pleksi diamond seri ürünleri",
      "product.transparentFurniture": "Şeffaf mobilya ayak sistemleri",
      "product.plexiAccessories": "Pleksi Aksesuarlar",
      
      // Additional hero content
      "hero.furniture.title": "Pleksi Mobilya Ürünleri",
      "hero.furniture.subtitle": "Modern Mobilya Tasarımı",
      "hero.furniture.description": "Şeffaf ve dayanıklı pleksi malzemeden üretilmiş modern mobilya ürünleri. Özel tasarım ve kaliteli üretim.",
      "hero.custom.title": "Özel Tasarım Çözümler",
      "hero.custom.subtitle": "Müşteri İhtiyaçlarına Özel",
      "hero.custom.description": "Projelerinize özel tasarım ve üretim hizmeti. Ücretsiz keşif ve teknik destek ile projelerinizi hayata geçirin.",
      "hero.customDesignBadge": "Özel Tasarım",
      "hero.modernDesignBadge": "Modern Tasarım",
      
      // CTA Section
      "cta.customNeeds": "Özel İhtiyaçlarınız mı Var?",
      "cta.customDescription": "Standart ürünlerimizin yanında, özel tasarım ve ölçülerde üretim de yapıyoruz. Projenize özel çözüm için bizimle iletişime geçin.",
      "cta.customQuote": "Özel Teklif Al",
      "cta.downloadCatalog": "Katalog İndir",
      
      // About Section
      "about.stats.foundingYear": "Kuruluş Yılı",
      "about.stats.foundingYearDesc": "Sektöre adım attığımız yıl",
      "about.stats.exportCountries": "İhracat Ülkesi",
      "about.stats.exportCountriesDesc": "Dünya çapında güvenilir partner",
      "about.stats.customerSatisfaction": "Müşteri Memnuniyeti",
      "about.stats.customerSatisfactionDesc": "Kalite odaklı hizmet anlayışı",
      "about.stats.certification": "Sertifikasyonu",
      "about.stats.certificationDesc": "Avrupa standardında kalite",
      
      "about.values.mission": "Misyonumuz",
      "about.values.missionDesc": "Pleksi korkuluk sistemlerinde Türkiye'nin lider markası olarak, güvenlik ve estetik mükemmelliğini bir araya getiren yenilikçi çözümler sunmak.",
      "about.values.vision": "Vizyonumuz",
      "about.values.visionDesc": "2030 yılına kadar 50 ülkeye ihracat yapan, global ölçekte tanınan ve tercih edilen premium marka olmak.",
      "about.values.values": "Değerlerimiz",
      "about.values.valuesDesc": "Kalite, güvenilirlik, müşteri odaklılık ve sürekli yeniliği temel değerlerimiz olarak benimser, sorumlu üretim anlayışıyla hareket ederiz.",
      
      "about.milestones.founding": "Kuruluş",
      "about.milestones.foundingDesc": "Walmco markası Türkiye'de kuruldu",
      "about.milestones.certification": "CE Sertifikasyonu",
      "about.milestones.certificationDesc": "Avrupa standartlarında kalite belgesi aldık",
      "about.milestones.exportStart": "İhracat Başlangıcı",
      "about.milestones.exportStartDesc": "15 ülkeye ihracat yapmaya başladık",
      "about.milestones.globalExpansion": "Global Genişleme",
      "about.milestones.globalExpansionDesc": "28 ülkeye ulaşan ihracat ağımızı kurduk",
      
      // About Page Headers
      "about.header.title": "Türkiye'de Doğdu, Dünyaya Açıldı",
      "about.header.description": "2021 Yılından Bu yana Akrilik Çubuk,Akrilik Mobilya Ayakları,Pleksi Aksesuar,Pleksi Korkuluk ve Alüminyum Korkuluk Sistemleri Alanında Faaliyet Gösteren WALMCO , Özgün Tasarım AR-GE Çalışmaları ile Sektörde Öncü Konumda Yer Almaktadır",
      "about.timeline.title": "Büyüme Hikayemiz",
      "about.timeline.description": "Kuruluşumuzdan bu yana kat ettiğimiz yolda önemli kilometre taşları",
      
      // About Page Content
      "aboutPage.main.title": "Walmco'yu Tanıyın",
      "aboutPage.main.subtitle": "Türkiye'nin Pleksi Korkuluk , Pleksi Mobilya ürünleri ve Pleksi Aksesuar ürün gruplarında sektördeki öncü marka olarak . kalite ve yeniliği bir araya getiren çözümler sunuyoruz .",
      "aboutPage.main.paragraph1": "Walmco, 2021 yılında İstanbul'da, Türkiye'nin yerli üretim gücünü global pazarlarda temsil etme vizyonuyla kurulmuştur. Kurucularının sektörel deneyimi ve teknolojik altyapı hedefiyle yola çıkan firma, özellikle pleksi (PMMA) ve alüminyum korkuluk sistemleri üretiminde uzmanlaşmıştır.",
      "aboutPage.main.paragraph2": "Şirketin temel amacı; estetik, güvenli ve sürdürülebilir yapı çözümleri sunan ürünleri, hem yurtiçi projelere hem de dünya genelindeki müşterilere ulaştırmaktır. Kısa sürede ihracat kabiliyeti kazanan Walmco, bugün 28 ülkeye aktif şekilde ürün göndererek Türk mühendisliği ve tasarımını global mimari projelere taşımaktadır.",
      
      "aboutPage.valuesSection.title": "Değerlerimiz",
      "aboutPage.valuesSection.description": "Walmco olarak benimsediğimiz temel değerler, her adımımızda bizi yönlendiriyor.",
      
      "aboutPage.values.quality": "Kalite Odaklılık",
      "aboutPage.values.qualityDesc": "Her üretim aşamasında en yüksek kalite standartlarını koruyarak, müşterilerimize güvenilir ürünler sunuyoruz.",
      "aboutPage.values.innovation": "Sürekli İnovasyon",
      "aboutPage.values.innovationDesc": "AR-GE merkezimizde geliştirdiğimiz yenilikçi teknolojilerle sektörde öncü olmaya devam ediyoruz.",
      "aboutPage.values.satisfaction": "Müşteri Memnuniyeti",
      "aboutPage.values.satisfactionDesc": "Müşterilerimizin ihtiyaçlarını anlayarak, onların beklentilerini aşan çözümler üretiyoruz.",
      "aboutPage.values.reliability": "Güvenilirlik",
      "aboutPage.values.reliabilityDesc": "Sözünü tutan, zamanında teslimat yapan ve sürekli gelişen güvenilir bir partner olarak hizmet veriyoruz.",
      "aboutPage.values.environment": "Çevre Bilinci",
      "aboutPage.values.environmentDesc": "Sürdürülebilir üretim anlayışı ile çevreye duyarlı, geri dönüştürülebilir malzemeler kullanıyoruz.",
      "aboutPage.values.people": "İnsan Odaklılık",
      "aboutPage.values.peopleDesc": "Çalışanlarımızın gelişimine yatırım yaparak, mutlu ekiplerle kaliteli üretim gerçekleştiriyoruz.",
      
      // Blog
      "blog.contentNotFound": "İçerik bulunamadı."
    }
  },
  en: {
    translation: {
      // Header navigation
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.products": "Products", 
      "nav.applications": "Applications",
      "nav.catalogs": "Catalogs",
      "nav.blog": "Blog",
      "nav.contact": "Contact",
      
      // Language switcher
      "language.turkish": "Türkçe",
      "language.english": "English",
      
      // Hero section
      "hero.title": "Plexiglass Railing Systems",
      "hero.subtitle": "Premium Quality Suitable for Modern Architecture",
      "hero.description": "Durable plexiglass railing systems compatible with modern architecture with transparent glass appearance. Choose with confidence with 5-year warranty.",
      "hero.viewProducts": "View Products",
      "hero.freeQuote": "Free Survey",
      "hero.yearsBrand": "Expert Brand",
      "hero.yearsGuarantee": "Year Warranty",
      "hero.projectsCompleted": "Projects Completed",
      
      // Main products section
      "products.catalog": "Product Catalog",
      "products.premiumSeries": "Our Premium Product Series",
      "products.description": "Discover CE certified, high-quality plexiglass railing systems and aluminum profiles. We offer solutions for every need.",
      "products.searchPlaceholder": "Search product code or model... (e.g: 2866, Dubai, 2701)",
      "products.search": "Search",
      "products.allProducts": "All Products",
      "products.viewDetails": "View Details",
      "products.getQuote": "Get Quote",
      "products.getFreeQuote": "Get Free Quote",
      
      // Features section
      "features.whyChoose": "Why Choose WALMCO?",
      "features.advantages": "Our Advantages",
      "features.premiumQuality": "Premium Quality",
      "features.premiumQualityDesc": "Durable products manufactured with high-quality materials",
      "features.fiveYearWarranty": "5 Year Warranty",
      "features.fiveYearWarrantyDesc": "Peaceful use with long-term assurance",
      "features.internationalExport": "Export to 28 Countries",
      "features.internationalExportDesc": "World-standard quality and reliability",
      "features.expertTeam": "Expert Team",
      "features.expertTeamDesc": "Professional staff experienced in their field",
      "features.customDesign": "Custom Design",
      "features.customDesignDesc": "Custom design and production solutions for your project",
      "features.fastDelivery": "Fast Delivery",
      "features.fastDeliveryDesc": "On-time delivery guarantee",
      
      // Footer
      "footer.company": "Company",
      "footer.aboutUs": "About Us",
      "footer.ourStory": "Our Story",
      "footer.certificates": "Certificates",
      "footer.career": "Career",
      "footer.products": "Products",
      "footer.plexiRailings": "Plexi Railings",
      "footer.aluminumProfiles": "Aluminum Profiles",
      "footer.accessories": "Accessories",
      "footer.projects": "Projects",
      "footer.support": "Support",
      "footer.contact": "Contact",
      "footer.technicalSupport": "Technical Support",
      "footer.installationGuide": "Installation Guide",
      "footer.faq": "Frequently Asked Questions",
      "footer.follow": "Follow Us",
      "footer.rights": "All rights reserved.",
      "footer.privacyPolicy": "Privacy Policy",
      "footer.termsOfService": "Terms of Service",
      
      // Common
      "common.loading": "Loading...",
      "common.error": "An error occurred",
      "common.success": "Successful",
      "common.close": "Close",
      "common.save": "Save",
      "common.cancel": "Cancel",
      "common.continue": "Continue",
      "common.back": "Back",
      "common.next": "Next",
      "common.previous": "Previous",
      "common.readMore": "Read More",
      "common.learnMore": "Learn More",
      
      // Product categories
      "category.plexiBabas": "Plexi Posts",
      "category.plexiPosts": "Plexi Uprights",
      "category.plexiDiamond": "Plexi Diamond Series",
      "category.plexiFurniture": "Plexi Furniture Legs",
      "category.plexiAccessories": "Plexi Accessories",
      
      // Product descriptions
      "product.transparentDurable": "Transparent and durable plexi post systems",
      "product.modernDesign": "Modern design plexi upright solutions",
      "product.premiumDiamond": "Premium plexi diamond series products",
      "product.transparentFurniture": "Transparent furniture leg systems",
      "product.plexiAccessories": "Plexi Accessories",
      
      // Additional hero content
      "hero.furniture.title": "Plexiglass Furniture Products",
      "hero.furniture.subtitle": "Modern Furniture Design",
      "hero.furniture.description": "Modern furniture products made from transparent and durable plexiglass material. Custom design and quality production.",
      "hero.custom.title": "Custom Design Solutions",
      "hero.custom.subtitle": "Tailored to Customer Needs",
      "hero.custom.description": "Custom design and production service for your projects. Bring your projects to life with free survey and technical support.",
      "hero.customDesignBadge": "Custom Design",
      "hero.modernDesignBadge": "Modern Design",
      
      // CTA Section
      "cta.customNeeds": "Do You Have Special Needs?",
      "cta.customDescription": "In addition to our standard products, we also produce custom designs and measurements. Contact us for project-specific solutions.",
      "cta.customQuote": "Get Custom Quote",
      "cta.downloadCatalog": "Download Catalog",
      
      // About Section
      "about.stats.foundingYear": "Founding Year",
      "about.stats.foundingYearDesc": "The year we entered the industry",
      "about.stats.exportCountries": "Export Countries",
      "about.stats.exportCountriesDesc": "Reliable partner worldwide",
      "about.stats.customerSatisfaction": "Customer Satisfaction",
      "about.stats.customerSatisfactionDesc": "Quality-focused service approach",
      "about.stats.certification": "Certification",
      "about.stats.certificationDesc": "European standard quality",
      
      "about.values.mission": "Our Mission",
      "about.values.missionDesc": "As Turkey's leading brand in plexiglass railing systems, to offer innovative solutions that combine safety and aesthetic excellence.",
      "about.values.vision": "Our Vision",
      "about.values.visionDesc": "To become a globally recognized and preferred premium brand exporting to 50 countries by 2030.",
      "about.values.values": "Our Values",
      "about.values.valuesDesc": "We adopt quality, reliability, customer orientation and continuous innovation as our core values, and act with a responsible production approach.",
      
      "about.milestones.founding": "Foundation",
      "about.milestones.foundingDesc": "Walmco brand was established in Turkey",
      "about.milestones.certification": "CE Certification",
      "about.milestones.certificationDesc": "Received European standard quality certificate",
      "about.milestones.exportStart": "Export Beginning",
      "about.milestones.exportStartDesc": "Started exporting to 15 countries",
      "about.milestones.globalExpansion": "Global Expansion",
      "about.milestones.globalExpansionDesc": "Established our export network reaching 28 countries",
      
      // About Page Headers
      "about.header.title": "Born in Turkey, Opened to the World",
      "about.header.description": "Since 2021, WALMCO has been operating in the field of Acrylic Rods, Acrylic Furniture Legs, Plexi Accessories, Plexi Railings and Aluminum Railing Systems, and is in a leading position in the industry with its Original Design R&D Studies.",
      "about.timeline.title": "Our Growth Story",
      "about.timeline.description": "Important milestones in our journey since our establishment",
      
      // About Page Content
      "aboutPage.main.title": "Get to Know Walmco",
      "aboutPage.main.subtitle": "As Turkey's leading brand in the plexiglass railing sector, we offer solutions that combine quality and innovation.",
      "aboutPage.main.paragraph1": "Walmco was established in Istanbul in 2021 with the vision of representing Turkey's domestic production power in global markets. Starting with the founders' sectoral experience and technological infrastructure goals, the company specializes in the production of plexiglass (PMMA) and aluminum railing systems.",
      "aboutPage.main.paragraph2": "The company's main purpose is to deliver products that offer aesthetic, safe and sustainable building solutions to both domestic projects and customers worldwide. Gaining export capability in a short time, Walmco today actively ships products to 28 countries, carrying Turkish engineering and design to global architectural projects.",
      
      "aboutPage.valuesSection.title": "Our Values",
      "aboutPage.valuesSection.description": "The core values we embrace as Walmco guide us in every step we take.",
      
      "aboutPage.values.quality": "Quality Focus",
      "aboutPage.values.qualityDesc": "We offer reliable products to our customers by maintaining the highest quality standards at every stage of production.",
      "aboutPage.values.innovation": "Continuous Innovation",
      "aboutPage.values.innovationDesc": "We continue to be pioneers in the industry with innovative technologies developed in our R&D center.",
      "aboutPage.values.satisfaction": "Customer Satisfaction",
      "aboutPage.values.satisfactionDesc": "By understanding our customers' needs, we produce solutions that exceed their expectations.",
      "aboutPage.values.reliability": "Reliability",
      "aboutPage.values.reliabilityDesc": "We serve as a reliable partner that keeps its word, delivers on time and continuously develops.",
      "aboutPage.values.environment": "Environmental Awareness",
      "aboutPage.values.environmentDesc": "We use environmentally friendly, recyclable materials with a sustainable production approach.",
      "aboutPage.values.people": "People Focus",
      "aboutPage.values.peopleDesc": "By investing in the development of our employees, we achieve quality production with happy teams.",
      
      // Blog
      "blog.contentNotFound": "Content not found."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
