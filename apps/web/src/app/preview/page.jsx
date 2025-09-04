"use client";

import { useEffect, useState } from "react";
import { getImageUrl } from "../../utils/imageUtils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye, AlertTriangle } from "lucide-react";

export default function PreviewPage() {
  const [token, setToken] = useState(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get token from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get("token");
    setToken(tokenParam);

    async function loadPreviewContent() {
      if (!tokenParam) {
        setError("Preview token is required");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/admin/preview?token=${tokenParam}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to load preview");
        }

        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadPreviewContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">İçerik yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle size={32} className="text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Önizleme Hatası
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.close()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-600">İçerik bulunamadı</p>
        </div>
      </div>
    );
  }

  // Render content based on type
  const renderContent = () => {
    switch (content.content_type) {
      case "blog_post":
        return (
          <article className="max-w-4xl mx-auto">
            {/* Cover image */}
            {content.cover_image && (
              <div className="mb-8">
                <img
                  src={getImageUrl(content.cover_image)}
                  alt={content.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}

            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {content.title}
              </h1>

              {content.summary && (
                <p className="text-xl text-gray-600 mb-4">{content.summary}</p>
              )}

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>
                  {new Date(content.created_at).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>•</span>
                <span>{content.created_by_name}</span>
              </div>

              {/* Categories and tags */}
              {(content.categories?.length > 0 || content.tags?.length > 0) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {content.categories?.map((category) => (
                    <span
                      key={category.id}
                      className="inline-flex px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                    >
                      {category.name}
                    </span>
                  ))}
                  {content.tags?.map((tag) => (
                    <span
                      key={tag.id}
                      className="inline-flex px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div className="prose prose-lg max-w-none">
              {/* Simple markdown-to-HTML conversion */}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    content.body
                      ?.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      ?.replace(/\*(.*?)\*/g, "<em>$1</em>")
                      ?.replace(
                        /\[(.*?)\]\((.*?)\)/g,
                        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">$1</a>',
                      )
                      ?.replace(/\n/g, "<br>") || "",
                }}
              />
            </div>
          </article>
        );

      case "page":
        return (
          <div className="max-w-6xl mx-auto">
            {content.cover_image && (
              <div className="mb-8">
                <img
                  src={getImageUrl(content.cover_image)}
                  alt={content.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}

            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {content.title}
              </h1>

              {content.summary && (
                <p className="text-xl text-gray-600">{content.summary}</p>
              )}
            </header>

            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    content.body
                      ?.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      ?.replace(/\*(.*?)\*/g, "<em>$1</em>")
                      ?.replace(
                        /\[(.*?)\]\((.*?)\)/g,
                        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">$1</a>',
                      )
                      ?.replace(/\n/g, "<br>") || "",
                }}
              />
            </div>
          </div>
        );

      case "faq":
        return (
          <div className="max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {content.title}
              </h1>

              {content.summary && (
                <p className="text-lg text-gray-600">{content.summary}</p>
              )}
            </header>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    content.body
                      ?.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      ?.replace(/\*(.*?)\*/g, "<em>$1</em>")
                      ?.replace(
                        /\[(.*?)\]\((.*?)\)/g,
                        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">$1</a>',
                      )
                      ?.replace(/\n/g, "<br>") || "",
                }}
              />
            </div>
          </div>
        );

      default:
        return (
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600">Bilinmeyen içerik türü</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Preview header */}
      <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Eye size={20} className="text-yellow-600" />
            <span className="text-sm font-medium text-yellow-800">
              ÖNİZLEME MODU - Bu içerik henüz yayında değil
            </span>
          </div>
          <div className="text-sm text-yellow-700">
            Token: {token?.slice(0, 8)}...
          </div>
        </div>
      </div>

      <Header />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </main>

      <Footer />
    </div>
  );
}
