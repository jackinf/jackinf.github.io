import { Fragment, type ReactNode } from "react";

/**
 * Matches the "interesting" numeric tokens we want to visually emphasise:
 * percentages (~10%), multipliers (3x), ratios (~50/50), the phrase
 * "hundreds of thousands", and standalone numbers / years — while avoiding
 * digits that live inside words or product names (HTML5, Auth0, 3-D Secure).
 */
const TOKEN =
  /(~?\d+(?:[.,]\d+)?%|\b\d+x\b|~?\d+\/\d+|hundreds of thousands|(?<![\w.-])\d+(?:[.,]\d+)?(?![\w.%x-]))/gi;

/** Wraps numbers & achievements in <strong class="num"> for highlighting. */
export function highlightNumbers(text: string): ReactNode {
  const parts = text.split(TOKEN);
  return parts.map((part, i) =>
    // Odd indices are the captured matches.
    i % 2 === 1 ? (
      <strong className="num" key={i}>
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
