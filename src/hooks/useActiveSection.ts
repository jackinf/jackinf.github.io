import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently dominant in the viewport. Drives the
 * section-aware animated background and the nav highlight.
 */
export function useActiveSection(ids: string[], fallback = ids[0]) {
  const [active, setActive] = useState(fallback);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const ratios = new Map<string, number>();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) ratios.set(e.target.id, e.intersectionRatio);
        let best = fallback;
        let bestRatio = -1;
        for (const [id, r] of ratios) {
          if (r > bestRatio) {
            bestRatio = r;
            best = id;
          }
        }
        if (bestRatio > 0) setActive(best);
      },
      { threshold: [0, 0.15, 0.3, 0.5, 0.75, 1], rootMargin: "-45% 0px -45% 0px" },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids.join("|"), fallback]);

  return active;
}
