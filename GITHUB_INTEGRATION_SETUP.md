# 🔗 GitHub Integration Setup for Railway

Railway'e GitHub integration'ı kurmak için aşağıdaki adımları takip edin:

## 🚀 Adım 1: Railway Dashboard'a Giriş

1. [Railway Dashboard](https://railway.app/dashboard) adresine gidin
2. GitHub hesabınızla giriş yapın
3. "New Project" butonuna tıklayın

## 🔧 Adım 2: GitHub Repository Bağlantısı

1. "Deploy from GitHub repo" seçeneğini seçin
2. GitHub repository'nizi seçin: `wlmc` (veya repository adınız)
3. "Deploy Now" butonuna tıklayın

## ⚙️ Adım 3: Proje Konfigürasyonu

Railway otomatik olarak şu ayarları algılayacak:
- **Root Directory**: `apps/web`
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Node.js Version**: 22+

## 🔐 Adım 4: Environment Variables

Railway dashboard'da "Variables" sekmesine gidin ve şu değişkenleri ekleyin:

```
NODE_ENV=production
PORT=3000
```

## 🚀 Adım 5: Deploy

1. "Deploy" butonuna tıklayın
2. Railway otomatik olarak build ve deploy işlemini başlatacak
3. Deploy tamamlandıktan sonra URL'nizi alacaksınız

## 🔄 Adım 6: Auto-Deploy Aktifleştirme

GitHub integration otomatik olarak aktif olacak:
- Her commit'te otomatik deploy
- Pull request'lerde preview deployment
- Production branch'teki değişiklikler otomatik deploy

## 📊 Deploy Durumu Kontrolü

Railway dashboard'da:
- **Deployments** sekmesinden deploy geçmişini görebilirsiniz
- **Logs** sekmesinden real-time logları takip edebilirsiniz
- **Metrics** sekmesinden performans metriklerini izleyebilirsiniz

## 🎯 Önemli Notlar

### Build Optimizasyonları
- `NODE_OPTIONS='--max-old-space-size=4096'` build sırasında memory artırımı
- Standalone output ile daha küçük deployment
- ESM format ile daha hızlı startup

### GitHub Integration Özellikleri
- **Automatic Deploys**: Her push'ta otomatik deploy
- **Preview Deployments**: Pull request'lerde test environment
- **Branch Protection**: Production branch'i koruma
- **Rollback**: Önceki deployment'lara geri dönme

## 🐛 Sorun Giderme

### Build Hatası
- Railway dashboard'dan "Logs" sekmesini kontrol edin
- `package.json`'daki script'leri doğrulayın
- Node.js versiyonunun 22+ olduğundan emin olun

### Deploy Hatası
- Environment variables'ları kontrol edin
- GitHub repository permissions'ları doğrulayın
- Railway service limits'lerini kontrol edin

### GitHub Integration Sorunları
- GitHub repository'nin public olduğundan emin olun
- Railway'in GitHub'a erişim izni olduğunu kontrol edin
- Repository settings'de webhook'ları kontrol edin

## 📞 Destek

Sorun yaşarsanız:
1. Railway dashboard'dan logları kontrol edin
2. Railway documentation'ını inceleyin
3. GitHub repository settings'leri kontrol edin

---

**🎉 GitHub Integration Hazır!**

Artık her commit'te otomatik deploy olacak ve GitHub ile Railway tam entegre çalışacak.
