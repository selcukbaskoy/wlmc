import { C as CreatePolymorphicComponent } from "./server-build.js";
import { useState, useRef, useEffect } from "react";
import { Award, Target, Star, Zap, Layers, Shield, Globe, TrendingUp, Sparkles, ChevronRight, Eye, Download, Play, ArrowRight } from "lucide-react";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
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
import "react-router-dom";
import "styled-jsx/style.js";
import "fast-glob";
function ParallaxShowcase() {
  const [scrollY, setScrollY] = useState(0);
  const [inView, setInView] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const showcaseCards = [{
    id: "innovation",
    title: "Yenilikçi Teknoloji",
    subtitle: "AR-GE Laboratuvarı",
    description: "Özgün tasarım ve AR-GE çalışmaları ile geliştirilen, dünya standardında korkuluk sistemleri.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-purple-600 via-blue-500 to-cyan-400",
    glowColor: "#8b5cf6",
    icon: Zap,
    stats: [{
      value: "500+",
      label: "Patent",
      icon: Award
    }, {
      value: "15",
      label: "AR-GE Ekibi",
      icon: Target
    }, {
      value: "2021",
      label: "Kuruluş",
      icon: Star
    }]
  }, {
    id: "quality",
    title: "Premium Kalite",
    subtitle: "Avrupa Standartları",
    description: "CE sertifikalı, darbe dayanımlı ve UV korumalı pleksi korkuluk sistemleri ile maksimum güvenlik.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-red-500 via-orange-500 to-yellow-400",
    glowColor: "#ef4444",
    icon: Shield,
    stats: [{
      value: "CE",
      label: "Sertifika",
      icon: Award
    }, {
      value: "10mm",
      label: "Kalınlık",
      icon: Layers
    }, {
      value: "5 Yıl",
      label: "Garanti",
      icon: Shield
    }]
  }, {
    id: "global",
    title: "Global Erişim",
    subtitle: "28 Ülkeye İhracat",
    description: "Türkiye'den dünyaya açılan kapımızla, uluslararası kalite standartlarında ürün ve hizmet sunuyoruz.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-green-500 via-emerald-500 to-teal-400",
    glowColor: "#10b981",
    icon: Globe,
    stats: [{
      value: "28",
      label: "Ülke",
      icon: Globe
    }, {
      value: "1000+",
      label: "Proje",
      icon: TrendingUp
    }, {
      value: "%100",
      label: "Memnuniyet",
      icon: Star
    }]
  }];
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.2
    });
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
      }, 4e3);
      return () => clearInterval(interval);
    }
  }, [inView, isHovered, showcaseCards.length]);
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };
  const activeCardData = showcaseCards[activeCard];
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      rel: "stylesheet"
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      ref: sectionRef,
      className: "relative min-h-screen overflow-hidden py-20",
      style: {
        fontFamily: "Inter, system-ui, sans-serif",
        background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)"
      },
      onMouseMove: handleMouseMove,
      renderId: "render-d64659d9",
      as: "section",
      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "absolute inset-0 opacity-20",
        renderId: "render-255c4b39",
        as: "div",
        children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "absolute inset-0",
          style: {
            backgroundImage: `
                radial-gradient(circle at 25% 25%, ${activeCardData.glowColor}40 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, ${activeCardData.glowColor}30 0%, transparent 50%),
                linear-gradient(90deg, transparent 24%, ${activeCardData.glowColor}10 25%, ${activeCardData.glowColor}10 26%, transparent 27%, transparent 74%, ${activeCardData.glowColor}10 75%, ${activeCardData.glowColor}10 76%, transparent 77%, transparent),
                linear-gradient(0deg, transparent 24%, ${activeCardData.glowColor}10 25%, ${activeCardData.glowColor}10 26%, transparent 27%, transparent 74%, ${activeCardData.glowColor}10 75%, ${activeCardData.glowColor}10 76%, transparent 77%, transparent)
              `,
            backgroundSize: "100px 100px, 150px 150px, 50px 50px, 50px 50px",
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          },
          renderId: "render-46351d63",
          as: "div"
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "absolute inset-0 overflow-hidden",
        renderId: "render-e1ecda37",
        as: "div",
        children: [...Array(20)].map((_, i) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "absolute animate-pulse",
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            transform: `translate(${mousePosition.x * (5 + i * 2)}px, ${mousePosition.y * (5 + i * 2)}px)`
          },
          renderId: "render-f82f479d",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "w-1 h-1 rounded-full",
            style: {
              backgroundColor: i % 3 === 0 ? activeCardData.glowColor : i % 3 === 1 ? "#ffffff" : "#fbbf24",
              boxShadow: `0 0 10px ${i % 3 === 0 ? activeCardData.glowColor : "#ffffff"}`
            },
            renderId: "render-eb067c69",
            as: "div"
          })
        }, i))
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "max-w-7xl mx-auto px-6 relative z-10",
        renderId: "render-f80a4ce9",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: `text-center mb-16 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
          renderId: "render-187f5d99",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "inline-flex items-center space-x-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8 group hover:bg-white/10 transition-all duration-300",
            renderId: "render-303ce3b2",
            as: "div",
            children: [/* @__PURE__ */ jsx(Sparkles, {
              size: 20,
              className: "text-white animate-spin",
              style: {
                animationDuration: "3s"
              }
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-white font-bold text-lg",
              renderId: "render-e3ac3999",
              as: "span",
              children: "Premium Showcase"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "w-2 h-2 rounded-full animate-pulse",
              style: {
                backgroundColor: activeCardData.glowColor
              },
              renderId: "render-dacd41ee",
              as: "div"
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-5xl md:text-7xl font-black text-white mb-6 leading-tight",
            style: {
              color: "#ffffff",
              textShadow: `0 0 20px ${activeCardData.glowColor}, 0 0 40px ${activeCardData.glowColor}40`
            },
            renderId: "render-ae7a9de1",
            as: "h2",
            children: "Teknoloji & İnovasyon"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-xl text-gray-300 max-w-3xl mx-auto",
            renderId: "render-e5264b78",
            as: "p",
            children: "Geleceğin korkuluk sistemlerini bugünden sizlerle buluşturuyoruz"
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
          renderId: "render-3f594f8b",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "lg:col-span-4 space-y-6",
            renderId: "render-ecf89344",
            as: "div",
            children: showcaseCards.map((card, index) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              onClick: () => setActiveCard(index),
              onMouseEnter: () => setIsHovered(true),
              onMouseLeave: () => setIsHovered(false),
              className: `group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 ${activeCard === index ? "bg-white/10 backdrop-blur-md border-2 shadow-2xl" : "bg-white/5 backdrop-blur-sm border hover:bg-white/8"}`,
              style: {
                borderColor: activeCard === index ? card.glowColor : "rgba(255,255,255,0.1)",
                boxShadow: activeCard === index ? `0 20px 40px ${card.glowColor}30` : ""
              },
              renderId: "render-70b57f4b",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl",
                renderId: "render-ef240689",
                as: "div"
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "relative flex items-center space-x-4",
                renderId: "render-315438c5",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: `w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${activeCard === index ? "scale-110" : "group-hover:scale-105"}`,
                  style: {
                    background: `linear-gradient(135deg, ${card.glowColor}80, ${card.glowColor}40)`,
                    boxShadow: activeCard === index ? `0 10px 30px ${card.glowColor}50` : ""
                  },
                  renderId: "render-e8cf567c",
                  as: "div",
                  children: /* @__PURE__ */ jsx(card.icon, {
                    size: 28,
                    className: "text-white"
                  })
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "flex-1",
                  renderId: "render-ecd5c26b",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-xl font-bold text-white mb-2",
                    renderId: "render-dfcdf781",
                    as: "h3",
                    children: card.title
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-sm text-gray-300 leading-relaxed",
                    renderId: "render-717fafa2",
                    as: "p",
                    children: card.subtitle
                  })]
                }), /* @__PURE__ */ jsx(ChevronRight, {
                  size: 20,
                  className: `text-white transition-transform duration-300 ${activeCard === index ? "translate-x-1" : "group-hover:translate-x-1"}`
                })]
              })]
            }, card.id))
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "lg:col-span-8",
            renderId: "render-ac85001e",
            as: "div",
            children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: `relative transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
              renderId: "render-440be5b3",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group",
                style: {
                  background: `linear-gradient(135deg, ${activeCardData.gradient})`,
                  boxShadow: `0 25px 60px ${activeCardData.glowColor}40`,
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * 3}deg)`
                },
                renderId: "render-f02edd81",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "absolute inset-0 transition-all duration-1000",
                  style: {
                    backgroundImage: `url(${activeCardData.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: `scale(1.1) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
                    filter: "brightness(0.6) saturate(1.2)"
                  },
                  renderId: "render-a209de3f",
                  as: "div"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "absolute inset-0 opacity-60 pointer-events-none",
                  style: {
                    background: `linear-gradient(45deg, transparent 30%, ${activeCardData.glowColor}40 50%, transparent 70%)`,
                    transform: `translateX(${Math.sin(scrollY * 0.01) * 100}px)`
                  },
                  renderId: "render-f497108e",
                  as: "div"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20",
                  renderId: "render-21901b02",
                  as: "div"
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "absolute inset-0 flex flex-col justify-between p-8",
                  renderId: "render-792395d8",
                  as: "div",
                  children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    className: "flex justify-between items-start",
                    renderId: "render-74dff777",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "px-6 py-3 rounded-2xl backdrop-blur-md border border-white/20 text-white font-bold",
                      style: {
                        backgroundColor: `${activeCardData.glowColor}20`
                      },
                      renderId: "render-1b5ef1ed",
                      as: "div",
                      children: activeCardData.subtitle
                    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                      className: "flex space-x-3",
                      renderId: "render-e6dba2a1",
                      as: "div",
                      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        className: "w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110",
                        renderId: "render-5320d1c6",
                        as: "button",
                        children: /* @__PURE__ */ jsx(Eye, {
                          size: 20
                        })
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        className: "w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110",
                        renderId: "render-9455ad33",
                        as: "button",
                        children: /* @__PURE__ */ jsx(Download, {
                          size: 20
                        })
                      })]
                    })]
                  }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    renderId: "render-c7e7d05c",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-4xl md:text-5xl font-black text-white mb-4 leading-tight",
                      renderId: "render-0b6dd392",
                      as: "h3",
                      children: activeCardData.title
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-lg text-gray-200 mb-6 leading-relaxed max-w-lg",
                      renderId: "render-8a9f122c",
                      as: "p",
                      children: activeCardData.description
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "grid grid-cols-3 gap-4 mb-6",
                      renderId: "render-fa377751",
                      as: "div",
                      children: activeCardData.stats.map((stat, index) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                        className: "text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300",
                        renderId: "render-157a36c3",
                        as: "div",
                        children: [/* @__PURE__ */ jsx(stat.icon, {
                          size: 20,
                          className: "text-white mx-auto mb-2"
                        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                          className: "text-2xl font-black mb-1",
                          style: {
                            color: activeCardData.glowColor
                          },
                          renderId: "render-f759c985",
                          as: "div",
                          children: stat.value
                        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                          className: "text-xs text-gray-300",
                          renderId: "render-fa7a097d",
                          as: "div",
                          children: stat.label
                        })]
                      }, index))
                    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                      className: "group flex items-center space-x-3 px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 hover:border-white/50 rounded-2xl text-white font-bold transition-all duration-300 hover:scale-105",
                      style: {
                        boxShadow: `0 10px 30px ${activeCardData.glowColor}30`
                      },
                      renderId: "render-24a28d0e",
                      as: "button",
                      children: [/* @__PURE__ */ jsx(Play, {
                        size: 20
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        renderId: "render-b5f41b26",
                        as: "span",
                        children: "Detaylı İncele"
                      }), /* @__PURE__ */ jsx(ArrowRight, {
                        size: 20,
                        className: "group-hover:translate-x-1 transition-transform"
                      })]
                    })]
                  })]
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "absolute -top-8 -right-8 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-300",
                  style: {
                    background: `linear-gradient(135deg, ${activeCardData.glowColor}, #ffffff)`
                  },
                  renderId: "render-ed3e58ef",
                  as: "div",
                  children: /* @__PURE__ */ jsx(Star, {
                    size: 32,
                    className: "text-white"
                  })
                })]
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "absolute -bottom-6 -right-6 grid grid-cols-2 gap-4",
                renderId: "render-63f1fa52",
                as: "div",
                children: [{
                  value: "2021",
                  label: "Kuruluş",
                  color: "#8b5cf6"
                }, {
                  value: "CE",
                  label: "Sertifika",
                  color: "#ef4444"
                }].map((item, index) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "w-24 h-24 bg-white rounded-2xl flex flex-col items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110",
                  renderId: "render-c9e8abae",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-xl font-black mb-1",
                    style: {
                      color: item.color
                    },
                    renderId: "render-03b11860",
                    as: "div",
                    children: item.value
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-xs text-gray-600",
                    renderId: "render-0a00a9d9",
                    as: "div",
                    children: item.label
                  })]
                }, index))
              })]
            })
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "flex justify-center mt-16",
          renderId: "render-eda50a52",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "flex space-x-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10",
            renderId: "render-07d45136",
            as: "div",
            children: showcaseCards.map((card, index) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              onClick: () => setActiveCard(index),
              className: `w-4 h-4 rounded-full transition-all duration-300 ${activeCard === index ? "scale-125" : "hover:scale-110"}`,
              style: {
                backgroundColor: activeCard === index ? card.glowColor : "rgba(255,255,255,0.3)",
                boxShadow: activeCard === index ? `0 0 20px ${card.glowColor}` : ""
              },
              renderId: "render-dbae0cba",
              as: "button"
            }, card.id))
          })
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "fixed top-0 left-0 w-full h-1 bg-black/20 z-50",
        renderId: "render-e9f4047e",
        as: "div",
        children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "h-full transition-all duration-300",
          style: {
            width: `${Math.min(scrollY / (window.innerHeight * 2) * 100, 100)}%`,
            background: `linear-gradient(90deg, ${activeCardData.glowColor}, #ffffff)`
          },
          renderId: "render-2af26966",
          as: "div"
        })
      })]
    })]
  });
}
export {
  ParallaxShowcase as default
};
