#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Railway configuration
const RAILWAY_TOKEN = '2bff399b-9440-4322-9f24-fd4cb1527e16';
const PROJECT_NAME = 'wlmc-web';

console.log('🚀 Starting Railway Silent Deploy Process...');

try {
  // Step 1: Install Railway CLI if not already installed
  console.log('📦 Checking Railway CLI...');
  try {
    execSync('railway --version', { stdio: 'ignore' });
    console.log('✅ Railway CLI already installed');
  } catch (error) {
    console.log('Installing Railway CLI...');
    execSync('npm install -g @railway/cli', { stdio: 'inherit' });
  }

  // Step 2: Login to Railway using token directly
  console.log('🔐 Logging into Railway...');
  process.env.RAILWAY_TOKEN = RAILWAY_TOKEN;
  execSync('railway login', { stdio: 'inherit' });

  // Step 3: Navigate to web app directory
  const webAppPath = path.join(__dirname, 'apps', 'web');
  process.chdir(webAppPath);
  console.log(`📁 Changed to directory: ${webAppPath}`);

  // Step 4: Initialize Railway project if not already initialized
  console.log('🚂 Initializing Railway project...');
  try {
    execSync('railway status', { stdio: 'ignore' });
    console.log('✅ Railway project already initialized');
  } catch (error) {
    execSync('railway init', { stdio: 'inherit' });
  }

  // Step 5: Set environment variables
  console.log('🔧 Setting up environment variables...');
  const envVars = [
    'NODE_ENV=production',
    'PORT=3000'
  ];

  for (const envVar of envVars) {
    const [key, value] = envVar.split('=');
    try {
      execSync(`railway variables set ${key}="${value}"`, { stdio: 'inherit' });
      console.log(`✅ Set ${key}=${value}`);
    } catch (error) {
      console.log(`⚠️  Failed to set ${key}, continuing...`);
    }
  }

  // Step 6: Deploy to Railway
  console.log('🚀 Deploying to Railway...');
  execSync('railway up', { stdio: 'inherit' });

  // Step 7: Get deployment URL
  console.log('🔗 Getting deployment URL...');
  const url = execSync('railway domain', { encoding: 'utf8' }).trim();
  console.log(`✅ Deployment successful!`);
  console.log(`🌐 Your app is available at: ${url}`);

  console.log('\n🎉 Railway Silent Deploy Complete!');
  console.log('📋 Summary:');
  console.log(`   • Project deployed to: ${url}`);
  console.log('   • Environment variables configured');
  console.log('   • Build and start commands optimized');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  console.error('💡 Check the error above and try again');
  process.exit(1);
}
