# Railway Deployment - Manuel Adımlar

## ✅ Tamamlanan Adımlar:
1. **Railway Token Set:** `RAILWAY_TOKEN` environment variable set edildi
2. **Railway CLI:** v4.6.3 kurulu ve çalışıyor
3. **Proje Link:** walmco-web projesi başarıyla link edildi
4. **Git Repository:** Hazır ve commit edilmiş

## 🚀 Manuel Deployment Adımları:

### 1. Railway Dashboard'a Git
- URL: https://railway.com/project/283b3c0c-46a1-4284-b00e-06117bbb0cf4
- Login: Selcuk Baskoy (selcukbaskoy@gmail.com)

### 2. Yeni Service Oluştur
1. **"New Service"** butonuna tıkla
2. **"GitHub Repo"** seç
3. Bu repository'yi seç: `wlmc` (walmco-web)
4. **Root Directory:** `apps/web` olarak ayarla
5. **Service Name:** `web` (opsiyonel)

### 3. Build & Deploy Ayarları
```yaml
Build Command: npm ci && npm run build
Start Command: npm start
Health Check Path: /health
```

### 4. Environment Variables Set Et
Railway dashboard'da **Variables** sekmesine git ve şunları ekle:

```bash
NODE_ENV=production
PORT=3000
AUTH_SECRET=walmco-super-secret-key-2024
NEXTAUTH_URL=https://walmco-web-production.up.railway.app
DATABASE_URL=your-database-url-here
```

### 5. Deploy'i Tetikle
1. **"Deploy"** butonuna tıkla
2. Build loglarını takip et
3. Deploy tamamlanana kadar bekle

### 6. Health Check
Deploy tamamlandıktan sonra:
- URL: `https://walmco-web-production.up.railway.app/health`
- Expected: 200 OK response

## 🔧 Alternatif: Railway CLI (Non-Interactive)

Eğer CLI kullanmak istersen:

```bash
# 1. Service oluştur (dashboard'dan)
# 2. Environment variables set et
railway variables --set "NODE_ENV=production" --set "PORT=3000" --set "AUTH_SECRET=walmco-super-secret-key-2024" --set "NEXTAUTH_URL=https://walmco-web-production.up.railway.app"

# 3. Deploy
railway up --detach

# 4. Status kontrol
railway status
railway logs --build
```

## 📊 Deployment Sonrası Kontroller:

### 1. Ana Sayfa Test
```bash
curl https://walmco-web-production.up.railway.app/
# Expected: 200 OK
```

### 2. Health Check Test
```bash
curl https://walmco-web-production.up.railway.app/health
# Expected: 200 OK
```

### 3. Kritik Rotalar Test
- `/urunler` - Ürünler sayfası
- `/hakkimizda` - Hakkımızda sayfası
- `/iletisim` - İletişim sayfası

### 4. Asset Cache Kontrolü
- CSS/JS dosyaları cache başlıkları ile geliyor mu?
- Gzip compression aktif mi?

## 🚨 Rollback Komutu:
```bash
railway rollback
```

## 📈 Performance Monitoring:
- Railway dashboard'da **Metrics** sekmesini kontrol et
- Response time, memory usage, CPU usage
- Error rate ve log'ları takip et

## 🔐 Güvenlik Notları:
- `AUTH_SECRET` güçlü bir değer kullan
- `DATABASE_URL` production database'e işaret etmeli
- `NEXTAUTH_URL` doğru domain'e set edilmeli

## 📞 Destek:
- Railway Docs: https://docs.railway.app/
- Railway Discord: https://discord.gg/railway
- Railway Status: https://status.railway.app/
