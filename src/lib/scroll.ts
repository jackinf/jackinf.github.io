/** Sticky-nav height offset used when smooth-scrolling to a role. */
export const NAV_OFFSET = 74;

/**
 * Smooth-scroll an element to just below the sticky nav. Deliberately uses
 * `window.scrollTo` (not `scrollIntoView`) so the −NAV_OFFSET adjustment is exact.
 */
export function scrollToEl(el: Element | null) {
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: y, behavior: "smooth" });
}

/** Smooth-scroll to an element by id (e.g. an `exp-<index>` experience card). */
export function scrollToId(id: string) {
  scrollToEl(document.getElementById(id));
}
