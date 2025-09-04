# Sertifika Yükleme Script'i
# PowerShell'de çalıştırın: .\upload-certificates.ps1

Write-Host "🚀 WALMCO Sertifika Yükleme Aracı" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan

# Hedef klasör
$targetDir = "public/sertifikalar"

# Sertifika eşleştirmeleri
$certificates = @{
    "iso-9001-2015.pdf" = "ISO 9001:2015 Kalite Yönetim Sistemi"
    "iso-14001-2015.pdf" = "ISO 14001:2015 Çevre Yönetim Sistemi"
    "iso-45001-2018.pdf" = "ISO 45001:2018 İş Sağlığı ve Güvenliği"
    "ce-uygunluk-onayi.pdf" = "Uygunluk Onayı (CE)"
    "ek-sertifika.pdf" = "Ek Sertifika"
}

Write-Host "📁 Sertifika dosyalarınızın bulunduğu klasörü girin:"
$sourceDir = Read-Host "Klasör yolu"

if (-not (Test-Path $sourceDir)) {
    Write-Host "❌ Klasör bulunamadı: $sourceDir" -ForegroundColor Red
    exit 1
}

Write-Host "📋 Mevcut PDF dosyaları:" -ForegroundColor Yellow
Get-ChildItem -Path $sourceDir -Filter "*.pdf" | ForEach-Object {
    Write-Host "  - $($_.Name)" -ForegroundColor White
}

Write-Host ""
Write-Host "🔄 Dosya eşleştirmesi başlıyor..." -ForegroundColor Green

foreach ($targetFile in $certificates.Keys) {
    $description = $certificates[$targetFile]
    Write-Host ""
    Write-Host "📄 $description" -ForegroundColor Cyan
    Write-Host "   Hedef dosya: $targetFile" -ForegroundColor Gray
    
    Write-Host "   Kaynak PDF dosyasının tam adını girin:"
    $sourceFile = Read-Host "   Dosya adı"
    
    $sourcePath = Join-Path $sourceDir $sourceFile
    $targetPath = Join-Path $targetDir $targetFile
    
    if (Test-Path $sourcePath) {
        try {
            Copy-Item $sourcePath $targetPath -Force
            Write-Host "   ✅ Başarıyla kopyalandı!" -ForegroundColor Green
        }
        catch {
            Write-Host "   ❌ Kopyalama hatası: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    else {
        Write-Host "   ⚠️  Dosya bulunamadı, atlanıyor..." -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "🎉 Yükleme tamamlandı!" -ForegroundColor Green
Write-Host "🌐 Tarayıcıda http://localhost:4000/sertifikalar adresini kontrol edin." -ForegroundColor Cyan

Read-Host "Devam etmek için Enter'a basın"
