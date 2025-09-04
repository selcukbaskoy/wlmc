"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  Search, 
  UserPlus, 
  Shield, 
  ShieldCheck, 
  Users as UsersIcon,
  Crown,
  Edit,
  Trash2
} from "lucide-react";

function RoleModal({ isOpen, onClose, user, availableRoles, onAssignRole, onRemoveRole }) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {user.email} - Rol Yönetimi
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Mevcut Roller:</h4>
            <div className="space-y-2">
              {user.roles?.length > 0 ? (
                user.roles.map(role => (
                  <div key={role.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm text-gray-900">{role.name}</span>
                    <button
                      onClick={() => onRemoveRole(user.id, role.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Kaldır
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">Henüz rol atanmamış</p>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Yeni Rol Ata:</h4>
            <div className="space-y-2">
              {availableRoles?.filter(role => 
                !user.roles?.some(userRole => userRole.id === role.id)
              ).map(role => (
                <button
                  key={role.id}
                  onClick={() => onAssignRole(user.id, role.id)}
                  className="w-full text-left p-2 border border-gray-200 rounded hover:bg-gray-50 text-sm"
                >
                  {role.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
}

function UsersTable({ users, onManageRoles }) {
  const getRoleIcon = (roles) => {
    if (roles?.some(r => r.name === 'admin')) return Crown;
    if (roles?.some(r => r.name === 'editor')) return ShieldCheck;
    if (roles?.length > 0) return Shield;
    return UsersIcon;
  };

  const getRoleBadges = (roles) => {
    const colorMap = {
      admin: 'bg-red-100 text-red-800',
      editor: 'bg-blue-100 text-blue-800',
      author: 'bg-green-100 text-green-800',
      viewer: 'bg-gray-100 text-gray-800'
    };

    return roles?.map(role => (
      <span
        key={role.id}
        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${colorMap[role.name] || 'bg-gray-100 text-gray-800'}`}
      >
        {role.name}
      </span>
    ));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kullanıcı
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Roller
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kayıt Tarihi
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users?.map((user) => {
              const Icon = getRoleIcon(user.roles);
              return (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <Icon size={20} className="text-gray-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name || user.email}
                        </div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {user.roles?.length > 0 ? (
                        getRoleBadges(user.roles)
                      ) : (
                        <span className="text-sm text-gray-500">Rol yok</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {new Date(user.emailVerified || Date.now()).toLocaleDateString('tr-TR')}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => onManageRoles(user)}
                      className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                    >
                      Rolleri Yönet
                    </button>
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

function Pagination({ pagination, onPageChange }) {
  const { page, pages, total } = pagination;
  
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-gray-700">
        Toplam {total} kullanıcı
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

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [roleModalOpen, setRoleModalOpen] = useState(false);
  const queryClient = useQueryClient();
  
  // Fetch users
  const { data, loading, error } = useQuery({
    queryKey: ['admin-users', page, search],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20'
      });
      
      if (search) params.append('search', search);
      
      const response = await fetch(`/api/admin/users?${params}`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    }
  });

  // Fetch roles
  const { data: rolesData } = useQuery({
    queryKey: ['admin-roles'],
    queryFn: async () => {
      const response = await fetch('/api/admin/roles');
      if (!response.ok) throw new Error('Failed to fetch roles');
      return response.json();
    }
  });
  
  // Role assignment mutation
  const roleAssignMutation = useMutation({
    mutationFn: async ({ user_id, role_id, action }) => {
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id, role_id, action })
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to manage role');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['admin-users']);
      setRoleModalOpen(false);
    }
  });
  
  const handleManageRoles = (user) => {
    setSelectedUser(user);
    setRoleModalOpen(true);
  };
  
  const handleAssignRole = (userId, roleId) => {
    roleAssignMutation.mutate({ user_id: userId, role_id: roleId, action: 'assign' });
  };
  
  const handleRemoveRole = (userId, roleId) => {
    roleAssignMutation.mutate({ user_id: userId, role_id: roleId, action: 'remove' });
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Kullanıcı Yönetimi</h1>
        <p className="text-gray-600">Kullanıcıları ve rollerini yönetin</p>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="E-posta veya isim ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Ara
          </button>
        </form>
      </div>

      {/* Users Table */}
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
          <UsersTable
            users={data?.users || []}
            onManageRoles={handleManageRoles}
          />
          
          {data?.pagination && (
            <Pagination
              pagination={data.pagination}
              onPageChange={setPage}
            />
          )}
        </>
      )}

      {/* Role Management Modal */}
      <RoleModal
        isOpen={roleModalOpen}
        onClose={() => setRoleModalOpen(false)}
        user={selectedUser}
        availableRoles={rolesData}
        onAssignRole={handleAssignRole}
        onRemoveRole={handleRemoveRole}
      />
    </div>
  );
}