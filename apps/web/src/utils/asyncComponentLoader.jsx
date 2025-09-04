/**
 * 🚀 ASYNC COMPONENT LOADER FOR JAVASCRIPT OPTIMIZATION
 * Main thread'i bloke etmeden büyük component'leri yükler
 */

import { lazy, Suspense, useState, useEffect, useRef } from 'react';

// 📦 Component lazy loading with suspense fallbacks
export const createAsyncComponent = (importFn, fallbackComponent = null) => {
  const LazyComponent = lazy(importFn);
  
  return function AsyncComponent(props) {
    const FallbackComponent = fallbackComponent || (() => (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      </div>
    ));

    return (
      <Suspense fallback={<FallbackComponent />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};

// 🎯 Smart loading with intersection observer
export const createSmartAsyncComponent = (importFn, options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    fallback = null
  } = options;

  return function SmartAsyncComponent(props) {
    const [shouldLoad, setShouldLoad] = useState(false);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !shouldLoad) {
            setIsIntersecting(true);
            // Delay loading to reduce main thread pressure
            setTimeout(() => setShouldLoad(true), 100);
            observer.disconnect();
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [shouldLoad, threshold, rootMargin]);

    if (!shouldLoad) {
      return (
        <div ref={ref} className="min-h-[200px] flex items-center justify-center">
          {isIntersecting ? (
            <div className="animate-pulse bg-gray-200 rounded-lg w-full h-48"></div>
          ) : (
            <div className="text-gray-400 text-sm">Yükleniyor...</div>
          )}
        </div>
      );
    }

    const AsyncComponent = createAsyncComponent(importFn, fallback);
    return <AsyncComponent {...props} />;
  };
};

// 🔄 Chunked loading for heavy operations
export const processInChunks = async (items, processor, chunkSize = 10) => {
  const results = [];
  
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    
    // Process chunk
    const chunkResults = await Promise.all(
      chunk.map(item => processor(item))
    );
    
    results.push(...chunkResults);
    
    // Yield to main thread between chunks
    if (i + chunkSize < items.length) {
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  }
  
  return results;
};

// ⚡ Request idle callback wrapper
export const runWhenIdle = (callback, options = {}) => {
  const { timeout = 5000 } = options;
  
  if ('requestIdleCallback' in window) {
    return requestIdleCallback(callback, { timeout });
  } else {
    // Fallback for browsers without requestIdleCallback
    return setTimeout(callback, 0);
  }
};

// 🎯 Smart resource scheduler
export class ResourceScheduler {
  constructor() {
    this.queue = [];
    this.isProcessing = false;
  }

  schedule(task, priority = 'normal') {
    return new Promise((resolve, reject) => {
      this.queue.push({
        task,
        priority,
        resolve,
        reject,
        timestamp: Date.now()
      });

      this.queue.sort((a, b) => {
        // Priority order: high, normal, low
        const priorityOrder = { high: 3, normal: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });

      this.processQueue();
    });
  }

  async processQueue() {
    if (this.isProcessing || this.queue.length === 0) return;

    this.isProcessing = true;

    while (this.queue.length > 0) {
      const { task, resolve, reject } = this.queue.shift();

      try {
        // Run task when browser is idle
        await new Promise(taskResolve => {
          runWhenIdle(async () => {
            try {
              const result = await task();
              resolve(result);
              taskResolve();
            } catch (error) {
              reject(error);
              taskResolve();
            }
          });
        });
      } catch (error) {
        reject(error);
      }

      // Small break between tasks to prevent blocking
      await new Promise(resolve => setTimeout(resolve, 1));
    }

    this.isProcessing = false;
  }
}

// 📊 Performance monitor
export const measurePerformance = (name, fn) => {
  return async (...args) => {
    const start = performance.now();
    
    try {
      const result = await fn(...args);
      const end = performance.now();
      
      console.log(`⚡ ${name}: ${(end - start).toFixed(2)}ms`);
      return result;
    } catch (error) {
      const end = performance.now();
      console.error(`❌ ${name} failed after ${(end - start).toFixed(2)}ms:`, error);
      throw error;
    }
  };
};

// Global resource scheduler instance
export const globalScheduler = new ResourceScheduler();
