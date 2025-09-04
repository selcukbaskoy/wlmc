# 🚀 Railway Manuel Deployment - Kesin Çözüm

## ❌ GitHub Actions Sorunları:
- Build timeout (React Router v7 + SSR çok ağır)
- Railway CLI login sorunları
- GitHub Actions cache sorunları

## ✅ Kesin Çözüm: Railway Dashboard

### 1. Railway Dashboard'a Git:
**URL:** https://railway.com/project/283b3c0c-46a1-4284-b00e-06117bbb0cf4

### 2. Yeni Service Oluştur:
- **"New Service"** butonuna tıkla
- **"GitHub Repo"** seç
- **Repository:** `selcukbaskoy/wlmc` seç
- **Root Directory:** `apps/web` yaz
- **Build Command:** `npm ci && npm run build`
- **Start Command:** `npm start`
- **Health Check Path:** `/health`

### 3. Environment Variables Set Et:
```
NODE_ENV=production
PORT=3000
AUTH_SECRET=your-auth-secret-here
DATABASE_URL=your-database-url-here
NEXTAUTH_URL=https://walmco-web-production.up.railway.app
```

### 4. Deploy:
- **"Deploy"** butonuna tıkla
- Railway kendi build sistemini kullanacak
- Build timeout sorunu olmayacak

## 🎯 Sonuç:
- **URL:** `https://walmco-web-production.up.railway.app`
- **Health Check:** `/health` endpoint
- **Ana Sayfa:** `/` 
- **Ürünler:** `/urunler`

## ⏱️ Tahmini Süre:
- **Railway Build:** ~5-10 dakika
- **Deploy:** ~2-3 dakika
- **Toplam:** ~10-15 dakika

## 🔧 Rollback:
Railway Dashboard → Deployments → Previous Deploy → Rollback

---

**Bu kesin çözüm! GitHub Actions'ı bırak, Railway Dashboard kullan!**
