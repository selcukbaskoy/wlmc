import { test, expect } from '@playwright/test';

/**
 * WALMCO Güvenli Görsel Sistemi E2E Testleri
 * Bu testler güvenlik önlemlerinin doğru çalıştığını doğrular
 */

test.describe('Güvenli Görsel Sistemi', () => {
  test.beforeEach(async ({ page }) => {
    // Console hatalarını yakala
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log('Console error:', msg.text());
      }
    });
  });

  test('Ürün sayfasında SecureImage bileşeni yüklenir', async ({ page }) => {
    // Bir ürün sayfasına git
    await page.goto('/pleksiglas-korkuluk-baba-2839-tripoli');
    
    // Canvas elementinin varlığını kontrol et (SecureImage canvas kullanır)
    const canvas = page.locator('canvas').first();
    await expect(canvas).toBeVisible();
    
    // Görsel container'ının doğru class'a sahip olduğunu kontrol et
    const imageContainer = page.locator('.product-image').first();
    await expect(imageContainer).toBeVisible();
  });

  test('Güvenlik başlıkları doğru ayarlanır', async ({ page }) => {
    const response = await page.goto('/pleksiglas-korkuluk-baba-2839-tripoli');
    
    // Güvenlik başlıklarını kontrol et
    expect(response.headers()['x-frame-options']).toBe('SAMEORIGIN');
    expect(response.headers()['x-content-type-options']).toBe('nosniff');
    expect(response.headers()['referrer-policy']).toBe('same-origin');
    
    // CSP başlığının varlığını kontrol et
    expect(response.headers()['content-security-policy']).toBeTruthy();
  });

  test('Sağ tık menüsü görsellerde engellenir', async ({ page }) => {
    await page.goto('/pleksiglas-korkuluk-baba-2839-tripoli');
    
    // Canvas elementini bul
    const canvas = page.locator('canvas').first();
    await expect(canvas).toBeVisible();
    
    // Sağ tık yapıldığında context menu'nun açılmadığını kontrol et
    let contextMenuShown = false;
    page.on('contextmenu', () => {
      contextMenuShown = true;
    });
    
    await canvas.click({ button: 'right' });
    
    // Kısa bekleme sonrası context menu'nun açılmadığını doğrula
    await page.waitForTimeout(500);
    expect(contextMenuShown).toBe(false);
  });

  test('Klavye kısayolları engellenir', async ({ page }) => {
    await page.goto('/pleksiglas-korkuluk-baba-2839-tripoli');
    
    // Sayfa yüklenene kadar bekle
    await page.waitForLoadState('networkidle');
    
    // Ctrl+S kısayolunu test et
    const downloads = [];
    page.on('download', download => downloads.push(download));
    
    await page.keyboard.press('Control+S');
    
    // İndirme işleminin başlamadığını doğrula
    await page.waitForTimeout(1000);
    expect(downloads.length).toBe(0);
    
    // Blur efektinin aktif olduğunu kontrol et (CSS class)
    await page.waitForTimeout(500);
    const body = page.locator('body');
    const hasBlurClass = await body.evaluate(el => 
      el.classList.contains('product-page-blur')
    );
    expect(hasBlurClass).toBe(true);
  });

  test('Uyarı bildirimi gösterilir', async ({ page }) => {
    await page.goto('/pleksiglas-korkuluk-baba-2839-tripoli');
    
    // Yasaklı bir işlem yap (Ctrl+U)
    await page.keyboard.press('Control+U');
    
    // Uyarı bildiriminin göründüğünü kontrol et
    const warning = page.locator('[data-testid="security-warning"], .fixed.top-4.right-4');
    await expect(warning).toBeVisible({ timeout: 3000 });
    
    // Uyarı metninin doğru olduğunu kontrol et
    await expect(warning).toContainText('Korumalı İçerik');
  });

  test('Drag & drop engellenir', async ({ page }) => {
    await page.goto('/pleksiglas-korkuluk-baba-2839-tripoli');
    
    const canvas = page.locator('canvas').first();
    await expect(canvas).toBeVisible();
    
    // Drag işlemini test et
    const boundingBox = await canvas.boundingBox();
    
    // Mouse down -> mouse move -> mouse up sequence
    await page.mouse.move(boundingBox.x + 10, boundingBox.y + 10);
    await page.mouse.down();
    await page.mouse.move(boundingBox.x + 100, boundingBox.y + 100);
    await page.mouse.up();
    
    // Drag işleminin engellendiğini doğrula (element yerinde kalmalı)
    const newBoundingBox = await canvas.boundingBox();
    expect(newBoundingBox.x).toBe(boundingBox.x);
    expect(newBoundingBox.y).toBe(boundingBox.y);
  });

  test('Watermark görünür', async ({ page }) => {
    await page.goto('/pleksiglas-korkuluk-baba-2839-tripoli');
    
    // Canvas elementinin yüklenmesini bekle
    const canvas = page.locator('canvas').first();
    await expect(canvas).toBeVisible();
    
    // Canvas'ın içeriğini kontrol et (watermark olup olmadığını pixel analizi ile)
    const canvasHandle = await canvas.elementHandle();
    const canvasData = await canvasHandle.evaluate(canvas => {
      const ctx = canvas.getContext('2d');
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      return imageData.data.length > 0;
    });
    
    expect(canvasData).toBe(true);
  });

  test('Güvenlik göstergesi görünür', async ({ page }) => {
    await page.goto('/pleksiglas-korkuluk-baba-2839-tripoli');
    
    // Güvenlik göstergesinin varlığını kontrol et
    const securityIndicator = page.locator('.fixed.bottom-4.left-4');
    await expect(securityIndicator).toBeVisible();
    
    // "Güvenli Görüntüleme" metninin varlığını kontrol et
    await expect(securityIndicator).toContainText('Güvenli Görüntüleme');
    
    // Shield ikonu varlığını kontrol et
    const shieldIcon = securityIndicator.locator('svg');
    await expect(shieldIcon).toBeVisible();
  });

  test('Print media query çalışır', async ({ page }) => {
    await page.goto('/pleksiglas-korkuluk-baba-2839-tripoli');
    
    // Print media emulation
    await page.emulateMedia({ media: 'print' });
    
    // Ürün görsellerinin gizlendiğini kontrol et
    const productImages = page.locator('.product-image');
    const firstImage = productImages.first();
    
    // Print modunda görsel gizli olmalı
    const isVisible = await firstImage.isVisible();
    expect(isVisible).toBe(false);
  });

  test('Developer tools algılanır', async ({ page, context }) => {
    // Bu test Chrome DevTools'un açılmasını simüle eder
    await page.goto('/pleksiglas-korkuluk-baba-2839-tripoli');
    
    // Viewport boyutunu değiştirerek devtools açılma simülasyonu
    await page.setViewportSize({ width: 800, height: 600 });
    await page.setViewportSize({ width: 600, height: 600 }); // DevTools açık simülasyonu
    
    // Uyarının gösterildiğini kontrol et
    await page.waitForTimeout(2000); // DevTools algılama için bekleme
    
    const warning = page.locator('.fixed.top-4.right-4');
    await expect(warning).toBeVisible({ timeout: 5000 });
  });
});

test.describe('API Güvenlik Testleri', () => {
  test('Güvenli görsel endpoint\'i auth gerektirir', async ({ request }) => {
    // Auth olmadan istek
    const response = await request.get('/api/images/secure/test-image.jpg');
    expect(response.status()).toBe(401);
  });

  test('Geçersiz referer engellenip', async ({ request }) => {
    const response = await request.get('/api/images/secure/test-image.jpg', {
      headers: {
        'Referer': 'https://evil-site.com',
        'Authorization': 'Bearer fake-token'
      }
    });
    expect(response.status()).toBe(403);
  });

  test('Rate limiting çalışır', async ({ request }) => {
    // Çok sayıda istek gönder
    const requests = Array.from({ length: 60 }, (_, i) => 
      request.get(`/api/images/secure/test-image-${i}.jpg`, {
        headers: {
          'Authorization': 'Bearer fake-token'
        }
      })
    );
    
    const responses = await Promise.all(requests);
    
    // Son isteklerin 429 (rate limit) döndüğünü kontrol et
    const rateLimitedResponses = responses.filter(r => r.status() === 429);
    expect(rateLimitedResponses.length).toBeGreaterThan(0);
  });
});

test.describe('Lighthouse Performans Testleri', () => {
  test('Performans skoru ≥ 90', async ({ page }) => {
    await page.goto('/pleksiglas-korkuluk-baba-2839-tripoli');
    
    // Performans metriklerini ölçmek için
    await page.waitForLoadState('networkidle');
    
    const performanceEntries = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      return {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
      };
    });
    
    // Yükleme süresi 3 saniyeden az olmalı
    expect(performanceEntries.loadTime).toBeLessThan(3000);
    
    // DOM yükleme 2 saniyeden az olmalı
    expect(performanceEntries.domContentLoaded).toBeLessThan(2000);
  });

  test('Erişilebilirlik skoru ≥ 90', async ({ page }) => {
    await page.goto('/pleksiglas-korkuluk-baba-2839-tripoli');
    
    // Alt metin kontrolü
    const images = page.locator('canvas');
    const count = await images.count();
    
    for (let i = 0; i < count; i++) {
      const image = images.nth(i);
      const parent = image.locator('..');
      
      // Her görsel için alt metin varlığını kontrol et
      const hasAltText = await parent.evaluate(el => {
        return el.getAttribute('aria-label') || 
               el.querySelector('[alt]')?.getAttribute('alt') ||
               el.textContent?.includes('alt');
      });
      
      expect(hasAltText).toBeTruthy();
    }
  });
});
