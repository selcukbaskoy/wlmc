import { useState, useEffect } from "react";
import { getImageUrl } from "../../utils/imageUtils";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  CheckCircle,
  Globe,
  Car,
  Package,
} from "lucide-react";

// EmailJS için gerekli değişkenler
const EMAILJS_SERVICE_ID = "service_y4r9269";
const EMAILJS_TEMPLATE_ID = "template_gns6cgn";
const EMAILJS_PUBLIC_KEY = "yf5dVkjDU0q_IMC_h";

export const meta = () => [
  { title: "İletişim - WALMCO Pleksi Korkuluk Sistemleri | Bizimle İletişime Geçin" },
  { name: "description", content: "WALMCO ile iletişime geçin. Pleksi korkuluk sistemleri, alüminyum profiller için ücretsiz teklif alın. İstanbul merkezli, Türkiye geneline hizmet." },
];

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    product: "", // Add product field
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get("product");

    if (productParam) {
      try {
        const productInfo = JSON.parse(decodeURIComponent(productParam));
        setFormData((prev) => ({
          ...prev,
          product: productInfo.name,
          subject: "pleksi-korkuluk", // Auto-select subject
          message: `${productInfo.name} ürünü için teklif almak istiyorum.\n\nÜrün Detayları:\n- Kategori: ${productInfo.category}\n- Açıklama: ${productInfo.description}\n- Fiyat: ${productInfo.price}\n\nProje detaylarım:\n- `,
        }));
        // Store full product info for display
        setSelectedProduct(productInfo);
      } catch (error) {
        // Fallback for old format
        setFormData((prev) => ({
          ...prev,
          product: decodeURIComponent(productParam),
          subject: "pleksi-korkuluk",
          message: `${decodeURIComponent(productParam)} ürünü için teklif almak istiyorum.\n\nProje detaylarım:\n- `,
        }));
      }
    }

    // EmailJS'i yükle
    const loadEmailJS = async () => {
      if (typeof window !== 'undefined' && !window.emailjs) {
        try {
          console.log('EmailJS yükleniyor...');
          const emailjsScript = document.createElement('script');
          emailjsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
          emailjsScript.onload = () => {
            if (window.emailjs) {
              console.log('EmailJS script yüklendi, init ediliyor...');
              window.emailjs.init(EMAILJS_PUBLIC_KEY);
              console.log('EmailJS başarıyla yüklendi ve init edildi');
            } else {
              console.error('EmailJS script yüklendi ama window.emailjs bulunamadı');
            }
          };
          emailjsScript.onerror = (error) => {
            console.error('EmailJS script yükleme hatası:', error);
          };
          document.head.appendChild(emailjsScript);
        } catch (error) {
          console.error('EmailJS yükleme hatası:', error);
        }
      } else if (window.emailjs) {
        console.log('EmailJS zaten yüklü');
      }
    };

    loadEmailJS();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError(null); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS ile email gönderimi
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || "Belirtilmemiş",
        subject: formData.subject,
        product: formData.product || "Belirtilmemiş",
        message: formData.message,
      };

      console.log('EmailJS gönderimi başlatılıyor...', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY,
        templateParams
      });

      // EmailJS send fonksiyonu
      await new Promise((resolve, reject) => {
        if (typeof window !== 'undefined' && window.emailjs) {
          console.log('EmailJS mevcut, gönderim başlatılıyor...');
          
          window.emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams,
            EMAILJS_PUBLIC_KEY
          )
          .then((response) => {
            console.log('Email başarıyla gönderildi:', response);
            resolve(response);
          })
          .catch((error) => {
            console.error('Email gönderimi başarısız:', error);
            reject(error);
          });
        } else {
          console.error('EmailJS yüklenemedi, window.emailjs:', window.emailjs);
          reject(new Error('EmailJS yüklenemedi'));
        }
      });

      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        product: "",
      });
    } catch (error) {
      console.error('Form gönderimi hatası:', error);
      setError(`Mesaj gönderilemedi: ${error.message}`);
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Fabrika & Showroom",
      details: [
        "Walmco Pleksi ve Alüminyum Sistemleri San.Tic.Ltd.Şti.",
        "Güngören Mah. Yapıt Sok. No:19G",
        "Çekmeköy - İSTANBUL",
        "TÜRKİYE",
      ],
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["+90 216 909 28 34", "+90 (532) 347 73 68 (WhatsApp)"],
    },
    {
      icon: Mail,
      title: "E-posta",
      details: ["info@walmco.com"],
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: [
        "Pazartesi - Cuma: 08:30 - 19:00",
        "Cumartesi: 09:00 - 19:00",
        "Pazar: Kapalı",
      ],
    },
  ];

  const officeFeatures = [
    {
      icon: Car,
      title: "Ücretsiz Otopark",
      description: "Geniş otopark alanımız ile rahat ziyaret imkanı",
    },
    {
      icon: Globe,
      title: "Çok Dilli Hizmet",
      description: "Türkçe, İngilizce ve Almanca hizmet desteği",
    },
    {
      icon: Building,
      title: "Showroom",
      description: "Ürünlerimizi görebileceğiniz modern showroom",
    },
    {
      icon: CheckCircle,
      title: "Teknik Danışmanlık",
      description: "Uzman ekibimizden ücretsiz teknik danışmanlık",
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
                <MessageSquare size={20} />
                <span className="font-semibold">İletişim</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                Bizimle
                <span className="block">İletişime Geçin</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                Pleksi Korkuluk, Pleksi Mobilya ürünleri ve Pleksi Aksesuarlar hakkında detaylı bilgi almak,
                <span className="text-yellow-300"> Ücretsiz teklif talep etmek için bizimle iletişime geçebilirsiniz.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Ücretsiz Teklif Alın
                  </h2>
                  <p className="text-gray-600">
                    Projeniz hakkında detaylı bilgi verin, size en uygun çözümü
                    sunalım.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Add product info display if product parameter exists */}
                    {selectedProduct && (
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <img 
                              src={getImageUrl(selectedProduct.image)} 
                              alt={selectedProduct.name}
                              className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <Package size={20} className="text-blue-600" />
                              <h3 className="text-lg font-bold text-blue-900">
                                Teklif Talep Edilen Ürün
                              </h3>
                            </div>
                            <div className="space-y-2">
                              <p className="text-xl font-semibold text-blue-800">
                                {selectedProduct.name}
                              </p>
                              <p className="text-sm text-blue-700">
                                <span className="font-medium">Kategori:</span> {selectedProduct.category}
                              </p>
                              <p className="text-sm text-blue-700">
                                <span className="font-medium">Fiyat:</span> {selectedProduct.price}
                              </p>
                              <p className="text-sm text-blue-700 line-clamp-2">
                                <span className="font-medium">Açıklama:</span> {selectedProduct.description}
                              </p>
                              {selectedProduct.specifications && (
                                <div className="mt-3 pt-3 border-t border-blue-200">
                                  <p className="text-sm font-medium text-blue-800 mb-2">Seçilen Özellikler:</p>
                                  <div className="grid grid-cols-2 gap-2 text-xs text-blue-700">
                                    {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                                      <div key={key} className="flex justify-between">
                                        <span className="capitalize">{key === 'bodyType' ? 'Gövde Tipi' : key === 'finish' ? 'Aksesuar' : 'Adet'}:</span>
                                        <span className="font-medium">{value}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Ad Soyad *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent transition-all"
                          placeholder="Adınızı ve soyadınızı girin"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          E-posta *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent transition-all"
                          placeholder="E-posta adresinizi girin"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent transition-all"
                          placeholder="0555 123 45 67"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Firma Adı
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent transition-all"
                          placeholder="Firma adınızı girin (opsiyonel)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Konu *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent transition-all"
                      >
                        <option value="">Konu seçiniz</option>
                        <option value="pleksi-korkuluk">
                          Pleksi Korkuluk Teklifi
                        </option>
                        <option value="ozel-uretim">Özel Üretim Talebi</option>
                        <option value="teknik-destek">Teknik Destek</option>
                        <option value="genel">Genel Bilgi</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Mesajınız *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:border-transparent transition-all resize-none"
                        placeholder="Projeniz hakkında detaylı bilgi verin (metraj, konum, özel istekler vb.)"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Gönderiliyor...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Mesaj Gönder</span>
                        </>
                      )}
                    </button>

                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                        <p className="text-red-600 text-sm">
                          {error === "API call failed"
                            ? "Mesaj gönderilemedi. Lütfen tekrar deneyin."
                            : error}
                        </p>
                      </div>
                    )}

                    <p className="text-xs text-gray-500 text-center">
                      Formun gönderilmesiyle{" "}
                      <span className="text-[#b91c1c]">KVKK</span> ve
                      <span className="text-[#b91c1c]">
                        {" "}
                        Gizlilik Politikası
                      </span>
                      'nı kabul etmiş sayılırsınız.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Mesajınız Başarıyla Gönderildi!
                    </h3>
                    <p className="text-gray-600 mb-8">
                      En kısa sürede size dönüş yapacağız. Genellikle 2-4 saat
                      içinde yanıtlıyoruz.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#b91c1c] font-semibold hover:underline"
                    >
                      Yeni mesaj gönder
                    </button>
                  </div>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  İletişim Bilgileri
                </h2>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#b91c1c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent size={24} className="text-[#b91c1c]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-600">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Office Features */}
                <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Ofis Özelliklerimiz
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {officeFeatures.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={index} className="flex items-start space-x-3">
                          <IconComponent
                            size={20}
                            className="text-[#b91c1c] mt-0.5"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">
                              {feature.title}
                            </h4>
                            <p className="text-gray-600 text-xs">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fabrika & Showroom Konumu
              </h2>
              <p className="text-lg text-gray-600">
                İstanbul Çekmeköy'de bulunan fabrikamızı ziyaret edebilirsiniz.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ziyaret Öncesi Bilgiler
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <p>• Randevu alarak gelmenizi öneririz</p>
                    <p>• Ücretsiz otopark mevcuttur</p>
                    <p>• Showroom'da tüm ürünlerimizi inceleyebilirsiniz</p>
                    <p>• Uzman ekibimizden teknik danışmanlık alabilirsiniz</p>
                    <p>• İhracat süreçlerimizi yerinde görebilirsiniz</p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <button className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                      <a
                        href="https://maps.google.com/?q=Güngören+Mah.+Yapıt+Sok.+No:19G+Çekmeköy+İstanbul"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Maps'te Aç
                      </a>
                    </button>
                    <button className="w-full border-2 border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c] hover:text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                      <a href="tel:+902169092834">📞 +90 216 909 28 34</a>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  {/* Google Maps Embed */}
                  <div className="h-80 rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.234567!2d29.1456785!3d41.0567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0x198ca0462ef85c0a!2sG%C3%BCng%C3%B6ren%20Mah.%20Yap%C4%B1t%20Sok.%20No%3A19G%2C%2034788%20%C3%87ekmek%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1692000000000!5m2!1str!2str"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Walmco Pleksi ve Alüminyum Sistemleri - Güngören Mah. Yapıt Sok. No:19G Çekmeköy İstanbul"
                    ></iframe>
                  </div>

                  <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <MapPin size={20} className="text-[#b91c1c]" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          📍 İstanbul Pleksi Korkuluk ve Alüminyum Aksesuar
                          Üreticisi
                        </p>
                        <p className="text-sm text-gray-600">
                          Güngören Mah. Yapıt Sok. No:19G, Çekmeköy - İSTANBUL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sık Sorulan Sorular
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Teklif alım süreci nasıl işliyor?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Formu doldurduktan sonra, 2-4 saat içinde size dönüş
                    yapıyoruz. Proje detaylarını görüştükten sonra 24 saat
                    içinde teklif hazırlıyoruz.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Üretim süresi ne kadar?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Standart ürünler için 5-7 iş günü, özel üretim için 10-15 iş
                    günü sürmektedir.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Montaj hizmeti veriyor musunuz?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Evet, profesyonel montaj ekibimizle Türkiye genelinde montaj
                    hizmeti veriyoruz.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Garanti süreniz ne kadar?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Pleksi Korkuluk Ürünlerde Kullanıcıdan Kaynaklanmayan Sorunlar Dışında 5 (BEŞ) YIL Garantilidir.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Yurt dışına satış yapıyor musunuz?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Evet, şu anda 28 ülkeye ihracat yapıyoruz. Detaylı bilgi
                    için iletişime geçebilirsiniz.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Özel ölçü üretim yapıyor musunuz?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Evet, projenize özel ölçü ve tasarımda üretim yapabiliyoruz.
                    Minimum sipariş miktarı mevcuttur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
