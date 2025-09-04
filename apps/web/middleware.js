// Güvenlik middleware'i - React Router için
// Bu dosya tüm request'lerde çalışır

const ALLOWED_DOMAINS = [
  'localhost',
  '127.0.0.1', 
  'walmco.com',
  'www.walmco.com'
];

const PRODUCT_IMAGE_PATHS = [
  '/api/images/secure/',
  '/urunler/',
  '/pleksiglas-korkuluk'
];

/**
 * Güvenlik başlıklarını ayarla
 */
function setSecurityHeaders(response, request) {
  const headers = new Headers(response.headers);
  
  // Temel güvenlik başlıkları
  headers.set('X-Frame-Options', 'SAMEORIGIN');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-XSS-Protection', '1; mode=block');
  headers.set('Referrer-Policy', 'same-origin');
  headers.set('Permissions-Policy', 'display-capture=(), clipboard-read=(), clipboard-write=()');
  
  // CSP (Content Security Policy)
  const csp = [
    "default-src 'self'",
    "img-src 'self' data: blob: https://*.walmco.com",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'", 
    "font-src 'self' data:",
    "connect-src 'self' https://*.walmco.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; ');
  
  headers.set('Content-Security-Policy', csp);
  
  // Ürün sayfaları için ek güvenlik
  const url = new URL(request.url);
  const isProductPage = PRODUCT_IMAGE_PATHS.some(path => url.pathname.includes(path));
  
  if (isProductPage) {
    headers.set('X-Robots-Tag', 'noindex, nofollow, noimageindex');
    headers.set('Cache-Control', 'private, no-store, no-cache, must-revalidate, max-age=0');
    headers.set('Cross-Origin-Resource-Policy', 'same-site');
  }
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

/**
 * Referer kontrolü (hotlink koruması)
 */
function checkReferer(request) {
  const referer = request.headers.get('referer');
  
  // Referer yoksa (direct access) izin ver
  if (!referer) return true;
  
  try {
    const refererUrl = new URL(referer);
    const refererDomain = refererUrl.hostname;
    
    // İzin verilen domain'lerden birinde mi?
    return ALLOWED_DOMAINS.some(domain => 
      refererDomain === domain || refererDomain.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}

/**
 * Rate limiting kontrolü
 */
const requestCounts = new Map();

function checkRateLimit(clientIp, path) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 dakika
  
  // Ürün görselleri için daha sıkı limit
  const isImageRequest = path.includes('/api/images/secure/');
  const maxRequests = isImageRequest ? 30 : 100; // Dakikada 30/100 istek
  
  const key = `${clientIp}-${isImageRequest ? 'images' : 'general'}`;
  const clientData = requestCounts.get(key);
  
  if (!clientData || now > clientData.resetTime) {
    requestCounts.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (clientData.count >= maxRequests) {
    return false;
  }
  
  clientData.count++;
  return true;
}

/**
 * Ana middleware fonksiyonu
 */
export async function middleware(request) {
  const url = new URL(request.url);
  const clientIp = request.headers.get('x-forwarded-for') || 
                  request.headers.get('x-real-ip') || 
                  '127.0.0.1';

  // Rate limiting kontrolü
  if (!checkRateLimit(clientIp, url.pathname)) {
    return new Response('Rate limit exceeded', { 
      status: 429,
      headers: {
        'Retry-After': '60',
        'Content-Type': 'text/plain'
      }
    });
  }

  // Güvenli görsel endpoint'i için özel kontroller
  if (url.pathname.startsWith('/api/images/secure/')) {
    // Referer kontrolü
    if (!checkReferer(request)) {
      return new Response('Forbidden - Invalid referer', { 
        status: 403,
        headers: {
          'Content-Type': 'text/plain'
        }
      });
    }
    
    // Sadece GET method'una izin ver
    if (request.method !== 'GET' && request.method !== 'OPTIONS') {
      return new Response('Method not allowed', { 
        status: 405,
        headers: {
          'Allow': 'GET, OPTIONS',
          'Content-Type': 'text/plain'
        }
      });
    }
  }

  // Normal request'i işle
  const response = await fetch(request);
  
  // Güvenlik başlıklarını ekle
  return setSecurityHeaders(response, request);
}

/**
 * Middleware'in hangi path'lerde çalışacağını belirle
 */
export const config = {
  matcher: [
    // API route'ları
    '/api/:path*',
    // Ürün sayfaları
    '/pleksiglas-korkuluk:path*',
    // Statik görsel dosyaları
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ]
};
