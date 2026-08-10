import { useState, useEffect, useRef } from 'react';

/**
 * useIntersectionObserver — Returns a [ref, isIntersecting] tuple.
 * Attach `ref` to a DOM element; `isIntersecting` becomes true when
 * that element enters the viewport.
 *
 * @param {IntersectionObserverInit} options
 * @param {boolean} freezeOnceVisible - if true, never goes back to false after first intersection
 */
const useIntersectionObserver = (
  options = {},
  freezeOnceVisible = true
) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting;
      setIsIntersecting(visible);
      if (freezeOnceVisible && visible) {
        observer.disconnect();
      }
    }, options);

    observer.observe(el);

    return () => observer.disconnect();
  }, [options.threshold, options.root, options.rootMargin, freezeOnceVisible]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
