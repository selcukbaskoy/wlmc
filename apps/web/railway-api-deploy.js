#!/usr/bin/env node

import https from 'https';

// Railway API configuration
const RAILWAY_TOKEN = process.env.RAILWAY_TOKEN || 'b9bd86bf-4090-412e-9775-5514afec4664';
const PROJECT_ID = '283b3c0c-46a1-4284-b00e-06117bbb0cf4';

console.log('🚀 Starting Railway API deployment...');
console.log(`📦 Project ID: ${PROJECT_ID}`);
console.log(`🔑 Token: ${RAILWAY_TOKEN.substring(0, 8)}...`);

// Helper function to make GraphQL requests
function makeGraphQLRequest(query, variables = {}) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      query,
      variables
    });

    const options = {
      hostname: 'backboard.railway.app',
      port: 443,
      path: '/graphql/v1',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'Authorization': `Bearer ${RAILWAY_TOKEN}`,
        'User-Agent': 'Walmco-Deploy-Script'
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const result = JSON.parse(responseData);
          if (result.errors) {
            reject(new Error(JSON.stringify(result.errors)));
          } else {
            resolve(result.data);
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

// Test Railway API connection
async function testRailwayAPI() {
  try {
    console.log('🔍 Testing Railway API connection...');
    
    const result = await makeGraphQLRequest(`
      query {
        me {
          id
          name
          email
        }
      }
    `);
    
    console.log('✅ Railway API connection successful!');
    console.log(`👤 User: ${result.me.name} (${result.me.email})`);
    return true;
  } catch (error) {
    console.error('❌ Railway API connection failed:', error.message);
    return false;
  }
}

// Get project services
async function getProjectServices() {
  try {
    console.log('📋 Getting project services...');
    
    const result = await makeGraphQLRequest(`
      query {
        project(id: "${PROJECT_ID}") {
          id
          name
          services {
            id
            name
            status
          }
        }
      }
    `);
    
    console.log(`📦 Project: ${result.project.name}`);
    console.log(`🔧 Services: ${result.project.services.length}`);
    
    return result.project.services;
  } catch (error) {
    console.error('❌ Failed to get project services:', error.message);
    return [];
  }
}

// Create new service
async function createService() {
  try {
    console.log('🆕 Creating new service...');
    
    const result = await makeGraphQLRequest(`
      mutation {
        serviceCreate(input: {
          projectId: "${PROJECT_ID}"
          name: "walmco-web"
          source: {
            repo: "selcukbaskoy/wlmc"
            rootDirectory: "apps/web"
          }
        }) {
          id
          name
          status
        }
      }
    `);
    
    console.log('✅ Service created successfully!');
    console.log(`🆔 Service ID: ${result.serviceCreate.id}`);
    console.log(`📝 Service Name: ${result.serviceCreate.name}`);
    
    return result.serviceCreate.id;
  } catch (error) {
    console.error('❌ Failed to create service:', error.message);
    return null;
  }
}

// Set environment variables
async function setEnvironmentVariables(serviceId) {
  try {
    console.log('🔧 Setting environment variables...');
    
    const variables = [
      { key: 'NODE_ENV', value: 'production' },
      { key: 'PORT', value: '3000' },
      { key: 'AUTH_SECRET', value: 'walmco-super-secret-key-2024' },
      { key: 'NEXTAUTH_URL', value: 'https://walmco-web-production.up.railway.app' }
    ];
    
    for (const variable of variables) {
      await makeGraphQLRequest(`
        mutation {
          variableCreate(input: {
            serviceId: "${serviceId}"
            key: "${variable.key}"
            value: "${variable.value}"
          }) {
            id
          }
        }
      `);
      console.log(`✅ Set ${variable.key}=${variable.value}`);
    }
    
    console.log('✅ All environment variables set!');
  } catch (error) {
    console.error('❌ Failed to set environment variables:', error.message);
  }
}

// Trigger deployment
async function triggerDeployment(serviceId) {
  try {
    console.log('🚀 Triggering deployment...');
    
    const result = await makeGraphQLRequest(`
      mutation {
        deploymentCreate(input: {
          serviceId: "${serviceId}"
          source: {
            repo: "selcukbaskoy/wlmc"
            rootDirectory: "apps/web"
          }
        }) {
          id
          status
          url
        }
      }
    `);
    
    console.log('✅ Deployment triggered!');
    console.log(`🆔 Deployment ID: ${result.deploymentCreate.id}`);
    console.log(`🌐 URL: ${result.deploymentCreate.url}`);
    
    return result.deploymentCreate.url;
  } catch (error) {
    console.error('❌ Failed to trigger deployment:', error.message);
    return null;
  }
}

// Main deployment function
async function deployToRailway() {
  try {
    // Test API connection
    const apiConnected = await testRailwayAPI();
    if (!apiConnected) {
      process.exit(1);
    }
    
    // Get existing services
    const services = await getProjectServices();
    
    // Check if service already exists
    let serviceId = null;
    const existingService = services.find(s => s.name === 'walmco-web');
    
    if (existingService) {
      console.log('📦 Using existing service:', existingService.id);
      serviceId = existingService.id;
    } else {
      // Create new service
      serviceId = await createService();
      if (!serviceId) {
        process.exit(1);
      }
    }
    
    // Set environment variables
    await setEnvironmentVariables(serviceId);
    
    // Trigger deployment
    const deploymentUrl = await triggerDeployment(serviceId);
    
    if (deploymentUrl) {
      console.log('🎉 Deployment completed successfully!');
      console.log(`🌐 Your app is live at: ${deploymentUrl}`);
      console.log(`🏥 Health check: ${deploymentUrl}/health`);
      console.log(`📊 Dashboard: https://railway.com/project/${PROJECT_ID}`);
    }
    
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
  }
}

// Run deployment
if (import.meta.url === `file://${process.argv[1]}`) {
  deployToRailway();
}

export { deployToRailway };
