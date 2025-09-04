"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  Upload, 
  Search, 
  Filter, 
  Download, 
  Trash2, 
  Eye,
  Copy,
  Grid,
  List,
  Image as ImageIcon,
  File,
  Video
} from "lucide-react";
import useUpload from "@/utils/useUpload";

function MediaUpload({ onUploadSuccess }) {
  const [upload, { loading }] = useUpload();
  const [dragActive, setDragActive] = useState(false);

  const handleUpload = async (file) => {
    try {
      const result = await upload({ reactNativeAsset: file });
      if (result.error) {
        alert('Upload failed: ' + result.error);
        return;
      }
      
      // Save to media library
      const response = await fetch('/api/admin/media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: result.url,
          original_filename: file.name,
          alt_text: ''
        })
      });
      
      if (response.ok) {
        onUploadSuccess?.();
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    files.forEach(handleUpload);
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
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
        dragActive 
          ? 'border-blue-500 bg-blue-50' 
          : 'border-gray-300 hover:border-gray-400'
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <Upload size={48} className="mx-auto text-gray-400 mb-4" />
      <p className="text-lg font-medium text-gray-900 mb-2">
        Dosyaları yükleyin
      </p>
      <p className="text-sm text-gray-600 mb-4">
        Dosyaları sürükleyin veya tıklayarak seçin
      </p>
      <input
        type="file"
        multiple
        accept="image/*,video/*,audio/*,.pdf,.doc,.docx"
        onChange={(e) => {
          const files = Array.from(e.target.files || []);
          files.forEach(handleUpload);
        }}
        className="hidden"
        id="file-upload-multiple"
      />
      <label
        htmlFor="file-upload-multiple"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 cursor-pointer"
      >
        {loading ? 'Yükleniyor...' : 'Dosya Seç'}
      </label>
    </div>
  );
}

function MediaGrid({ media, onSelect, onDelete, viewMode = 'grid' }) {
  const getFileIcon = (mimeType) => {
    if (mimeType.startsWith('image/')) return ImageIcon;
    if (mimeType.startsWith('video/')) return Video;
    return File;
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    alert('URL kopyalandı!');
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dosya
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tür
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Boyut
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
              {media?.map((item) => {
                const Icon = getFileIcon(item.mime_type);
                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {item.mime_type.startsWith('image/') ? (
                            <img 
                              src={item.url} 
                              alt={item.alt_text} 
                              className="h-10 w-10 object-cover rounded"
                            />
                          ) : (
                            <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center">
                              <Icon size={20} className="text-gray-600" />
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 truncate max-w-xs">
                            {item.original_filename}
                          </div>
                          <div className="text-sm text-gray-500">{item.filename}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900">{item.mime_type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900">
                        {item.file_size ? `${Math.round(item.file_size / 1024)} KB` : 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900">
                        {new Date(item.created_at).toLocaleDateString('tr-TR')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => window.open(item.url, '_blank')}
                          className="text-blue-600 hover:text-blue-900"
                          title="Görüntüle"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => copyToClipboard(item.url)}
                          className="text-green-600 hover:text-green-900"
                          title="URL Kopyala"
                        >
                          <Copy size={16} />
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
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {media?.map((item) => {
        const Icon = getFileIcon(item.mime_type);
        return (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-square bg-gray-100 relative">
              {item.mime_type.startsWith('image/') ? (
                <img 
                  src={item.url} 
                  alt={item.alt_text} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Icon size={48} className="text-gray-400" />
                </div>
              )}
              
              {/* Actions overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center opacity-0 hover:opacity-100">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => window.open(item.url, '_blank')}
                    className="p-2 bg-white rounded-full text-gray-700 hover:bg-gray-100"
                    title="Görüntüle"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    onClick={() => copyToClipboard(item.url)}
                    className="p-2 bg-white rounded-full text-gray-700 hover:bg-gray-100"
                    title="URL Kopyala"
                  >
                    <Copy size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="p-2 bg-white rounded-full text-red-600 hover:bg-gray-100"
                    title="Sil"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-3">
              <h4 className="text-sm font-medium text-gray-900 truncate" title={item.original_filename}>
                {item.original_filename}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {item.mime_type}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Pagination({ pagination, onPageChange }) {
  const { page, pages, total } = pagination;
  
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-gray-700">
        Toplam {total} dosya
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

export default function MediaLibrary() {
  const [search, setSearch] = useState("");
  const [mimeType, setMimeType] = useState("");
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid');
  const queryClient = useQueryClient();
  
  // Fetch media
  const { data, loading, error } = useQuery({
    queryKey: ['admin-media', page, search, mimeType],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: viewMode === 'grid' ? '24' : '20'
      });
      
      if (search) params.append('search', search);
      if (mimeType) params.append('type', mimeType);
      
      const response = await fetch(`/api/admin/media?${params}`);
      if (!response.ok) {
        throw new Error('Failed to fetch media');
      }
      return response.json();
    }
  });
  
  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`/api/admin/media/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete media');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['admin-media']);
    }
  });
  
  const handleDelete = async (id) => {
    if (confirm('Bu dosyayı silmek istediğinizden emin misiniz?')) {
      deleteMutation.mutate(id);
    }
  };
  
  const handleUploadSuccess = () => {
    queryClient.invalidateQueries(['admin-media']);
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Medya Kütüphanesi</h1>
        <p className="text-gray-600">Dosyalarınızı yönetin ve düzenleyin</p>
      </div>

      {/* Upload Area */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <MediaUpload onUploadSuccess={handleUploadSuccess} />
      </div>

      {/* Filters and View Toggle */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="flex-1">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Dosya adı veya açıklama ara..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <select
              value={mimeType}
              onChange={(e) => setMimeType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Tüm Dosya Türleri</option>
              <option value="image">Resimler</option>
              <option value="video">Videolar</option>
              <option value="audio">Ses Dosyaları</option>
              <option value="application">Dökümanlar</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Ara
            </button>
          </form>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              title="Izgara görünümü"
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              title="Liste görünümü"
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Media Content */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600">Bir hata oluştu: {error.message}</p>
        </div>
      ) : data?.media?.length === 0 ? (
        <div className="text-center py-12">
          <ImageIcon size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz dosya yok</h3>
          <p className="text-gray-600">İlk dosyanızı yükleyerek başlayın</p>
        </div>
      ) : (
        <>
          <MediaGrid
            media={data?.media || []}
            onDelete={handleDelete}
            viewMode={viewMode}
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