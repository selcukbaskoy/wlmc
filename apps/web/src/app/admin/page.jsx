"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { 
  FileText, 
  File, 
  HelpCircle, 
  Image, 
  Users,
  Eye,
  Edit,
  Calendar,
  TrendingUp
} from "lucide-react";

function StatsCard({ title, value, icon: Icon, description, color = "blue" }) {
  const colorClasses = {
    blue: "bg-blue-500 text-blue-600 bg-blue-50",
    green: "bg-green-500 text-green-600 bg-green-50", 
    purple: "bg-purple-500 text-purple-600 bg-purple-50",
    orange: "bg-orange-500 text-orange-600 bg-orange-50"
  };
  
  const [bgColor, textColor, cardBg] = colorClasses[color].split(' ');
  
  return (
    <div className={`${cardBg} rounded-lg p-6 border border-gray-200`}>
      <div className="flex items-center">
        <div className={`${bgColor} rounded-lg p-3`}>
          <Icon size={24} className="text-white" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function RecentActivity({ activities }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Son Aktiviteler</h3>
      <div className="space-y-4">
        {activities?.length > 0 ? (
          activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Edit size={16} className="text-gray-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user_email}</span> {activity.action} {activity.resource_type}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(activity.created_at).toLocaleDateString('tr-TR', {
                    day: 'numeric',
                    month: 'long',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">Henüz aktivite bulunmuyor</p>
        )}
      </div>
    </div>
  );
}

function QuickActions() {
  const actions = [
    { name: "Yeni Blog Yazısı", href: "/admin/content/blog/new", icon: FileText, color: "blue" },
    { name: "Yeni Sayfa", href: "/admin/content/pages/new", icon: File, color: "green" },
    { name: "Yeni FAQ", href: "/admin/content/faq/new", icon: HelpCircle, color: "purple" },
    { name: "Medya Yükle", href: "/admin/media", icon: Image, color: "orange" },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Hızlı İşlemler</h3>
      <div className="grid grid-cols-1 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <a
              key={action.name}
              href={action.href}
              className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Icon size={20} className={`text-${action.color}-600 mr-3`} />
              <span className="text-sm font-medium text-gray-900">{action.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    blogPosts: 0,
    pages: 0,
    faqs: 0,
    media: 0,
    drafts: 0,
    published: 0
  });
  
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboardData() {
      try {
        // Load content statistics
        const statsResponse = await fetch('/api/admin/stats');
        if (statsResponse.ok) {
          const statsData = await statsResponse.json();
          setStats(statsData);
        }
        
        // Load recent activities
        const activitiesResponse = await fetch('/api/admin/audit?limit=10');
        if (activitiesResponse.ok) {
          const activitiesData = await activitiesResponse.json();
          setActivities(activitiesData.activities || []);
        }
        
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error('Dashboard data loading error:', error);
        }
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">İçerik yönetim sisteminizin genel durumu</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Blog Yazıları"
          value={stats.blogPosts}
          icon={FileText}
          description="Toplam blog yazısı"
          color="blue"
        />
        <StatsCard
          title="Sayfalar"
          value={stats.pages}
          icon={File}
          description="Toplam sayfa"
          color="green"
        />
        <StatsCard
          title="FAQ"
          value={stats.faqs}
          icon={HelpCircle}
          description="Sık sorulan sorular"
          color="purple"
        />
        <StatsCard
          title="Medya Dosyaları"
          value={stats.media}
          icon={Image}
          description="Yüklenen dosyalar"
          color="orange"
        />
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Taslaklar"
          value={stats.drafts}
          icon={Edit}
          description="Bekleyen içerikler"
          color="orange"
        />
        <StatsCard
          title="Yayınlanan"
          value={stats.published}
          icon={Eye}
          description="Aktif içerikler"
          color="green"
        />
        <StatsCard
          title="Toplam İçerik"
          value={stats.blogPosts + stats.pages + stats.faqs}
          icon={TrendingUp}
          description="Tüm içerik türleri"
          color="blue"
        />
      </div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activities={activities} />
        <QuickActions />
      </div>
    </div>
  );
}