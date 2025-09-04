import { useState, useEffect, useRef } from "react";
import {
  Zap,
  Star,
  ArrowRight,
  Eye,
  Download,
  Sparkles,
  Shield,
  Award,
  Globe,
  TrendingUp,
  ChevronRight,
  Play,
  Target,
  Layers,
} from "lucide-react";

export default function ParallaxShowcase() {
  const [scrollY, setScrollY] = useState(0);
  const [inView, setInView] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  const showcaseCards = [
    {
      id: "innovation",
      title: "Yenilikçi Teknoloji",
      subtitle: "AR-GE Laboratuvarı",
      description:
        "Özgün tasarım ve AR-GE çalışmaları ile geliştirilen, dünya standardında korkuluk sistemleri.",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
      gradient: "from-purple-600 via-blue-500 to-cyan-400",
      glowColor: "#8b5cf6",
      icon: Zap,
      stats: [
        { value: "500+", label: "Patent", icon: Award },
        { value: "15", label: "AR-GE Ekibi", icon: Target },
        { value: "2021", label: "Kuruluş", icon: Star },
      ],
    },
    {
      id: "quality",
      title: "Premium Kalite",
      subtitle: "Avrupa Standartları",
      description:
        "CE sertifikalı, darbe dayanımlı ve UV korumalı pleksi korkuluk sistemleri ile maksimum güvenlik.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      gradient: "from-red-500 via-orange-500 to-yellow-400",
      glowColor: "#ef4444",
      icon: Shield,
      stats: [
        { value: "CE", label: "Sertifika", icon: Award },
        { value: "10mm", label: "Kalınlık", icon: Layers },
        { value: "5 Yıl", label: "Garanti", icon: Shield },
      ],
    },
    {
      id: "global",
      title: "Global Erişim",
      subtitle: "28 Ülkeye İhracat",
      description:
        "Türkiye'den dünyaya açılan kapımızla, uluslararası kalite standartlarında ürün ve hizmet sunuyoruz.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
      gradient: "from-green-500 via-emerald-500 to-teal-400",
      glowColor: "#10b981",
      icon: Globe,
      stats: [
        { value: "28", label: "Ülke", icon: Globe },
        { value: "1000+", label: "Proje", icon: TrendingUp },
        { value: "%100", label: "Memnuniyet", icon: Star },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );

    window.addEventListener("scroll", handleScroll);
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (inView && !isHovered) {
      const interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % showcaseCards.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [inView, isHovered, showcaseCards.length]);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const activeCardData = showcaseCards[activeCard];
  const parallaxOffset = scrollY * 0.3;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden py-20"
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          background:
            "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, ${activeCardData.glowColor}40 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, ${activeCardData.glowColor}30 0%, transparent 50%),
                linear-gradient(90deg, transparent 24%, ${activeCardData.glowColor}10 25%, ${activeCardData.glowColor}10 26%, transparent 27%, transparent 74%, ${activeCardData.glowColor}10 75%, ${activeCardData.glowColor}10 76%, transparent 77%, transparent),
                linear-gradient(0deg, transparent 24%, ${activeCardData.glowColor}10 25%, ${activeCardData.glowColor}10 26%, transparent 27%, transparent 74%, ${activeCardData.glowColor}10 75%, ${activeCardData.glowColor}10 76%, transparent 77%, transparent)
              `,
              backgroundSize: "100px 100px, 150px 150px, 50px 50px, 50px 50px",
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                transform: `translate(${mousePosition.x * (5 + i * 2)}px, ${mousePosition.y * (5 + i * 2)}px)`,
              }}
            >
              <div
                className="w-1 h-1 rounded-full"
                style={{
                  backgroundColor:
                    i % 3 === 0
                      ? activeCardData.glowColor
                      : i % 3 === 1
                        ? "#ffffff"
                        : "#fbbf24",
                  boxShadow: `0 0 10px ${i % 3 === 0 ? activeCardData.glowColor : "#ffffff"}`,
                }}
              />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8 group hover:bg-white/10 transition-all duration-300">
              <Sparkles
                size={20}
                className="text-white animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <span className="text-white font-bold text-lg">
                Premium Showcase
              </span>
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: activeCardData.glowColor }}
              />
            </div>

            <h2
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
              style={{
                color: "#ffffff",
                textShadow: `0 0 20px ${activeCardData.glowColor}, 0 0 40px ${activeCardData.glowColor}40`,
              }}
            >
              Teknoloji & İnovasyon
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Geleceğin korkuluk sistemlerini bugünden sizlerle buluşturuyoruz
            </p>
          </div>

          {/* Main Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side - Card Navigation */}
            <div className="lg:col-span-4 space-y-6">
              {showcaseCards.map((card, index) => (
                <div
                  key={card.id}
                  onClick={() => setActiveCard(index)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 ${
                    activeCard === index
                      ? "bg-white/10 backdrop-blur-md border-2 shadow-2xl"
                      : "bg-white/5 backdrop-blur-sm border hover:bg-white/8"
                  }`}
                  style={{
                    borderColor:
                      activeCard === index
                        ? card.glowColor
                        : "rgba(255,255,255,0.1)",
                    boxShadow:
                      activeCard === index
                        ? `0 20px 40px ${card.glowColor}30`
                        : "",
                  }}
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />

                  <div className="relative flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        activeCard === index
                          ? "scale-110"
                          : "group-hover:scale-105"
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${card.glowColor}80, ${card.glowColor}40)`,
                        boxShadow:
                          activeCard === index
                            ? `0 10px 30px ${card.glowColor}50`
                            : "",
                      }}
                    >
                      <card.icon size={28} className="text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {card.subtitle}
                      </p>
                    </div>

                    <ChevronRight
                      size={20}
                      className={`text-white transition-transform duration-300 ${
                        activeCard === index
                          ? "translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Active Card Display */}
            <div className="lg:col-span-8">
              <div
                className={`relative transition-all duration-1000 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                {/* Main Display Card */}
                <div
                  className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
                  style={{
                    background: `linear-gradient(135deg, ${activeCardData.gradient})`,
                    boxShadow: `0 25px 60px ${activeCardData.glowColor}40`,
                    transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * 3}deg)`,
                  }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 transition-all duration-1000"
                    style={{
                      backgroundImage: `url(${activeCardData.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transform: `scale(1.1) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
                      filter: "brightness(0.6) saturate(1.2)",
                    }}
                  />

                  {/* Holographic Overlay */}
                  <div
                    className="absolute inset-0 opacity-60 pointer-events-none"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, ${activeCardData.glowColor}40 50%, transparent 70%)`,
                      transform: `translateX(${Math.sin(scrollY * 0.01) * 100}px)`,
                    }}
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    {/* Top Badge */}
                    <div className="flex justify-between items-start">
                      <div
                        className="px-6 py-3 rounded-2xl backdrop-blur-md border border-white/20 text-white font-bold"
                        style={{
                          backgroundColor: `${activeCardData.glowColor}20`,
                        }}
                      >
                        {activeCardData.subtitle}
                      </div>

                      <div className="flex space-x-3">
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                          <Eye size={20} />
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                          <Download size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div>
                      <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                        {activeCardData.title}
                      </h3>
                      <p className="text-lg text-gray-200 mb-6 leading-relaxed max-w-lg">
                        {activeCardData.description}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {activeCardData.stats.map((stat, index) => (
                          <div
                            key={index}
                            className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                          >
                            <stat.icon
                              size={20}
                              className="text-white mx-auto mb-2"
                            />
                            <div
                              className="text-2xl font-black mb-1"
                              style={{ color: activeCardData.glowColor }}
                            >
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-300">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button
                        className="group flex items-center space-x-3 px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 hover:border-white/50 rounded-2xl text-white font-bold transition-all duration-300 hover:scale-105"
                        style={{
                          boxShadow: `0 10px 30px ${activeCardData.glowColor}30`,
                        }}
                      >
                        <Play size={20} />
                        <span>Detaylı İncele</span>
                        <ArrowRight
                          size={20}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Fixed Star Element */}
                  <div
                    className="absolute -top-8 -right-8 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${activeCardData.glowColor}, #ffffff)`,
                    }}
                  >
                    <Star size={32} className="text-white" />
                  </div>
                </div>

                {/* Fixed Stats Cards - Moved to right side */}
                <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-4">
                  {[
                    { value: "2021", label: "Kuruluş", color: "#8b5cf6" },
                    { value: "CE", label: "Sertifika", color: "#ef4444" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="w-24 h-24 bg-white rounded-2xl flex flex-col items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
                    >
                      <div
                        className="text-xl font-black mb-1"
                        style={{ color: item.color }}
                      >
                        {item.value}
                      </div>
                      <div className="text-xs text-gray-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-16">
            <div className="flex space-x-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              {showcaseCards.map((card, index) => (
                <button
                  key={card.id}
                  onClick={() => setActiveCard(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeCard === index ? "scale-125" : "hover:scale-110"
                  }`}
                  style={{
                    backgroundColor:
                      activeCard === index
                        ? card.glowColor
                        : "rgba(255,255,255,0.3)",
                    boxShadow:
                      activeCard === index ? `0 0 20px ${card.glowColor}` : "",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${Math.min((scrollY / (window.innerHeight * 2)) * 100, 100)}%`,
              background: `linear-gradient(90deg, ${activeCardData.glowColor}, #ffffff)`,
            }}
          />
        </div>
      </section>
    </>
  );
}
