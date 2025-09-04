#!/usr/bin/env node

import https from 'https';
import { exec } from 'child_process';
import util from 'util';
import fs from 'fs';

const execAsync = util.promisify(exec);

// Railway API Configuration
const RAILWAY_TOKEN = process.env.RAILWAY_TOKEN || 'b9bd86bf-4090-412e-9775-5514afec4664';
const PROJECT_ID = '283b3c0c-46a1-4284-b00e-06117bbb0cf4';
const RAILWAY_API_BASE = 'https://backboard.railway.app/graphql';

// Project Configuration
const CONFIG = {
  rootDirectory: 'apps/web',
  buildCommand: 'npm run build',
  startCommand: 'npm start',
  environmentVariables: {
    NODE_ENV: 'production',
    PORT: '3000',
    AUTH_SECRET: 'your-auth-secret-here',
    NEXTAUTH_URL: 'https://your-app.railway.app'
  }
};

class RailwayDeployer {
  constructor() {
    this.deploymentId = null;
    this.serviceId = null;
  }

  // GraphQL query helper
  async graphqlRequest(query, variables = {}) {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify({
        query,
        variables
      });

      const options = {
        hostname: 'backboard.railway.app',
        port: 443,
        path: '/graphql',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RAILWAY_TOKEN}`,
          'Content-Length': data.length
        }
      };

      const req = https.request(options, (res) => {
        let responseData = '';
        res.on('data', (chunk) => {
          responseData += chunk;
        });
        res.on('end', () => {
          try {
            const parsed = JSON.parse(responseData);
            if (parsed.errors) {
              reject(new Error(`GraphQL Error: ${JSON.stringify(parsed.errors)}`));
            } else {
              resolve(parsed.data);
            }
          } catch (error) {
            reject(error);
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.write(data);
      req.end();
    });
  }

  // Get project services
  async getProjectServices() {
    console.log('🔍 Proje servislerini alıyor...');
    const query = `
      query GetProject($projectId: String!) {
        project(id: $projectId) {
          id
          name
          services {
            edges {
              node {
                id
                name
                rootDirectory
                source {
                  repo
                  branch
                }
              }
            }
          }
        }
      }
    `;

    try {
      const data = await this.graphqlRequest(query, { projectId: PROJECT_ID });
      const services = data.project.services.edges.map(edge => edge.node);
      console.log(`✅ ${services.length} servis bulundu`);
      
      if (services.length > 0) {
        this.serviceId = services[0].id;
        console.log(`📋 Kullanılacak servis ID: ${this.serviceId}`);
      }
      
      return services;
    } catch (error) {
      console.error('❌ Servisler alınamadı:', error.message);
      throw error;
    }
  }

  // Update service settings
  async updateServiceSettings() {
    console.log('⚙️ Servis ayarlarını güncelliyor...');
    
    const mutation = `
      mutation ServiceUpdate($serviceId: String!, $input: ServiceUpdateInput!) {
        serviceUpdate(serviceId: $serviceId, input: $input) {
          id
          rootDirectory
        }
      }
    `;

    const input = {
      rootDirectory: CONFIG.rootDirectory,
      source: {
        repo: 'selcukbaskoy/wlmc',
        branch: 'master'
      }
    };

    try {
      await this.graphqlRequest(mutation, { serviceId: this.serviceId, input });
      console.log('✅ Servis ayarları güncellendi');
    } catch (error) {
      console.error('❌ Servis ayarları güncellenemedi:', error.message);
      throw error;
    }
  }

  // Set environment variables
  async setEnvironmentVariables() {
    console.log('🔧 Environment variables ayarlanıyor...');
    
    for (const [key, value] of Object.entries(CONFIG.environmentVariables)) {
      const mutation = `
        mutation VariableUpsert($input: VariableUpsertInput!) {
          variableUpsert(input: $input) {
            id
            name
            value
          }
        }
      `;

      const input = {
        projectId: PROJECT_ID,
        serviceId: this.serviceId,
        name: key,
        value: value
      };

      try {
        await this.graphqlRequest(mutation, { input });
        console.log(`✅ ${key} ayarlandı`);
      } catch (error) {
        console.log(`⚠️ ${key} ayarlanamadı: ${error.message}`);
      }
    }
  }

  // Trigger deployment
  async triggerDeployment() {
    console.log('🚀 Deployment tetikleniyor...');
    
    const mutation = `
      mutation ServiceRedeploy($serviceId: String!) {
        serviceRedeploy(serviceId: $serviceId) {
          id
          status
          createdAt
        }
      }
    `;

    try {
      const data = await this.graphqlRequest(mutation, { serviceId: this.serviceId });
      this.deploymentId = data.serviceRedeploy.id;
      console.log(`✅ Deployment başlatıldı - ID: ${this.deploymentId}`);
      return this.deploymentId;
    } catch (error) {
      console.error('❌ Deployment tetiklenemedi:', error.message);
      throw error;
    }
  }

  // Monitor deployment
  async monitorDeployment() {
    console.log('👀 Deployment izleniyor...');
    
    const query = `
      query GetDeployment($deploymentId: String!) {
        deployment(id: $deploymentId) {
          id
          status
          createdAt
          completedAt
          url
        }
      }
    `;

    let attempts = 0;
    const maxAttempts = 60; // 10 dakika (10 saniye aralıklarla)

    while (attempts < maxAttempts) {
      try {
        const data = await this.graphqlRequest(query, { deploymentId: this.deploymentId });
        const deployment = data.deployment;
        
        console.log(`📊 Deployment durumu: ${deployment.status}`);
        
        if (deployment.status === 'SUCCESS') {
          console.log('🎉 Deployment başarıyla tamamlandı!');
          if (deployment.url) {
            console.log(`🌐 URL: ${deployment.url}`);
          }
          return { status: 'SUCCESS', url: deployment.url };
        } else if (deployment.status === 'FAILED') {
          console.log('❌ Deployment başarısız oldu!');
          return { status: 'FAILED' };
        }
        
        // 10 saniye bekle
        await new Promise(resolve => setTimeout(resolve, 10000));
        attempts++;
        
      } catch (error) {
        console.error('⚠️ Deployment durumu kontrol edilemedi:', error.message);
        attempts++;
        await new Promise(resolve => setTimeout(resolve, 10000));
      }
    }
    
    console.log('⏰ Deployment timeout - Manuel kontrol gerekli');
    return { status: 'TIMEOUT' };
  }

  // Health check
  async performHealthCheck(url) {
    if (!url) {
      console.log('⚠️ URL bulunamadı, health check atlanıyor');
      return false;
    }

    console.log('🏥 Health check yapılıyor...');
    
    return new Promise((resolve) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || 443,
        path: urlObj.pathname,
        method: 'GET',
        timeout: 10000
      };

      const req = https.request(options, (res) => {
        console.log(`📊 HTTP Status: ${res.statusCode}`);
        if (res.statusCode >= 200 && res.statusCode < 400) {
          console.log('✅ Health check başarılı');
          resolve(true);
        } else {
          console.log('⚠️ Health check başarısız');
          resolve(false);
        }
      });

      req.on('error', (error) => {
        console.log('❌ Health check hatası:', error.message);
        resolve(false);
      });

      req.on('timeout', () => {
        console.log('⏰ Health check timeout');
        req.destroy();
        resolve(false);
      });

      req.end();
    });
  }

  // Main deployment process
  async deploy() {
    console.log('🚀 Railway Otomatik Deployment Başlıyor...');
    console.log('=' .repeat(50));
    
    const startTime = Date.now();
    const report = {
      startTime: new Date().toISOString(),
      steps: [],
      success: false,
      url: null,
      duration: 0
    };

    try {
      // 1. Get project services
      report.steps.push({ step: 'Get Services', status: 'started', timestamp: new Date().toISOString() });
      await this.getProjectServices();
      report.steps[report.steps.length - 1].status = 'completed';

      // 2. Update service settings
      report.steps.push({ step: 'Update Settings', status: 'started', timestamp: new Date().toISOString() });
      await this.updateServiceSettings();
      report.steps[report.steps.length - 1].status = 'completed';

      // 3. Set environment variables
      report.steps.push({ step: 'Set Environment Variables', status: 'started', timestamp: new Date().toISOString() });
      await this.setEnvironmentVariables();
      report.steps[report.steps.length - 1].status = 'completed';

      // 4. Trigger deployment
      report.steps.push({ step: 'Trigger Deployment', status: 'started', timestamp: new Date().toISOString() });
      await this.triggerDeployment();
      report.steps[report.steps.length - 1].status = 'completed';

      // 5. Monitor deployment
      report.steps.push({ step: 'Monitor Deployment', status: 'started', timestamp: new Date().toISOString() });
      const deploymentResult = await this.monitorDeployment();
      report.steps[report.steps.length - 1].status = deploymentResult.status === 'SUCCESS' ? 'completed' : 'failed';
      report.url = deploymentResult.url;

      // 6. Health check
      if (deploymentResult.status === 'SUCCESS' && deploymentResult.url) {
        report.steps.push({ step: 'Health Check', status: 'started', timestamp: new Date().toISOString() });
        const healthCheckResult = await this.performHealthCheck(deploymentResult.url);
        report.steps[report.steps.length - 1].status = healthCheckResult ? 'completed' : 'failed';
      }

      report.success = deploymentResult.status === 'SUCCESS';
      report.duration = Math.round((Date.now() - startTime) / 1000);

      console.log('=' .repeat(50));
      console.log('📋 DEPLOYMENT RAPORU');
      console.log('=' .repeat(50));
      console.log(`⏱️ Süre: ${report.duration} saniye`);
      console.log(`✅ Başarı: ${report.success ? 'EVET' : 'HAYIR'}`);
      if (report.url) {
        console.log(`🌐 URL: ${report.url}`);
      }
      console.log('\n📊 Adımlar:');
      report.steps.forEach((step, index) => {
        const icon = step.status === 'completed' ? '✅' : step.status === 'failed' ? '❌' : '⏳';
        console.log(`${index + 1}. ${icon} ${step.step} - ${step.status}`);
      });

      return report;

    } catch (error) {
      console.error('💥 Deployment hatası:', error.message);
      report.success = false;
      report.duration = Math.round((Date.now() - startTime) / 1000);
      report.error = error.message;
      return report;
    }
  }
}

// Main execution
async function main() {
  if (!RAILWAY_TOKEN) {
    console.error('❌ RAILWAY_TOKEN environment variable gerekli!');
    process.exit(1);
  }

  const deployer = new RailwayDeployer();
  const report = await deployer.deploy();
  
  // Save report to file
  fs.writeFileSync('deployment-report.json', JSON.stringify(report, null, 2));
  console.log('\n📄 Rapor deployment-report.json dosyasına kaydedildi');
  
  process.exit(report.success ? 0 : 1);
}

main().catch(console.error);

