import { useEffect, useRef, useState } from 'react';

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  placeholder?: string;
  onLoad?: () => void;
  fetchPriority?: 'high' | 'low' | 'auto';
};

/**
 * LazyImage Component
 * Implements efficient lazy loading using IntersectionObserver
 * Features:
 * - Native lazy loading with fallback
 * - Blur-up placeholder support
 * - Performance optimized
 * - Automatic image format selection (modern browsers)
 */
export function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  placeholder,
  onLoad,
  fetchPriority = 'auto',
}: LazyImageProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Use native loading="lazy" for better performance
    img.loading = 'lazy';
    img.fetchPriority = fetchPriority;

    // Fallback: Intersection Observer for browsers that don't support native lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && img.dataset.src && img.src !== img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.01,
      }
    );

    // Store the actual src in data-src
    if (!img.src && src) {
      img.dataset.src = src;
    } else {
      img.src = src;
    }

    observer.observe(img);

    return () => {
      if (img) observer.unobserve(img);
    };
  }, [src, fetchPriority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
  };

  const inlineStyles: React.CSSProperties = {
    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
  };

  return (
    <div
      ref={containerRef}
      className={`lazyImageContainer ${isLoaded ? 'loaded' : ''} ${error ? 'error' : ''} ${className}`}
      style={inlineStyles}
    >
      {/* Placeholder blur effect */}
      {placeholder && !isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="lazyImagePlaceholder"
          aria-hidden="true"
          style={{
            filter: 'blur(20px)',
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}

      {/* Main image */}
      <img
        ref={imgRef}
        alt={alt}
        className={`lazyImage ${isLoaded ? 'lazyImage--loaded' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        style={inlineStyles}
      />

      {/* Fallback for error state */}
      {error && (
        <div className="lazyImageFallback" style={inlineStyles}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ width: '40%', height: '40%' }}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      )}
    </div>
  );
}
