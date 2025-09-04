# 🛡️ WALMCO Güvenli Görsel Sistemi

Bu dokümantasyon WALMCO projesi için geliştirilen güvenli görsel sunumu sisteminin kurulum, kullanım ve bakım kılavuzudur.

## 📋 İçindekiler

1. [Genel Bakış](#genel-bakış)
2. [Kurulum](#kurulum)
3. [Kullanım](#kullanım)
4. [Güvenlik Özellikleri](#güvenlik-özellikleri)
5. [API Referansı](#api-referansı)
6. [Sunucu Konfigürasyonu](#sunucu-konfigürasyonu)
7. [Test Etme](#test-etme)
8. [Sorun Giderme](#sorun-giderme)
9. [Bilinen Sınırlamalar](#bilinen-sınırlamalar)

## 🎯 Genel Bakış

WALMCO Güvenli Görsel Sistemi, ürün görsellerini telif hakkı ihlali ve yetkisiz kullanımdan korumak için geliştirilmiş kapsamlı bir güvenlik çözümüdür.

### Ana Özellikler

- ✅ **Canvas Tabanlı Rendering**: Görseller DOM'da gerçek URL göstermez
- ✅ **Dinamik Watermark**: Kullanıcı bilgisi + tarih/saat ile otomatik watermark
- ✅ **Hotlink Koruması**: Sadece izin verilen domain'lerden erişim
- ✅ **İmzalı URL**: Geçici, kısa ömürlü görsel erişimi
- ✅ **Rate Limiting**: Aşırı istek koruması
- ✅ **Klavye Kısayol Engelleme**: Ctrl+S, Ctrl+U, PrintScreen engelleme
- ✅ **Mobile Koruma**: Uzun basma, sürükleme engelleme
- ✅ **Developer Tools Algılama**: DevTools açılma tespiti
- ✅ **Screenshot Caydırması**: Visibility change overlay
- ✅ **Print Koruması**: Yazdırma sırasında görsel gizleme

## 🚀 Kurulum

### 1. Bağımlılıkları Kontrol Edin

Sistem mevcut React Router + Vite projesine entegre edilmiştir. Ek paket kurulumu gerekmez.

### 2. Environment Değişkenlerini Ayarlayın

```bash
# env.example dosyasını .env olarak kopyalayın
cp env.example .env
```

Gerekli değişkenleri düzenleyin:

```env
# Güvenlik anahtarı (production'da değiştirin!)
IMAGE_SECRET_KEY=walmco-secure-images-key-2024-CHANGE-THIS-IN-PRODUCTION

# Görsel sunucu URL'i
IMAGE_BASE_URL=https://walmco-images.example.com

# Token geçerlilik süresi (saniye)
IMAGE_TOKEN_EXPIRY=60

# İzin verilen domain'ler
ALLOWED_DOMAINS=localhost,127.0.0.1,walmco.com,www.walmco.com
```

### 3. Nginx Konfigürasyonu (Opsiyonel)

Nginx kullanıyorsanız, `nginx-security.conf` dosyasını sunucunuza kopyalayın:

```bash
sudo cp nginx-security.conf /etc/nginx/sites-available/walmco-secure
sudo ln -s /etc/nginx/sites-available/walmco-secure /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## 💻 Kullanım

### SecureImage Bileşeni

Standart `<img>` etiketinin yerine `<SecureImage>` bileşenini kullanın:

```jsx
import SecureImage from '../components/SecureImage';

function ProductPage() {
  return (
    <div className="product-image">
      <SecureImage
        src="product-image-id-or-url"
        alt="Ürün açıklaması"
        className="w-full h-96"
        watermarkText="WALMCO 2024"
        watermarkOpacity={0.3}
        watermarkGap={200}
        onLoad={() => console.log('Görsel yüklendi')}
        onError={(error) => console.error('Görsel hatası:', error)}
      />
    </div>
  );
}
```

### ProductPageGuard Kullanımı

Ürün sayfalarını koruma altına alın:

```jsx
import ProductPageGuard from '../components/ProductPageGuard';

function ProductDetailPage() {
  return (
    <ProductPageGuard>
      {/* Sayfa içeriği */}
      <div>
        <SecureImage src="..." alt="..." />
        {/* Diğer içerik */}
      </div>
    </ProductPageGuard>
  );
}
```

### Hook Kullanımı

Özel koruma mantığı için hook'u kullanın:

```jsx
import { useProductPageGuards } from '../hooks/useProductPageGuards';

function CustomComponent() {
  const { isBlurred, showWarning, isProtected } = useProductPageGuards();
  
  if (isBlurred) {
    return <div>İçerik geçici olarak gizlendi</div>;
  }
  
  return <div>Normal içerik</div>;
}
```

## 🔒 Güvenlik Özellikleri

### 1. Canvas Tabanlı Görsel Sunumu

- Görseller `<canvas>` elementinde render edilir
- DOM'da gerçek görsel URL'si görünmez
- Memory'de blob olarak işlenir

### 2. Dinamik Watermark Sistemi

```jsx
// Otomatik watermark
<SecureImage 
  src="image.jpg"
  watermarkText="WALMCO - 12.01.2024" // Otomatik oluştur
  watermarkOpacity={0.3}              // %30 şeffaflık
  watermarkGap={200}                  // 200px aralık
/>
```

### 3. Klavye Kısayolu Engelleme

Engellenen kısayollar:
- `Ctrl/Cmd + S` (Kaydet)
- `Ctrl/Cmd + U` (Kaynak görüntüle)
- `Ctrl/Cmd + P` (Yazdır)
- `F12` (Developer Tools)
- `PrintScreen` (Ekran görüntüsü)

### 4. Mouse/Touch Engelleme

- Sağ tık menüsü engellenir
- Drag & drop engellenir
- Mobilde uzun basma engellenir
- Metin seçimi engellenir (sadece görsellerde)

### 5. Rate Limiting

```
Normal sayfa: 100 istek/dakika
Görsel API: 30 istek/dakika
```

### 6. Hotlink Koruması

```nginx
# Nginx konfigürasyonunda
valid_referers none blocked server_names *.walmco.com walmco.com;
if ($invalid_referer) {
    return 403;
}
```

## 📡 API Referansı

### Güvenli Görsel Endpoint'i

```
GET /api/images/secure/[imageId]
```

**Headers:**
```
Authorization: Bearer [token]
Referer: https://walmco.com
```

**Response:**
```
200 OK - Görsel stream
401 Unauthorized - Yetkisiz erişim
403 Forbidden - Geçersiz referer
404 Not Found - Görsel bulunamadı
429 Too Many Requests - Rate limit aşıldı
```

### SecureImage Props

| Prop | Tip | Varsayılan | Açıklama |
|------|-----|------------|----------|
| `src` | string | - | Görsel ID veya URL (zorunlu) |
| `alt` | string | - | Alt metin (zorunlu) |
| `className` | string | '' | CSS sınıfları |
| `watermarkText` | string | auto | Watermark metni |
| `watermarkOpacity` | number | 0.3 | Watermark şeffaflığı (0-1) |
| `watermarkGap` | number | 200 | Watermark tekrar aralığı (px) |
| `quality` | number | 1 | Görsel kalitesi (1-3) |
| `onClick` | function | - | Tıklama eventi |
| `onLoad` | function | - | Yükleme tamamlandı |
| `onError` | function | - | Hata durumu |

## ⚙️ Sunucu Konfigürasyonu

### Nginx Örneği

```nginx
# Hotlink koruması
location ~* \.(jpg|jpeg|png|gif|svg)$ {
    valid_referers none blocked server_names *.walmco.com;
    if ($invalid_referer) {
        return 403;
    }
}

# Rate limiting
limit_req_zone $binary_remote_addr zone=api:10m rate=100r/m;
limit_req_zone $binary_remote_addr zone=images:10m rate=30r/m;

location /api/images/secure/ {
    limit_req zone=images burst=10 nodelay;
    proxy_pass http://localhost:4000;
}
```

### CloudFront Örneği

```json
{
  "Statement": [
    {
      "Sid": "RestrictToWalmcoDomain",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::walmco-images/*",
      "Condition": {
        "StringLike": {
          "aws:Referer": [
            "https://walmco.com/*",
            "https://www.walmco.com/*"
          ]
        }
      }
    }
  ]
}
```

### CSP (Content Security Policy)

```
Content-Security-Policy: 
  default-src 'self'; 
  img-src 'self' data: blob: https://*.walmco.com; 
  script-src 'self' 'unsafe-inline' 'unsafe-eval'; 
  style-src 'self' 'unsafe-inline'; 
  connect-src 'self' https://*.walmco.com;
  frame-src 'none';
  object-src 'none';
```

## 🧪 Test Etme

### E2E Testleri Çalıştırma

```bash
# Playwright testlerini çalıştır
npm run test:e2e

# Sadece güvenlik testleri
npm run test:e2e -- --grep "Güvenli Görsel"

# Test raporu oluştur
npm run test:e2e -- --reporter=html
```

### Manuel Test Senaryoları

1. **Sağ Tık Testi**: Ürün görselinde sağ tık yapın → Menu açılmamalı
2. **Kaydet Testi**: `Ctrl+S` basın → Uyarı gösterilmeli, dosya indirilmemeli
3. **DevTools Testi**: F12 basın → Uyarı gösterilmeli
4. **Hotlink Testi**: Başka sitede görsel URL'ini açın → 403 error
5. **Rate Limit Testi**: Hızla 50+ istek gönderin → 429 error

### Lighthouse Audit

```bash
# Performans ve güvenlik auditi
lighthouse http://localhost:4000/pleksiglas-korkuluk-baba-2839-tripoli \
  --output json \
  --output html \
  --output-path ./lighthouse-report
```

Beklenen skorlar:
- **Performans**: ≥ 90
- **Erişilebilirlik**: ≥ 90
- **Best Practices**: ≥ 90
- **SEO**: ≥ 90

## 🚨 Sorun Giderme

### Yaygın Problemler

#### 1. Görseller Yüklenmiyor

**Semptom**: Canvas boş, loading spinner sonsuz döner

**Çözüm**:
```bash
# Environment değişkenlerini kontrol edin
echo $IMAGE_SECRET_KEY
echo $IMAGE_BASE_URL

# API endpoint'inin çalıştığını test edin
curl -H "Authorization: Bearer test" \
     -H "Referer: https://walmco.com" \
     http://localhost:4000/api/images/secure/test.jpg
```

#### 2. Rate Limit Hataları

**Semptom**: 429 Too Many Requests

**Çözüm**:
```javascript
// Rate limit ayarlarını güncelleyin
const RATE_LIMIT_MAX_REQUESTS = 100; // Artırın
const RATE_LIMIT_WINDOW_MS = 60000;   // Pencereyi büyütün
```

#### 3. Watermark Görünmüyor

**Semptom**: Canvas'ta watermark yok

**Debug**:
```javascript
// Browser console'da test edin
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 100, 100); // Test çizimi
```

#### 4. CORS Hataları

**Semptom**: Console'da CORS error

**Çözüm**:
```javascript
// middleware.js dosyasında CORS başlıklarını kontrol edin
headers.set('Access-Control-Allow-Origin', origin);
headers.set('Access-Control-Allow-Credentials', 'true');
```

### Debug Modu

Development modunda debug bilgileri aktif etmek için:

```javascript
// SecureImage.tsx içinde
const DEBUG = process.env.NODE_ENV === 'development';

if (DEBUG) {
  console.log('🔒 SecureImage Debug:', {
    src,
    watermarkText,
    canvasSize: { width: canvas.width, height: canvas.height }
  });
}
```

### Log Analizi

```bash
# Nginx access log'larını izleyin
tail -f /var/log/nginx/access.log | grep "api/images/secure"

# Rate limit logları
tail -f /var/log/nginx/error.log | grep "limiting requests"

# Uygulama logları
tail -f logs/app.log | grep "SecureImage"
```

## ⚠️ Bilinen Sınırlamalar

### Teknolojik Sınırlamalar

1. **OS Düzeyinde Screenshot**: İşletim sistemi screenshot araçları engellenemez
2. **Video Kayıt**: Ekran kayıt yazılımları engellenemez
3. **Tarayıcı Developer Tools**: Tamamen engellenemez, sadece zorlaştırılır
4. **Mobile İşletim Sistemleri**: iOS/Android screenshot kısayolları engellenemez

### Performans Etkileri

1. **Canvas Rendering**: Normal `<img>` etiketinden %10-15 daha yavaş
2. **Memory Kullanımı**: Blob storage için ek memory gerekir
3. **CPU Kullanımı**: Watermark çizimi için ek işlem gücü

### UX Etkileri

1. **Sağ Tık Menüsü**: Metin üzerinde de etkilenebilir
2. **Klavye Kısayolları**: Bazı kullanıcı alışkanlıkları kesintiye uğrar
3. **Loading Süresi**: Görsel yükleme süresi artabilir

### Tarayıcı Desteği

- ✅ **Chrome**: Tam destek
- ✅ **Firefox**: Tam destek  
- ✅ **Safari**: Tam destek
- ✅ **Edge**: Tam destek
- ⚠️ **IE11**: Kısıtlı destek (Canvas API)

## 📈 İyileştirme Önerileri

### Kısa Vadeli (1-2 hafta)

1. **Image Compression**: WebP format desteği ekleyin
2. **CDN Integration**: CloudFront signed URLs
3. **Better Caching**: Browser cache stratejisi
4. **Mobile Optimization**: Touch event'leri iyileştirin

### Orta Vadeli (1-2 ay)

1. **Machine Learning**: Anormal davranış tespiti
2. **Blockchain**: Görsel sahiplik kanıtı
3. **Advanced Watermarking**: Görünmez watermark
4. **Real-time Monitoring**: Dashboard ve alertler

### Uzun Vadeli (3-6 ay)

1. **DRM Integration**: Donanım düzeyinde koruma
2. **Mobile Apps**: Native mobile koruma
3. **AI Analysis**: Görsel çalınma tespiti
4. **Legal Integration**: Otomatik DMCA takedown

## 📞 Destek

### Teknik Destek

- **Email**: dev@walmco.com
- **Slack**: #walmco-tech-support
- **GitHub Issues**: [Repository Link]

### Dokümantasyon

- **API Docs**: `/docs/api`
- **Component Docs**: Storybook
- **Security Audit**: `/docs/security`

### Acil Durum

Güvenlik açığı tespit ederseniz:

1. **HEMEN** sistemi devre dışı bırakın
2. **security@walmco.com** adresine bildirin
3. **Incident report** oluşturun

---

## 📄 Lisans

Bu yazılım WALMCO şirketi tarafından geliştirilmiştir. Tüm hakları saklıdır.

© 2024 WALMCO - Güvenli Görsel Sistemi

---

**Son Güncelleme**: Ocak 2024  
**Versiyon**: 1.0.0  
**Yazar**: WALMCO Development Team
