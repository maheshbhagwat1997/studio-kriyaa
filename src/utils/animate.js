// Small easing and animate helper
export function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function animate({ duration = 500, timing = easeInOutCubic, draw }) {
  const start = performance.now();
  return new Promise((resolve) => {
    function frame(now) {
      const timeFraction = Math.min((now - start) / duration, 1);
      const progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) requestAnimationFrame(frame);
      else resolve();
    }
    requestAnimationFrame(frame);
  });
}

export function smoothScrollTo(targetY = 0, options = {}) {
  const duration = options.duration ?? 500;
  const easing = options.easing ?? easeInOutCubic;
  const startY = window.scrollY || window.pageYOffset;
  const delta = targetY - startY;
  if (Math.abs(delta) < 1) return Promise.resolve();
  return animate({
    duration,
    timing: easing,
    draw: (p) => {
      window.scrollTo(0, Math.round(startY + delta * p));
    },
  });
}

export function polyfillSmoothScroll() {
  // If native smooth scroll is available, expose a tiny wrapper that uses it.
  let hasNative = true;
  try {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  } catch (e) {
    hasNative = false;
  }

  if (hasNative) {
    window.__smoothScroll = (x, y, opts) => {
      window.scrollTo({ top: y, left: x, behavior: 'smooth' });
      return Promise.resolve();
    };
  } else {
    window.__smoothScroll = (x, y, opts) => smoothScrollTo(y, opts);
  }
}
