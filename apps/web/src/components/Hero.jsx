import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Play, ArrowRight, Volume2, VolumeX } from "lucide-react";
import { getImageUrl } from "../utils/imageUtils";

export default function Hero() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const videoRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      description: t("hero.description"),
      image: "/hero-images/pleksi-korkuluk-showcase.jpg",
      cta: t("hero.viewProducts"),
      ctaLink: "/urunler",
      badge: t("features.premiumQuality"),
    },
    {
      id: 2,
      title: t("hero.furniture.title"),
      subtitle: t("hero.furniture.subtitle"),
      description: t("hero.furniture.description"),
      image: "/hero-images/pleksi-mobilya-modern.jpg",
      cta: t("hero.viewProducts"),
      ctaLink: "/urunler",
      badge: t("hero.modernDesignBadge"),
    },
    {
      id: 3,
      title: t("hero.custom.title"),
      subtitle: t("hero.custom.subtitle"),
      description: t("hero.custom.description"),
      image: "/hero-images/ozel-tasarim-cozumler.jpg",
      cta: t("nav.contact"),
      ctaLink: "/iletisim",
      badge: t("hero.customDesignBadge"),
    },
  ];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 15000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, slides.length]);

  // Video yüklendiğinde otomatik olarak sesi aç
  useEffect(() => {
    if (videoLoaded && videoRef.current) {
      // Video yüklendiğinde sesi aç ve volume'u ayarla
      videoRef.current.muted = false;
      videoRef.current.volume = 0.7;
      setIsMuted(false);
    }
  }, [videoLoaded]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPlaying(false);
    // Video slide'ından çıkıldığında video state'ini sıfırla
    if (index !== 0) {
      setVideoLoaded(false);
      setVideoPlaying(true);
    }
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const goToPrevious = () => {
    const newSlide = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newSlide);
    setIsPlaying(false);
    // Video slide'ından çıkıldığında video state'ini sıfırla
    if (newSlide !== 0) {
      setVideoLoaded(false);
      setVideoPlaying(true);
    }
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const goToNext = () => {
    const newSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(newSlide);
    setIsPlaying(false);
    // Video slide'ından çıkıldığında video state'ini sıfırla
    if (newSlide !== 0) {
      setVideoLoaded(false);
      setVideoPlaying(true);
    }
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
        setVideoPlaying(false);
      } else {
        videoRef.current.play();
        setVideoPlaying(true);
      }
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        {currentSlide === 0 ? (
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        ) : (
          <>
            <img
              src={getImageUrl(currentSlideData.image)}
              alt={currentSlideData.title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </>
        )}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span>{currentSlideData.badge}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span 
                className="block text-white"
                style={{
                  textShadow: `
                    0 0 20px rgba(185, 28, 28, 0.8),
                    0 0 40px rgba(185, 28, 28, 0.6),
                    0 0 60px rgba(185, 28, 28, 0.4),
                    0 0 80px rgba(185, 28, 28, 0.2)
                  `
                }}
              >
                {currentSlideData.title}
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300 mt-4">
                {currentSlideData.subtitle}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              {currentSlideData.description}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={currentSlideData.ctaLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {currentSlideData.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/iletisim"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                Ücretsiz Keşif
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">28</div>
                <div className="text-sm text-gray-400">Ülkeye İhracat</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">5</div>
                <div className="text-sm text-gray-400">Yıl Garanti</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">1000+</div>
                <div className="text-sm text-gray-400">Proje Tamamlandı</div>
              </div>
            </div>
          </div>

          {/* Video Display */}
          <div className="relative">
            <div
              className="relative h-[900px] w-[1800px] rounded-[40px] overflow-hidden shadow-2xl border border-white/10"
              style={{
                background: `linear-gradient(135deg, rgba(185, 28, 28, 0.15) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(139, 92, 246, 0.1) 100%)`,
                boxShadow: `
                  0 40px 100px rgba(185, 28, 28, 0.4),
                  0 20px 60px rgba(0, 0, 0, 0.6),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
                position: 'relative',
                width: '100%',
                height: '100%'
              }}
            >
              {/* Main Content Display */}
              {currentSlide === 0 ? (
                // Pleksi Korkuluk Sistemleri - Video göster
                <>
                  {!videoLoaded && (
                    <img
                      src={getImageUrl(currentSlideData.image)}
                      alt={currentSlideData.title}
                      className="w-full h-full object-cover transition-all duration-1000"
                    />
                  )}
                  <video
                    ref={videoRef}
                    key={currentSlide}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                      videoLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                    style={{ 
                      objectPosition: 'center',
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%'
                    }}
                    onLoadedData={(e) => {
                      setVideoLoaded(true);
                      e.target.muted = isMuted;
                      e.target.volume = 0.7;
                    }}
                    onPlay={() => {
                      setVideoPlaying(true);
                      if (videoRef.current) {
                        videoRef.current.muted = isMuted;
                        videoRef.current.volume = 0.7;
                      }
                    }}
                    onPause={() => {
                      setVideoPlaying(false);
                    }}
                    onError={() => {
                      setVideoLoaded(false);
                    }}
                  >
                    <source 
                      src="https://walmco.com/Video/Walmco%20Pleksi%20Korkuluk.mov" 
                      type="video/quicktime" 
                    />
                    <source 
                      src="https://walmco.com/Video/Walmco%20Pleksi%20Korkuluk.mov" 
                      type="video/mp4" 
                    />
                    Tarayıcınız video oynatmayı desteklemiyor.
                  </video>
                </>
              ) : (
                // Diğer slide'lar - Resim göster
                <img
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  className="w-full h-full object-cover transition-all duration-1000"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,' + btoa(`
                      <svg width="1800" height="900" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1800" height="900" fill="#1f2937"/>
                        <text x="900" y="420" text-anchor="middle" font-family="Arial" font-size="48" fill="#b91c1c">WALMCO</text>
                        <text x="900" y="480" text-anchor="middle" font-family="Arial" font-size="32" fill="#9ca3af">${currentSlideData.title}</text>
                      </svg>
                    `);
                  }}
                />
              )}

              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Enhanced Category Badge */}
              <div className="absolute top-6 left-6 flex items-center space-x-3 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                <span className="text-sm font-bold text-white">
                  {currentSlideData.badge}
                </span>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Video Controls - Sadece ilk slide'da göster */}
              {currentSlide === 0 && (
                <>
                  {/* Video Sound Control */}
                  {videoLoaded && (
                    <button
                      onClick={toggleMute}
                      className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
                      aria-label={isMuted ? "Sesi aç" : "Sesi kapat"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                  )}

                  {/* Video Play/Pause Control */}
                  {videoLoaded && (
                    <button
                      onClick={toggleVideoPlay}
                      className="absolute top-6 right-20 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
                      aria-label={videoPlaying ? "Videoyu durdur" : "Videoyu oynat"}
                    >
                      {videoPlaying ? (
                        <div className="w-5 h-5 border-2 border-white border-l-transparent rounded-full"></div>
                      ) : (
                        <Play className="w-5 h-5 text-white ml-1" />
                      )}
                    </button>
                  )}

                  {/* Video Loading Indicator */}
                  {!videoLoaded && (
                    <div className="absolute top-6 right-6 flex items-center space-x-2 px-3 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-xs text-white font-medium">Video Yükleniyor...</span>
                    </div>
                  )}

                  {/* Video Status Indicator */}
                  {videoLoaded && (
                    <div className="absolute bottom-20 left-6 flex items-center space-x-2 px-3 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                      <div className={`w-2 h-2 rounded-full ${videoPlaying ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                      <span className="text-xs text-white font-medium">
                        {videoPlaying ? 'Video Oynatılıyor' : 'Video Duraklatıldı'}
                      </span>
                    </div>
                  )}
                </>
              )}

              {/* Product Navigation */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-white scale-125"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-8 right-8 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <div className="w-6 h-6 border-2 border-white border-l-transparent rounded-full animate-spin" />
        ) : (
          <Play className="w-6 h-6 text-white ml-1" />
        )}
      </button>
    </section>
  );
}
