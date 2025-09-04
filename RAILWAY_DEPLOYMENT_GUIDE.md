# 🚀 Railway Deployment Guide

Bu rehber, React Router projenizi Railway'e otomatik olarak deploy etmek için hazırlanmıştır.

## 📋 Ön Gereksinimler

- Node.js 22+ yüklü olmalı
- Git repository'si hazır olmalı
- Railway hesabı oluşturulmuş olmalı

## 🛠️ Yapılandırma Değişiklikleri

### 1. Package.json Düzeltmeleri
- ✅ `start` komutu `react-router serve` olarak güncellendi
- ✅ Build komutu optimize edildi
- ✅ Node.js 22+ gereksinimi belirtildi

### 2. React Router Konfigürasyonu
- ✅ `react-router.config.ts` standalone output için yapılandırıldı
- ✅ Server build dosyası `index.js` olarak ayarlandı
- ✅ ESM format kullanımı aktif edildi

### 3. Git ve Docker Ayarları
- ✅ `.gitignore` build dizinleri için güncellendi
- ✅ `.dockerignore` oluşturuldu
- ✅ Railway için optimize edildi

### 4. Railway Konfigürasyonu
- ✅ `nixpacks.toml` Railway için optimize edildi
- ✅ Node.js 22 kullanımı ayarlandı
- ✅ Build ve start komutları standardize edildi

## 🚀 Otomatik Deploy

### Windows Kullanıcıları için:
```powershell
# PowerShell script'ini çalıştır
.\railway-auto-deploy.ps1
```

### Linux/Mac Kullanıcıları için:
```bash
# Node.js script'ini çalıştır
node railway-auto-deploy.js
```

## 🔧 Manuel Deploy Adımları

Eğer otomatik script çalışmazsa, aşağıdaki adımları manuel olarak takip edebilirsiniz:

### 1. Railway CLI Kurulumu
```bash
npm install -g @railway/cli
```

### 2. Railway'e Giriş
```bash
railway login
# Token: 2bff399b-9440-4322-9f24-fd4cb1527e16
```

### 3. Proje Dizinine Geçiş
```bash
cd apps/web
```

### 4. Railway Projesi Başlatma
```bash
railway init
```

### 5. Environment Variables Ayarlama
```bash
railway variables set NODE_ENV=production
railway variables set PORT=3000
```

### 6. Deploy
```bash
railway up
```

### 7. Domain Alma
```bash
railway domain
```

## 🔄 GitHub Entegrasyonu

Otomatik deploy için GitHub repository'nizi Railway'e bağlayın:

```bash
railway connect
```

Bu komut çalıştıktan sonra:
- Her commit'te otomatik deploy olacak
- Pull request'lerde preview deployment'lar oluşacak
- Production branch'teki değişiklikler otomatik deploy edilecek

## 📊 Railway Komutları

### Proje Durumu
```bash
railway status
```

### Logları Görüntüleme
```bash
railway logs
```

### Environment Variables
```bash
railway variables
```

### Domain Yönetimi
```bash
railway domain
railway domain add custom-domain.com
```

## 🐛 Sorun Giderme

### Build Hatası
- `package.json`'daki script'leri kontrol edin
- Node.js versiyonunun 22+ olduğundan emin olun
- Dependencies'lerin güncel olduğunu kontrol edin

### Deploy Hatası
- Railway token'ının doğru olduğunu kontrol edin
- Internet bağlantınızı kontrol edin
- Railway dashboard'dan logları inceleyin

### Environment Variables
- `.env` dosyasındaki değişkenleri Railway'e manuel olarak ekleyin
- Production ve development environment'larını ayırt edin

## 📈 Performans Optimizasyonu

### Build Optimizasyonu
- `NODE_OPTIONS='--max-old-space-size=4096'` build sırasında memory artırımı
- Standalone output ile daha küçük deployment
- ESM format ile daha hızlı startup

### Runtime Optimizasyonu
- React Router'ın SSR özelliklerini kullanın
- Static asset'leri CDN'den serve edin
- Database connection pooling kullanın

## 🔐 Güvenlik

### Environment Variables
- Sensitive bilgileri Railway environment variables'da saklayın
- `.env` dosyalarını git'e commit etmeyin
- Production ve development secret'larını ayırın

### HTTPS
- Railway otomatik olarak HTTPS sağlar
- Custom domain kullanıyorsanız SSL certificate otomatik olarak yüklenir

## 📞 Destek

Sorun yaşarsanız:
1. Railway dashboard'dan logları kontrol edin
2. GitHub issues'da sorun bildirin
3. Railway documentation'ını inceleyin

---

**🎉 Başarılı Deploy!**

Projeniz artık Railway'de çalışıyor ve her commit'te otomatik olarak güncellenecek.
