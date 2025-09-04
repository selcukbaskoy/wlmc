import {
  Calendar,
  Clock,
  User,
  Share2,
  Eye,
  Heart,
} from "lucide-react";

export default function ArticleHeader({ post }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link kopyalandı!");
    }
  };

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-[#b91c1c] text-white rounded-full text-sm font-semibold mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-6 text-gray-600 mb-6">
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{post.publishDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-6 text-gray-500 mb-8">
            <div className="flex items-center space-x-2">
              <Eye size={16} />
              <span>{post.views.toLocaleString()} görüntülenme</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart size={16} />
              <span>{post.likes} beğeni</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 text-[#b91c1c] hover:text-[#991b1b] transition-colors"
            >
              <Share2 size={16} />
              <span>Paylaş</span>
            </button>
          </div>
        </div>

        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
