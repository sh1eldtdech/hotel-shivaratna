import React, { useState, useRef, useEffect } from 'react';

/**
 * LazyImage — A drop-in replacement for <img> with:
 * - Shimmer skeleton while loading
 * - Fade-in on load
 * - loading="lazy", decoding="async" by default
 * - Optional fetchpriority support for above-the-fold images
 */
const LazyImage = ({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  loading = 'lazy',
  decoding = 'async',
  fetchpriority,
  width,
  height,
  srcSet,
  sizes,
  style,
  onLoad,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  return (
    <div
      className={`relative overflow-hidden ${wrapperClassName}`}
      style={width && height ? { width, height } : undefined}
    >
      {/* Shimmer skeleton visible until image loads */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-neutral-200 animate-pulse"
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading={loading}
        decoding={decoding}
        {...(fetchpriority ? { fetchpriority } : {})}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        {...(srcSet ? { srcSet } : {})}
        {...(sizes ? { sizes } : {})}
        {...(style ? { style } : {})}
        onLoad={handleLoad}
        {...rest}
      />
    </div>
  );
};

export default LazyImage;
