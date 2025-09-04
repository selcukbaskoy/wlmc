"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  Save, 
  Eye, 
  ArrowLeft, 
  Upload, 
  X,
  Calendar,
  Globe,
  Tag as TagIcon,
  FolderOpen,
  History,
  RotateCcw
} from "lucide-react";
import useUpload from "@/utils/useUpload";

function ImageUpload({ value, onChange, label }) {
  const [upload, { loading }] = useUpload();
  const [dragActive, setDragActive] = useState(false);

  const handleUpload = async (file) => {
    try {
      const result = await upload({ reactNativeAsset: file });
      if (result.error) {
        alert('Upload failed: ' + result.error);
        return;
      }
      onChange(result.url);
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Upload error:', error);
      }
      alert('Upload failed');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleUpload(files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          dragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {value ? (
          <div className="relative">
            <img 
              src={value} 
              alt="Preview" 
              className="max-w-full h-32 object-cover mx-auto rounded"
            />
            <button
              type="button"
              onClick={() => onChange('')}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div>
            <Upload size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-sm text-gray-600 mb-2">
              Dosyayı sürükleyin veya tıklayarak seçin
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleUpload(file);
              }}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              {loading ? 'Yükleniyor...' : 'Dosya Seç'}
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default function EditBlogPost({ params }) {
  const { id } = params;
  const [formData, setFormData] = useState({
    content_type: 'blog_post',
    title: '',
    slug: '',
    body: '',
    summary: '',
    cover_image: '',
    status: 'draft',
    publish_at: '',
    unpublish_at: '',
    meta_title: '',
    meta_description: '',
    canonical: '',
    og_image: '',
    categories: [],
    tags: []
  });
  
  const [errors, setErrors] = useState({});
  const [autoSlug, setAutoSlug] = useState(false);
  const queryClient = useQueryClient();

  // Fetch content
  const { data: content, loading, error } = useQuery({
    queryKey: ['admin-content', id],
    queryFn: async () => {
      const response = await fetch(`/api/admin/content/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }
      return response.json();
    }
  });

  // Fetch categories and tags
  const { data: categoriesData } = useQuery({
    queryKey: ['admin-categories'],
    queryFn: async () => {
      const response = await fetch('/api/admin/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      return response.json();
    }
  });

  const { data: tagsData } = useQuery({
    queryKey: ['admin-tags'],
    queryFn: async () => {
      const response = await fetch('/api/admin/tags');
      if (!response.ok) throw new Error('Failed to fetch tags');
      return response.json();
    }
  });

  // Update formData when content is loaded
  useEffect(() => {
    if (content) {
      setFormData({
        content_type: content.content_type,
        title: content.title || '',
        slug: content.slug || '',
        body: content.body || '',
        summary: content.summary || '',
        cover_image: content.cover_image || '',
        status: content.status || 'draft',
        publish_at: content.publish_at ? new Date(content.publish_at).toISOString().slice(0, 16) : '',
        unpublish_at: content.unpublish_at ? new Date(content.unpublish_at).toISOString().slice(0, 16) : '',
        meta_title: content.meta_title || '',
        meta_description: content.meta_description || '',
        canonical: content.canonical || '',
        og_image: content.og_image || '',
        categories: content.categories?.map(c => c.id) || [],
        tags: content.tags?.map(t => t.id) || []
      });
    }
  }, [content]);

  // Update content mutation
  const updateMutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(`/api/admin/content/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update content');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['admin-content']);
      window.location.href = '/admin/content/blog';
    },
    onError: (error) => {
      setErrors({ general: error.message });
    }
  });

  // Preview mutation
  const previewMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/admin/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content_id: id })
      });
      if (!response.ok) throw new Error('Failed to create preview');
      return response.json();
    },
    onSuccess: (data) => {
      window.open(data.preview_url, '_blank');
    }
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'slug') setAutoSlug(false);
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Başlık zorunludur';
    if (!formData.body) newErrors.body = 'İçerik zorunludur';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    updateMutation.mutate(formData);
  };

  const handlePreview = () => {
    previewMutation.mutate();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-600">Bir hata oluştu: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => window.location.href = '/admin/content/blog'}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Blog Yazısını Düzenle</h1>
            <p className="text-gray-600">
              {content?.title} - Versiyon {content?.version}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={handlePreview}
            disabled={previewMutation.loading}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Eye size={16} className="mr-2" />
            {previewMutation.loading ? 'Hazırlanıyor...' : 'Önizle'}
          </button>
          <button
            onClick={() => window.location.href = `/admin/content/blog/versions/${id}`}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <History size={16} className="mr-2" />
            Geçmiş
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              {/* Title */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Başlık *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Blog yazısı başlığını girin"
                />
                {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
              </div>

              {/* Slug */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL Slug
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-lg">
                    /blog/
                  </span>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => handleInputChange('slug', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="url-slug"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Özet
                </label>
                <textarea
                  value={formData.summary}
                  onChange={(e) => handleInputChange('summary', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Kısa özet yazın"
                />
              </div>

              {/* Body */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  İçerik *
                </label>
                <textarea
                  value={formData.body}
                  onChange={(e) => handleInputChange('body', e.target.value)}
                  rows={15}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                  placeholder="Markdown formatında içeriğinizi yazın..."
                />
                {errors.body && <p className="text-red-600 text-sm mt-1">{errors.body}</p>}
                <p className="text-sm text-gray-500 mt-2">
                  Markdown formatı desteklenir. Örnek: **kalın**, *italik*, [link](url)
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Yayın Ayarları</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Durum
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="draft">Taslak</option>
                    <option value="review">İnceleme</option>
                    <option value="published">Yayında</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yayın Tarihi
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.publish_at}
                    onChange={(e) => handleInputChange('publish_at', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yayından Kaldırma Tarihi
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.unpublish_at}
                    onChange={(e) => handleInputChange('unpublish_at', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Cover Image */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <ImageUpload
                label="Kapak Görseli"
                value={formData.cover_image}
                onChange={(url) => handleInputChange('cover_image', url)}
              />
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <FolderOpen size={20} className="mr-2" />
                Kategoriler
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {categoriesData?.map((category) => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.categories.includes(category.id)}
                      onChange={(e) => {
                        const newCategories = e.target.checked
                          ? [...formData.categories, category.id]
                          : formData.categories.filter(id => id !== category.id);
                        handleInputChange('categories', newCategories);
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <TagIcon size={20} className="mr-2" />
                Etiketler
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {tagsData?.map((tag) => (
                  <label key={tag.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.tags.includes(tag.id)}
                      onChange={(e) => {
                        const newTags = e.target.checked
                          ? [...formData.tags, tag.id]
                          : formData.tags.filter(id => id !== tag.id);
                        handleInputChange('tags', newTags);
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{tag.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* SEO Settings */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <Globe size={20} className="mr-2" />
                SEO Ayarları
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Başlık
                  </label>
                  <input
                    type="text"
                    value={formData.meta_title}
                    onChange={(e) => handleInputChange('meta_title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="SEO başlığı"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Açıklama
                  </label>
                  <textarea
                    value={formData.meta_description}
                    onChange={(e) => handleInputChange('meta_description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="SEO açıklaması"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Canonical URL
                  </label>
                  <input
                    type="url"
                    value={formData.canonical}
                    onChange={(e) => handleInputChange('canonical', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://example.com/canonical-url"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    OG Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.og_image}
                    onChange={(e) => handleInputChange('og_image', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://example.com/og-image.jpg"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              {errors.general && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{errors.general}</p>
                </div>
              )}
              
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={updateMutation.loading}
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  <Save size={16} className="mr-2" />
                  {updateMutation.loading ? 'Güncelleniyor...' : 'Güncelle'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}