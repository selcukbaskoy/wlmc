# Sunucunun başlamasını bekleyip Lighthouse testini çalıştıran script

$port = 4000
$lighthouseCommand = "lighthouse http://localhost:$port --quiet --chrome-flags='--headless'"  # Lighthouse komutunu özelleştirebilirsin

Write-Host "Server'ın $port portunda başlamasını bekliyorum..." -ForegroundColor Yellow

# Portu kontrol eden döngü
while ($true) {
    $portCheck = netstat -ano | findstr ":$port"

    if ($portCheck) {
        Write-Host "Server başladı! Port $port dinleniyor." -ForegroundColor Green
        
        # Lighthouse testi çalıştır
        Write-Host "Lighthouse testi başlatılıyor..." -ForegroundColor Cyan
        Invoke-Expression $lighthouseCommand
        break
    } else {
        Write-Host "Server henüz hazır değil. 5 saniye bekleniyor..." -ForegroundColor DarkYellow
        Start-Sleep -Seconds 5
    }
}

Write-Host "Test tamamlandı." -ForegroundColor Green
