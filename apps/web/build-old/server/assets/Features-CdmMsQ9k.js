import { C as CreatePolymorphicComponent } from "./server-build.js";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Sparkles, Shield, Award, Globe, Zap, Star, Users, Clock, Truck, ArrowUpRight, TrendingUp, CheckCircle, Heart, Target } from "lucide-react";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import "node:stream";
import "@react-router/node";
import "react-router";
import "isbot";
import "react-dom/server";
import "@react-aria/button";
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
import "react-router-dom";
import "styled-jsx/style.js";
import "fast-glob";
function Features() {
  const {
    t
  } = useTranslation();
  const [visibleCards, setVisibleCards] = useState(/* @__PURE__ */ new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setVisibleCards((prev) => /* @__PURE__ */ new Set([...prev, index]));
        }
      });
    }, {
      threshold: 0.1
    });
    const cards = document.querySelectorAll("[data-feature-card]");
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  const features = [{
    icon: Shield,
    title: "CE Sertifikalı Üretim",
    description: "Avrupa standartlarında güvenlik ve kalite belgeleri ile üretim yapıyoruz.",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-500/20 to-blue-600/20"
  }, {
    icon: Award,
    title: "5 Yıl Garanti",
    description: "Tüm ürünlerimizde 5 yıl tam garanti ile müşteri memnuniyeti sağlıyoruz.",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "from-yellow-500/20 to-yellow-600/20"
  }, {
    icon: Globe,
    title: "28 Ülkeye İhracat",
    description: "Dünya çapında 28 ülkeye ihracat yaparak global kalite standartlarını karşılıyoruz.",
    color: "from-green-500 to-green-600",
    bgColor: "from-green-500/20 to-green-600/20"
  }, {
    icon: Zap,
    title: "Hızlı Teslimat",
    description: "Sipariş sonrası 24-48 saat içinde hızlı teslimat ile müşteri beklentilerini aşıyoruz.",
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-500/20 to-purple-600/20"
  }, {
    icon: Star,
    title: "Premium Kalite",
    description: "En yüksek kalite standartlarında üretim yaparak müşteri memnuniyetini garanti ediyoruz.",
    color: "from-orange-500 to-orange-600",
    bgColor: "from-orange-500/20 to-orange-600/20"
  }, {
    icon: Users,
    title: "Uzman Ekip",
    description: "Deneyimli mühendis ve teknisyenlerden oluşan uzman ekibimizle hizmet veriyoruz.",
    color: "from-red-500 to-red-600",
    bgColor: "from-red-500/20 to-red-600/20"
  }, {
    icon: Clock,
    title: "7/24 Destek",
    description: "Müşteri hizmetlerimiz 7 gün 24 saat kesintisiz olarak hizmetinizde.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "from-indigo-500/20 to-indigo-600/20"
  }, {
    icon: Truck,
    title: "Ücretsiz Montaj",
    description: "Tüm ürünlerimizde profesyonel montaj ekibi ile ücretsiz kurulum hizmeti sunuyoruz.",
    color: "from-teal-500 to-teal-600",
    bgColor: "from-teal-500/20 to-teal-600/20"
  }];
  const stats = [{
    icon: CheckCircle,
    label: "Tamamlanan Proje",
    value: "1500+",
    color: "#10b981"
  }, {
    icon: TrendingUp,
    label: "Müşteri Memnuniyeti",
    value: "%98",
    color: "#f59e0b"
  }, {
    icon: Heart,
    label: "Mutlu Müşteri",
    value: "1200+",
    color: "#ef4444"
  }, {
    icon: Target,
    label: "Başarı Oranı",
    value: "%99",
    color: "#8b5cf6"
  }];
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "py-16 md:py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden",
    renderId: "render-a76f49af",
    as: "section",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "absolute inset-0 overflow-hidden pointer-events-none",
      renderId: "render-12c52074",
      as: "div",
      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse",
        renderId: "render-34222590",
        as: "div"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-red-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse",
        style: {
          animationDelay: "2s"
        },
        renderId: "render-ac075b01",
        as: "div"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse",
        style: {
          animationDelay: "4s"
        },
        renderId: "render-b1f48be6",
        as: "div"
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "max-w-[1200px] mx-auto relative z-10",
      renderId: "render-58cd9da3",
      as: "div",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "text-center mb-16",
        renderId: "render-bd3ae4cb",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "flex justify-center mb-6",
          renderId: "render-b664db30",
          as: "div",
          children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#b91c1c]/10 to-red-600/10 rounded-full border border-[#b91c1c]/20",
            renderId: "render-5ce313eb",
            as: "div",
            children: [/* @__PURE__ */ jsx(Sparkles, {
              size: 20,
              className: "text-[#b91c1c]"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-[#b91c1c] font-semibold",
              renderId: "render-684ab309",
              as: "span",
              children: "Premium Avantajlar"
            })]
          })
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "text-4xl md:text-6xl font-black text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-[#b91c1c] to-gray-900 bg-clip-text text-transparent",
          renderId: "render-b4d59382",
          as: "h2",
          children: "Neden WALMCO?"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",
          renderId: "render-79a59e07",
          as: "p",
          children: t("features.advantages")
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20",
        renderId: "render-0969fab7",
        as: "div",
        children: features.map((feature, index) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          "data-feature-card": true,
          "data-index": index,
          className: `group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-gray-100 overflow-hidden ${visibleCards.has(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`,
          style: {
            transitionDelay: `${index * 100}ms`,
            animation: visibleCards.has(index) ? `slideInUp 0.6s ease-out ${index * 100}ms both` : "none"
          },
          onMouseEnter: () => setHoveredCard(index),
          onMouseLeave: () => setHoveredCard(null),
          renderId: "render-555078a5",
          as: "div",
          children: [hoveredCard === index && /* @__PURE__ */ jsxs(Fragment, {
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping",
              renderId: "render-2882ae6e",
              as: "div"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-ping",
              style: {
                animationDelay: "0.5s"
              },
              renderId: "render-7b216440",
              as: "div"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "absolute top-6 right-12 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping",
              style: {
                animationDelay: "1s"
              },
              renderId: "render-dbffd92d",
              as: "div"
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: `absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`,
            renderId: "render-49c82c26",
            as: "div"
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "relative z-10",
            renderId: "render-e6c55351",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "flex items-center justify-between mb-6",
              renderId: "render-dc5a676b",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: `w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.bgColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`,
                renderId: "render-3ef9a1b5",
                as: "div",
                children: /* @__PURE__ */ jsx(feature.icon, {
                  size: 36,
                  className: `bg-gradient-to-br ${feature.color} bg-clip-text text-transparent group-hover:text-white transition-colors duration-300`
                })
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0",
                renderId: "render-057a6cae",
                as: "div",
                children: /* @__PURE__ */ jsx(ArrowUpRight, {
                  size: 24,
                  className: "text-gray-400 group-hover:text-[#b91c1c]"
                })
              })]
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300",
              renderId: "render-b7ba0e05",
              as: "h3",
              children: feature.title
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300",
              renderId: "render-d58aaa74",
              as: "p",
              children: feature.description
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "mt-6 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#b91c1c] to-red-600 rounded-full transition-all duration-700 ease-out",
              renderId: "render-591cc2e5",
              as: "div"
            })]
          })]
        }, index))
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "relative bg-gradient-to-r from-[#b91c1c] to-red-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl",
        renderId: "render-bf806dba",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "absolute inset-0 opacity-10",
          renderId: "render-ea3784e6",
          as: "div",
          children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "absolute top-0 left-0 w-full h-full",
            renderId: "render-85b97fbf",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse",
              renderId: "render-bb7df0e2",
              as: "div"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full animate-pulse",
              style: {
                animationDelay: "1s"
              },
              renderId: "render-c9d0b1b2",
              as: "div"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/20 rounded-full animate-pulse",
              style: {
                animationDelay: "2s"
              },
              renderId: "render-87d73a1d",
              as: "div"
            })]
          })
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "relative z-10",
          renderId: "render-db7c88a0",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "text-center mb-12",
            renderId: "render-f66179ff",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "flex justify-center mb-4",
              renderId: "render-be429452",
              as: "div",
              children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm",
                renderId: "render-77ff38dc",
                as: "div",
                children: [/* @__PURE__ */ jsx(TrendingUp, {
                  size: 20,
                  className: "text-white"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-white font-semibold",
                  renderId: "render-713a024a",
                  as: "span",
                  children: "Başarı Hikayemiz"
                })]
              })
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-3xl md:text-4xl font-black mb-4 text-white",
              renderId: "render-06ff8a7b",
              as: "h3",
              children: "Rakamlarla Walmco"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-xl text-red-100",
              renderId: "render-d4eb8b53",
              as: "p",
              children: "Başarılarımızı sayılarla anlatıyoruz"
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "grid grid-cols-2 md:grid-cols-4 gap-8",
            renderId: "render-92f11a49",
            as: "div",
            children: stats.map((stat, index) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "text-center group cursor-pointer transform hover:scale-105 transition-all duration-300",
              style: {
                animationDelay: `${index * 200}ms`
              },
              renderId: "render-4f887c41",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "flex justify-center mb-4",
                renderId: "render-f714ea14",
                as: "div",
                children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "w-20 h-20 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 shadow-lg",
                  renderId: "render-6795f8f5",
                  as: "div",
                  children: /* @__PURE__ */ jsx(stat.icon, {
                    size: 36,
                    className: "text-white group-hover:scale-110 transition-transform duration-300"
                  })
                })
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-4xl md:text-5xl font-black mb-2 text-white group-hover:scale-110 transition-transform duration-300",
                renderId: "render-06a01833",
                as: "div",
                children: stat.value
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-sm text-red-100 font-medium group-hover:text-white transition-colors duration-300",
                renderId: "render-b727a940",
                as: "div",
                children: stat.label
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "mt-2 w-0 group-hover:w-full h-0.5 bg-white/50 mx-auto transition-all duration-500 ease-out rounded-full",
                renderId: "render-5f8779e2",
                as: "div"
              })]
            }, index))
          })]
        })]
      })]
    })]
  });
}
export {
  Features as default
};
