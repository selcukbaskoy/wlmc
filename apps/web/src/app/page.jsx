"use client";

import { useEffect, lazy, Suspense } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { createSmartAsyncComponent, globalScheduler, runWhenIdle } from "../utils/asyncComponentLoader.jsx";

// 🚀 SMART ASYNC COMPONENT LOADING FOR PERFORMANCE
const LazyMainProductsSection = createSmartAsyncComponent(
  () => import("../components/MainProductsSection"),
  { threshold: 0.1, rootMargin: '100px' }
);

const LazyInteractive3D = createSmartAsyncComponent(
  () => import("../components/Interactive3D"),
  { threshold: 0.1, rootMargin: '200px' }
);

const LazyParallaxShowcase = createSmartAsyncComponent(
  () => import("../components/ParallaxShowcase"),
  { threshold: 0.1, rootMargin: '200px' }
);

const LazyFeatures = createSmartAsyncComponent(
  () => import("../components/Features"),
  { threshold: 0.1, rootMargin: '150px' }
);

const LazyFooter = createSmartAsyncComponent(
  () => import("../components/Footer"),
  { threshold: 0.1, rootMargin: '100px' }
);

import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductPageGuard from "../components/ProductPageGuard";

export const meta = () => [
  { title: "WALMCO - Pleksi Korkuluk Sistemleri ve Alüminyum Profiller | Premium Kalite" },
  { name: "description", content: "Pleksi ve alüminyum korkuluk sistemlerinde uzman üretici. 28 ülkeye ihracat, 5 yıl garanti, özel tasarım. Ücretsiz keşif için hemen iletişime geçin!" },
  { name: "keywords", content: "pleksi korkuluk, pleksi küpeşte, pleksi dikme, pleksi baba, pleksi topuz, plexi korkuluk, plexi küpeşte, alüminyum korkuluk, alüminyum küpeşte, camlı korkuluk, cam korkuluk, İstanbul pleksi korkuluk üreticisi, İstanbul alüminyum aksesuar üreticisi, pleksi korkuluk montaj, pleksi korkuluk garanti, pleksi levha, pleksiglas korkuluk, pleksiglass küpeşte" },
  { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
  { property: "og:title", content: "WALMCO - Pleksi Korkuluk Sistemleri ve Alüminyum Profiller" },
  { property: "og:description", content: "Pleksi ve alüminyum korkuluk sistemlerinde uzman üretici. 28 ülkeye ihracat, 5 yıl garanti, özel tasarım. Ücretsiz keşif için hemen iletişime geçin!" },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://ucarecdn.com/05ca1ea7-798a-46f1-8efd-991309b1875b/-/format/auto/" },
  { property: "og:url", content: "https://walmco.com" },
  { property: "og:site_name", content: "WALMCO - Pleksi ve Alüminyum Sistemleri" },
  { property: "og:locale", content: "tr_TR" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "WALMCO - Pleksi Korkuluk Sistemleri ve Alüminyum Profiller" },
  { name: "twitter:description", content: "Pleksi ve alüminyum korkuluk sistemlerinde uzman üretici. 28 ülkeye ihracat, 5 yıl garanti, özel tasarım." },
  { name: "twitter:image", content: "https://ucarecdn.com/05ca1ea7-798a-46f1-8efd-991309b1875b/-/format/auto/" },
  { name: "twitter:image:alt", content: "WALMCO Pleksi Korkuluk Sistemleri" },
];

export const links = () => [
  { rel: "canonical", href: "https://walmco.com" },
  { rel: "alternate", href: "https://walmco.com", hreflang: "tr" },
  { rel: "alternate", href: "https://walmco.com", hreflang: "tr-TR" },
];

export default function HomePage() {
  const location = useLocation();
  
  // Redirect old Alüminyum URLs to /urunler
  if (location.pathname === '/aluminyum' || location.pathname.startsWith('/kategoriler/aluminyum')) {
    return <Navigate to="/urunler" replace />;
  }
  
  // 🚀 SMART COMPONENT PRELOADING WITH PRIORITY QUEUE
  useEffect(() => {
    const preloadComponents = async () => {
      // High priority: Above-the-fold components
      await globalScheduler.schedule(
        () => import("../components/MainProductsSection"),
        'high'
      );

      // Normal priority: Second fold components
      globalScheduler.schedule(
        () => import("../components/Interactive3D"),
        'normal'
      );

      globalScheduler.schedule(
        () => import("../components/Features"),
        'normal'
      );

      // Low priority: Below-the-fold components
      globalScheduler.schedule(
        () => import("../components/ParallaxShowcase"),
        'low'
      );

      globalScheduler.schedule(
        () => import("../components/Footer"),
        'low'
      );
    };
    
    // Start preloading when browser is idle
    runWhenIdle(preloadComponents, { timeout: 2000 });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER SECTION */}
      <Header />

      {/* HERO SECTION */}
      <Hero />

      {/* MAIN PRODUCTS SECTION */}
      <ProductPageGuard>
        <LazyMainProductsSection />
      </ProductPageGuard>

      {/* INTERACTIVE 3D SECTION */}
      <LazyInteractive3D />

      {/* PARALLAX SHOWCASE SECTION */}
      <LazyParallaxShowcase />

      {/* FEATURES SECTION */}
      <LazyFeatures />

      {/* FOOTER SECTION */}
      <LazyFooter />
    </div>
  );
}
