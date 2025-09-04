# FileZilla ile Hostinger Deployment Rehberi

## 1. FTP Bilgilerini Al
Hostinger kontrol panelinden:
- **FTP Host**: ftp.yourdomain.com veya IP adresi
- **Username**: genellikle domain adı veya kullanıcı adı
- **Password**: FTP şifresi
- **Port**: 21 (normal FTP) veya 22 (SFTP)

## 2. FileZilla Bağlantısı
```
Host: ftp.walmco.com (veya IP)
Username: [hostinger_username]
Password: [ftp_password]
Port: 21
```

## 3. Olası Klasör Yapıları

### Hostinger'da genellikle:
```
/ (root)
├── public_html/          ← En yaygın (shared hosting)
├── domains/
│   └── walmco.com/
│       └── public_html/  ← Domain bazlı
├── var/
│   └── www/
│       └── html/         ← Linux VPS
└── www/                  ← Alternatif
```

### Kontrol Edilecek Yerler:
1. **public_html/** - İlk kontrol edilecek
2. **domains/walmco.com/public_html/** - Domain bazlı yapı
3. **www/** - Kök www klasörü
4. **var/www/html/** - Linux standart yapısı

## 4. Doğru Klasörü Tanıma
✅ **Doğru klasör şunları içerir:**
- index.html veya index.php
- .htaccess dosyası
- assets/ klasörü
- Mevcut site dosyaları

## 5. Deployment İşlemi
1. **Yedek Al**: Mevcut dosyaları backup/ klasörüne taşı
2. **Temizle**: Web root'u boşalt
3. **Yükle**: walmco-fixed-deployment.zip'i çıkart
4. **Test Et**: Site'yi kontrol et

## 6. Kritik Dosyalar
- ✅ `.htaccess` - SPA routing için kritik
- ✅ `index.html` - React app giriş noktası
- ✅ `assets/` - JS/CSS dosyaları
- ✅ `manifest.json` - PWA support

## 7. Yükleme Sırası
1. Önce .htaccess
2. Sonra index.html
3. En son assets/ klasörü (büyük olduğu için)

## 8. Test URL'leri
- https://www.walmco.com → Ana sayfa
- https://www.walmco.com/urunler → Ürünler
- https://www.walmco.com/test-route → 404 yerine ana sayfa döner mi?
