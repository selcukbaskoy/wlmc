"use client";

import { useState, useEffect } from "react";
import useUser from "@/utils/useUser";
import {
  LayoutDashboard,
  FileText,
  File,
  HelpCircle,
  Users,
  Tags,
  FolderOpen,
  Image,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

function AdminSidebar({ isOpen, onClose }) {
  const { data: user } = useUser();

  const navigationItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Blog Posts", href: "/admin/content/blog", icon: FileText },
    { name: "Pages", href: "/admin/content/pages", icon: File },
    { name: "FAQ", href: "/admin/content/faq", icon: HelpCircle },
    { name: "Media Library", href: "/admin/media", icon: Image },
    { name: "Categories", href: "/admin/categories", icon: FolderOpen },
    { name: "Tags", href: "/admin/tags", icon: Tags },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  const handleNavigation = (href) => {
    window.location.href = href;
    onClose?.();
  };

  const handleLogout = () => {
    window.location.href = "/account/logout";
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between h-16 px-6 bg-gray-800">
          <h1 className="text-xl font-bold">CMS Admin</h1>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col h-full">
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  <Icon size={20} className="mr-3" />
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* User info and logout */}
          <div className="px-4 py-4 border-t border-gray-700">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                {user?.email?.[0]?.toUpperCase() || "U"}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white truncate">
                  {user?.email || "User"}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:text-white hover:bg-red-600 transition-colors"
            >
              <LogOut size={20} className="mr-3" />
              Çıkış Yap
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function AdminHeader({ onMenuClick }) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-6 lg:px-8">
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-600 hover:text-gray-900"
        >
          <Menu size={24} />
        </button>
        <h1 className="ml-4 lg:ml-0 text-xl font-semibold text-gray-900">
          İçerik Yönetim Sistemi
        </h1>
      </div>
      <div className="text-sm text-gray-600">
        {new Date().toLocaleDateString("tr-TR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </header>
  );
}

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const { data: user, loading } = useUser();

  useEffect(() => {
    async function checkAdminAccess() {
      if (loading) return;

      if (!user) {
        window.location.href = "/account/signin?callbackUrl=/admin";
        return;
      }

      try {
        const response = await fetch("/api/admin/auth/check");
        const data = await response.json();

        if (data.authenticated && data.user.roles.length > 0) {
          setHasAccess(true);
        } else {
          // User is authenticated but has no admin roles
          setHasAccess(false);
        }
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error("Admin access check failed:", error);
        }
        setHasAccess(false);
      }

      setAuthChecked(true);
    }

    checkAdminAccess();
  }, [user, loading]);

  // Show loading while checking authentication
  if (!authChecked || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Yetki kontrol ediliyor...</p>
        </div>
      </div>
    );
  }

  // Show access denied if user doesn't have admin roles
  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X size={32} className="text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Erişim Reddedildi
          </h1>
          <p className="text-gray-600 mb-6">
            Bu sayfaya erişmek için admin yetkileriniz bulunmuyor. Lütfen sistem
            yöneticisi ile iletişime geçin.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="lg:pl-64">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
