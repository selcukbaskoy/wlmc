import { p as products, C as CreatePolymorphicComponent, g as getImageUrl } from "./server-build.js";
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
import "./index-DA6jJSWK.js";
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
    renderId: "render-d89537fa",
    as: "section",
    children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "max-w-[1200px] mx-auto",
      renderId: "render-bcb4b7d1",
      as: "div",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "text-center mb-12",
        renderId: "render-2bc5dfb9",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "inline-flex items-center space-x-2 px-4 py-2 bg-[#b91c1c]/10 text-[#b91c1c] rounded-full text-sm font-medium mb-6",
          renderId: "render-d854340e",
          as: "div",
          children: [/* @__PURE__ */ jsx(ShoppingCart, {
            size: 16
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            renderId: "render-e3e1f636",
            as: "span",
            children: t("products.catalog")
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight",
          renderId: "render-da5630eb",
          as: "h2",
          children: t("products.premiumSeries")
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8",
          renderId: "render-59d7a36f",
          as: "p",
          children: t("products.description")
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "max-w-md mx-auto mb-8",
          renderId: "render-a75061bf",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            onSubmit: handleSearch,
            className: "relative",
            renderId: "render-0d2cc19e",
            as: "form",
            children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "relative",
              renderId: "render-a0191e70",
              as: "div",
              children: [/* @__PURE__ */ jsx(Search, {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                type: "text",
                placeholder: t("products.searchPlaceholder"),
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b91c1c] focus:outline-none transition-colors",
                renderId: "render-bd5ef1a7",
                as: "input"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                type: "submit",
                className: "absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-[#b91c1c] text-white rounded-md hover:bg-[#991b1b] transition-colors",
                renderId: "render-da4a5e7a",
                as: "button",
                children: t("products.search")
              })]
            })
          })
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          href: "/urunler",
          className: "inline-flex items-center justify-center px-8 py-4 bg-[#b91c1c] hover:bg-[#991b1b] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",
          renderId: "render-189ecd9c",
          as: "a",
          children: [t("products.allProducts"), " (", products.length, ")"]
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg",
        renderId: "render-94b9b07d",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex items-center space-x-2 text-gray-700 font-medium",
          renderId: "render-59d6d07c",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-066e90dd",
            as: "span",
            children: ["PLEKSİ (", products.length, ")"]
          }), /* @__PURE__ */ jsx(ArrowRight, {
            size: 20,
            className: "text-[#b91c1c]"
          })]
        })
      }), searchQuery.trim() && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "mb-8",
        renderId: "render-59312771",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "text-2xl font-bold text-gray-900 mb-6",
          renderId: "render-770d8d4d",
          as: "h3",
          children: ['Arama Sonuçları: "', searchQuery, '"']
        }), isSearching ? /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "text-center py-8",
          renderId: "render-1a404c68",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#b91c1c]",
            renderId: "render-3d2cdd4b",
            as: "div"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "mt-2 text-gray-600",
            renderId: "render-ff91740f",
            as: "p",
            children: "Aranıyor..."
          })]
        }) : filteredProducts.length > 0 ? /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          renderId: "render-f803262d",
          as: "div",
          children: filteredProducts.map((product) => /* @__PURE__ */ jsx(ProductCard, {
            product,
            onProductClick: handleProductClick,
            onQuoteRequest: handleQuoteRequest
          }, product.id))
        }) : /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "text-center py-8 bg-gray-50 rounded-lg",
          renderId: "render-57c6c646",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "text-gray-600 text-lg",
            renderId: "render-450ec297",
            as: "p",
            children: ['"', searchQuery, '" için ürün bulunamadı.']
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-gray-500 mt-2",
            renderId: "render-010167e5",
            as: "p",
            children: "Farklı bir ürün kodu veya model adı deneyin."
          })]
        })]
      }), (!searchQuery.trim() || filteredProducts.length === 0) && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        renderId: "render-fe0d764c",
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
    renderId: "render-ed6c4bfb",
    as: "div",
    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "relative h-80 product-image",
      renderId: "render-c047d720",
      as: "div",
      children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        src: getImageUrl(product.image),
        alt: product.name,
        className: "w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300",
        onClick: () => onProductClick(product),
        renderId: "render-3e81f97e",
        as: "img"
      })
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "p-6",
      renderId: "render-8bbacf1a",
      as: "div",
      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "flex items-center justify-between mb-3",
        renderId: "render-be9895a7",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex items-center space-x-1",
          renderId: "render-2dadfee4",
          as: "div",
          children: [[...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, {
            size: 14,
            className: `${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`
          }, i)), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-sm text-gray-600 ml-2",
            renderId: "render-61ed7097",
            as: "span",
            children: product.rating
          })]
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b91c1c] transition-colors",
        renderId: "render-f40e6f7d",
        as: "h3",
        children: product.name
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2",
        renderId: "render-138d0028",
        as: "p",
        children: product.description
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "flex items-center justify-between",
        renderId: "render-d30c4fdd",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          onClick: () => onProductClick(product),
          className: "flex items-center space-x-2 text-[#b91c1c] font-semibold text-sm hover:gap-3 transition-all group",
          renderId: "render-1064061c",
          as: "button",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            renderId: "render-80e3bf77",
            as: "span",
            children: t("products.viewDetails")
          }), /* @__PURE__ */ jsx(ArrowRight, {
            size: 16,
            className: "group-hover:translate-x-1 transition-transform"
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          onClick: () => onQuoteRequest(product),
          className: "px-4 py-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-sm font-semibold rounded-lg transition-colors",
          renderId: "render-5ded9111",
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
