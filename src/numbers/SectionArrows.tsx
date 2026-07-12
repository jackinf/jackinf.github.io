import { useCallback, useEffect } from "react";
import { sections } from "../data/numbers.ts";
import { NAV_OFFSET, scrollToId } from "../lib/scroll.ts";

/**
 * Up/down section navigation: fixed chevron buttons (bottom right) plus
 * ArrowUp/ArrowDown keyboard shortcuts. Steps through the hero (#top) and
 * every company section in order.
 */
export function SectionArrows() {
  const go = useCallback((dir: 1 | -1) => {
    const ids = ["top", ...sections.map((s) => s.id)];
    const targets = ids
      .map((id) => {
        const el = document.getElementById(id);
        return el ? { id, y: Math.max(0, el.offsetTop - NAV_OFFSET) } : null;
      })
      .filter((t): t is { id: string; y: number } => t !== null)
      .sort((a, b) => a.y - b.y);
    const y = window.scrollY;
    const target =
      dir === 1
        ? targets.find((t) => t.y > y + 8)
        : [...targets].reverse().find((t) => t.y < y - 8);
    if (target) scrollToId(target.id);
    else if (dir === -1) window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <div className="nm-arrows">
      <button
        type="button"
        className="btn btn--icon nm-arrows__btn"
        aria-label="Previous section (Arrow Up)"
        title="Previous section (↑)"
        onClick={() => go(-1)}
      >
        <svg viewBox="0 0 24 24" className="icon" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 14l6-6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        className="btn btn--icon nm-arrows__btn"
        aria-label="Next section (Arrow Down)"
        title="Next section (↓)"
        onClick={() => go(1)}
      >
        <svg viewBox="0 0 24 24" className="icon" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 10l6 6 6-6" />
        </svg>
      </button>
    </div>
  );
}
