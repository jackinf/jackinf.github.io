import { useEffect, useState } from "react";

/**
 * Returns a 0–1 scroll progress for a given element: 0 when its top reaches the
 * viewport, 1 when its bottom leaves. Used by the experience-history minimap.
 */
export function useScrollProgress(elementId: string) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = document.getElementById(elementId);
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Distance scrolled through the element, normalised.
      const total = rect.height + vh;
      const scrolled = vh - rect.top;
      const p = Math.min(1, Math.max(0, scrolled / total));
      setProgress(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [elementId]);

  return progress;
}
