"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Eye, 
  Trash2, 
  ExternalLink,
  Calendar,
  Tag,
  User
} from "lucide-react";

function ContentTable({ content, onEdit, onDelete, onPreview }) {
  const getStatusBadge = (status) => {
    const styles = {
      draft: "bg-yellow-100 text-yellow-800",
      review: "bg-blue-100 text-blue-800", 
      published: "bg-green-100 text-green-800"
    };
    
    const labels = {
      draft: "Taslak",
      review: "İnceleme",
      published: "Yayında"
    };
    
    return (
      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Başlık
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Durum
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Yazar
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tarih
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {content?.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900 truncate max-w-xs">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500">/{item.slug}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {getStatusBadge(item.status)}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{item.created_by_name}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {new Date(item.updated_at).toLocaleDateString('tr-TR')}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onEdit(item.id)}
                      className="text-blue-600 hover:text-blue-900"
                      title="Düzenle"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => onPreview(item.id)}
                      className="text-green-600 hover:text-green-900"
                      title="Önizle"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(item.id)}
                      className="text-red-600 hover:text-red-900"
                      title="Sil"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Pagination({ pagination, onPageChange }) {
  const { page, pages, total } = pagination;
  
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-gray-700">
        Toplam {total} kayıt
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className="px-3 py-1 text-sm border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          Önceki
        </button>
        <span className="text-sm text-gray-700">
          Sayfa {page} / {pages}
        </span>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= pages}
          className="px-3 py-1 text-sm border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          Sonraki
        </button>
      </div>
    </div>
  );
}

export default function BlogContentPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  
  // Fetch blog posts
  const { data, loading, error } = useQuery({
    queryKey: ['admin-content', 'blog_post', page, search, status],
    queryFn: async () => {
      const params = new URLSearchParams({
        type: 'blog_post',
        page: page.toString(),
        limit: '20'
      });
      
      if (search) params.append('search', search);
      if (status) params.append('status', status);
      
      const response = await fetch(`/api/admin/content?${params}`);
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }
      return response.json();
    }
  });
  
  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`/api/admin/content/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete content');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['admin-content']);
    }
  });
  
  // Preview mutation
  const previewMutation = useMutation({
    mutationFn: async (id) => {
      const response = await fetch('/api/admin/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content_id: id })
      });
      if (!response.ok) {
        throw new Error('Failed to create preview');
      }
      return response.json();
    },
    onSuccess: (data) => {
      window.open(data.preview_url, '_blank');
    }
  });
  
  const handleEdit = (id) => {
    window.location.href = `/admin/content/blog/edit/${id}`;
  };
  
  const handleDelete = async (id) => {
    if (confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
      deleteMutation.mutate(id);
    }
  };
  
  const handlePreview = (id) => {
    previewMutation.mutate(id);
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1); // Reset to first page on search
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Yazıları</h1>
          <p className="text-gray-600">Blog yazılarınızı yönetin</p>
        </div>
        <a
          href="/admin/content/blog/new"
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus size={16} className="mr-2" />
          Yeni Blog Yazısı
        </a>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Başlık, içerik veya özet ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Tüm Durumlar</option>
            <option value="draft">Taslak</option>
            <option value="review">İnceleme</option>
            <option value="published">Yayında</option>
          </select>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Ara
          </button>
        </form>
      </div>

      {/* Content Table */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600">Bir hata oluştu: {error.message}</p>
        </div>
      ) : (
        <>
          <ContentTable
            content={data?.content || []}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onPreview={handlePreview}
          />
          
          {data?.pagination && (
            <Pagination
              pagination={data.pagination}
              onPageChange={setPage}
            />
          )}
        </>
      )}
    </div>
  );
}