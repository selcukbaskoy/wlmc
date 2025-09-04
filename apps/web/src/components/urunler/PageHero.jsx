import { Package } from "lucide-react";

export default function PageHero() {
  return (
    <section className="relative bg-gradient-to-r from-[#b91c1c] to-[#991b1b] text-white py-20 px-6">
      <div className="absolute inset-0 bg-black/20" />
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-6">
            <Package size={20} />
            <span className="font-semibold">Ürün Kataloğu</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Premium
            <span className="block">Ürün Serimiz</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            CE Sertifikalı, Yüksek kaliteli Pleksi Korkuluk, Pleksi Mobilya Ürünleri, Pleksi Aksesuarları Keşfedin.
            <span className="text-yellow-300"> Her ihtiyaca uygun, kaliteli çözümler sunuyoruz.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
