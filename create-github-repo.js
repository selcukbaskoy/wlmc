#!/usr/bin/env node

import https from 'https';
import fs from 'fs';

// GitHub API configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_NAME = 'wlmc';
const REPO_DESCRIPTION = 'Walmco Web App - React Router v7 + SSR + Vite + Hono';

// Check if GitHub token is set
if (!GITHUB_TOKEN) {
  console.log('❌ GITHUB_TOKEN not set. Please set it first:');
  console.log('setx GITHUB_TOKEN "your-github-token-here"');
  console.log('Get your token from: https://github.com/settings/tokens');
  process.exit(1);
}

// Create GitHub repository
async function createGitHubRepo() {
  try {
    console.log('🚀 Creating GitHub repository...');
    
    const data = JSON.stringify({
      name: REPO_NAME,
      description: REPO_DESCRIPTION,
      private: false,
      auto_init: false,
      gitignore_template: 'Node',
      license_template: 'mit'
    });

    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: '/user/repos',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'Authorization': `token ${GITHUB_TOKEN}`,
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
          if (res.statusCode === 201) {
            console.log('✅ GitHub repository created successfully!');
            console.log(`📦 Repository: ${result.html_url}`);
            console.log(`🔗 Clone URL: ${result.clone_url}`);
            
            // Set up git remote
            setupGitRemote(result.clone_url);
          } else {
            console.error('❌ Failed to create repository:', result.message);
            process.exit(1);
          }
        } catch (error) {
          console.error('❌ Error parsing response:', error.message);
          process.exit(1);
        }
      });
    });

    req.on('error', (error) => {
      console.error('❌ Request failed:', error.message);
      process.exit(1);
    });

    req.write(data);
    req.end();
    
  } catch (error) {
    console.error('❌ Error creating repository:', error.message);
    process.exit(1);
  }
}

// Set up git remote
function setupGitRemote(cloneUrl) {
  console.log('🔗 Setting up git remote...');
  
  // Execute git commands
  const { exec } = require('child_process');
  
  exec('git remote add origin ' + cloneUrl, (error, stdout, stderr) => {
    if (error) {
      console.log('⚠️ Remote already exists or error:', error.message);
    } else {
      console.log('✅ Git remote added');
    }
    
    exec('git branch -M main', (error, stdout, stderr) => {
      if (error) {
        console.log('⚠️ Branch rename error:', error.message);
      } else {
        console.log('✅ Branch renamed to main');
      }
      
      exec('git push -u origin main', (error, stdout, stderr) => {
        if (error) {
          console.log('⚠️ Push error:', error.message);
          console.log('Please run manually: git push -u origin main');
        } else {
          console.log('✅ Code pushed to GitHub successfully!');
          console.log('🎉 Repository is ready for deployment!');
        }
      });
    });
  });
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  createGitHubRepo();
}

export { createGitHubRepo };
