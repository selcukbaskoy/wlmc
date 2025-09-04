import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useAsyncError,
  useLocation,
  useRouteError,
} from 'react-router';

import { useButton } from '@react-aria/button';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type FC,
  Component,
} from 'react';
import './global.css';
import WhatsAppButton from '../components/WhatsAppButton';
import I18nProvider from '../components/I18nProvider';
import { injectCriticalCSS, loadNonCriticalCSS, addResourceHints } from '../utils/criticalCSS';

import fetch from '@/__create/fetch';
// @ts-ignore
import { SessionProvider } from '@auth/create/react';
import { useNavigate } from 'react-router';
import { serializeError } from 'serialize-error';
import { Toaster } from 'sonner';
// @ts-ignore
// import { LoadFonts } from 'virtual:load-fonts.jsx';
import { HotReloadIndicator } from '../__create/HotReload';
import { useSandboxStore } from '../__create/hmr-sandbox-store';
import type { Route } from './+types/root';
import { useDevServerHeartbeat } from '../__create/useDevServerHeartbeat';

export const links = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  
  // 🚀 CRITICAL RESOURCE PRELOADING FOR LCP OPTIMIZATION
  { rel: 'preconnect', href: 'https://ucarecdn.com', crossOrigin: 'anonymous' },
  { rel: 'preconnect', href: 'https://walmco.com', crossOrigin: 'anonymous' },
  
  // 📸 Preload Hero Images (LCP Optimization)
  {
    rel: 'preload',
    as: 'image',
    href: 'https://ucarecdn.com/147ae364-769b-4380-be34-36694fdb3dcb/-/format/webp/-/quality/smart/-/resize/800x/',
    type: 'image/webp',
    fetchpriority: 'high'
  },
  
  // 🎥 Preload Hero Video (Critical Above-the-fold)
  {
    rel: 'preload',
    as: 'video',
    href: 'https://walmco.com/Video/Walmco%20Pleksi%20Korkuluk.mov',
    type: 'video/quicktime'
  },
  
  // Preload critical fonts to reduce render-blocking
  {
    rel: 'preload',
    as: 'font',
    href: 'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvZmPk.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  },
  
  // DNS prefetch for external resources
  { rel: 'dns-prefetch', href: 'https://ucarecdn.com' },
  { rel: 'dns-prefetch', href: 'https://walmco.com' },
  { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
  { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
];

export const meta = () => {
  return [
    // Basic SEO
    { title: 'Walmco - Pleksi Korkuluk Sistemleri ve Alüminyum Profiller | Premium Kalite' },
    { name: 'description', content: 'Pleksi ve alüminyum korkuluk sistemlerinde uzman üretici. 28 ülkeye ihracat, 5 yıl garanti, özel tasarım. Ücretsiz keşif için hemen iletişime geçin!' },
    { name: 'keywords', content: 'pleksi korkuluk, pleksi küpeşte, pleksi dikme, pleksi baba, pleksi topuz, plexi korkuluk, plexi küpeşte, alüminyum korkuluk, alüminyum küpeşte, camlı korkuluk, cam korkuluk, İstanbul pleksi korkuluk üreticisi, İstanbul alüminyum aksesuar üreticisi, pleksi korkuluk montaj, pleksi korkuluk garanti, pleksi levha, pleksiglas korkuluk, pleksiglass küpeşte' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { name: 'author', content: 'Walmco' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#b91c1c' },
    
    // Open Graph
    { property: 'og:site_name', content: 'Walmco - Pleksi ve Alüminyum Sistemleri' },
    { property: 'og:locale', content: 'tr_TR' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Walmco - Pleksi Korkuluk Sistemleri ve Alüminyum Profiller' },
    { property: 'og:description', content: 'Pleksi ve alüminyum korkuluk sistemlerinde uzman üretici. 28 ülkeye ihracat, 5 yıl garanti, özel tasarım.' },
    { property: 'og:image', content: 'https://ucarecdn.com/05ca1ea7-798a-46f1-8efd-991309b1875b/-/format/auto/' },
    { property: 'og:url', content: 'https://walmco.com' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Walmco Pleksi Korkuluk Sistemleri' },
    
    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@walmco' },
    { name: 'twitter:title', content: 'Walmco - Pleksi Korkuluk Sistemleri ve Alüminyum Profiller' },
    { name: 'twitter:description', content: 'Pleksi ve alüminyum korkuluk sistemlerinde uzman üretici. 28 ülkeye ihracat, 5 yıl garanti, özel tasarım.' },
    { name: 'twitter:image', content: 'https://ucarecdn.com/05ca1ea7-798a-46f1-8efd-991309b1875b/-/format/auto/' },
    { name: 'twitter:image:alt', content: 'Walmco Pleksi Korkuluk Sistemleri' },
    
    // Additional SEO
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'Walmco' },
    { name: 'application-name', content: 'Walmco' },
    { name: 'msapplication-TileColor', content: '#b91c1c' },
    { name: 'msapplication-config', content: '/browserconfig.xml' },
  ];
};

if (globalThis.window && globalThis.window !== undefined) {
  globalThis.window.fetch = fetch;
}

// JSON-LD Structured Data for Organization
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Walmco",
  "alternateName": "Walmco Pleksi ve Alüminyum Sistemleri",
  "url": "https://walmco.com",
  "logo": "https://ucarecdn.com/f89b0e5b-fee4-4a72-b1a5-b5db82888333/-/format/auto/",
  "description": "Pleksi ve alüminyum korkuluk sistemlerinde uzman üretici. 28 ülkeye ihracat, 5 yıl garanti, özel tasarım.",
  "foundingDate": "2021",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "TR",
    "addressLocality": "İstanbul"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["Turkish", "English"]
  },
  "sameAs": [
    "https://facebook.com/walmco",
    "https://instagram.com/walmco",
    "https://linkedin.com/company/walmco"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pleksi ve Alüminyum Korkuluk Sistemleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Pleksi Korkuluk Sistemleri",
          "description": "Şeffaf cam görünümü ile modern mimariyle uyumlu, dayanıklı pleksi korkuluk sistemleri"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Alüminyum Korkuluk Sistemleri",
          "description": "Korkuluk sistemleri için özel üretilmiş, yüksek kaliteli alüminyum profiller ve aksesuar sistemleri"
        }
      }
    ]
  }
};

function SharedErrorBoundary({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children?: ReactNode;
}): React.ReactElement {
  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-[#18191B] text-[#F2F2F2] rounded-lg p-4 max-w-md w-full mx-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-[#F2F2F2] rounded-full flex items-center justify-center">
              <span className="text-black text-[1.125rem] leading-none">⚠</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <div className="flex flex-col gap-1">
              <p className="font-light text-[#F2F2F2] text-sm">App Error Detected</p>
              <p className="text-[#959697] text-sm font-light">
                It looks like an error occurred while trying to use your app.
              </p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * NOTE: we have a shared error boundary for the app, but then we also expose
 * this in case something goes wrong outside of the normal user's app flow.
 * React-router will mount this one
 */
function ErrorBoundaryLegacy({ error }: Route.ErrorBoundaryProps) {
  return <SharedErrorBoundary isOpen={true} />;
}

function InternalErrorBoundary({ error: errorArg }: Route.ErrorBoundaryProps) {
  const routeError = useRouteError();
  const asyncError = useAsyncError();
  const error = errorArg ?? asyncError ?? routeError;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const animateTimer = setTimeout(() => setIsOpen(true), 100);
    return () => clearTimeout(animateTimer);
  }, []);
  const { buttonProps: showLogsButtonProps } = useButton(
    {
      onPress: useCallback(() => {
        window.parent.postMessage(
          {
            type: 'sandbox:web:show-logs',
          },
          '*'
        );
      }, []),
    },
    useRef<HTMLButtonElement>(null)
  );
  const { buttonProps: fixButtonProps } = useButton(
    {
      onPress: useCallback(() => {
        window.parent.postMessage(
          {
            type: 'sandbox:web:fix',
            error: serializeError(error),
          },
          '*'
        );
        setIsOpen(false);
      }, [error]),
      isDisabled: !error,
    },
    useRef<HTMLButtonElement>(null)
  );
  const { buttonProps: copyButtonProps } = useButton(
    {
      onPress: useCallback(() => {
        navigator.clipboard.writeText(JSON.stringify(serializeError(error)));
      }, [error]),
    },
    useRef<HTMLButtonElement>(null)
  );

  function isInIframe() {
    try {
      return window.parent !== window;
    } catch {
      return true;
    }
  }
  return (
    <SharedErrorBoundary isOpen={isOpen}>
      {isInIframe() ? (
        <div className="flex gap-2">
          {!!error && (
            <button
              className="flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#f9f9f9] hover:bg-[#dbdbdb] active:bg-[#c4c4c4] border-[#c4c4c4] text-[#18191B] text-sm px-[8px] py-[4px] cursor-pointer"
              type="button"
              {...fixButtonProps}
            >
              Try to fix
            </button>
          )}

          <button
            className="flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white text-sm px-[8px] py-[4px]"
            type="button"
            {...showLogsButtonProps}
          >
            Show logs
          </button>
        </div>
      ) : (
        <button
          className="flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white text-sm px-[8px] py-[4px] w-fit"
          type="button"
          {...copyButtonProps}
        >
          Copy error
        </button>
      )}
    </SharedErrorBoundary>
  );
}

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = { hasError: boolean; error: unknown | null };

class ErrorBoundaryWrapper extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <InternalErrorBoundary error={this.state.error} params={{}} />;
    }
    return this.props.children;
  }
}

function LoaderWrapper({ loader }: { loader: () => React.ReactNode }) {
  return <>{loader()}</>;
}

type ClientOnlyProps = {
  loader: () => React.ReactNode;
};

export const ClientOnly: React.FC<ClientOnlyProps> = ({ loader }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Register service worker only in production
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);

  if (!isMounted) return null;

  return (
    <ErrorBoundaryWrapper>
      <LoaderWrapper loader={loader} />
      <WhatsAppButton />
    </ErrorBoundaryWrapper>
  );
};

/**
 * useHmrConnection()
 * ------------------
 * • `true`  → HMR socket is healthy
 * • `false` → socket lost (Vite is polling / may auto‑reload soon)
 *
 * Works only in dev; in prod it always returns `true`.
 */
export function useHmrConnection(): boolean {
  const [connected, setConnected] = useState(() => !!import.meta.hot);

  useEffect(() => {
    // No HMR object outside dev builds
    if (!import.meta.hot) return;

    /** Fired the moment the WS closes unexpectedly */
    const onDisconnect = () => setConnected(false);
    /** Fired every time the WS (re‑)opens */
    const onConnect = () => setConnected(true);

    import.meta.hot.on('vite:ws:disconnect', onDisconnect);
    import.meta.hot.on('vite:ws:connect', onConnect);

    // Optional: catch the "about to full‑reload" event as a last resort
    const onFullReload = () => setConnected(false);
    import.meta.hot.on('vite:beforeFullReload', onFullReload);

    return () => {
      import.meta.hot?.off('vite:ws:disconnect', onDisconnect);
      import.meta.hot?.off('vite:ws:connect', onConnect);
      import.meta.hot?.off('vite:beforeFullReload', onFullReload);
    };
  }, []);

  return connected;
}

const healthyResponseType = 'sandbox:web:healthcheck:response';
const useHandshakeParent = () => {
  const isHmrConnected = useHmrConnection();
  useEffect(() => {
    const healthyResponse = {
      type: healthyResponseType,
      healthy: isHmrConnected,
    };
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'sandbox:web:healthcheck') {
        window.parent.postMessage(healthyResponse, '*');
      }
    };
    window.addEventListener('message', handleMessage);
    // Immediately respond to the parent window with a healthy response in
    // case we missed the healthcheck message
    window.parent.postMessage(healthyResponse, '*');
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isHmrConnected]);
};

const useCodeGen = () => {
  const { startCodeGen, setCodeGenGenerating, completeCodeGen, errorCodeGen, stopCodeGen } =
    useSandboxStore();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const { type } = event.data;

      switch (type) {
        case 'sandbox:web:codegen:started':
          startCodeGen();
          break;
        case 'sandbox:web:codegen:generating':
          setCodeGenGenerating();
          break;
        case 'sandbox:web:codegen:complete':
          completeCodeGen();
          break;
        case 'sandbox:web:codegen:error':
          errorCodeGen();
          break;
        case 'sandbox:web:codegen:stopped':
          stopCodeGen();
          break;
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [startCodeGen, setCodeGenGenerating, completeCodeGen, errorCodeGen, stopCodeGen]);
};

const useRefresh = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'sandbox:web:refresh:request') {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        window.parent.postMessage({ type: 'sandbox:web:refresh:complete' }, '*');
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
};

export function Layout({ children }: { children: ReactNode }) {
  useHandshakeParent();
  useCodeGen();
  useRefresh();
  useDevServerHeartbeat();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location?.pathname;
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'sandbox:navigation') {
        navigate(event.data.pathname);
      }
    };
    window.addEventListener('message', handleMessage);
    window.parent.postMessage({ type: 'sandbox:web:ready' }, '*');
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [navigate]);

  useEffect(() => {
    if (pathname) {
      window.parent.postMessage(
        {
          type: 'sandbox:web:navigation',
          pathname,
        },
        '*'
      );
    }
  }, [pathname]);
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Walmco - Pleksi Korkuluk Sistemleri ve Alüminyum Profiller | Premium Kalite</title>
        <meta name="description" content="Pleksi ve alüminyum korkuluk sistemlerinde uzman üretici. 28 ülkeye ihracat, 5 yıl garanti, özel tasarım. Ücretsiz keşif için hemen iletişime geçin!" />
        <link rel="canonical" href="https://walmco.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
        {import.meta.env.DEV && (
          <script type="module" src="/src/__create/dev-error-overlay.js"></script>
        )}
        <link rel="icon" href="/src/__create/favicon.png" />
        <link rel="apple-touch-icon" href="/src/__create/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        {/* <LoadFonts /> */}
      </head>
      <body>
        <ClientOnly loader={() => children} />
        {import.meta.env.DEV && <HotReloadIndicator />}
        <Toaster position="bottom-right" />
        <ScrollRestoration />
        <Scripts />
        <script src="https://kit.fontawesome.com/2c15cc0cc7.js" crossOrigin="anonymous" async />
      </body>
    </html>
  );
}

export default function App() {
  // 🚀 Performance optimization - Critical CSS injection
  useEffect(() => {
    // Inject critical CSS immediately
    injectCriticalCSS();
    
    // Add resource hints for better loading
    addResourceHints();
    
    // Load non-critical CSS asynchronously after initial render
    const timer = setTimeout(() => {
      loadNonCriticalCSS();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <SessionProvider>
      <I18nProvider>
        <Outlet />
      </I18nProvider>
    </SessionProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error("ErrorBoundary: ", serializeError(error));
  return (
    <html>
      <head>
        <title>Error!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          <h1>Oops</h1>
          <pre>{JSON.stringify(serializeError(error), null, 2)}</pre>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <div />;
}
