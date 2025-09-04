"use client";

import { useEffect } from "react";

export default function PleksiMobilyaUrunleriPage() {
  useEffect(() => {
    // Redirect to main products page with category filter
    window.location.href = "/urunler?category=pleksi-mobilya-urunleri";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b91c1c] mx-auto mb-4"></div>
        <p className="text-gray-600">Yönlendiriliyor...</p>
      </div>
    </div>
  );
}
