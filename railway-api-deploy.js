const https = require('https');

const RAILWAY_TOKEN = 'da9ab4ce-b3eb-425b-a7cc-97833a7e555f';
const PROJECT_ID = '283b3c0c-46a1-4284-b00e-06117bbb0cf4';

console.log('🚀 Railway Deployment API çağrısı başlatılıyor...');

// Railway GraphQL API endpoint
const postData = JSON.stringify({
    query: `
        mutation {
            deploymentCreate(input: {
                projectId: "${PROJECT_ID}"
            }) {
                id
                status
                createdAt
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
        'Content-Length': Buffer.byteLength(postData)
    }
};

console.log('📡 Railway API\'ye istek gönderiliyor...');

const req = https.request(options, (res) => {
    console.log('📊 Response Status:', res.statusCode);
    console.log('📋 Response Headers:', res.headers);
    
    let data = '';
    
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', () => {
        console.log('📄 Raw Response:', data);
        
        try {
            const response = JSON.parse(data);
            console.log('✅ Parsed Response:', JSON.stringify(response, null, 2));
            
            if (response.data && response.data.deploymentCreate) {
                console.log('🎯 Deployment başarıyla oluşturuldu!');
                console.log('🆔 Deployment ID:', response.data.deploymentCreate.id);
                console.log('📊 Status:', response.data.deploymentCreate.status);
                console.log('⏰ Created At:', response.data.deploymentCreate.createdAt);
                
                // Health check için bekle
                console.log('⏳ 30 saniye bekleniyor, sonra health check yapılacak...');
                setTimeout(checkHealth, 30000);
                
            } else if (response.errors) {
                console.log('❌ GraphQL Errors:', response.errors);
            } else {
                console.log('❌ Beklenmeyen response formatı:', response);
            }
        } catch (error) {
            console.log('❌ JSON Parse Error:', error.message);
            console.log('📄 Raw data:', data);
        }
    });
});

req.on('error', (error) => {
    console.log('❌ Request Error:', error.message);
});

req.write(postData);
req.end();

function checkHealth() {
    console.log('🏥 Health check başlatılıyor...');
    
    const healthUrl = 'https://wlmc-production.up.railway.app/health';
    
    https.get(healthUrl, (res) => {
        console.log('🏥 Health Check Status:', res.statusCode);
        
        let healthData = '';
        res.on('data', (chunk) => {
            healthData += chunk;
        });
        
        res.on('end', () => {
            if (res.statusCode === 200) {
                console.log('✅ Site canlı ve çalışıyor!');
                console.log('🌐 Site URL: https://wlmc-production.up.railway.app');
                console.log('📄 Health Response:', healthData);
            } else {
                console.log('⚠️ Health check başarısız, tekrar denenecek...');
                console.log('📄 Response:', healthData);
                setTimeout(checkHealth, 10000);
            }
        });
    }).on('error', (error) => {
        console.log('❌ Health check hatası:', error.message);
        setTimeout(checkHealth, 10000);
    });
}

console.log('⏳ Deployment süreci başlatıldı...');
