# WALMCO Web Uygulaması

WALMCO pleksi korkuluk sistemleri için geliştirilmiş modern web uygulaması.

## 🚀 Başlangıç

```bash
# Bağımlılıkları yükle
npm install

# Development sunucusu başlat
npm run dev

# Production build
npm run build
```

## 🛡️ Güvenli Görsel Sistemi

Bu proje **güvenli görsel sunumu sistemi** ile donatılmıştır. Ürün görsellerini telif hakkı ihlali ve yetkisiz kullanımdan korur.

### Hızlı Kurulum

1. **Environment dosyası oluşturun:**
   ```bash
   cp env.example .env
   ```

2. **Güvenlik anahtarını ayarlayın:**
   ```env
   IMAGE_SECRET_KEY=your-secret-key-here-change-in-production
   ```

3. **Secure bileşenini kullanın:**
   ```jsx
   import SecureImage from './components/SecureImage';
   
   <SecureImage 
     src="product-image.jpg" 
     alt="Ürün görseli"
     watermarkText="WALMCO 2024"
   />
   ```

### Güvenlik Özellikleri

- ✅ Canvas tabanlı görsel rendering
- ✅ Dinamik watermark sistemi
- ✅ Hotlink koruması
- ✅ Rate limiting
- ✅ Klavye kısayolu engelleme
- ✅ Developer tools algılama
- ✅ Mobile koruma (uzun basma, sürükleme)
- ✅ Print media koruması

Detaylı bilgi için: **[SECURE_IMAGES.md](./SECURE_IMAGES.md)**

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── SecureImage.tsx          # Güvenli görsel bileşeni
│   ├── ProductPageGuard.jsx     # Sayfa koruması
│   └── ...
├── hooks/
│   ├── useProductPageGuards.js  # Güvenlik hook'u
│   └── ...
├── app/
│   ├── api/images/secure/       # Güvenli görsel API
│   └── ...
└── tests/
    └── secure-images.test.js    # E2E güvenlik testleri
```

## 🔧 Teknolojiler

- **React Router** - Routing
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **i18next** - Internationalization
- **Canvas API** - Secure image rendering
- **Playwright** - E2E testing

## 📝 Geliştirme

### Kod Standartları

- TypeScript strict mode kullanın
- Tailwind CSS sınıflarını tercih edin
- Component'leri küçük ve tekrar kullanılabilir tutun
- Güvenlik önlemlerini gözardı etmeyin

### Yeni Ürün Sayfası Ekleme

1. **SecureImage kullanın:**
   ```jsx
   import SecureImage from '../../components/SecureImage';
   import ProductPageGuard from '../../components/ProductPageGuard';
   
   export default function ProductPage() {
     return (
       <ProductPageGuard>
         <div className="product-image">
           <SecureImage src="..." alt="..." />
         </div>
       </ProductPageGuard>
     );
   }
   ```

2. **CSS sınıfları ekleyin:**
   ```jsx
   <div className="product-image"> // Koruma için gerekli
     <SecureImage className="no-copy" /> // Ek koruma
   </div>
   ```

### Test Etme

```bash
# Unit testler
npm test

# E2E testler (güvenlik dahil)
npm run test:e2e

# Lighthouse audit
npm run audit
```

## 📦 Deployment

### Production Checklist

- [ ] `IMAGE_SECRET_KEY` değiştirildi
- [ ] HTTPS sertifikası aktif
- [ ] Nginx güvenlik kuralları uygulandı
- [ ] Rate limiting ayarları yapıldı
- [ ] CDN hotlink koruması aktif
- [ ] Security headers ayarlandı

### Nginx Konfigürasyonu

```bash
# Güvenlik konfigürasyonunu kopyala
sudo cp nginx-security.conf /etc/nginx/sites-available/walmco
sudo ln -s /etc/nginx/sites-available/walmco /etc/nginx/sites-enabled/
sudo systemctl reload nginx
```

## 🚨 Güvenlik Uyarıları

### ⚠️ ÖNEMLİ

1. **Production'da `IMAGE_SECRET_KEY` mutlaka değiştirin**
2. **Rate limiting ayarlarını environment'a göre ayarlayın**  
3. **Nginx/CDN güvenlik kurallarını uygulayın**
4. **SSL sertifikası kullanın**
5. **Security headers'ları eksik bırakmayın**

### Güvenlik İncelemeleri

- Yeni özellik eklerken güvenlik testlerini çalıştırın
- Console error'larını düzenli kontrol edin  
- Performance metrikleri takip edin
- User feedback'i değerlendirin

## 📞 Destek

- **Teknik Sorunlar**: [GitHub Issues](https://github.com/walmco/web)
- **Güvenlik Açıkları**: security@walmco.com
- **Genel Sorular**: dev@walmco.com

## 📄 Lisans

© 2024 WALMCO. Tüm hakları saklıdır.
