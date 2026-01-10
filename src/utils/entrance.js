import { animate, easeInOutCubic } from './animate';

export function initEntranceAnimations({ selector = '.animate-on-scroll', rootMargin = '0px 0px -12% 0px', duration = 600, translateY = 22 } = {}) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    // Fallback: reveal immediately
    document.querySelectorAll(selector).forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0px)';
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          // Ensure starting state
          el.style.willChange = 'transform, opacity';
          el.style.opacity = el.style.opacity || '0';
          // Animate into place
          animate({
            duration,
            timing: easeInOutCubic,
            draw: (p) => {
              el.style.transform = `translateY(${Math.round((1 - p) * translateY)}px)`;
              el.style.opacity = String(p);
            },
          });

          observer.unobserve(el);
        }
      });
    },
    { rootMargin, threshold: 0.08 }
  );

  document.querySelectorAll(selector).forEach((el) => {
    // initialize style so draw has a consistent starting point
    if (!el.style.transform) el.style.transform = `translateY(${translateY}px)`;
    if (!el.style.opacity) el.style.opacity = '0';
    observer.observe(el);
  });

  return observer; // return observer in case caller wants to disconnect
}
