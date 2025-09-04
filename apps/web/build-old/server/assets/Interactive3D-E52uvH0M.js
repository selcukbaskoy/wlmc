import { C as CreatePolymorphicComponent } from "./server-build.js";
import _JSXStyle from "styled-jsx/style.js";
import { useState, useRef, useEffect } from "react";
import { Sparkles, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { jsxs, jsx } from "react/jsx-runtime";
import "node:stream";
import "@react-router/node";
import "react-router";
import "isbot";
import "react-dom/server";
import "@react-aria/button";
import "react-i18next";
import "i18next";
import "i18next-browser-languagedetector";
import "./index-Ccl8Qzgl.js";
import "node:async_hooks";
import "node:console";
import "@auth/core";
import "@auth/core/providers/credentials";
import "@hono/auth-js";
import "@neondatabase/serverless";
import "argon2";
import "hono";
import "hono/compress";
import "hono/context-storage";
import "hono/cors";
import "hono/proxy";
import "hono/request-id";
import "hono/factory";
import "@hono/node-server";
import "@hono/node-server/serve-static";
import "hono/logger";
import "serialize-error";
import "ws";
import "@auth/core/jwt";
import "node:path";
import "node:fs";
import "node:url";
import "@react-router/dev/routes";
import "clean-stack";
import "node:fs/promises";
import "@hono/auth-js/react";
import "sonner";
import "zustand";
import "react-idle-timer";
import "@tanstack/react-query";
import "fast-glob";
function Interactive3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const containerRef = useRef(null);
  const products = [{
    id: 1,
    name: "Balkon Uygulaması",
    category: "Balkon Uygulamaları",
    image: "https://ucarecdn.com/5309a376-93ef-463d-ad10-0482e5d78e30/-/format/auto/",
    color: "#b91c1c",
    features: ["12mm Pleksi", "Alüminyum Profil", "CE Sertifikalı"],
    price: "2024"
  }, {
    id: 2,
    name: "Ofis Binası İç Merdiven",
    category: "Merdiven Uygulamaları",
    image: "https://ucarecdn.com/f80331a7-23ea-47d6-90d2-c8cff0d4e336/-/format/auto/",
    color: "#dc2626",
    features: ["10mm Pleksi", "Mat Alüminyum", "Özel Tasarım"],
    price: "2023"
  }, {
    id: 3,
    name: "Cafe Teras Korkuluğu",
    category: "Teras Uygulamaları",
    image: "https://ucarecdn.com/3fddc0f5-97ce-4425-a887-0d4de3d30d0e/-/format/auto/",
    color: "#f59e0b",
    features: ["8mm Pleksi", "Ahşap Detay", "Hava Dayanımı"],
    price: "2023"
  }, {
    id: 4,
    name: "Rezidans Bahçe Çiti",
    category: "Bahçe Uygulamaları",
    image: "https://ucarecdn.com/5309a376-93ef-463d-ad10-0482e5d78e30/-/format/auto/",
    color: "#8b5cf6",
    features: ["Kompozit Panel", "Galvaniz Profil", "5 Yıl Garanti"],
    price: "2023"
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5e3);
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
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "jsx-669067072 py-24 px-6 bg-gradient-to-br from-gray-900 via-slate-800 to-black overflow-hidden",
    renderId: "render-507d7556",
    as: "section",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "jsx-669067072 max-w-7xl mx-auto",
      renderId: "render-e41accaa",
      as: "div",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "jsx-669067072 text-center mb-16",
        renderId: "render-e8e26d40",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-669067072 inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#b91c1c]/20 to-purple-600/20 border border-[#b91c1c]/30 rounded-full text-white font-semibold mb-8",
          renderId: "render-b0113ac9",
          as: "div",
          children: [/* @__PURE__ */ jsx(Sparkles, {
            size: 20,
            className: "animate-pulse"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-669067072",
            renderId: "render-7c291f70",
            as: "span",
            children: "Interactive 3D Showcase"
          }), /* @__PURE__ */ jsx(Zap, {
            size: 20,
            className: "animate-bounce"
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-669067072 text-5xl md:text-6xl font-black text-white mb-6 leading-tight",
          renderId: "render-c1ea64d8",
          as: "h2",
          children: ["Ürünlerimizi", " ", /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-669067072 bg-gradient-to-r from-[#b91c1c] via-red-500 to-orange-500 bg-clip-text text-transparent",
            renderId: "render-7370b7ed",
            as: "span",
            children: "3D Deneyim"
          }), "le Keşfedin"]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "jsx-669067072 text-xl text-gray-300 max-w-3xl mx-auto",
          renderId: "render-031b5a7c",
          as: "p",
          children: "Walmco ürünlerinin her detayını interaktif 3D görünümle inceleyin"
        })]
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        ref: containerRef,
        onMouseMove: handleMouseMove,
        className: "jsx-669067072 relative h-[900px] perspective-1000",
        renderId: "render-a95c7500",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "jsx-669067072 relative w-full h-full flex items-center justify-center",
          renderId: "render-10e4e819",
          as: "div",
          children: products.map((product, index) => {
            const offset = index - currentIndex;
            const absOffset = Math.abs(offset);
            const isActive = offset === 0;
            const isVisible = absOffset <= 3;
            if (!isVisible) return null;
            const radius = 450;
            const angleStep = 2 * Math.PI / products.length;
            const currentAngle = index * angleStep;
            const targetAngle = currentIndex * angleStep;
            const angleDiff = currentAngle - targetAngle;
            const x = Math.sin(angleDiff) * radius;
            const z = Math.cos(angleDiff) * radius;
            const y = Math.sin(angleDiff * 2) * 50;
            return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                transform: `
                      translateX(${x}px) 
                      translateY(${y}px)
                      translateZ(${z}px)
                      rotateY(${angleDiff * 180 / Math.PI}deg)
                      scale(${isActive ? 1 : 0.7 - absOffset * 0.1})
                    `,
                zIndex: isActive ? 20 : 15 - absOffset,
                opacity: isActive ? 1 : 0.6 - absOffset * 0.15
              },
              className: `jsx-669067072 absolute transition-all duration-1000 ease-in-out transform-gpu ${isAnimating ? "transition-all duration-1000" : ""}`,
              renderId: "render-cc334a19",
              as: "div",
              children: /* @__PURE__ */ jsx(Link, {
                to: getProductLink(product.name),
                className: "block",
                children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  style: {
                    transform: `
                          rotateX(${mousePosition.y * 10 - 5}deg)
                          rotateY(${mousePosition.x * 10 - 5}deg)
                          translateZ(${isActive ? mousePosition.y * 20 : 0}px)
                        `
                  },
                  className: `jsx-669067072 relative w-[28rem] h-[32rem] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer ${isActive ? "shadow-[0_20px_60px_rgba(185,28,28,0.4)]" : ""}`,
                  renderId: "render-e40774c7",
                  as: "div",
                  children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    className: "jsx-669067072 relative h-full overflow-hidden",
                    renderId: "render-50717297",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      src: product.image,
                      alt: product.name,
                      style: {
                        filter: isActive ? "saturate(1.2) contrast(1.1)" : "saturate(0.8)"
                      },
                      className: "jsx-669067072 w-full h-full object-cover transition-transform duration-700 hover:scale-110",
                      renderId: "render-f78d5bbe",
                      as: "img"
                    }), isActive && [...Array(8)].map((_, i) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      style: {
                        left: `${20 + i * 15}%`,
                        top: `${30 + Math.sin(i) * 20}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${2 + i * 0.3}s`
                      },
                      className: "jsx-669067072 absolute w-1 h-1 bg-white rounded-full opacity-70 animate-pulse",
                      renderId: "render-5f84bdc2",
                      as: "div"
                    }, i))]
                  })
                })
              })
            }, product.id);
          })
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          onClick: prevSlide,
          disabled: isAnimating,
          className: "jsx-669067072 absolute left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-600/30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 disabled:opacity-50 border border-blue-400/30",
          renderId: "render-79ba6a56",
          as: "button",
          children: /* @__PURE__ */ jsx(ChevronLeft, {
            size: 28
          })
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          onClick: nextSlide,
          disabled: isAnimating,
          className: "jsx-669067072 absolute right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-purple-600/20 to-blue-500/20 backdrop-blur-sm hover:from-purple-600/30 hover:to-blue-500/30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 disabled:opacity-50 border border-purple-400/30",
          renderId: "render-67c8790f",
          as: "button",
          children: /* @__PURE__ */ jsx(ChevronRight, {
            size: 28
          })
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "jsx-669067072 absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20",
          renderId: "render-978a5811",
          as: "div",
          children: products.map((_, index) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            onClick: () => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 1e3);
              }
            },
            className: `jsx-669067072 w-4 h-4 rounded-full transition-all duration-500 ${currentIndex === index ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-150 shadow-lg shadow-blue-500/50" : "bg-white/30 hover:bg-white/50 hover:scale-110"}`,
            renderId: "render-3a12fa44",
            as: "button"
          }, index))
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "jsx-669067072 mt-24 grid grid-cols-2 md:grid-cols-4 gap-8",
        renderId: "render-1f3a1578",
        as: "div",
        children: [{
          label: "Ürün Çeşidi",
          value: "150+",
          icon: "🏆"
        }, {
          label: "Müşteri",
          value: "5000+",
          icon: "👥"
        }, {
          label: "İhracat Ülkesi",
          value: "28",
          icon: "🌍"
        }, {
          label: "Yıllık Deneyim",
          value: "3+",
          icon: "⭐"
        }].map((stat, index) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-669067072 text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300",
          renderId: "render-c502ffb1",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-669067072 text-4xl mb-2",
            renderId: "render-2af545ae",
            as: "div",
            children: stat.icon
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-669067072 text-3xl font-black text-white mb-1",
            renderId: "render-8b02226b",
            as: "div",
            children: stat.value
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-669067072 text-sm text-gray-400",
            renderId: "render-1a829738",
            as: "div",
            children: stat.label
          })]
        }, index))
      })]
    }), /* @__PURE__ */ jsx(_JSXStyle, {
      id: "669067072",
      children: [".perspective-1000{-webkit-perspective:1500px;-moz-perspective:1500px;-ms-perspective:1500px;perspective:1500px;}", ".transform-gpu{-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;}", ".world-rotation{-webkit-animation:worldRotate 20s linear infinite;animation:worldRotate 20s linear infinite;}", "@-webkit-keyframes worldRotate{from{-webkit-transform:rotateY(0deg);-ms-transform:rotateY(0deg);transform:rotateY(0deg);}to{-webkit-transform:rotateY(360deg);-ms-transform:rotateY(360deg);transform:rotateY(360deg);}}", "@keyframes worldRotate{from{-webkit-transform:rotateY(0deg);-ms-transform:rotateY(0deg);transform:rotateY(0deg);}to{-webkit-transform:rotateY(360deg);-ms-transform:rotateY(360deg);transform:rotateY(360deg);}}"]
    })]
  });
}
export {
  Interactive3D as default
};
