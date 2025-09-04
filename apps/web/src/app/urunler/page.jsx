"use client";

import { useState, useEffect, useMemo } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/urunler/PageHero";
import ProductCategories from "../../components/urunler/ProductCategories";
import ProductsGrid from "../../components/urunler/ProductsGrid";
import CtaSection from "../../components/urunler/CtaSection";
import ProductModal from "../../components/urunler/ProductModal";
import { mainCategories, products } from "../../data/productsData";

export const meta = () => [
  { title: "Ürünler - WALMCO Pleksi Korkuluk Sistemleri | Premium Kalite" },
  { name: "description", content: "WALMCO ürün kataloğu: Pleksi korkuluk sistemleri, alüminyum profiller, bahçe çit aksesuarları. CE sertifikalı, premium kalite, 5 yıl garanti." },
];

export default function UrunlerPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [expandedMainCategory, setExpandedMainCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Memoize products array to prevent recreation on every render
  const memoizedProducts = useMemo(() => products, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);

      const mainCategoryMap = {
        "pleksi-babalar": "pleksi",
        "pleksi-dikmeler": "pleksi",
        "pleksi-diamond": "pleksi",
      };

      const mainCategory = mainCategoryMap[categoryParam];
      if (mainCategory) {
        setExpandedMainCategory(mainCategory);
      }
    }
  }, []);

  // Search functionality
  const handleSearchResults = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredProducts([]);
      return;
    }

    const searchResults = memoizedProducts.filter(product => {
      const productCode = product.specs?.Model || "";
      const productName = product.name.toLowerCase();
      const searchLower = query.toLowerCase();
      
      return productCode.toLowerCase().includes(searchLower) || 
             productName.includes(searchLower);
    });

    setFilteredProducts(searchResults);
  };

  // Filter products based on category and search
  const filteredProductsByCategory = useMemo(() => {
    if (searchQuery.trim()) {
      return filteredProducts;
    }

    if (selectedCategory === "all") {
      return memoizedProducts;
    }

    return memoizedProducts.filter((product) => product.category === selectedCategory);
  }, [selectedCategory, memoizedProducts, searchQuery, filteredProducts]);

  // Memoize category counts to prevent recalculation on every render
  const categoryCounts = useMemo(() => {
    return memoizedProducts.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});
  }, [memoizedProducts]);

  // Memoize dynamic main categories
  const dynamicMainCategories = useMemo(() => {
    return mainCategories.map((main) => {
      const updatedSubcategories = main.subcategories.map((sub) => ({
        ...sub,
        count: categoryCounts[sub.id] || 0,
      }));

      const mainCount = updatedSubcategories.reduce(
        (sum, sub) => sum + (categoryCounts[sub.id] || 0),
        0
      );

      return {
        ...main,
        count: mainCount,
        subcategories: updatedSubcategories,
      };
    });
  }, [categoryCounts]);

  const handleMainCategoryClick = (categoryId) => {
    if (expandedMainCategory === categoryId) {
      setExpandedMainCategory(null);
    } else {
      setExpandedMainCategory(categoryId);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    // Reset expanded main category when changing subcategory
    if (newCategory !== "all") {
      const mainCategoryMap = {
        "pleksi-babalar": "pleksi",
        "pleksi-dikmeler": "pleksi",
        "pleksi-diamond": "pleksi",
      };
      const mainCategory = mainCategoryMap[newCategory];
      if (mainCategory) {
        setExpandedMainCategory(mainCategory);
      }
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-white">
        <Header />
        <PageHero />
        <ProductCategories
          mainCategories={dynamicMainCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
          expandedMainCategory={expandedMainCategory}
          handleMainCategoryClick={handleMainCategoryClick}
          setExpandedMainCategory={setExpandedMainCategory}
          totalCount={memoizedProducts.length}
          onSearchResults={handleSearchResults}
        />
        <ProductsGrid
          products={filteredProductsByCategory}
          onProductSelect={setSelectedProduct}
          searchQuery={searchQuery}
        />
        <CtaSection />
        <Footer />
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </>
  );
}
