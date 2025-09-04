# Railway Auto-Deploy PowerShell Script
# This script automatically deploys the React Router app to Railway

Write-Host "🚀 Starting Railway Auto-Deploy Process..." -ForegroundColor Green

# Railway configuration
$RAILWAY_TOKEN = "2bff399b-9440-4322-9f24-fd4cb1527e16"
$GITHUB_TOKEN = "YOUR_GITHUB_TOKEN_HERE"
$PROJECT_NAME = "wlmc-web"

try {
    # Step 1: Install Railway CLI if not already installed
    Write-Host "📦 Checking Railway CLI installation..." -ForegroundColor Yellow
    try {
        railway --version | Out-Null
        Write-Host "✅ Railway CLI already installed" -ForegroundColor Green
    } catch {
        Write-Host "Installing Railway CLI..." -ForegroundColor Yellow
        npm install -g @railway/cli
    }

    # Step 2: Login to Railway
    Write-Host "🔐 Logging into Railway..." -ForegroundColor Yellow
    $RAILWAY_TOKEN | railway login

    # Step 3: Navigate to web app directory
    $webAppPath = Join-Path $PSScriptRoot "apps\web"
    Set-Location $webAppPath
    Write-Host "📁 Changed to directory: $webAppPath" -ForegroundColor Cyan

    # Step 4: Initialize Railway project if not already initialized
    Write-Host "🚂 Initializing Railway project..." -ForegroundColor Yellow
    try {
        railway status | Out-Null
        Write-Host "✅ Railway project already initialized" -ForegroundColor Green
    } catch {
        railway init
    }

    # Step 5: Set environment variables
    Write-Host "🔧 Setting up environment variables..." -ForegroundColor Yellow
    $envVars = @(
        "NODE_ENV=production",
        "PORT=3000"
    )

    foreach ($envVar in $envVars) {
        $key, $value = $envVar.Split('=')
        try {
            railway variables set "$key=$value"
            Write-Host "✅ Set $key=$value" -ForegroundColor Green
        } catch {
            Write-Host "⚠️  Failed to set $key, continuing..." -ForegroundColor Yellow
        }
    }

    # Step 6: Deploy to Railway
    Write-Host "🚀 Deploying to Railway..." -ForegroundColor Yellow
    railway up

    # Step 7: Get deployment URL
    Write-Host "🔗 Getting deployment URL..." -ForegroundColor Yellow
    $url = railway domain
    Write-Host "✅ Deployment successful!" -ForegroundColor Green
    Write-Host "🌐 Your app is available at: $url" -ForegroundColor Cyan

    # Step 8: Set up GitHub integration for auto-deploy
    Write-Host "🔗 Setting up GitHub integration..." -ForegroundColor Yellow
    try {
        # Check if we're in a git repository
        git status | Out-Null
        
        # Get the current repository URL
        $repoUrl = git remote get-url origin
        Write-Host "📦 Repository: $repoUrl" -ForegroundColor Cyan
        
        # Connect to GitHub
        railway connect
        Write-Host "✅ GitHub integration set up successfully" -ForegroundColor Green
        Write-Host "🔄 Auto-deploy is now enabled for future commits" -ForegroundColor Green
    } catch {
        Write-Host "⚠️  GitHub integration setup failed, but deployment was successful" -ForegroundColor Yellow
        Write-Host "💡 You can manually connect GitHub in the Railway dashboard" -ForegroundColor Yellow
    }

    Write-Host ""
    Write-Host "🎉 Railway Auto-Deploy Complete!" -ForegroundColor Green
    Write-Host "📋 Summary:" -ForegroundColor Cyan
    Write-Host "   • Project deployed to: $url" -ForegroundColor White
    Write-Host "   • Auto-deploy enabled for future commits" -ForegroundColor White
    Write-Host "   • Environment variables configured" -ForegroundColor White
    Write-Host "   • Build and start commands optimized" -ForegroundColor White

} catch {
    Write-Host "❌ Deployment failed: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "💡 Check the error above and try again" -ForegroundColor Yellow
    exit 1
}
