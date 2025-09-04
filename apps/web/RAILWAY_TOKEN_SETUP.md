# Railway Token Setup

## 🔑 Railway Token Set Etme

### 1. Railway Token Al
1. https://railway.com/account/settings/tokens adresine git
2. **New Token** butonuna tıkla
3. Token'ı kopyala (rwy_ ile başlar)

### 2. Token'ı Set Et
```bash
# Windows PowerShell
$env:RAILWAY_TOKEN = "rwy_your-actual-token-here"

# Windows Command Prompt
setx RAILWAY_TOKEN "rwy_your-actual-token-here"

# macOS/Linux
export RAILWAY_TOKEN="rwy_your-actual-token-here"
```

### 3. Deployment Script'ini Çalıştır
```bash
cd apps/web
node railway-deploy.js
```

## 🚀 Otomatik Deployment

Token set edildikten sonra script otomatik olarak:
1. Railway service oluşturacak
2. Environment variables set edecek
3. Deployment tetikleyecek
4. Health check yapacak

## 📊 Deployment Sonrası

### Test Endpoints:
- **Health Check:** `https://your-app.up.railway.app/health`
- **Ana Sayfa:** `https://your-app.up.railway.app/`
- **Ürünler:** `https://your-app.up.railway.app/urunler`

### Railway Dashboard:
- https://railway.com/project/283b3c0c-46a1-4284-b00e-06117bbb0cf4
- Service'ler otomatik oluşacak
- Environment variables otomatik set edilecek

## ✅ Tamamlanan Adımlar
- [x] Stack audit
- [x] Build test
- [x] Railway CLI kurulumu
- [x] Deployment configs
- [x] GitHub Actions workflow
- [x] Git repository hazır
- [x] Railway token placeholder set
- [ ] Gerçek Railway token set et
- [ ] Otomatik deployment
