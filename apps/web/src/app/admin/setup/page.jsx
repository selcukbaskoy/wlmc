"use client";

import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import useUser from "@/utils/useUser";
import { 
  Crown, 
  Shield, 
  ShieldCheck, 
  Users, 
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function AdminSetup() {
  const [setupCompleted, setSetupCompleted] = useState(false);
  const [selectedRole, setSelectedRole] = useState('admin');
  const { data: user, loading } = useUser();

  const roles = [
    {
      id: 'admin',
      name: 'Admin',
      description: 'Tam yetki - tüm içerikleri ve kullanıcıları yönetebilir',
      icon: Crown,
      color: 'red'
    },
    {
      id: 'editor',
      name: 'Editor',
      description: 'İçerik yöneticisi - tüm içerikleri yönetebilir ve yayınlayabilir',
      icon: ShieldCheck,
      color: 'blue'
    },
    {
      id: 'author',
      name: 'Author',
      description: 'Yazar - kendi içeriklerini oluşturabilir ve düzenleyebilir',
      icon: Shield,
      color: 'green'
    },
    {
      id: 'viewer',
      name: 'Viewer',
      description: 'Görüntüleyici - sadece içerikleri görüntüleyebilir',
      icon: Users,
      color: 'gray'
    }
  ];

  // Setup mutation
  const setupMutation = useMutation({
    mutationFn: async (roleData) => {
      const response = await fetch('/api/admin/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(roleData)
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Setup failed');
      }
      return response.json();
    },
    onSuccess: (data) => {
      setSetupCompleted(true);
      // Redirect to admin dashboard after a short delay
      setTimeout(() => {
        window.location.href = '/admin';
      }, 2000);
    }
  });

  const handleSetup = () => {
    setupMutation.mutate({ role_name: selectedRole });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <AlertCircle size={48} className="mx-auto text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Giriş Gerekli</h1>
          <p className="text-gray-600 mb-6">
            Admin panelini kurmak için önce giriş yapmanız gerekiyor.
          </p>
          <a
            href="/account/signin?callbackUrl=/admin/setup"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Giriş Yap
          </a>
        </div>
      </div>
    );
  }

  if (setupCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Kurulum Tamamlandı!</h1>
          <p className="text-gray-600 mb-6">
            Admin rolünüz başarıyla atandı. Admin paneline yönlendiriliyorsunuz...
          </p>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Crown size={48} className="mx-auto text-blue-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CMS Admin Kurulumu</h1>
          <p className="text-gray-600">
            Hoş geldiniz! Admin panelini kullanmak için bir rol seçin.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Kullanıcı Bilgileri</h2>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{user.email}</p>
              <p className="text-sm text-gray-600">İlk admin kullanıcısı</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Rol Seçin</h2>
          
          <div className="space-y-3 mb-6">
            {roles.map((role) => {
              const Icon = role.icon;
              const colorClasses = {
                red: 'border-red-200 bg-red-50 text-red-600',
                blue: 'border-blue-200 bg-blue-50 text-blue-600',
                green: 'border-green-200 bg-green-50 text-green-600',
                gray: 'border-gray-200 bg-gray-50 text-gray-600'
              };
              
              return (
                <label
                  key={role.id}
                  className={`
                    block p-4 border-2 rounded-lg cursor-pointer transition-all
                    ${selectedRole === role.id 
                      ? `${colorClasses[role.color]} border-opacity-100` 
                      : 'border-gray-200 hover:border-gray-300'
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="role"
                    value={role.id}
                    checked={selectedRole === role.id}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-start space-x-3">
                    <Icon size={24} className={selectedRole === role.id ? '' : 'text-gray-600'} />
                    <div>
                      <h3 className="font-medium text-gray-900">{role.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{role.description}</p>
                    </div>
                  </div>
                </label>
              );
            })}
          </div>

          {setupMutation.error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{setupMutation.error.message}</p>
            </div>
          )}

          <button
            onClick={handleSetup}
            disabled={setupMutation.loading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 font-medium"
          >
            {setupMutation.loading ? 'Kuruluyor...' : 'Admin Panelini Kur'}
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            Bu işlem sadece bir kez yapılabilir. Daha sonra roller yönetici tarafından değiştirilebilir.
          </p>
        </div>
      </div>
    </div>
  );
}