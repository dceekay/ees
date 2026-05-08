/**
 * Web Performance Monitoring Utilities
 * Tracks Core Web Vitals and performance metrics
 */

export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  cls?: number; // Cumulative Layout Shift
  fid?: number; // First Input Delay
  ttfb?: number; // Time to First Byte
  pageLoadTime?: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {};

  /**
   * Measure Time to First Byte (TTFB)
   */
  measureTTFB(): number | undefined {
    if (typeof window === 'undefined' || !window.performance) return undefined;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation?.responseStart && navigation?.fetchStart) {
      return navigation.responseStart - navigation.fetchStart;
    }
    return undefined;
  }

  /**
   * Measure First Contentful Paint (FCP) and Largest Contentful Paint (LCP)
   */
  measurePaintMetrics(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // FCP and LCP via PerformanceObserver
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
          }
          if (entry.entryType === 'largest-contentful-paint') {
            this.metrics.lcp = entry.startTime;
          }
        });
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

      // Cleanup after 30s (LCP won't change after this typically)
      setTimeout(() => observer.disconnect(), 30000);
    } catch (e) {
      console.debug('Paint metrics observer not supported');
    }
  }

  /**
   * Measure Cumulative Layout Shift (CLS)
   */
  measureCLS(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.cls = clsValue;
          }
        });
      });

      observer.observe({ entryTypes: ['layout-shift'] });

      // Stop measuring after 5 seconds of user inactivity
      const stopMeasurement = () => {
        observer.disconnect();
      };
      window.addEventListener('beforeunload', stopMeasurement, { once: true });
    } catch (e) {
      console.debug('CLS observer not supported');
    }
  }

  /**
   * Measure page load time
   */
  measurePageLoadTime(): number | undefined {
    if (typeof window === 'undefined' || !window.performance) return undefined;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation?.loadEventEnd && navigation?.fetchStart) {
      return navigation.loadEventEnd - navigation.fetchStart;
    }
    return undefined;
  }

  /**
   * Get all collected metrics
   */
  getMetrics(): PerformanceMetrics {
    return this.metrics;
  }

  /**
   * Log metrics to console (for debugging)
   */
  logMetrics(): void {
    console.group('📊 Core Web Vitals');
    console.log('TTFB:', this.metrics.ttfb, 'ms');
    console.log('FCP:', this.metrics.fcp, 'ms');
    console.log('LCP:', this.metrics.lcp, 'ms');
    console.log('CLS:', this.metrics.cls);
    console.log('Page Load Time:', this.metrics.pageLoadTime, 'ms');
    console.groupEnd();
  }

  /**
   * Initialize all performance monitoring
   */
  init(): void {
    // Measure TTFB immediately
    this.metrics.ttfb = this.measureTTFB();

    // Measure paint metrics
    this.measurePaintMetrics();

    // Measure CLS
    this.measureCLS();

    // Measure page load time on load event
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        this.metrics.pageLoadTime = this.measurePageLoadTime();

        // Log metrics after page load (optional, for debugging)
        if (process.env.NODE_ENV === 'development') {
          this.logMetrics();
        }
      });
    }
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

/**
 * Initialize performance monitoring on page load
 */
export function initPerformanceMonitoring(): void {
  performanceMonitor.init();
}

/**
 * Get current performance metrics
 */
export function getMetrics(): PerformanceMetrics {
  return performanceMonitor.getMetrics();
}
