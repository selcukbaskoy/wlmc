# 📋 Git Deployment Bilgileri

## 🔗 Repository Bilgileri:

### **GitHub Repository:**
- **URL:** https://github.com/selcukbaskoy/wlmc
- **Owner:** selcukbaskoy
- **Repository:** wlmc
- **Branch:** master
- **Root Directory:** apps/web

### **Git Commands:**
```bash
# Repository clone
git clone https://github.com/selcukbaskoy/wlmc.git
cd wlmc

# Branch kontrol
git branch -a

# Son commit
git log --oneline -5

# Remote repository
git remote -v

# Push yapma
git add .
git commit -m "Deployment update"
git push origin master
```

### **GitHub Actions:**
- **Workflow:** .github/workflows/railway-deploy.yml
- **Trigger:** push to master branch
- **Status:** Active (Railway CLI ile deploy)

### **GitHub Secrets:**
- **RAILWAY_TOKEN:** b9bd86bf-4090-412e-9775-5514afec4664
- **GITHUB_TOKEN:** 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

### **Repository Structure:**
```
wlmc/
├── .github/
│   └── workflows/
│       └── railway-deploy.yml
├── apps/
│   └── web/
│       ├── package.json
│       ├── railway.json
│       ├── .secrets/
│       └── ...
├── create-github-repo.js
└── railway-full-deployment.js
```

## 🚀 Deployment Flow:

### **1. Git Push:**
```bash
git add .
git commit -m "Deployment update"
git push origin master
```

### **2. GitHub Actions Trigger:**
- Push to master branch
- GitHub Actions workflow çalışır
- Railway CLI ile deploy

### **3. Railway Deployment:**
- Railway API ile service settings güncelle
- Environment variables set et
- Deployment tetikle
- Monitor et

## 🔧 AI Agent Commands:

### **Git Status Check:**
```bash
git status
git log --oneline -5
git remote -v
```

### **GitHub Actions Status:**
```bash
gh run list --limit 5
gh run view [RUN_ID]
```

### **Railway Deployment:**
```bash
node railway-full-deployment.js
```

## 📱 URLs:

### **GitHub:**
- **Repository:** https://github.com/selcukbaskoy/wlmc
- **Actions:** https://github.com/selcukbaskoy/wlmc/actions

### **Railway:**
- **Dashboard:** https://railway.com/project/283b3c0c-46a1-4284-b00e-06117bbb0cf4
- **Service:** https://railway.com/project/283b3c0c-46a1-4284-b00e-06117bbb0cf4/service/wlmc

### **Deployed Site:**
- **URL:** https://walmco-web-production.up.railway.app
- **Health Check:** https://walmco-web-production.up.railway.app/health
