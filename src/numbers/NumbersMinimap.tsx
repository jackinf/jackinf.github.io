import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { sections } from "../data/numbers.ts";
import { NAV_OFFSET, scrollToId } from "../lib/scroll.ts";

interface Marker {
  id: string;
  company: string;
  brand: string;
  year: string;
  /** 0–1 position along the rail (scroll progress at which the section centres). */
  pos: number;
}

/**
 * Always-visible right-hand minimap of the numbers page: one node per company
 * section, lit in the brand colour once reached, with a fill + thumb tracking
 * overall scroll progress. Reuses the .minimap styles from global.css.
 */
export function NumbersMinimap() {
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [progress, setProgress] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    const measure = () => {
      // Place each node at the scroll progress its click produces (section top
      // under the sticky nav), so the dot lines up with the thumb on arrival.
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const next: Marker[] = [];
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const year = s.descriptor.match(/\d{4}/)?.[0];
        next.push({
          id: s.id,
          company: s.company,
          brand: s.brand,
          year: year ? `'${year.slice(2)}` : "",
          pos: Math.min(1, Math.max(0, (el.offsetTop - NAV_OFFSET) / scrollable)),
        });
      }
      setMarkers(next);
    };

    const update = () => {
      raf.current = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      setProgress(Math.min(1, Math.max(0, window.scrollY / scrollable)));
    };

    const onScroll = () => {
      if (!raf.current) raf.current = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    // Re-measure shortly after mount once reveal animations settle.
    const t = setTimeout(onResize, 700);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf.current) cancelAnimationFrame(raf.current);
      clearTimeout(t);
    };
  }, []);

  if (markers.length === 0) return null;

  return (
    <aside className="minimap is-visible">
      <span className="minimap__cap minimap__cap--top">now</span>
      <div className="minimap__rail">
        <span className="minimap__fill" style={{ height: `${progress * 100}%` }} />
        <span className="minimap__thumb" style={{ top: `${progress * 100}%` }} />
        {markers.map((m) => {
          const reached = progress >= m.pos - 0.04;
          return (
            <button
              type="button"
              key={m.id}
              className={`minimap__node${reached ? " is-reached" : ""}`}
              style={{ top: `${m.pos * 100}%`, "--brand": m.brand } as CSSProperties}
              onClick={() => scrollToId(m.id)}
              aria-label={`Jump to ${m.company}`}
            >
              <span className="minimap__dot" />
              <span className="minimap__lab">
                {m.company} <em>{m.year}</em>
              </span>
            </button>
          );
        })}
      </div>
      <span className="minimap__cap minimap__cap--bot">2012</span>
    </aside>
  );
}
