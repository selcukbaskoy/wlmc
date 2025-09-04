# Railway Manuel Deployment Rehberi

## 🚀 Railway Dashboard'dan Deployment

### 1. Railway Dashboard'a Git
- https://railway.com/project/283b3c0c-46a1-4284-b00e-06117bbb0cf4

### 2. Yeni Service Oluştur
1. **"New Service"** butonuna tıkla
2. **"GitHub Repo"** seç
3. **Repository:** `selcukbaskoy/wlmc` seç
4. **Root Directory:** `apps/web` olarak ayarla
5. **Service Name:** `walmco-web` (opsiyonel)

### 3. Build & Deploy Ayarları
```yaml
Build Command: npm ci && npm run build
Start Command: npm start
Health Check Path: /health
```

### 4. Environment Variables Set Et
Railway dashboard'da **Variables** sekmesinde:
```bash
NODE_ENV=production
PORT=3000
AUTH_SECRET=walmco-super-secret-key-2024
NEXTAUTH_URL=https://walmco-web-production.up.railway.app
```

### 5. Deploy
- **Deploy** butonuna tıkla
- Build loglarını takip et
- Deployment tamamlanana kadar bekle

## 🏥 Health Check Test

### Test Endpoints:
- **Health Check:** `https://your-app.up.railway.app/health`
- **Ana Sayfa:** `https://your-app.up.railway.app/`
- **Ürünler:** `https://your-app.up.railway.app/urunler`
- **Hakkımızda:** `https://your-app.up.railway.app/hakkimizda`
- **İletişim:** `https://your-app.up.railway.app/iletisim`

## 📊 Deployment Sonrası

### Railway Dashboard:
- https://railway.com/project/283b3c0c-46a1-4284-b00e-06117bbb0cf4
- Service'ler otomatik oluşacak
- Environment variables otomatik set edilecek
- Logs ve metrics görüntülenebilir

### Rollback:
- Railway dashboard'da **Deployments** sekmesi
- **Rollback** butonuna tıkla
- Önceki deployment'a dön

## ✅ Tamamlanan Adımlar
- [x] Stack audit
- [x] Build test
- [x] Railway CLI kurulumu
- [x] Deployment configs
- [x] GitHub Actions workflow
- [x] Git repository hazır
- [x] GitHub repository oluşturuldu
- [x] GitHub token set edildi
- [x] Repository push edildi
- [x] Railway token set edildi
- [ ] Manuel deployment
- [ ] Health check test
- [ ] Smoke testleri
