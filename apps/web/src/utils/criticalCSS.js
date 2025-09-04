/**
 * 🚀 CRITICAL CSS EXTRACTION FOR LIGHTHOUSE PERFORMANCE
 * Above-the-fold styles inline olarak yüklenir
 * Non-critical CSS asenkron yüklenir
 */

// Critical CSS - Above the fold için temel stiller
export const criticalCSS = `
/* Reset ve temel stiller */
*,*::before,*::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
*::before,*::after{--tw-content:''}
html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}
body{margin:0;line-height:inherit}

/* Header ve Navigation Critical Styles */
.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}
.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity))}
.font-bold{font-weight:700}
.font-semibold{font-weight:600}
.text-xl{font-size:1.25rem;line-height:1.75rem}
.text-2xl{font-size:1.5rem;line-height:2rem}
.text-4xl{font-size:2.25rem;line-height:2.5rem}
.text-6xl{font-size:3.75rem;line-height:1}
.text-sm{font-size:0.875rem;line-height:1.25rem}
.text-xs{font-size:0.75rem;line-height:1rem}

/* Layout Critical Styles */
.flex{display:flex}
.items-center{align-items:center}
.justify-center{justify-content:center}
.justify-between{justify-content:space-between}
.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))}
.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}

/* Container Critical Styles */
.max-w-7xl{max-width:80rem}
.mx-auto{margin-left:auto;margin-right:auto}
.px-4{padding-left:1rem;padding-right:1rem}
.px-6{padding-left:1.5rem;padding-right:1.5rem}
.py-3{padding-top:0.75rem;padding-bottom:0.75rem}
.py-4{padding-top:1rem;padding-bottom:1rem}
.py-16{padding-top:4rem;padding-bottom:4rem}

/* Hero Section Critical Styles */
.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}
.from-red-600{--tw-gradient-from:#dc2626 var(--tw-gradient-from-position);--tw-gradient-to:rgb(220 38 38 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
.to-red-700{--tw-gradient-to:#b91c1c var(--tw-gradient-to-position)}
.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}

/* Button Critical Styles */
.rounded-lg{border-radius:0.5rem}
.rounded-full{border-radius:9999px}
.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1),0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}

/* Transition Critical Styles */
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
.duration-300{transition-duration:300ms}

/* WALMCO Brand Colors */
.bg-primary{background-color:#b91c1c}
.text-primary{color:#b91c1c}
.hover\\:bg-primary:hover{background-color:#991b1b}

/* Grid Critical Styles */
.grid{display:grid}
.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}
.gap-8{gap:2rem}

/* Responsive Critical Styles */
@media (min-width:768px){
.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.md\\:text-6xl{font-size:3.75rem;line-height:1}
.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem}
}

@media (min-width:1024px){
.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
}

/* Loading Animation Critical */
.animate-pulse{animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}

.animate-spin{animation:spin 1s linear infinite}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}

/* Image placeholder optimization */
.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}
.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}
.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity))}

/* 🚀 HERO SECTION CRITICAL STYLES FOR LCP */
.min-h-screen{min-height:100vh}
.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}
.from-gray-900{--tw-gradient-from:#111827 var(--tw-gradient-from-position);--tw-gradient-to:rgb(17 24 39 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
.via-gray-800{--tw-gradient-to:rgb(31 41 55 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),#1f2937 var(--tw-gradient-via-position),var(--tw-gradient-to)}
.to-black{--tw-gradient-to:#000 var(--tw-gradient-to-position)}
.absolute{position:absolute}
.inset-0{inset:0px}
.relative{position:relative}
.z-10{z-index:10}
.object-cover{object-fit:cover}
.w-full{width:100%}
.h-full{height:100%}
.opacity-40{opacity:0.4}

/* Hero text styles */
.text-5xl{font-size:3rem;line-height:1}
.leading-tight{line-height:1.25}
.font-black{font-weight:900}
.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}

/* Video loading optimization */
video{display:block;vertical-align:middle}
video[autoplay]{-webkit-playsinline:true;playsinline:true}

/* Responsive grid critical */
.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}
.items-center{align-items:center}
.gap-16{gap:4rem}

@media (min-width:1024px){
.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.lg\\:text-8xl{font-size:6rem;line-height:1}
}
`;

// Non-critical CSS asenkron yükleme fonksiyonu
export function loadNonCriticalCSS() {
  // Tailwind'in kalan CSS'i asenkron yükle
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/global.css'; // Ana CSS dosyası
  link.media = 'print';
  link.onload = function() {
    this.media = 'all';
  };
  
  // Safari için fallback
  link.onerror = function() {
    this.media = 'all';
  };
  
  document.head.appendChild(link);
  
  // Preload hint for faster loading
  const preload = document.createElement('link');
  preload.rel = 'preload';
  preload.href = '/global.css';
  preload.as = 'style';
  document.head.appendChild(preload);
}

// Resource hints ve preload optimizasyonu
export function addResourceHints() {
  const hints = [
    // Font preload
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', as: 'style' },
    
    // DNS prefetch for external domains
    { rel: 'dns-prefetch', href: '//ucarecdn.com' },
    { rel: 'dns-prefetch', href: '//walmco.com' },
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    
    // Preconnect for critical resources
    { rel: 'preconnect', href: 'https://ucarecdn.com', crossorigin: true },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
  ];
  
  hints.forEach(hint => {
    const link = document.createElement('link');
    Object.keys(hint).forEach(key => {
      if (key === 'crossorigin') {
        link.crossOrigin = hint[key];
      } else {
        link.setAttribute(key, hint[key]);
      }
    });
    document.head.appendChild(link);
  });
}

// Critical CSS'i head'e inject et
export function injectCriticalCSS() {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.textContent = criticalCSS;
  document.head.insertBefore(style, document.head.firstChild);
}
