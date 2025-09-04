import { useTranslation } from "react-i18next";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: t("footer.aboutUs"), href: "/hakkimizda" },
      { name: "Kalite Politikası", href: "/kalite-politikasi" },
      { name: t("footer.certificates"), href: "/sertifikalar" },
    ],
    products: [
      { name: "Pleksi Korkuluk", href: "/urunler/pleksi-korkuluk" },
      { name: t("category.plexiFurniture"), href: "/urunler/pleksi-mobilya-ayaklari" },
      { name: "Pleksi Dikme ve Baba", href: "/urunler/pleksi-dikme-baba" },
    ],
    services: [
      { name: "Ücretsiz Keşif", href: "/iletisim" },
      { name: "Montaj Hizmeti", href: "/iletisim" },
      { name: "Özel Tasarım", href: "/iletisim" },
      { name: t("footer.technicalSupport"), href: "/iletisim" },
    ],
    support: [
      { name: "İletişim", href: "/iletisim" },
      { name: "SSS", href: "/sss" },
      { name: "Katalog", href: "/kataloglar" },
      { name: "Blog", href: "/blog" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/walmco", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/walmco", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/walmco", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/walmco", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/@walmco", label: "YouTube" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 overflow-hidden rounded-lg bg-white p-1">
                <img
                  src="https://ucarecdn.com/f89b0e5b-fee4-4a72-b1a5-b5db82888333/-/format/auto/"
                  alt="Walmco Logo"
                  className="w-full h-full object-contain"
                  width="48"
                  height="48"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">WALMCO</h3>
                <p className="text-gray-400 text-sm">Pleksi & Alüminyum Sistemleri</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              2021'den beri pleksi korkuluk sistemleri ve alüminyum korkuluk sistemleri 
              üretiminde uzman. 28 ülkeye ihracat, 5 yıl garanti, özel tasarım.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} />
                <span>İstanbul, Türkiye</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} />
                <span>+90 216 909 28 34</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} />
                <span>info@walmco.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Globe size={18} />
                <span>www.walmco.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t("footer.company")}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t("footer.products")}</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t("footer.support")}</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} WALMCO. {t("footer.rights")}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#b91c1c] rounded-full flex items-center justify-center transition-all duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={18}
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#b91c1c] hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Sayfanın başına çık"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
