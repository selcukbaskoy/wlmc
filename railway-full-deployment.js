#!/usr/bin/env node

import https from 'https';
import { execSync } from 'child_process';

// Railway API configuration
const RAILWAY_TOKEN = process.env.RAILWAY_TOKEN || 'b9bd86bf-4090-412e-9775-5514afec4664';
const PROJECT_ID = '283b3c0c-46a1-4284-b00e-06117bbb0cf4';

// Environment variables
const ENV_VARS = {
  NODE_ENV: 'production',
  PORT: '3000',
  AUTH_SECRET: 'walmco-super-secret-auth-key-2024-production',
  NEXTAUTH_URL: 'https://walmco-web-production.up.railway.app'
};

// Service settings
const SERVICE_SETTINGS = {
  rootDirectory: 'apps/web',
  buildCommand: 'npm ci && npm run build',
  startCommand: 'npm start',
  healthcheckPath: '/health'
};

// Git repository info
const GIT_INFO = {
  repository: 'selcukbaskoy/wlmc',
  branch: 'master',
  rootDirectory: 'apps/web'
};

async function makeRailwayRequest(query, variables = {}) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ query, variables });
    
    const options = {
      hostname: 'backboard.railway.app',
      port: 443,
      path: '/graphql/v1',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'Authorization': `Bearer ${RAILWAY_TOKEN}`
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => responseData += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(responseData));
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function findService() {
  const query = `
    query GetServices($projectId: String!) {
      project(id: $projectId) {
        services {
          id
          name
          rootDirectory
          buildCommand
          startCommand
          healthcheckPath
        }
      }
    }
  `;
  
  const result = await makeRailwayRequest(query, { projectId: PROJECT_ID });
  return result.data.project.services.find(s => s.name === 'wlmc') || result.data.project.services[0];
}

async function updateServiceSettings(serviceId) {
  const mutation = `
    mutation UpdateService($input: ServiceUpdateInput!) {
      serviceUpdate(input: $input) {
        id
        name
        rootDirectory
        buildCommand
        startCommand
        healthcheckPath
      }
    }
  `;
  
  const result = await makeRailwayRequest(mutation, {
    input: {
      id: serviceId,
      ...SERVICE_SETTINGS
    }
  });
  
  return result.data.serviceUpdate;
}

async function setEnvironmentVariables(serviceId) {
  const mutation = `
    mutation SetVariable($input: VariableInput!) {
      variableSet(input: $input) {
        id
        key
        value
      }
    }
  `;
  
  const results = [];
  for (const [key, value] of Object.entries(ENV_VARS)) {
    const result = await makeRailwayRequest(mutation, {
      input: {
        serviceId,
        key,
        value
      }
    });
    results.push(result.data.variableSet);
  }
  
  return results;
}

async function triggerDeployment(serviceId) {
  const mutation = `
    mutation Deploy($input: DeployInput!) {
      deploymentCreate(input: $input) {
        id
        status
        url
      }
    }
  `;
  
  const result = await makeRailwayRequest(mutation, {
    input: {
      serviceId,
      source: 'github',
      branch: GIT_INFO.branch,
      repository: GIT_INFO.repository,
      rootDirectory: GIT_INFO.rootDirectory
    }
  });
  
  return result.data.deploymentCreate;
}

async function monitorDeployment(deploymentId) {
  const query = `
    query GetDeployment($id: String!) {
      deployment(id: $id) {
        id
        status
        url
        logs
      }
    }
  `;
  
  return new Promise((resolve) => {
    const checkStatus = async () => {
      const result = await makeRailwayRequest(query, { id: deploymentId });
      const deployment = result.data.deployment;
      
      console.log(`Deployment Status: ${deployment.status}`);
      
      if (deployment.status === 'SUCCESS') {
        resolve(deployment);
      } else if (deployment.status === 'FAILED') {
        throw new Error('Deployment failed');
      } else {
        setTimeout(checkStatus, 5000); // Check every 5 seconds
      }
    };
    
    checkStatus();
  });
}

function runGitCommand(command) {
  try {
    const result = execSync(command, { encoding: 'utf8' });
    return result.trim();
  } catch (error) {
    console.error(`Git command failed: ${command}`, error.message);
    return null;
  }
}

function checkGitStatus() {
  console.log('📋 Git repository durumu kontrol ediliyor...');
  
  const status = runGitCommand('git status --porcelain');
  const lastCommit = runGitCommand('git log --oneline -1');
  const remote = runGitCommand('git remote -v');
  const branch = runGitCommand('git branch --show-current');
  
  console.log('✅ Git Status:', status || 'Clean working directory');
  console.log('✅ Last Commit:', lastCommit);
  console.log('✅ Remote:', remote);
  console.log('✅ Current Branch:', branch);
  
  return { status, lastCommit, remote, branch };
}

async function testDeployment(url) {
  console.log('🧪 Deployment test ediliyor...');
  
  try {
    const response = await fetch(`${url}/health`);
    if (response.ok) {
      console.log('✅ Health check passed');
      return true;
    } else {
      console.log('❌ Health check failed');
      return false;
    }
  } catch (error) {
    console.log('❌ Health check error:', error.message);
    return false;
  }
}

async function fullDeployment() {
  try {
    console.log('🚀 Railway Full Deployment başlatılıyor...');
    
    // 1. Git status kontrol
    const gitStatus = checkGitStatus();
    
    // 2. Service bul
    console.log('📋 Service bulunuyor...');
    const service = await findService();
    console.log(`✅ Service bulundu: ${service.name} (${service.id})`);
    
    // 3. Service settings güncelle
    console.log('🔧 Service settings güncelleniyor...');
    const updatedService = await updateServiceSettings(service.id);
    console.log('✅ Service settings güncellendi:', updatedService);
    
    // 4. Environment variables set et
    console.log('🔑 Environment variables set ediliyor...');
    const variables = await setEnvironmentVariables(service.id);
    console.log('✅ Environment variables set edildi:', variables);
    
    // 5. Deployment tetikle
    console.log('🚀 Deployment tetikleniyor...');
    const deployment = await triggerDeployment(service.id);
    console.log('✅ Deployment tetiklendi:', deployment);
    
    // 6. Deployment'ı monitor et
    console.log('👀 Deployment monitor ediliyor...');
    const finalDeployment = await monitorDeployment(deployment.id);
    console.log('🎉 Deployment başarılı!');
    console.log('🌐 URL:', finalDeployment.url);
    
    // 7. Deployment test et
    const testResult = await testDeployment(finalDeployment.url);
    
    // 8. Sonuç raporu
    console.log('\n📊 DEPLOYMENT RAPORU:');
    console.log('==================');
    console.log('✅ Git Status:', gitStatus.status || 'Clean');
    console.log('✅ Service:', updatedService.name);
    console.log('✅ Root Directory:', updatedService.rootDirectory);
    console.log('✅ Build Command:', updatedService.buildCommand);
    console.log('✅ Start Command:', updatedService.startCommand);
    console.log('✅ Health Check Path:', updatedService.healthcheckPath);
    console.log('✅ Environment Variables:', variables.length);
    console.log('✅ Deployment URL:', finalDeployment.url);
    console.log('✅ Health Check:', testResult ? 'PASSED' : 'FAILED');
    console.log('==================');
    
    return finalDeployment;
    
  } catch (error) {
    console.error('❌ Deployment hatası:', error.message);
    throw error;
  }
}

// Run full deployment
fullDeployment();
