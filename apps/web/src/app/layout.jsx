import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({ children }) {
  // Global favicon and meta tags
  useEffect(() => {
    // Favicon - WA Logo
    const existingFavicon = document.querySelector('link[rel="shortcut icon"]');
    if (!existingFavicon) {
      const favicon = document.createElement("link");
      favicon.rel = "shortcut icon";
      favicon.href =
        "https://ucarecdn.com/fa2a69d4-a046-4c51-a2d7-cd9c927fe645/-/format/auto/";
      document.head.appendChild(favicon);
    } else {
      existingFavicon.href =
        "https://ucarecdn.com/fa2a69d4-a046-4c51-a2d7-cd9c927fe645/-/format/auto/";
    }

    // Apple touch icon
    const existingAppleTouchIcon = document.querySelector(
      'link[rel="apple-touch-icon"]',
    );
    if (!existingAppleTouchIcon) {
      const appleTouchIcon = document.createElement("link");
      appleTouchIcon.rel = "apple-touch-icon";
      appleTouchIcon.href =
        "https://ucarecdn.com/fa2a69d4-a046-4c51-a2d7-cd9c927fe645/-/format/auto/";
      document.head.appendChild(appleTouchIcon);
    } else {
      existingAppleTouchIcon.href =
        "https://ucarecdn.com/fa2a69d4-a046-4c51-a2d7-cd9c927fe645/-/format/auto/";
    }

    // Icon for browsers
    const existingIcon = document.querySelector('link[rel="icon"]');
    if (!existingIcon) {
      const icon = document.createElement("link");
      icon.rel = "icon";
      icon.type = "image/png";
      icon.href =
        "https://ucarecdn.com/fa2a69d4-a046-4c51-a2d7-cd9c927fe645/-/format/auto/";
      document.head.appendChild(icon);
    } else {
      existingIcon.href =
        "https://ucarecdn.com/fa2a69d4-a046-4c51-a2d7-cd9c927fe645/-/format/auto/";
    }

    // Meta theme color
    const existingThemeColor = document.querySelector(
      'meta[name="theme-color"]',
    );
    if (!existingThemeColor) {
      const themeColor = document.createElement("meta");
      themeColor.name = "theme-color";
      themeColor.content = "#b91c1c";
      document.head.appendChild(themeColor);
    }

    // Meta viewport (if not already present)
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement("meta");
      viewport.name = "viewport";
      viewport.content = "width=device-width, initial-scale=1";
      document.head.appendChild(viewport);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
