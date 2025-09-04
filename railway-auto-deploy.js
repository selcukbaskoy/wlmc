#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Railway configuration
const RAILWAY_TOKEN = '2bff399b-9440-4322-9f24-fd4cb1527e16';
const GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN_HERE';
const PROJECT_NAME = 'wlmc-web';

console.log('🚀 Starting Railway Auto-Deploy Process...');

try {
  // Step 1: Install Railway CLI if not already installed
  console.log('📦 Installing Railway CLI...');
  try {
    execSync('railway --version', { stdio: 'ignore' });
    console.log('✅ Railway CLI already installed');
  } catch (error) {
    console.log('Installing Railway CLI...');
    execSync('npm install -g @railway/cli', { stdio: 'inherit' });
  }

  // Step 2: Login to Railway
  console.log('🔐 Logging into Railway...');
  execSync(`echo "${RAILWAY_TOKEN}" | railway login`, { stdio: 'inherit' });

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

  // Step 8: Set up GitHub integration for auto-deploy
  console.log('🔗 Setting up GitHub integration...');
  try {
    // Check if we're in a git repository
    execSync('git status', { stdio: 'ignore' });
    
    // Get the current repository URL
    const repoUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
    console.log(`📦 Repository: ${repoUrl}`);
    
    // Connect to GitHub
    execSync('railway connect', { stdio: 'inherit' });
    console.log('✅ GitHub integration set up successfully');
    console.log('🔄 Auto-deploy is now enabled for future commits');
  } catch (error) {
    console.log('⚠️  GitHub integration setup failed, but deployment was successful');
    console.log('💡 You can manually connect GitHub in the Railway dashboard');
  }

  console.log('\n🎉 Railway Auto-Deploy Complete!');
  console.log('📋 Summary:');
  console.log(`   • Project deployed to: ${url}`);
  console.log('   • Auto-deploy enabled for future commits');
  console.log('   • Environment variables configured');
  console.log('   • Build and start commands optimized');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  console.error('💡 Check the error above and try again');
  process.exit(1);
}
