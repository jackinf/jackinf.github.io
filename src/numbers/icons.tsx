import type { ReactNode } from "react";

/**
 * Stroke glyphs for the story cards (numbers page). Each shape carries
 * pathLength={1} so numbers.css can run a draw-in animation on reveal
 * (stroke-dashoffset 1 → 0) tinted with the section's --brand-ink.
 */
function glyph(children: ReactNode) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const p = (d: string) => <path key={d} d={d} pathLength={1} />;

export const CARD_ICONS: Record<string, ReactNode> = {
  /* Kraken */
  "shield-check": glyph([
    p("M12 3l7 3v5c0 4.6-2.9 8.1-7 10-4.1-1.9-7-5.4-7-10V6l7-3z"),
    p("M9 12l2 2 4-4"),
  ]),
  bolt: glyph([p("M13 2L5 13h6l-1 9 8-11h-6l1-9z")]),
  "user-check": glyph([
    p("M9 4.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"),
    p("M3.5 19.5c.9-3.2 3-4.8 5.5-4.8s4.6 1.6 5.5 4.8"),
    p("M14.5 9.5l2 2 4.5-4.5"),
  ]),
  bell: glyph([
    p("M12 4a5 5 0 0 1 5 5v3.2l1.8 3.1H5.2L7 12.2V9a5 5 0 0 1 5-5z"),
    p("M10 18.8a2 2 0 0 0 4 0"),
  ]),
  sparkles: glyph([
    p("M11 4l1.6 4.4L17 10l-4.4 1.6L11 16l-1.6-4.4L5 10l4.4-1.6L11 4z"),
    p("M18.5 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1z"),
  ]),

  /* Box */
  documents: glyph([
    p("M8 6V4.8c0-.4.4-.8.8-.8H18l2 2v10.2c0 .4-.4.8-.8.8H18"),
    p("M4 6.8c0-.4.4-.8.8-.8H14l2 2v11.2c0 .4-.4.8-.8.8H4.8c-.4 0-.8-.4-.8-.8V6.8z"),
    p("M7 12h6M7 15h4"),
  ]),
  signature: glyph([
    p("M4 16.5c2.2-6.5 3.8-6.8 4.5-2.5.5 3.2 1.6 3.3 3.2-.6 1.3-3.2 2.6-3 3.3.4.4 1.9 1.4 2.2 3 .7"),
    p("M4 20h16"),
  ]),
  stopwatch: glyph([
    p("M12 7.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z"),
    p("M12 14v-3.5"),
    p("M9.5 3h5M12 3v2.5"),
  ]),
  rocket: glyph([
    p("M12 2.5c2.6 1.6 4 4.6 4 8.1l2.8 3.7-3.6.4-3.2 4.3-3.2-4.3-3.6-.4L8 10.6c0-3.5 1.4-6.5 4-8.1z"),
    p("M12 8.2a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"),
    p("M9.5 19.5L8 22M14.5 19.5L16 22"),
  ]),

  /* TimeChimp */
  clock: glyph([
    p("M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"),
    p("M12 7.5V12l3 2"),
  ]),
  grid: glyph([
    p("M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"),
  ]),

  /* Travix */
  lock: glyph([
    p("M6 11h12v8.2c0 .4-.4.8-.8.8H6.8c-.4 0-.8-.4-.8-.8V11z"),
    p("M9 11V8a3 3 0 0 1 6 0v3"),
    p("M12 14.2v2"),
  ]),
  "eye-off": glyph([
    p("M4 12s3-5.5 8-5.5c1.6 0 3 .5 4.2 1.2"),
    p("M20 12s-3 5.5-8 5.5c-1.6 0-3-.5-4.2-1.2"),
    p("M5.5 18.5l13-13"),
  ]),
  wallet: glyph([
    p("M4 8.5c0-1.4 1.1-2.5 2.5-2.5H17l1.5 2.5"),
    p("M4 8.5h15.2c.4 0 .8.4.8.8v9c0 .4-.4.8-.8.8H4.8c-.4 0-.8-.4-.8-.8v-9.8z"),
    p("M15.5 13.5h2"),
  ]),
  card: glyph([
    p("M3 7.8c0-.4.4-.8.8-.8h16.4c.4 0 .8.4.8.8v10.4c0 .4-.4.8-.8.8H3.8c-.4 0-.8-.4-.8-.8V7.8z"),
    p("M3 11h18"),
    p("M7 15.5h4"),
  ]),
  gauge: glyph([
    p("M5 17a8 8 0 1 1 14 0"),
    p("M12 17l3.5-5"),
    p("M12 17h.01"),
  ]),

  /* Genius Sports */
  activity: glyph([p("M3 13.5h4l2.5-7 4.5 12 2.5-7H21")]),

  /* Finestmedia */
  flask: glyph([
    p("M9.5 3h5"),
    p("M10.5 3v5.2L5.6 17a2.4 2.4 0 0 0 2.2 3.5h8.4a2.4 2.4 0 0 0 2.2-3.5l-4.9-8.8V3"),
    p("M7.5 14.5h9"),
  ]),
  doc: glyph([
    p("M7 3.8c0-.4.4-.8.8-.8H14l4 4v13.2c0 .4-.4.8-.8.8H7.8c-.4 0-.8-.4-.8-.8V3.8z"),
    p("M14 3v4h4"),
    p("M10 12.5h5M10 15.5h5"),
  ]),

  /* Earlier */
  package: glyph([
    p("M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"),
    p("M4 7.5l8 4.5 8-4.5"),
    p("M12 12v9"),
  ]),
  chart: glyph([
    p("M3 20h18"),
    p("M6 20v-6M11 20V7M16 20v-9M20.5 20V11"),
  ]),
};
