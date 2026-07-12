import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_OFFSET } from "../lib/scroll.ts";

export interface PaletteEntry {
  /** In-page section id to scroll to (instant). */
  id?: string;
  /** Alternative: navigate to another page (relative URL). */
  href?: string;
  num: string;
  label: string;
  meta: string;
  brand?: string;
}

/**
 * "/" opens a jump palette: ArrowUp/ArrowDown select an entry, Enter jumps
 * instantly and closes; Esc or "/" close without jumping. Key handling runs
 * in the capture phase so page-level arrow shortcuts stay quiet while open.
 * Styles live in global.css (.nm-pal) so every page can use it.
 */
export function JumpPalette({ entries }: { entries: PaletteEntry[] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const openRef = useRef(open);
  const activeRef = useRef(active);
  openRef.current = open;
  activeRef.current = active;

  /** Entry whose section the viewport is currently in (last one scrolled past). */
  const currentIndex = useCallback(() => {
    const y = window.scrollY + NAV_OFFSET + 8;
    let idx = 0;
    entries.forEach((en, i) => {
      if (!en.id) return;
      const el = document.getElementById(en.id);
      if (el && el.offsetTop <= y) idx = i;
    });
    return idx;
  }, [entries]);

  const jump = useCallback(
    (idx: number) => {
      const entry = entries[idx];
      if (entry.href) {
        window.location.href = entry.href;
        return;
      }
      const el = entry.id ? document.getElementById(entry.id) : null;
      if (el) window.scrollTo({ top: Math.max(0, el.offsetTop - NAV_OFFSET) });
      setOpen(false);
    },
    [entries],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing =
        t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
      if (!openRef.current) {
        if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
          e.preventDefault();
          setActive(currentIndex());
          setOpen(true);
        }
        return;
      }
      if (e.key === "Escape" || e.key === "/") {
        e.preventDefault();
        e.stopPropagation();
        setOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        e.stopPropagation();
        setActive((a) => (a + 1) % entries.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        e.stopPropagation();
        setActive((a) => (a - 1 + entries.length) % entries.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        jump(activeRef.current);
      }
    };
    window.addEventListener("keydown", onKey, { capture: true });
    return () => window.removeEventListener("keydown", onKey, { capture: true });
  }, [entries.length, jump, currentIndex]);

  if (!open) return null;

  return (
    <div
      className="nm-pal"
      role="dialog"
      aria-modal="true"
      aria-label="Jump to section"
      onClick={() => setOpen(false)}
    >
      <div className="nm-pal__box" onClick={(e) => e.stopPropagation()}>
        <div className="nm-pal__title">Jump to</div>
        <ul className="nm-pal__list">
          {entries.map((en, i) => (
            <li key={en.href ?? en.id}>
              <button
                type="button"
                className={`nm-pal__item${i === active ? " is-active" : ""}`}
                style={en.brand ? ({ "--brand": en.brand } as CSSProperties) : undefined}
                onMouseEnter={() => setActive(i)}
                onClick={() => jump(i)}
              >
                <span className="nm-pal__dot" />
                <span className="nm-pal__num">{en.num}</span>
                <span className="nm-pal__label">{en.label}</span>
                <span className="nm-pal__meta">{en.meta}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="nm-pal__hint">↑↓ navigate · ↵ go · esc or / closes</div>
      </div>
    </div>
  );
}
