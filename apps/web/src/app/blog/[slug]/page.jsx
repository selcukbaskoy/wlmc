"use client";
import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { blogPosts } from "../../../data/blogPosts";
import BlogNavHeader from "../../../components/blog/BlogNavHeader";
import ArticleHeader from "../../../components/blog/ArticleHeader";
import ArticleTags from "../../../components/blog/ArticleTags";
import ArticleContent from "../../../components/blog/ArticleContent";

export default function BlogPostPage({ params }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const currentPost = blogPosts[params.slug];
    if (currentPost) {
      setPost(currentPost);
      document.title = `${currentPost.title} - Walmco Blog`;
    }
  }, [params.slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">İçerik yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BlogNavHeader />
      <ArticleHeader post={post} />

      <section className="py-12 px-6">
        <div className="max-w-[800px] mx-auto">
          <ArticleContent slug={params.slug} />
        </div>
      </section>

      <ArticleTags tags={post.tags} />
      <Footer />
    </div>
  );
}
