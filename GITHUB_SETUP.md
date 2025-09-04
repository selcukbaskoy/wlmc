# GitHub Repository Setup

## 🚀 GitHub Repository Oluşturma

### 1. GitHub'da Repository Oluştur
1. https://github.com/new adresine git
2. **Repository name:** `wlmc`
3. **Description:** `Walmco Web App - React Router v7 + SSR + Vite + Hono`
4. **Public** seç
5. **Create repository** butonuna tıkla

### 2. Local Repository'yi GitHub'a Bağla
```bash
git remote add origin https://github.com/YOUR_USERNAME/wlmc.git
git branch -M main
git push -u origin main
```

### 3. Railway Token Set Et
1. https://railway.com/account/settings/tokens adresine git
2. **New Token** butonuna tıkla
3. Token'ı kopyala
4. GitHub repository'de **Settings** → **Secrets and variables** → **Actions**
5. **New repository secret** → **Name:** `RAILWAY_TOKEN` → **Value:** Token'ı yapıştır

### 4. Otomatik Deployment
- Her push'ta GitHub Actions otomatik olarak Railway'a deploy edecek
- Workflow zaten hazır: `.github/workflows/deploy.yml`

## 🎯 Deployment Sonrası

### Railway Dashboard
- https://railway.com/project/283b3c0c-46a1-4284-b00e-06117bbb0cf4
- Service'ler otomatik oluşacak
- Environment variables otomatik set edilecek

### Test Endpoints
- Health Check: `https://your-app.up.railway.app/health`
- Ana Sayfa: `https://your-app.up.railway.app/`
- Ürünler: `https://your-app.up.railway.app/urunler`

## ✅ Tamamlanan Adımlar
- [x] Stack audit
- [x] Build test
- [x] Railway CLI kurulumu
- [x] Deployment configs
- [x] GitHub Actions workflow
- [x] Git repository hazır
- [ ] GitHub repository oluştur
- [ ] Railway token set et
- [ ] Otomatik deployment
