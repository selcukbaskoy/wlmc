# Walmco Web - Deployment Guide

## 🚀 Otomatik Deployment Hazırlığı Tamamlandı

### ✅ Tamamlanan Adımlar:
1. **Stack Audit** - React Router v7 + SSR + Vite + Hono doğrulandı
2. **Render CLI** - v0.3.2 kuruldu (template engine sorunu var)
3. **Local Build** - Başarılı (`npm run build`)
4. **Railway CLI** - v4.6.3 kuruldu ve login yapıldı
5. **Project Setup** - Railway projesi oluşturuldu: `walmco-web`

### 📁 Oluşturulan Dosyalar:
- `render.yaml` - Render deployment config
- `railway.json` - Railway deployment config
- `.secrets/RENDER_API_KEY` - API key placeholder
- `.secrets/env.production` - Production env vars template
- `.gitignore` - Secrets korunuyor

### 🔧 Manuel Deployment Seçenekleri:

#### Option 1: Railway Dashboard
1. https://railway.com/project/283b3c0c-46a1-4284-b00e-06117bbb0cf4
2. "New Service" → "GitHub Repo" → Bu repo'yu seç
3. Root Directory: `apps/web`
4. Build Command: `npm ci && npm run build`
5. Start Command: `npm start`
6. Health Check Path: `/health`

#### Option 2: Render Dashboard
1. https://dashboard.render.com
2. "New" → "Web Service"
3. GitHub repo'yu bağla
4. Root Directory: `apps/web`
5. Build Command: `npm ci && npm run build`
6. Start Command: `npm start`
7. Health Check Path: `/health`

#### Option 3: Vercel
1. https://vercel.com
2. Import GitHub repo
3. Root Directory: `apps/web`
4. Build Command: `npm run build`
5. Output Directory: `build/client`

### 🔐 Environment Variables:
```bash
NODE_ENV=production
AUTH_SECRET=your-secret-here
DATABASE_URL=your-db-url-here
NEXTAUTH_URL=https://your-domain.com
```

### 🏥 Health Check Endpoint:
- Path: `/health`
- Expected: 200 OK response

### 📊 Build Output:
- Client: `build/client/`
- Server: `build/server/`
- Total size: ~3.8MB (gzipped: ~1.2MB)

### 🚨 Rollback Command:
```bash
# Railway
railway rollback

# Render
render services rollback <service-id>
```

### 📈 Performance Notes:
- SSR enabled
- Static assets optimized
- Gzip compression enabled
- Health check timeout: 100ms
