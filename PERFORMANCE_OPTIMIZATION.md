# Performance Optimization Guide

## Overview

This guide documents the performance optimizations implemented in the EES construction landing site. These optimizations improve Core Web Vitals, reduce bundle size, and enhance user experience on both desktop and mobile devices.

## Optimization Features

### 1. **Lazy Loading Images with `<LazyImage>` Component**

The custom `LazyImage` component implements efficient image lazy loading using the Intersection Observer API with native `loading="lazy"` fallback.

**Features:**
- Uses native HTML `loading="lazy"` attribute (supported in modern browsers)
- Intersection Observer fallback with 50px root margin for seamless loading
- Blur-up placeholder support for visual feedback during loading
- Automatic error handling with fallback UI
- Support for image priority hints (`fetchPriority`)

**Usage:**
```tsx
import { LazyImage } from '@/components/common/LazyImage';

// Critical image (loaded immediately)
<LazyImage 
  src="/images/hero.jpg" 
  alt="Hero image"
  fetchPriority="high"
/>

// Non-critical image (lazy loaded)
<LazyImage 
  src="/images/project.jpg" 
  alt="Project image"
  fetchPriority="low"
  placeholder="/images/placeholder.jpg"
/>
```

**Components Updated:**
- `ServiceCard` - Uses LazyImage for service images
- `ProjectsSection` - Uses LazyImage for project thumbnails
- `ProjectsPage` - Uses LazyImage for featured and grid images
- `WhyChooseSection` - Uses LazyImage for visual cards

### 2. **Route-Based Code Splitting**

Pages are now lazy loaded using `React.lazy()` and `Suspense`, reducing initial bundle size.

**Pages loaded on-demand:**
- HomePage (chunk-home)
- AboutPage (chunk-about)
- ServicesPage (chunk-services)
- ProjectsPage (chunk-projects)
- ContactPage (chunk-contact)

**Benefit:** Initial page load only includes critical code needed for the current route.

### 3. **Vendor Code Splitting**

Large dependencies are split into separate chunks for better caching:

- `vendor-react`: React, React DOM, React Router
- `vendor-animation`: Framer Motion, GSAP
- `vendor-state`: Zustand
- `chunk-common`: Shared components (LazyImage, ScrollReveal, etc.)

**Benefit:** Long-term caching of static vendor code.

### 4. **Image Optimization Utilities**

Located in `src/utils/imageOptimization.ts`:

**Functions:**
- `preloadImages()` - Preload critical images above the fold
- `getSupportedImageFormat()` - Detect modern image formats (WebP support)
- `initImageOptimization()` - Initialize optimization on page load

**Example:**
```tsx
import { preloadImages } from '@/utils/imageOptimization';

// In App.tsx or on page load
preloadImages(['/images/hero.png', '/images/logo.png']);
```

### 5. **Performance Monitoring**

Track Core Web Vitals and performance metrics:

**Metrics Tracked:**
- **TTFB** (Time to First Byte)
- **FCP** (First Contentful Paint)
- **LCP** (Largest Contentful Paint)
- **CLS** (Cumulative Layout Shift)
- **FID** (First Input Delay)
- **Page Load Time**

**Access metrics:**
```tsx
import { getMetrics } from '@/utils/performanceMonitoring';

const metrics = getMetrics();
console.log('LCP:', metrics.lcp, 'ms');
console.log('CLS:', metrics.cls);
```

### 6. **Optimized Vite Configuration**

Enhanced build configuration with:

- **Manual chunk splitting** for better control over bundle chunks
- **CSS code splitting** - Separate CSS files per page/component
- **esbuild minification** - Faster and more efficient than Terser
- **Asset optimization** - Proper handling of fonts and media

**Build output includes:**
- Separate chunks for each page (better caching)
- Vendor chunks (static, cacheable)
- Common component chunk
- Inline source maps disabled in production (smaller size)

## Best Practices

### 1. **Use LazyImage for Non-Critical Images**

❌ **Don't:**
```tsx
<img src="/images/project.jpg" alt="Project" />
```

✅ **Do:**
```tsx
<LazyImage src="/images/project.jpg" alt="Project" fetchPriority="low" />
```

### 2. **Set Appropriate Priority Hints**

```tsx
// Above-the-fold, critical images
<LazyImage src="/images/hero.jpg" fetchPriority="high" />

// Below-the-fold, non-critical
<LazyImage src="/images/thumbnail.jpg" fetchPriority="low" />

// Default (auto-detect)
<LazyImage src="/images/background.jpg" />
```

### 3. **Preload Critical Images**

```tsx
import { initImageOptimization } from '@/utils/imageOptimization';

// Automatically preloads critical images
// Call in App.tsx useEffect
initImageOptimization();
```

### 4. **Optimize Image Assets**

**Recommended tools for image optimization:**

1. **TinyPNG/TinyJPG** - Lossless compression
2. **ImageOptim** (Mac) - Batch compression
3. **ImageMagick** - Command-line tool
4. **Squoosh** - Online optimizer with WebP support

**Recommended sizes:**
- Hero images: ~1920x1080 (compressed to <300KB)
- Thumbnails: ~400x300 (compressed to <50KB)
- Mobile images: 1/2 to 2/3 the size of desktop

### 5. **Monitor Performance**

Check Core Web Vitals regularly:

1. **Chrome DevTools Lighthouse** - Local testing
2. **PageSpeed Insights** - Production monitoring
3. **Web Vitals Chrome Extension** - Real user metrics
4. **Performance Monitor** (in app) - Runtime metrics

## Performance Targets

Recommended targets for optimal performance:

| Metric | Target | Impact |
|--------|--------|--------|
| FCP | < 1.8s | First paint visibility |
| LCP | < 2.5s | Main content visible |
| CLS | < 0.1 | Visual stability |
| TTFB | < 0.6s | Server response |
| Page Load | < 3s | Overall experience |
| Bundle Size | < 250KB gzip | Fast downloads |

## Troubleshooting

### Images Not Loading

1. Check if image paths are correct
2. Verify CORS headers if images are external
3. Check browser console for errors
4. Use browser DevTools to inspect network requests

### Lazy Loading Not Working

1. Ensure `loading="lazy"` is supported (most modern browsers)
2. Check if IntersectionObserver is available
3. Verify images are actually being deferred (Network tab)
4. Check for JavaScript errors

### Performance Metrics Not Updating

1. Clear browser cache
2. Check if `initPerformanceMonitoring()` is called
3. Look for console errors
4. Test in incognito/private mode

## Future Optimizations

Potential improvements for future iterations:

1. **Dynamic image sizing** - Serve different sizes based on viewport
2. **WebP format support** - Automatic format conversion
3. **CDN integration** - Use content delivery network for images
4. **Service Worker** - Cache images for offline access
5. **Image compression middleware** - Server-side optimization
6. **Next.js Image component** - If migrating to Next.js
7. **Critical CSS** - Inline critical styles above-the-fold

## Resources

- [Web Vitals Guide](https://web.dev/vitals/)
- [Lazy Loading Best Practices](https://web.dev/lazy-loading-images-and-video/)
- [Image Optimization](https://web.dev/image-optimization/)
- [Code Splitting](https://webpack.js.org/guides/code-splitting/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

**Last Updated:** May 2026

For questions or issues, please refer to the implementation files:
- `src/components/common/LazyImage.tsx`
- `src/utils/imageOptimization.ts`
- `src/utils/performanceMonitoring.ts`
