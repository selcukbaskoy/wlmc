# 🚀 Railway Root Directory Fix - Kesin Çözüm

## ❌ Sorun:
Railway hala root directory'yi tanımıyor! Service settings'de root directory ayarlanmamış.

## ✅ Kesin Çözüm:

### 1. Railway Dashboard'a Git:
**URL:** https://railway.com/project/283b3c0c-46a1-4284-b00e-06117bbb0cf4

### 2. Service Settings'i Düzenle:
- **wlmc** service'ine tıkla
- **Settings** tab'ına git
- **Source** bölümünde:
  - **Root Directory:** `apps/web` yaz (şu anda boş)
  - **Build Command:** `npm ci && npm run build`
  - **Start Command:** `npm start`
  - **Health Check Path:** `/health`

### 3. Environment Variables:
```
NODE_ENV=production
PORT=3000
AUTH_SECRET=your-auth-secret-here
DATABASE_URL=your-database-url-here
NEXTAUTH_URL=https://walmco-web-production.up.railway.app
```

### 4. Redeploy:
- **Deployments** tab'ına git
- **Redeploy** butonuna tıkla
- Railway şimdi `apps/web` dizininde Node.js'i bulacak

## 🎯 Sonuç:
- **URL:** `https://walmco-web-production.up.railway.app`
- **Health Check:** `/health` endpoint

## ⏱️ Tahmini Süre:
- **Build:** ~5-10 dakika
- **Deploy:** ~2-3 dakika
- **Toplam:** ~10-15 dakika

---

**ÖNEMLİ: Root Directory'yi `apps/web` olarak ayarla ve redeploy et!**
