import crypto from 'crypto';

// Ortam değişkenleri
const IMAGE_SECRET_KEY = process.env.IMAGE_SECRET_KEY || 'walmco-secure-images-key-2024';
const IMAGE_BASE_URL = process.env.IMAGE_BASE_URL || 'https://walmco-images.example.com';
const TOKEN_EXPIRY_SECONDS = parseInt(process.env.IMAGE_TOKEN_EXPIRY || '60'); // 60 saniye

/**
 * İmzalı URL oluşturucu
 */
function generateSignedUrl(imagePath, expiryTime) {
  const message = `${imagePath}:${expiryTime}`;
  const signature = crypto
    .createHmac('sha256', IMAGE_SECRET_KEY)
    .update(message)
    .digest('hex');
  
  return `${IMAGE_BASE_URL}/${imagePath}?expires=${expiryTime}&signature=${signature}`;
}

/**
 * Kullanıcı kimlik doğrulama kontrolü
 */
function authenticateUser(request) {
  // Basic auth kontrolü - gerçek auth sisteminizle değiştirin
  const authHeader = request.headers.get('authorization');
  if (!authHeader) return false;

  // Session kontrolü
  const sessionCookie = request.headers.get('cookie');
  if (!sessionCookie || !sessionCookie.includes('session=')) return false;

  // Burada gerçek auth sisteminizi entegre edin
  // Örnek: JWT token doğrulama, session kontrolü vb.
  
  return true; // Geçici olarak true dönüyoruz
}

/**
 * Rate limiting kontrolü
 */
const requestCounts = new Map();

function checkRateLimit(clientIp) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 dakika
  const maxRequests = 50; // Dakikada 50 istek

  const clientData = requestCounts.get(clientIp);
  
  if (!clientData || now > clientData.resetTime) {
    requestCounts.set(clientIp, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (clientData.count >= maxRequests) {
    return false;
  }

  clientData.count++;
  return true;
}

/**
 * Güvenli görsel servisi - GET loader
 */
export async function loader({ request, params }) {
  try {
    const { imageId } = params;
    const url = new URL(request.url);
    
    // URL decode
    const decodedImageId = decodeURIComponent(imageId);
    
    // IP adresini al (rate limiting için)
    const clientIp = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    '127.0.0.1';

    // Rate limiting kontrolü
    if (!checkRateLimit(clientIp)) {
      return new Response('Rate limit exceeded', { 
        status: 429,
        headers: {
          'Retry-After': '60'
        }
      });
    }

    // Kimlik doğrulama kontrolü
    if (!authenticateUser(request)) {
      return new Response('Unauthorized', { 
        status: 401,
        headers: {
          'WWW-Authenticate': 'Bearer'
        }
      });
    }

    // Referer kontrolü (hotlink koruması)
    const referer = request.headers.get('referer');
    const allowedDomains = [
      'localhost',
      'walmco.com',
      'www.walmco.com'
    ];
    
    if (referer) {
      const refererDomain = new URL(referer).hostname;
      const isAllowed = allowedDomains.some(domain => 
        refererDomain === domain || refererDomain.endsWith(`.${domain}`)
      );
      
      if (!isAllowed) {
        return new Response('Forbidden - Invalid referer', { status: 403 });
      }
    }

    // Görsel path kontrolü ve sanitization
    if (!decodedImageId || decodedImageId.includes('..') || decodedImageId.includes('\\')) {
      return new Response('Invalid image path', { status: 400 });
    }

    // İmzalı URL oluştur
    const expiryTime = Math.floor(Date.now() / 1000) + TOKEN_EXPIRY_SECONDS;
    const signedUrl = generateSignedUrl(decodedImageId, expiryTime);

    // Görseli kaynak sunucudan al
    const imageResponse = await fetch(signedUrl, {
      headers: {
        'User-Agent': 'WALMCO-SecureImageProxy/1.0',
        'Accept': 'image/*',
      }
    });

    if (!imageResponse.ok) {
      console.error(`Görsel alınamadı: ${signedUrl} - Status: ${imageResponse.status}`);
      return new Response('Image not found', { status: 404 });
    }

    // Content-Type kontrolü
    const contentType = imageResponse.headers.get('content-type');
    if (!contentType || !contentType.startsWith('image/')) {
      return new Response('Invalid image format', { status: 400 });
    }

    // Görsel stream'ini al
    const imageStream = imageResponse.body;
    if (!imageStream) {
      return new Response('Image stream error', { status: 500 });
    }

    // Güvenlik başlıkları ile yanıt döndür
    return new Response(imageStream, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': 'inline',
        'Cache-Control': 'private, no-store, no-cache, must-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Cross-Origin-Resource-Policy': 'same-site',
        'Referrer-Policy': 'same-origin',
        'X-Robots-Tag': 'noindex, nofollow, noimageindex',
        'Permissions-Policy': 'display-capture=()',
        // CORS başlıkları
        'Access-Control-Allow-Origin': request.headers.get('origin') || '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Authorization, Content-Type',
      }
    });

  } catch (error) {
    console.error('Güvenli görsel servisi hatası:', error);
    
    return new Response('Internal server error', { 
      status: 500,
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
  }
}

/**
 * OPTIONS method - CORS preflight
 */
export async function action({ request }) {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': request.headers.get('origin') || '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Authorization, Content-Type',
        'Access-Control-Max-Age': '86400', // 24 saat
      }
    });
  }
  
  return new Response('Method not allowed', { status: 405 });
}
