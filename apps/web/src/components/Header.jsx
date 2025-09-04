import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  Home,
  User,
  Package,
  Grid3X3,
  BookOpen,
  FileText,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Youtube,
  ChevronRight,
} from "lucide-react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuItems = [
    { name: t("nav.home"), href: "/", icon: Home },
    { name: t("nav.about"), href: "/hakkimizda", icon: User },
    { name: t("nav.products"), href: "/urunler", icon: Package, hasMegaMenu: true },
    { name: t("nav.applications"), href: "/uygulamalar", icon: Grid3X3 },
    { name: t("nav.catalogs"), href: "/kataloglar", icon: FileText, hasMegaMenu: true },
    { name: t("nav.blog"), href: "/blog", icon: BookOpen },
    { name: t("nav.contact"), href: "/iletisim", icon: Mail },
  ];

  // Ürünler mega menü verisi
  const productsMegaMenu = {
    title: t("nav.products"),
    description: t("products.description"),
    sections: [
      {
        title: "Pleksi Sistemleri",
        items: [
          { name: t("category.plexiBabas"), href: "/urunler?category=pleksi-babalar", description: t("product.transparentDurable") },
          { name: t("category.plexiPosts"), href: "/urunler?category=pleksi-dikmeler", description: t("product.modernDesign") },
          { name: t("category.plexiDiamond"), href: "/urunler?category=pleksi-diamond", description: t("product.premiumDiamond") },
        ]
      },
      {
        title: "Mobilya Ürünleri",
        items: [
          { name: t("category.plexiFurniture"), href: "/urunler?category=pleksi-mobilya", description: t("product.transparentFurniture") },
          { name: t("category.plexiAccessories"), href: "/urunler?category=pleksi-aksesuarlar", description: t("product.plexiAccessories") },
        ]
      }
    ]
  };

  // Kataloglar mega menü verisi
  const catalogsMegaMenu = {
    title: "Katalog ve Dokümanlar",
    description: "Ürün katalogları ve teknik dokümanlar",
    sections: [
      {
        title: "Ürün Katalogları",
        items: [
          { name: "Pleksi Sistemleri Kataloğu", href: "/kataloglar/pleksi-sistemleri", description: "Pleksi ürün kataloğu" },
          { name: "Mobilya Ürünleri Kataloğu", href: "/kataloglar/mobilya-urunleri", description: "Mobilya ürün kataloğu" },
          { name: "Teknik Özellikler", href: "/kataloglar/teknik-ozellikler", description: "Teknik detaylar ve özellikler" },
        ]
      },
      {
        title: "Dokümanlar",
        items: [
          { name: "Montaj Kılavuzları", href: "/kataloglar/montaj-kilavuzlari", description: "Ürün montaj rehberleri" },
          { name: "Güvenlik Standartları", href: "/kataloglar/guvenlik-standartlari", description: "Güvenlik ve kalite standartları" },
          { name: "Sertifikalar", href: "/kataloglar/sertifikalar", description: "Kalite ve güvenlik sertifikaları" },
        ]
      }
    ]
  };

  const socialMediaLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/walmcoal/",
      icon: Instagram,
      color: "#E4405F",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/walmco",
      icon: Facebook,
      color: "#1877F2",
    },
    {
      name: "Pinterest",
      href: "https://tr.pinterest.com/walmcoacrylic/",
      icon: ({ size, ...props }) => (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          {...props}
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.624 0 11.99-5.373 11.99-12C24 5.373 18.627.001 12.001.001z" />
        </svg>
      ),
      color: "#BD081C",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@WalmcoAkrilik",
      icon: Youtube,
      color: "#FF0000",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/902169092834",
      icon: MessageCircle,
      color: "#25D366",
    },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <header
        className="bg-white shadow-sm border-b border-gray-100 h-16 md:h-18 px-6 sticky top-0 z-50"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-full">
          {/* Logo block */}
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className="w-14 h-14 overflow-hidden rounded-lg bg-white p-1">
              <img
                src="https://ucarecdn.com/f89b0e5b-fee4-4a72-b1a5-b5db82888333/-/format/auto/"
                alt="Walmco Pleksi Korkuluk ve Alüminyum Sistemleri Logo"
                className="w-full h-full object-contain"
                width="56"
                height="56"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#b91c1c] font-bold text-xl leading-tight">
                WALMCO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && setHoveredMenu(item.name)}
                onMouseLeave={() => item.hasMegaMenu && setHoveredMenu(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-[#b91c1c] transition-colors duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-offset-2 rounded-lg px-3 py-2 group"
                >
                  <item.icon
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span>{item.name}</span>
                  {item.hasMegaMenu && (
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </a>

                {/* Mega Menu */}
                {item.hasMegaMenu && hoveredMenu === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                    <div className="p-6">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.name === "Ürünler" ? productsMegaMenu.title : catalogsMegaMenu.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.name === "Ürünler" ? productsMegaMenu.description : catalogsMegaMenu.description}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-8">
                        {(item.name === "Ürünler" ? productsMegaMenu.sections : catalogsMegaMenu.sections).map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                              {section.title}
                            </h4>
                            <div className="space-y-2">
                              {section.items.map((subItem, itemIndex) => (
                                <a
                                  key={itemIndex}
                                  href={subItem.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                >
                                  <div className="w-2 h-2 bg-[#b91c1c] rounded-full mt-2 flex-shrink-0"></div>
                                  <div className="flex-1">
                                    <div className="font-medium text-gray-900 group-hover:text-[#b91c1c] transition-colors duration-200">
                                      {subItem.name}
                                    </div>
                                    <div className="text-sm text-gray-600 mt-1">
                                      {subItem.description}
                                    </div>
                                  </div>
                                  <ChevronRight size={16} className="text-gray-400 group-hover:text-[#b91c1c] transition-colors duration-200" />
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Action Buttons & Social Media */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Media Links */}
            <div className="flex items-center space-x-2 mr-2">
              {socialMediaLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110"
                  style={{ color: social.color }}
                  title={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-offset-2"
            >
              <Globe size={16} />
              <span>{i18n.language === "tr" ? "TR" : "EN"}</span>
              <div className="w-1 h-1 bg-[#b91c1c] rounded-full animate-pulse" />
            </button>

            <a
              href="/iletisim"
              className="px-6 py-2 rounded-lg bg-[#b91c1c] hover:bg-[#991b1b] text-white font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-offset-2"
            >
{t("products.getQuote")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-offset-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col">
            {/* Mobile Header */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-gray-100">
              <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
                <div className="w-14 h-14 overflow-hidden rounded-lg">
                  <img
                    src="https://ucarecdn.com/f89b0e5b-fee4-4a72-b1a5-b5db82888333/-/format/auto/"
                    alt="Walmco Pleksi Korkuluk ve Alüminyum Sistemleri Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#b91c1c] font-bold text-xl leading-tight">
                    WALMCO
                  </span>
                </div>
              </a>
              <button
                className="p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-offset-2 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Menüyü kapat"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 px-6 py-6 space-y-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between py-4 text-gray-700 hover:text-[#b91c1c] hover:bg-gray-50 transition-colors duration-200 font-medium text-base border-b border-gray-100 last:border-b-0 rounded-lg px-3"
                    onClick={() => !item.hasMegaMenu && setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon size={20} />
                      <span>{item.name}</span>
                    </div>
                    {item.hasMegaMenu && (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </a>
                  
                  {/* Mobile Mega Menu Items */}
                  {item.hasMegaMenu && (
                    <div className="ml-6 space-y-2 border-l-2 border-gray-200 pl-4">
                      {(item.name === "Ürünler" ? productsMegaMenu.sections : catalogsMegaMenu.sections).map((section, sectionIndex) => (
                        <div key={sectionIndex} className="py-2">
                          <h4 className="font-medium text-gray-700 mb-2 text-sm">
                            {section.title}
                          </h4>
                          <div className="space-y-1">
                            {section.items.map((subItem, itemIndex) => (
                              <a
                                key={itemIndex}
                                href={subItem.href}
                                className="block py-2 px-3 text-gray-600 hover:text-[#b91c1c] hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Social Media & Actions */}
            <div className="px-6 py-6 space-y-4 border-t border-gray-100">
              {/* Social Media Links for Mobile */}
              <div className="flex justify-center space-x-6">
                {socialMediaLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110"
                    style={{ color: social.color }}
                    title={social.name}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>

              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-offset-2"
              >
                <Globe size={16} />
                <span>{i18n.language === "tr" ? "Türkçe" : "English"}</span>
                <div className="w-2 h-2 bg-[#b91c1c] rounded-full animate-pulse" />
              </button>

              <a
                href="/iletisim"
                className="w-full px-6 py-3 rounded-lg bg-[#b91c1c] hover:bg-[#991b1b] text-white font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-offset-2 inline-block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
{t("products.getFreeQuote")}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
