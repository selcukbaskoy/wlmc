# Sertifikalar Klasörü

Bu klasöre aşağıdaki sertifikaları yükleyiniz:

## 📋 Yüklenmesi Gereken Dosyalar:

1. **iso-9001-2015.pdf** - ISO 9001:2015 Kalite Yönetim Sistemi
2. **iso-14001-2015.pdf** - ISO 14001:2015 Çevre Yönetim Sistemi  
3. **iso-45001-2018.pdf** - ISO 45001:2018 İş Sağlığı ve Güvenliği
4. **ce-uygunluk-onayi.pdf** - Uygunluk Onayı (CE)
5. **ek-sertifika.pdf** - Ek Sertifika

## 🚀 Yükleme Adımları:

### Yöntem 1: Manuel Yükleme (Önerilen)
1. Sertifika PDF dosyalarınızı yukarıdaki isimlerle yeniden adlandırın
2. Bu klasöre (`public/sertifikalar/`) kopyalayın
3. Sayfa otomatik olarak güncellenecektir

### Yöntem 2: Drag & Drop (Windows Explorer)
1. Windows Explorer'da bu klasörü açın
2. Sertifika dosyalarını sürükleyip bırakın
3. Dosya isimlerini yukarıdaki listeye göre değiştirin

### Yöntem 3: Programatik Yükleme
```bash
# Terminal'den dosya kopyalama
cp "C:/Masaustü/WALMCO PLEKSI 9.pdf" "public/sertifikalar/iso-9001-2015.pdf"
cp "C:/Masaustü/WALMCO PLEKSI 14.pdf" "public/sertifikalar/iso-14001-2015.pdf"
# ... diğer dosyalar
```

## ⚠️ Önemli Notlar:

- Dosya isimleri tam olarak yukarıdaki gibi olmalıdır
- PDF formatında olmalıdır
- Dosya boyutu 10MB'ı geçmemelidir
- Türkçe karakter içermemelidir

## 🔧 Sorun Giderme:

**Sertifika görünmüyorsa:**
1. Dosya ismini kontrol edin
2. PDF formatında olduğundan emin olun
3. Tarayıcı cache'ini temizleyin (Ctrl+F5)

**Yeni sertifika eklemek için:**
1. `apps/web/src/app/sertifikalar/page.jsx` dosyasını açın
2. `certificates` array'ine yeni sertifika objesi ekleyin
3. Dosyayı bu klasöre yükleyin
