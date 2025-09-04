import { p as products, C as CreatePolymorphicComponent } from "./server-build.js";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ShoppingCart, Search, ArrowRight, Star } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
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
function MainProductsSection() {
  const {
    t
  } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const featuredProducts = products.slice(0, 3);
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    const searchResults = products.filter((product) => {
      const productCode = product.specs?.Model || "";
      const productName = product.name.toLowerCase();
      const searchLower = searchQuery.toLowerCase();
      return productCode.toLowerCase().includes(searchLower) || productName.includes(searchLower);
    });
    setFilteredProducts(searchResults);
    setIsSearching(false);
  }, [searchQuery]);
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
    }
  };
  const handleProductClick = (product) => {
    if (product.detailLink) {
      window.location.href = product.detailLink;
    }
  };
  const handleQuoteRequest = (product) => {
    const productInfo = {
      name: product.name,
      category: product.category,
      description: product.description,
      image: product.image,
      price: product.price || "Fiyat için teklif alın"
    };
    window.location.href = `/iletisim?product=${encodeURIComponent(JSON.stringify(productInfo))}`;
  };
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    className: "py-16 px-6 bg-white",
    renderId: "render-bcc0d4db",
    as: "section",
    children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "max-w-[1200px] mx-auto",
      renderId: "render-828ade5a",
      as: "div",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "text-center mb-12",
        renderId: "render-516f0562",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "inline-flex items-center space-x-2 px-4 py-2 bg-[#b91c1c]/10 text-[#b91c1c] rounded-full text-sm font-medium mb-6",
          renderId: "render-bf94788e",
          as: "div",
          children: [/* @__PURE__ */ jsx(ShoppingCart, {
            size: 16
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            renderId: "render-8dcefce8",
            as: "span",
            children: t("products.catalog")
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight",
          renderId: "render-4847ead3",
          as: "h2",
          children: t("products.premiumSeries")
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8",
          renderId: "render-8398d85f",
          as: "p",
          children: t("products.description")
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "max-w-md mx-auto mb-8",
          renderId: "render-7c13b2d9",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            onSubmit: handleSearch,
            className: "relative",
            renderId: "render-f26f4c81",
            as: "form",
            children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "relative",
              renderId: "render-787a91af",
              as: "div",
              children: [/* @__PURE__ */ jsx(Search, {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                type: "text",
                placeholder: t("products.searchPlaceholder"),
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b91c1c] focus:outline-none transition-colors",
                renderId: "render-0b66c7fe",
                as: "input"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                type: "submit",
                className: "absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-[#b91c1c] text-white rounded-md hover:bg-[#991b1b] transition-colors",
                renderId: "render-b99a9cf3",
                as: "button",
                children: t("products.search")
              })]
            })
          })
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          href: "/urunler",
          className: "inline-flex items-center justify-center px-8 py-4 bg-[#b91c1c] hover:bg-[#991b1b] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",
          renderId: "render-3e7080ef",
          as: "a",
          children: [t("products.allProducts"), " (", products.length, ")"]
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg",
        renderId: "render-68f9205d",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex items-center space-x-2 text-gray-700 font-medium",
          renderId: "render-3123f555",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-75e214f6",
            as: "span",
            children: ["PLEKSİ (", products.length, ")"]
          }), /* @__PURE__ */ jsx(ArrowRight, {
            size: 20,
            className: "text-[#b91c1c]"
          })]
        })
      }), searchQuery.trim() && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "mb-8",
        renderId: "render-1bb550d6",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "text-2xl font-bold text-gray-900 mb-6",
          renderId: "render-2f8023b5",
          as: "h3",
          children: ['Arama Sonuçları: "', searchQuery, '"']
        }), isSearching ? /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "text-center py-8",
          renderId: "render-b7e8bf27",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#b91c1c]",
            renderId: "render-e013782b",
            as: "div"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "mt-2 text-gray-600",
            renderId: "render-94ded7ba",
            as: "p",
            children: "Aranıyor..."
          })]
        }) : filteredProducts.length > 0 ? /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          renderId: "render-a03158be",
          as: "div",
          children: filteredProducts.map((product) => /* @__PURE__ */ jsx(ProductCard, {
            product,
            onProductClick: handleProductClick,
            onQuoteRequest: handleQuoteRequest
          }, product.id))
        }) : /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "text-center py-8 bg-gray-50 rounded-lg",
          renderId: "render-aa915eec",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "text-gray-600 text-lg",
            renderId: "render-280f7742",
            as: "p",
            children: ['"', searchQuery, '" için ürün bulunamadı.']
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-gray-500 mt-2",
            renderId: "render-96f5d64c",
            as: "p",
            children: "Farklı bir ürün kodu veya model adı deneyin."
          })]
        })]
      }), (!searchQuery.trim() || filteredProducts.length === 0) && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        renderId: "render-4c897636",
        as: "div",
        children: featuredProducts.map((product) => /* @__PURE__ */ jsx(ProductCard, {
          product,
          onProductClick: handleProductClick,
          onQuoteRequest: handleQuoteRequest
        }, product.id))
      })]
    })
  });
}
function ProductCard({
  product,
  onProductClick,
  onQuoteRequest
}) {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group",
    renderId: "render-035e43a1",
    as: "div",
    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "relative h-80 product-image",
      renderId: "render-9f0fab10",
      as: "div",
      children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        src: product.image,
        alt: product.name,
        className: "w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300",
        onClick: () => onProductClick(product),
        onError: (e) => {
          e.target.src = "data:image/svg+xml;base64," + btoa(`
              <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" fill="#f3f4f6"/>
                <text x="200" y="130" text-anchor="middle" font-family="Arial" font-size="16" fill="#6b7280">WALMCO</text>
                <text x="200" y="150" text-anchor="middle" font-family="Arial" font-size="14" fill="#9ca3af">Ürün Görseli</text>
                <text x="200" y="170" text-anchor="middle" font-family="Arial" font-size="12" fill="#9ca3af">${product.name.substring(0, 30)}...</text>
              </svg>
            `);
        },
        renderId: "render-b418fcae",
        as: "img"
      })
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "p-6",
      renderId: "render-07f641de",
      as: "div",
      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "flex items-center justify-between mb-3",
        renderId: "render-009ac86f",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex items-center space-x-1",
          renderId: "render-d90758de",
          as: "div",
          children: [[...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, {
            size: 14,
            className: `${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`
          }, i)), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-sm text-gray-600 ml-2",
            renderId: "render-1b4ab07b",
            as: "span",
            children: product.rating
          })]
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b91c1c] transition-colors",
        renderId: "render-6bca1486",
        as: "h3",
        children: product.name
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2",
        renderId: "render-8f03d812",
        as: "p",
        children: product.description
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "flex items-center justify-between",
        renderId: "render-3828ad3d",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          onClick: () => onProductClick(product),
          className: "flex items-center space-x-2 text-[#b91c1c] font-semibold text-sm hover:gap-3 transition-all group",
          renderId: "render-bd068395",
          as: "button",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            renderId: "render-811de1ec",
            as: "span",
            children: t("products.viewDetails")
          }), /* @__PURE__ */ jsx(ArrowRight, {
            size: 16,
            className: "group-hover:translate-x-1 transition-transform"
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          onClick: () => onQuoteRequest(product),
          className: "px-4 py-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-sm font-semibold rounded-lg transition-colors",
          renderId: "render-f0802798",
          as: "button",
          children: t("products.getQuote")
        })]
      })]
    })]
  });
}
export {
  MainProductsSection as default
};
