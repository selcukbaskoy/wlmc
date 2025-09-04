# Hero Section Görselleri

Bu klasöre ana sayfa hero section'ında kullanılacak görselleri yükleyiniz.

## 📋 Yüklenmesi Gereken Dosyalar:

1. **pleksi-korkuluk-showcase.jpg** - Ana korkuluk sistemi vitrin görseli
2. **pleksi-mobilya-modern.jpg** - Modern mobilya ürünleri 
3. **ozel-tasarim-cozumler.jpg** - Özel tasarım projeler ve çözümler

## 🎨 Görsel Gereksinimleri:

### Boyut ve Format:
- **Format**: JPG veya PNG
- **Boyut**: 1920x1080 (Full HD) önerilen
- **Minimum**: 1200x800
- **Maksimum dosya boyutu**: 2MB

### Görsel İçeriği:
- **Yüksek kalite**: Professional fotoğraflar
- **Iyi ışıklandırma**: Açık ve net görünüm
- **Marka uyumu**: WALMCO tarzına uygun
- **Horizontal**: Yatay format zorunlu

## 🚀 Yükleme Yöntemleri:

### Yöntem 1: Manuel Kopyalama
```
1. Görselleri yukarıdaki isimlerle yeniden adlandırın
2. Bu klasöre (public/hero-images/) kopyalayın
3. Ana sayfayı yenileyin (Ctrl+F5)
```

### Yöntem 2: PowerShell ile Toplu Yükleme
```powershell
# Örnek komutlar
cp "C:/Masaüstü/korkuluk-vitrin.jpg" "public/hero-images/pleksi-korkuluk-showcase.jpg"
cp "C:/Masaüstü/mobilya-modern.jpg" "public/hero-images/pleksi-mobilya-modern.jpg"
# ... diğer dosyalar
```

### Yöntem 3: Hero Slide Ekleme
Yeni slide eklemek için `src/components/Hero.jsx` dosyasını açın:

```javascript
{
  id: 6,
  title: "Yeni Başlık",
  subtitle: "Alt Başlık", 
  description: "Açıklama metni",
  image: "/hero-images/yeni-gorsel.jpg",
  cta: "Buton Metni",
  ctaLink: "/hedef-sayfa",
  badge: "Rozet Metni",
}
```

## 🎞️ Mevcut Slide'lar:

1. **Slide 1**: Pleksi Korkuluk Sistemleri (Video + Görsel)
2. **Slide 2**: Pleksi Mobilya Ürünleri  
3. **Slide 3**: Özel Tasarım Çözümler

## ⚙️ Teknik Detaylar:

- **Otomatik Değişim**: 15 saniye
- **WalmcoImage**: Otomatik fallback desteği
- **Responsive**: Mobil uyumlu
- **Loading**: Lazy loading optimize

## 🔧 Sorun Giderme:

**Görsel görünmüyorsa:**
1. Dosya adını kontrol edin
2. Dosya boyutunu kontrol edin (max 2MB)
3. Tarayıcı cache'ini temizleyin (Ctrl+F5)
4. Network sekmesinde 404 hatası var mı kontrol edin

**Yeni slide ekleme:**
1. `Hero.jsx` dosyasını açın
2. `slides` array'ine yeni obje ekleyin
3. Görseli bu klasöre yükleyin
4. Sayfayı yenileyin
