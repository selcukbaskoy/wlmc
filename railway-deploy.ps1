# Railway Deployment PowerShell Script
$RAILWAY_TOKEN = "da9ab4ce-b3eb-425b-a7cc-97833a7e555f"
$PROJECT_ID = "283b3c0c-46a1-4284-b00e-06117bbb0cf4"

Write-Host "🚀 Railway Deployment başlatılıyor..." -ForegroundColor Green

# GraphQL mutation
$mutation = @"
{
    "query": "mutation { deploymentCreate(input: { projectId: \"$PROJECT_ID\" }) { id status createdAt } }"
}
"@

$headers = @{
    "Content-Type" = "application/json"
    "Authorization" = "Bearer $RAILWAY_TOKEN"
}

Write-Host "📡 Railway API'ye istek gönderiliyor..." -ForegroundColor Yellow

try {
    $response = Invoke-WebRequest -Uri "https://backboard.railway.app/graphql" -Method POST -Body $mutation -Headers $headers
    
    Write-Host "📊 Response Status: $($response.StatusCode)" -ForegroundColor Cyan
    Write-Host "📄 Response Content: $($response.Content)" -ForegroundColor White
    
    $jsonResponse = $response.Content | ConvertFrom-Json
    
    if ($jsonResponse.data.deploymentCreate) {
        Write-Host "✅ Deployment başarıyla oluşturuldu!" -ForegroundColor Green
        Write-Host "🆔 Deployment ID: $($jsonResponse.data.deploymentCreate.id)" -ForegroundColor Cyan
        Write-Host "📊 Status: $($jsonResponse.data.deploymentCreate.status)" -ForegroundColor Cyan
        
        Write-Host "⏳ 30 saniye bekleniyor, sonra health check yapılacak..." -ForegroundColor Yellow
        Start-Sleep -Seconds 30
        
        # Health check
        Write-Host "🏥 Health check başlatılıyor..." -ForegroundColor Green
        
        try {
            $healthResponse = Invoke-WebRequest -Uri "https://wlmc-production.up.railway.app/health" -Method GET
            
            if ($healthResponse.StatusCode -eq 200) {
                Write-Host "✅ Site canlı ve çalışıyor!" -ForegroundColor Green
                Write-Host "🌐 Site URL: https://wlmc-production.up.railway.app" -ForegroundColor Cyan
                Write-Host "📄 Health Response: $($healthResponse.Content)" -ForegroundColor White
            } else {
                Write-Host "⚠️ Health check başarısız, status: $($healthResponse.StatusCode)" -ForegroundColor Red
            }
        } catch {
            Write-Host "❌ Health check hatası: $($_.Exception.Message)" -ForegroundColor Red
        }
        
    } else {
        Write-Host "❌ Deployment oluşturulamadı" -ForegroundColor Red
        Write-Host "📄 Response: $($response.Content)" -ForegroundColor White
    }
    
} catch {
    Write-Host "❌ Railway API hatası: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "⏳ Deployment süreci tamamlandı." -ForegroundColor Yellow
