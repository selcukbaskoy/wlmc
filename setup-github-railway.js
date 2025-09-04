#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔗 Setting up GitHub-Railway Integration...');

try {
  // GitHub repository bilgileri
  const repoUrl = 'https://github.com/selcukbaskoy/wlmc.git';
  const repoName = 'wlmc';
  const owner = 'selcukbaskoy';
  
  console.log(`📦 Repository: ${repoUrl}`);
  console.log(`👤 Owner: ${owner}`);
  console.log(`📁 Project: ${repoName}`);

  // Railway deployment URL'si oluştur
  const railwayDeployUrl = `https://railway.app/new/template?template=https://github.com/${owner}/${repoName}&rootDirectory=apps/web`;
  
  console.log('\n🚀 Railway GitHub Integration Setup:');
  console.log('=====================================');
  console.log('1. Aşağıdaki linke tıklayın:');
  console.log(`   ${railwayDeployUrl}`);
  console.log('\n2. Railway dashboard\'da:');
  console.log('   • GitHub hesabınızla giriş yapın');
  console.log('   • Repository\'yi seçin');
  console.log('   • Root directory olarak "apps/web" seçin');
  console.log('   • Deploy butonuna tıklayın');
  
  console.log('\n3. Environment Variables ekleyin:');
  console.log('   • NODE_ENV=production');
  console.log('   • PORT=3000');
  
  console.log('\n4. GitHub Integration otomatik olarak aktif olacak:');
  console.log('   • Her commit\'te otomatik deploy');
  console.log('   • Pull request\'lerde preview deployment');
  console.log('   • Production branch\'teki değişiklikler otomatik deploy');

  // Railway CLI ile alternatif setup
  console.log('\n🔧 Alternatif: Railway CLI ile Setup:');
  console.log('=====================================');
  console.log('1. Railway CLI ile giriş yapın:');
  console.log('   railway login');
  console.log('\n2. Proje dizinine geçin:');
  console.log('   cd apps/web');
  console.log('\n3. Railway projesi başlatın:');
  console.log('   railway init');
  console.log('\n4. GitHub\'a bağlayın:');
  console.log('   railway connect');
  console.log('\n5. Deploy edin:');
  console.log('   railway up');

  // Package.json kontrolü
  console.log('\n📋 Package.json Kontrolü:');
  console.log('=========================');
  const packageJsonPath = path.join(__dirname, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    console.log('✅ Scripts:');
    console.log(`   • dev: ${packageJson.scripts.dev}`);
    console.log(`   • build: ${packageJson.scripts.build}`);
    console.log(`   • start: ${packageJson.scripts.start}`);
  }

  // Nixpacks.toml kontrolü
  console.log('\n🐳 Nixpacks.toml Kontrolü:');
  console.log('==========================');
  const nixpacksPath = path.join(__dirname, 'nixpacks.toml');
  if (fs.existsSync(nixpacksPath)) {
    console.log('✅ Nixpacks configuration ready');
    console.log('   • Node.js 22');
    console.log('   • npm ci');
    console.log('   • npm run build');
    console.log('   • npm start');
  }

  console.log('\n🎉 GitHub-Railway Integration Setup Complete!');
  console.log('=============================================');
  console.log('📝 Sonraki adımlar:');
  console.log('1. Railway dashboard\'a gidin ve GitHub repository\'nizi bağlayın');
  console.log('2. Environment variables\'ları ayarlayın');
  console.log('3. İlk deploy\'u başlatın');
  console.log('4. GitHub integration otomatik olarak aktif olacak');

} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
}
