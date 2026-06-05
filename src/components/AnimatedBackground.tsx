import { useEffect, useRef } from "react";

/** Per-section palette (two hues) + 4 blob layouts {x, y, size} in viewport %. */
interface Scene {
  c: [string, string];
  layout: [number, number, number][];
}

const SCENES: Record<string, Scene> = {
  top: { c: ["#c4622d", "#f7931a"], layout: [[6, 8, 34], [82, 70, 28], [70, 22, 18], [18, 78, 16]] },
  experience: { c: ["#2d7dd2", "#0ea5e9"], layout: [[78, 6, 30], [10, 40, 26], [60, 82, 20], [88, 56, 16]] },
  capabilities: { c: ["#0891b2", "#2563eb"], layout: [[12, 12, 30], [70, 30, 24], [40, 80, 22], [86, 84, 16]] },
  languages: { c: ["#0d9488", "#16a34a"], layout: [[8, 70, 30], [80, 14, 26], [50, 40, 20], [30, 92, 16]] },
  projects: { c: ["#db2777", "#7c3aed"], layout: [[84, 24, 32], [14, 24, 24], [60, 78, 22], [40, 50, 16]] },
  skills: { c: ["#2563eb", "#0891b2"], layout: [[10, 18, 28], [78, 64, 28], [46, 88, 20], [88, 20, 16]] },
  education: { c: ["#b45309", "#d97706"], layout: [[16, 14, 30], [76, 36, 26], [30, 76, 22], [64, 90, 16]] },
};

const SECTION_IDS = Object.keys(SCENES);

/**
 * Fixed full-viewport backdrop: a dot pattern + 4 blurred, drifting blobs.
 * An IntersectionObserver watches a centre band of the viewport and, per active
 * section, recolours the pattern (`--c1/--c2`) and moves/recolours the blobs.
 * Each blob keeps its own slow `blobFloat` drift (CSS).
 */
export function AnimatedBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const applyScene = (id: string) => {
      const s = SCENES[id];
      if (!s) return;
      bg.style.setProperty("--c1", s.c[0]);
      bg.style.setProperty("--c2", s.c[1]);
      blobRefs.current.forEach((b, i) => {
        if (!b) return;
        const [x, y, size] = s.layout[i % s.layout.length];
        b.style.left = `${x}%`;
        b.style.top = `${y}%`;
        b.style.width = `${size}vw`;
        b.style.height = `${size}vw`;
        b.style.background = i % 2 ? s.c[1] : s.c[0];
      });
    };

    applyScene("top");

    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    let current = "top";
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting && en.target.id !== current) {
            current = en.target.id;
            applyScene(current);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="bg" ref={bgRef} aria-hidden="true">
      <div className="bg__pattern" />
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="bg__blob"
          data-blob={i}
          ref={(el) => {
            blobRefs.current[i] = el;
          }}
        />
      ))}
    </div>
  );
}
