import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { experience } from "../data/cv.ts";
import { scrollToId } from "../lib/scroll.ts";

interface Marker {
  company: string;
  year: string;
  brand?: string;
  /** 0–1 position along the rail (by DOM offset within the section). */
  pos: number;
}

/**
 * A fixed right-hand "minimap" of the experience section: a rail with a node
 * per role that lights up in the company's brand colour as you reach it, a
 * fill + thumb tracking scroll progress, and click-to-scroll. Visible only
 * while the Experience section is on screen; hidden ≤1000px via CSS.
 */
export function ScrollMinimap() {
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    const section = document.getElementById("experience");
    if (!section) return;

    const measure = () => {
      const items = Array.from(
        section.querySelectorAll<HTMLElement>(".exp__item"),
      );
      const secTop = section.offsetTop;
      const secH = section.offsetHeight || 1;
      const next: Marker[] = items.map((el, i) => {
        const center = el.offsetTop - secTop + el.offsetHeight / 2;
        const role = experience[i];
        return {
          company: role?.company ?? "",
          year: role ? `'${String(Math.floor(role.start)).slice(2)}` : "",
          brand: role?.brand,
          pos: Math.min(1, Math.max(0, center / secH)),
        };
      });
      setMarkers(next);
    };

    const update = () => {
      raf.current = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const mid = vh / 2;
      const p = (mid - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, p)));
      setVisible(rect.top < vh * 0.55 && rect.bottom > vh * 0.45);
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
    <aside className={`minimap${visible ? " is-visible" : ""}`}>
      <span className="minimap__cap minimap__cap--top">now</span>
      <div className="minimap__rail">
        <span className="minimap__fill" style={{ height: `${progress * 100}%` }} />
        <span className="minimap__thumb" style={{ top: `${progress * 100}%` }} />
        {markers.map((m, i) => {
          const reached = progress >= m.pos - 0.04;
          return (
            <button
              type="button"
              key={m.company}
              className={`minimap__node${reached ? " is-reached" : ""}`}
              style={{ top: `${m.pos * 100}%`, "--brand": m.brand } as CSSProperties}
              onClick={() => scrollToId(`exp-${i}`)}
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
