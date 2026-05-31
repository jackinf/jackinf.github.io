import { useEffect, useRef, useState } from "react";
import { experience } from "../data/cv.ts";

interface Marker {
  company: string;
  year: string;
  /** 0–1 position along the rail (by DOM offset within the section). */
  pos: number;
}

/**
 * A fixed right-hand "minimap" that shows how far you've scrolled into the
 * history of the experience section, with a marker per role. Hidden on small
 * screens and under reduced-motion-insensitive layouts via CSS.
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
          company: role?.company ?? el.dataset.company ?? "",
          year: role ? `'${String(Math.floor(role.start)).slice(2)}` : "",
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
      setVisible(rect.top < vh * 0.6 && rect.bottom > vh * 0.4);
    };

    const onScroll = () => {
      if (!raf.current) raf.current = requestAnimationFrame(update);
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      measure();
      update();
    });
    // Re-measure shortly after mount once reveal animations settle.
    const t = setTimeout(measure, 600);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
      clearTimeout(t);
    };
  }, []);

  const goTo = (i: number) => {
    const items = document.querySelectorAll<HTMLElement>("#experience .exp__item");
    items[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  if (markers.length === 0) return null;

  return (
    <aside
      className={`minimap${visible ? " is-visible" : ""}`}
      aria-hidden="true"
    >
      <span className="minimap__cap minimap__cap--top">now</span>
      <div className="minimap__rail">
        <span
          className="minimap__fill"
          style={{ height: `${progress * 100}%` }}
        />
        <span className="minimap__thumb" style={{ top: `${progress * 100}%` }} />
        {markers.map((m, i) => {
          const reached = progress >= m.pos - 0.04;
          return (
            <button
              type="button"
              key={m.company}
              className={`minimap__node${reached ? " is-reached" : ""}`}
              style={{ top: `${m.pos * 100}%` }}
              onClick={() => goTo(i)}
              tabIndex={-1}
            >
              <span className="minimap__node-dot" />
              <span className="minimap__node-label">
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
