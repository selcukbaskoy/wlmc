# 🚀 Railway Environment Variables - Gerçek Değerler

## ✅ Railway Dashboard'a Girilecek Değerler:

### **NODE_ENV**
```
production
```

### **PORT**
```
3000
```

### **AUTH_SECRET**
```
walmco-super-secret-auth-key-2024-production
```

### **DATABASE_URL**
```
postgresql://postgres:password@localhost:5432/walmco_db
```
*Not: Railway Postgres service'i otomatik olarak DATABASE_URL environment variable'ını set edecek*

### **NEXTAUTH_URL**
```
https://walmco-web-production.up.railway.app
```

## 🎯 Railway Dashboard'da Nasıl Girilir:

1. **Railway Dashboard'a Git:**
   - https://railway.com/project/283b3c0c-46a1-4284-b00e-06117bbb0cf4

2. **wlmc Service'ine Tıkla**

3. **Variables Tab'ına Git**

4. **Her bir variable'ı ekle:**
   - **Key:** `NODE_ENV` **Value:** `production`
   - **Key:** `PORT` **Value:** `3000`
   - **Key:** `AUTH_SECRET` **Value:** `walmco-super-secret-auth-key-2024-production`
   - **Key:** `NEXTAUTH_URL` **Value:** `https://walmco-web-production.up.railway.app`

5. **DATABASE_URL otomatik olarak set edilecek** (Railway Postgres service'inden)

## 🔧 Root Directory Ayarları:
- **Root Directory:** `apps/web`
- **Build Command:** `npm ci && npm run build`
- **Start Command:** `npm start`
- **Health Check Path:** `/health`

## ⏱️ Sonraki Adım:
Variables'ları set ettikten sonra **Redeploy** yap!
