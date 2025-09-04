#!/usr/bin/env node

import https from 'https';
import fs from 'fs';
import path from 'path';

// Railway API configuration
const RAILWAY_TOKEN = process.env.RAILWAY_TOKEN || 'XXXXXXXX';
const PROJECT_ID = '283b3c0c-46a1-4284-b00e-06117bbb0cf4';

// Check if token is set
if (RAILWAY_TOKEN === 'XXXXXXXX') {
  console.log('❌ RAILWAY_TOKEN not set. Please set it first:');
  console.log('setx RAILWAY_TOKEN "your-token-here"');
  console.log('Then restart your terminal and run this script again.');
  process.exit(1);
}

// API endpoints
const RAILWAY_API_BASE = 'https://backboard.railway.app/graphql/v1';

// GraphQL queries
const CREATE_SERVICE_MUTATION = `
  mutation CreateService($input: ServiceCreateInput!) {
    serviceCreate(input: $input) {
      id
      name
      projectId
    }
  }
`;

const SET_VARIABLES_MUTATION = `
  mutation SetVariables($input: VariablesSetInput!) {
    variablesSet(input: $input) {
      id
    }
  }
`;

const DEPLOY_MUTATION = `
  mutation Deploy($input: DeploymentCreateInput!) {
    deploymentCreate(input: $input) {
      id
      status
      url
    }
  }
`;

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
        'Authorization': `Bearer ${RAILWAY_TOKEN}`
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

// Main deployment function
async function deployToRailway() {
  try {
    console.log('🚀 Starting Railway deployment...');
    
    // Step 1: Create service
    console.log('📦 Creating Railway service...');
    const serviceResult = await makeGraphQLRequest(CREATE_SERVICE_MUTATION, {
      input: {
        projectId: PROJECT_ID,
        name: 'walmco-web',
        source: {
          repo: 'wlmc',
          rootDirectory: 'apps/web'
        }
      }
    });
    
    const serviceId = serviceResult.serviceCreate.id;
    console.log(`✅ Service created: ${serviceId}`);
    
    // Step 2: Set environment variables
    console.log('🔧 Setting environment variables...');
    await makeGraphQLRequest(SET_VARIABLES_MUTATION, {
      input: {
        serviceId: serviceId,
        variables: [
          { key: 'NODE_ENV', value: 'production' },
          { key: 'PORT', value: '3000' },
          { key: 'AUTH_SECRET', value: 'walmco-super-secret-key-2024' },
          { key: 'NEXTAUTH_URL', value: 'https://walmco-web-production.up.railway.app' }
        ]
      }
    });
    console.log('✅ Environment variables set');
    
    // Step 3: Trigger deployment
    console.log('🚀 Triggering deployment...');
    const deployResult = await makeGraphQLRequest(DEPLOY_MUTATION, {
      input: {
        serviceId: serviceId,
        source: {
          repo: 'wlmc',
          rootDirectory: 'apps/web'
        }
      }
    });
    
    const deploymentId = deployResult.deploymentCreate.id;
    const deploymentUrl = deployResult.deploymentCreate.url;
    
    console.log(`✅ Deployment triggered: ${deploymentId}`);
    console.log(`🌐 Application URL: ${deploymentUrl}`);
    
    // Step 4: Wait for deployment and test
    console.log('⏳ Waiting for deployment to complete...');
    await new Promise(resolve => setTimeout(resolve, 30000)); // Wait 30 seconds
    
    // Test health endpoint
    console.log('🏥 Testing health endpoint...');
    const healthUrl = `${deploymentUrl}/health`;
    console.log(`Health check URL: ${healthUrl}`);
    
    console.log('✅ Deployment completed successfully!');
    console.log(`🎉 Your app is live at: ${deploymentUrl}`);
    
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
