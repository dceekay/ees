/**
 * Image Optimization Utilities
 * Provides helpers for modern image handling and optimization
 */

/**
 * Gets optimized image srcset for responsive images
 * @param baseUrl - Base URL without extension
 * @param extension - File extension (jpg, png, etc.)
 * @returns Object with srcset and sizes attributes
 */
export function getResponsiveImageSrcset(
  baseUrl: string,
  extension: string = 'jpg'
) {
  // If you have a CDN or image service, this would generate URLs for different sizes
  // Example with a hypothetical image service:
  // return {
  //   srcset: `${baseUrl}?w=320 320w, ${baseUrl}?w=640 640w, ${baseUrl}?w=1024 1024w, ${baseUrl}?w=1920 1920w`,
  //   sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px',
  // };

  // For now, return the base URL as-is
  return {
    srcset: baseUrl,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px',
  };
}

/**
 * Generates a simple blur hash placeholder (base64 encoded tiny image)
 * For production, consider using a library like blurhash or plaiceholder
 */
export function getImagePlaceholder(
  imageUrl: string
): string {
  // Return a 1x1 transparent gif as placeholder
  // In production, you could generate actual blurred versions or use a service
  return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
}

/**
 * Preload critical images for better performance
 * @param urls - Array of image URLs to preload
 */
export function preloadImages(urls: string[]): void {
  if (typeof document === 'undefined') return;

  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    // fetchPriority for high priority images
    link.setAttribute('fetchPriority', 'high');
    document.head.appendChild(link);
  });
}

/**
 * Detects modern image format support
 * Returns 'webp' if supported, otherwise 'jpeg'
 */
export function getSupportedImageFormat(): 'webp' | 'jpeg' {
  if (typeof document === 'undefined') return 'jpeg';

  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext('2d');

  if (!ctx) return 'jpeg';

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, 1, 1);

  return canvas.toDataURL('image/webp').indexOf('image/webp') === 5 ? 'webp' : 'jpeg';
}

/**
 * Converts image URL to use modern format if supported
 * @param url - Original image URL
 * @returns URL with modern format or original URL
 */
export function getModernImageUrl(url: string): string {
  // This would integrate with your image service/CDN
  // Example: convert .jpg to .webp if supported
  // return url.replace(/\.(jpg|png)$/i, '.webp');
  return url;
}

/**
 * Optimized image loading strategy
 * Combines native lazy loading, IntersectionObserver, and error handling
 */
export const imageOptimizationConfig = {
  // Preload critical images above the fold
  criticalImages: [
    '/images/logo.png',
    '/images/site.png',
  ],

  // Image lazy loading root margin (pixels to load before entering viewport)
  lazyLoadMargin: '50px',

  // Supported image formats in order of preference
  formatPreference: ['webp', 'jpeg', 'png'],

  // Image size breakpoints for responsive images
  breakpoints: {
    small: 480,
    medium: 768,
    large: 1024,
    xlarge: 1920,
  },
};

/**
 * Initialize image optimization on page load
 */
export function initImageOptimization(): void {
  if (typeof document === 'undefined') return;

  // Preload critical images
  preloadImages(imageOptimizationConfig.criticalImages);

  // Enable prefetch for next-page images in the background
  const prefetchLinks = document.querySelectorAll('a[data-prefetch-images]');
  prefetchLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      const images = link.getAttribute('data-prefetch-images')?.split(',') || [];
      images.forEach((img) => {
        const prefetch = new Image();
        prefetch.src = img.trim();
      });
    });
  });
}
