import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Interactive3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Balkon Uygulaması",
      category: "Balkon Uygulamaları",
      image: "https://ucarecdn.com/5309a376-93ef-463d-ad10-0482e5d78e30/-/format/auto/",
      color: "#b91c1c",
      features: ["12mm Pleksi", "Alüminyum Profil", "CE Sertifikalı"],
      price: "2024"
    },
    {
      id: 2,
      name: "Ofis Binası İç Merdiven",
      category: "Merdiven Uygulamaları",
      image: "https://ucarecdn.com/f80331a7-23ea-47d6-90d2-c8cff0d4e336/-/format/auto/",
      color: "#dc2626",
      features: ["10mm Pleksi", "Mat Alüminyum", "Özel Tasarım"],
      price: "2023"
    },
    {
      id: 3,
      name: "Cafe Teras Korkuluğu",
      category: "Teras Uygulamaları",
      image: "https://ucarecdn.com/3fddc0f5-97ce-4425-a887-0d4de3d30d0e/-/format/auto/",
      color: "#f59e0b",
      features: ["8mm Pleksi", "Ahşap Detay", "Hava Dayanımı"],
      price: "2023"
    },
    {
      id: 4,
      name: "Rezidans Bahçe Çiti",
      category: "Bahçe Uygulamaları",
      image: "https://ucarecdn.com/5309a376-93ef-463d-ad10-0482e5d78e30/-/format/auto/",
      color: "#8b5cf6",
      features: ["Kompozit Panel", "Galvaniz Profil", "5 Yıl Garanti"],
      price: "2023"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  // Ürün adına göre yönlendirme linki oluştur
  const getProductLink = (productName) => {
    switch (productName) {
      case "Balkon Uygulaması":
        return "/uygulamalar";
      case "Ofis Binası İç Merdiven":
        return "/uygulamalar";
      case "Cafe Teras Korkuluğu":
        return "/uygulamalar";
      case "Rezidans Bahçe Çiti":
        return "/uygulamalar";
      default:
        return "/uygulamalar";
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-slate-800 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#b91c1c]/20 to-purple-600/20 border border-[#b91c1c]/30 rounded-full text-white font-semibold mb-8">
            <Sparkles size={20} className="animate-pulse" />
            <span>Interactive 3D Showcase</span>
            <Zap size={20} className="animate-bounce" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ürünlerimizi{" "}
            <span className="bg-gradient-to-r from-[#b91c1c] via-red-500 to-orange-500 bg-clip-text text-transparent">
              3D Deneyim
            </span>
            le Keşfedin
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Walmco ürünlerinin her detayını interaktif 3D görünümle inceleyin
          </p>
        </div>

        {/* 3D Product Carousel - Dünya Şeklinde */}
        <div 
          ref={containerRef}
          className="relative h-[900px] perspective-1000"
          onMouseMove={handleMouseMove}
        >
          {/* Product Cards Container - Yuvarlak Dünya */}
          <div className="relative w-full h-full flex items-center justify-center">
            {products.map((product, index) => {
              const offset = index - currentIndex;
              const absOffset = Math.abs(offset);
              const isActive = offset === 0;
              const isVisible = absOffset <= 3; // Daha fazla ürün görünür

              if (!isVisible) return null;

              // Yuvarlak dünya hesaplamaları
              const radius = 450; // Dünya yarıçapı
              const angleStep = (2 * Math.PI) / products.length;
              const currentAngle = index * angleStep;
              const targetAngle = currentIndex * angleStep;
              const angleDiff = currentAngle - targetAngle;
              
              // 3D pozisyon hesaplamaları
              const x = Math.sin(angleDiff) * radius;
              const z = Math.cos(angleDiff) * radius;
              const y = Math.sin(angleDiff * 2) * 50; // Hafif yukarı-aşağı hareket

              return (
                <div
                  key={product.id}
                  className={`absolute transition-all duration-1000 ease-in-out transform-gpu ${
                    isAnimating ? 'transition-all duration-1000' : ''
                  }`}
                  style={{
                    transform: `
                      translateX(${x}px) 
                      translateY(${y}px)
                      translateZ(${z}px)
                      rotateY(${angleDiff * 180 / Math.PI}deg)
                      scale(${isActive ? 1 : 0.7 - absOffset * 0.1})
                    `,
                    zIndex: isActive ? 20 : 15 - absOffset,
                    opacity: isActive ? 1 : 0.6 - absOffset * 0.15,
                  }}
                >
                  {/* Product Card */}
                  <Link 
                    to={getProductLink(product.name)}
                    className="block"
                  >
                    <div 
                      className={`relative w-[28rem] h-[32rem] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer ${
                        isActive ? 'shadow-[0_20px_60px_rgba(185,28,28,0.4)]' : ''
                      }`}
                      style={{
                        transform: `
                          rotateX(${mousePosition.y * 10 - 5}deg)
                          rotateY(${mousePosition.x * 10 - 5}deg)
                          translateZ(${isActive ? mousePosition.y * 20 : 0}px)
                        `
                      }}
                    >
                    {/* Product Image - Sadece Resim */}
                    <div className="relative h-full overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        style={{
                          filter: isActive ? 'saturate(1.2) contrast(1.1)' : 'saturate(0.8)'
                        }}
                      />
                      
                      {/* Floating Particles - Sadece Aktif Üründe */}
                      {isActive && [...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
                          style={{
                            left: `${20 + (i * 15)}%`,
                            top: `${30 + Math.sin(i) * 20}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: `${2 + i * 0.3}s`
                          }}
                        />
                      ))}
                    </div>


                  </div>
                </Link>
              </div>
            );
          })}
        </div>

          {/* Navigation Buttons - Dünya Teması */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-600/30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 disabled:opacity-50 border border-blue-400/30"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-purple-600/20 to-blue-500/20 backdrop-blur-sm hover:from-purple-600/30 hover:to-blue-500/30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 disabled:opacity-50 border border-purple-400/30"
          >
            <ChevronRight size={28} />
          </button>

          {/* Slide Indicators - Dünya Teması */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 1000);
                  }
                }}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  currentIndex === index 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-150 shadow-lg shadow-blue-500/50' : 'bg-white/30 hover:bg-white/50 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Ürün Çeşidi", value: "150+", icon: "🏆" },
            { label: "Müşteri", value: "5000+", icon: "👥" },
            { label: "İhracat Ülkesi", value: "28", icon: "🌍" },
            { label: "Yıllık Deneyim", value: "3+", icon: "⭐" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for 3D Effects - Dünya Teması */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1500px;
        }
        .transform-gpu {
          transform-style: preserve-3d;
        }
        
        /* Dünya animasyonu için ek CSS */
        .world-rotation {
          animation: worldRotate 20s linear infinite;
        }
        
        @keyframes worldRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}</style>
    </section>
  );
}