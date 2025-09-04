import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ShieldCheck, Factory, Wrench, RefreshCw, Info, CheckCircle2, AlertCircle } from "lucide-react";

export const meta = () => [
  { title: "Kalite Politikası - Walmco Pleksi ve Alüminyum Sistemleri" },
  { name: "description", content: "Walmco kalite politikası, üretim ilkeleri, temizlik-bakım talimatları ve garanti koşulları." },
];

export default function KalitePolitikasiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#b91c1c] to-[#991b1b] text-white py-20 px-6">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-6">
              <ShieldCheck size={20} />
              <span className="font-semibold">Kalite Politikası</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Kalite
              <span className="block">Politikamız</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-8">
              Walmco, Türkiye'nin lider pleksi (akrilik) korkuluk üreticisi olarak, müşterilerimize güvenli, estetik ve uzun ömürlü ürünler sunmayı taahhüt eder.
              <span className="text-yellow-300"> Tüm ürünlerimiz Japon Mitsubishi Chemical – Acrypet ve SABIC menşeli 1. sınıf akrilik granüller kullanılarak ekstrüzyon sistemiyle üretilir.</span>
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                { label: "5 Yıl Garanti" },
                { label: "CE Sertifikalı Ürünler" },
                { label: "ISO 9001 / 14001 / 45001" },
              ].map((b) => (
                <span key={b.label} className="px-4 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-sm font-semibold">
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-6 space-y-10">
          {/* Üretim ve Malzeme İlkeleri */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Factory className="text-[#b91c1c]" />
              <h2 className="text-2xl font-bold text-gray-900">Üretim ve Malzeme İlkelerimiz</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3"><CheckCircle2 className="text-[#b91c1c] mt-1" /><span><b>Birinci sınıf hammadde:</b> Acrypet (Mitsubishi Chemical) ve SABIC akrilik granülleri ile yüksek optik berraklık, darbe dayanımı ve UV direnç hedeflenir.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-[#b91c1c] mt-1" /><span><b>Standartlaştırılmış süreçler:</b> Ekstrüzyon parametreleri titizlikle kontrol edilir; proses tekrarlanabilirliği ve boyutsal stabilite sağlanır.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-[#b91c1c] mt-1" /><span><b>Sıfır hata yaklaşımı:</b> Ürünler sevkiyat öncesinde görsel ve boyutsal kontrollerden geçirilir.</span></li>
            </ul>
          </div>

          {/* Müşteri Odaklılık */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="text-[#b91c1c]" />
              <h2 className="text-2xl font-bold text-gray-900">Müşteri Odaklılık ve Sürekli İyileştirme</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3"><CheckCircle2 className="text-[#b91c1c] mt-1" /><span>Geri bildirimleri sistematik olarak toplar, süreçlerimizi buna göre geliştiririz.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-[#b91c1c] mt-1" /><span>Tedarikçilerimizle şeffaf ve uzun vadeli iş birliği kurar, kalite hedeflerimizi birlikte yükseltiriz.</span></li>
            </ul>
          </div>

          {/* Temizlik ve Bakım */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="text-[#b91c1c]" />
              <h2 className="text-2xl font-bold text-gray-900">Temizlik ve Bakım Koşulları</h2>
            </div>
            <p className="text-gray-700 mb-4">Ürünlerimizin ömrünü ve yüzey kalitesini korumak için aşağıdaki talimatlara uyulması zorunludur:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3"><AlertCircle className="text-[#b91c1c] mt-1" /><span>Alkol ve solvent içeren hiçbir madde ile temizlenmemelidir.</span></li>
              <li className="flex gap-3"><AlertCircle className="text-[#b91c1c] mt-1" /><span>Sadece ıslak/nemli yumuşak bir bez ile siliniz.</span></li>
              <li className="flex gap-3"><AlertCircle className="text-[#b91c1c] mt-1" /><span>Ürün yüzeyine kimyasal temasına yol açabilecek uygulamalardan kaçınınız.</span></li>
            </ul>
            <div className="mt-4 p-4 rounded-lg bg-yellow-50 border border-yellow-100 text-yellow-800">
              Bu talimatlara uyulmaması, yüzeyde matlaşma, çatlak oluşumu ve yapısal zayıflamalara neden olabilir.
            </div>
          </div>

          {/* Garanti Politikası */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-[#b91c1c]" />
              <h2 className="text-2xl font-bold text-gray-900">Garanti Politikası</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3"><Info className="text-[#b91c1c] mt-1" /><span>Walmco pleksi korkuluk ürünleri, kullanıcıdan kaynaklanmayan durumlar için kırılma ve çatlamaya karşı <b>5 (beş) yıl</b> garantilidir.</span></li>
              <li className="flex gap-3"><Info className="text-[#b91c1c] mt-1" /><span>Garanti; üretim ve malzeme kaynaklı kusurları kapsar.</span></li>
              <li className="flex gap-3"><Info className="text-[#b91c1c] mt-1" /><span>Temizlik ve bakım talimatlarına aykırı kullanım (ör. alkol/solvent ile temizlik) ve benzeri kullanıcı hataları garanti kapsamı dışındadır.</span></li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">İletişim</h2>
            <p className="text-gray-700">
              Ürünlerimiz ve kalite politikamızla ilgili sorularınız için bize ulaşabilirsiniz. Size tutarlı kalite ve güven veren
              çözümler üretmekten memnuniyet duyarız.
            </p>
            <p className="text-gray-700 mt-4 font-semibold">— <a href="/iletisim" className="text-[#b91c1c] hover:underline">Walmco Kalite Yönetimi</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


