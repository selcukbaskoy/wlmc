import { ArrowLeft } from "lucide-react";

export default function BlogNavHeader() {
  const handleBackToBlog = () => {
    window.location.href = "/blog";
  };

  return (
    <section className="py-6 px-6 bg-white border-b">
      <div className="max-w-[1200px] mx-auto">
        <button
          onClick={handleBackToBlog}
          className="flex items-center space-x-2 text-[#b91c1c] hover:text-[#991b1b] transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Blog'a Geri Dön</span>
        </button>
      </div>
    </section>
  );
}
