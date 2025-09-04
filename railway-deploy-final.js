#!/usr/bin/env node

const https = require('https');
const { execSync } = require('child_process');

const RAILWAY_TOKEN = 'da9ab4ce-b3eb-425b-a7cc-97833a7e555f';
const PROJECT_ID = '283b3c0c-46a1-4284-b00e-06117bbb0cf4';

console.log('🚀 Railway Deployment Başlatılıyor...');

// 1. Git commit ve push
console.log('📝 Git işlemleri...');
try {
    execSync('git add -A', { stdio: 'inherit' });
    execSync('git commit -m "feat: Node 22 support for Railway deployment"', { stdio: 'inherit' });
    execSync('git push origin master', { stdio: 'inherit' });
    console.log('✅ Git push tamamlandı');
} catch (error) {
    console.log('⚠️ Git push hatası:', error.message);
}

// 2. Railway API ile deployment tetikle
console.log('🚂 Railway deployment tetikleniyor...');

const deployData = JSON.stringify({
    query: `
        mutation {
            deploymentCreate(input: {
                projectId: "${PROJECT_ID}"
                serviceId: "walmco-web"
            }) {
                id
                status
            }
        }
    `
});

const options = {
    hostname: 'backboard.railway.app',
    port: 443,
    path: '/graphql',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RAILWAY_TOKEN}`,
        'Content-Length': Buffer.byteLength(deployData)
    }
};

const req = https.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', () => {
        try {
            const response = JSON.parse(data);
            console.log('🎯 Railway Response:', JSON.stringify(response, null, 2));
            
            if (response.data && response.data.deploymentCreate) {
                console.log('✅ Deployment başlatıldı!');
                console.log('🔗 Deployment ID:', response.data.deploymentCreate.id);
                console.log('📊 Status:', response.data.deploymentCreate.status);
                
                // 3. Health check
                setTimeout(() => {
                    console.log('🏥 Health check yapılıyor...');
                    checkHealth();
                }, 30000); // 30 saniye bekle
                
            } else {
                console.log('❌ Deployment başlatılamadı:', response);
            }
        } catch (error) {
            console.log('❌ Response parse hatası:', error.message);
            console.log('Raw response:', data);
        }
    });
});

req.on('error', (error) => {
    console.log('❌ Railway API hatası:', error.message);
});

req.write(deployData);
req.end();

function checkHealth() {
    const healthUrl = 'https://wlmc-production.up.railway.app/health';
    
    https.get(healthUrl, (res) => {
        console.log('🏥 Health check status:', res.statusCode);
        
        if (res.statusCode === 200) {
            console.log('✅ Site canlı ve çalışıyor!');
            console.log('🌐 Site URL: https://wlmc-production.up.railway.app');
        } else {
            console.log('⚠️ Health check başarısız, tekrar denenecek...');
            setTimeout(checkHealth, 10000); // 10 saniye sonra tekrar dene
        }
    }).on('error', (error) => {
        console.log('❌ Health check hatası:', error.message);
        setTimeout(checkHealth, 10000); // 10 saniye sonra tekrar dene
    });
}

console.log('⏳ Deployment süreci başlatıldı...');
