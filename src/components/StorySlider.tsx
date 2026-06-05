import type { CSSProperties } from "react";
import { useState } from "react";
import { framings } from "../data/cv.ts";

/**
 * The hero "story" progress slider: a row of segmented bars (one per framing)
 * that auto-fill like Instagram stories (~6s each, see `--story-dur` in CSS),
 * with the paragraph below swapping to the active framing's blurb.
 *
 * Auto-advance is driven by the active segment's CSS `animationend` event, so
 * hovering — which pauses the animation via `:hover` in CSS — also pauses the
 * advance for free, with no JS timers to keep in sync. Click a segment to jump.
 * Under `prefers-reduced-motion` the fill animation is disabled in CSS and the
 * slider becomes a static, click-to-switch control.
 */
export function StorySlider() {
  const [active, setActive] = useState(0);

  const advance = () => setActive((i) => (i + 1) % framings.length);

  return (
    <div className="story">
      <div className="story__bars">
        {framings.map((f, i) => (
          <button
            key={f.label}
            type="button"
            className={`story__seg${i === active ? " is-active" : ""}${
              i < active ? " is-done" : ""
            }`}
            style={{ "--seg-color": f.color } as CSSProperties}
            onClick={() => setActive(i)}
            aria-label={`Show ${f.label}`}
            aria-pressed={i === active}
          >
            <span className="story__track">
              {/* Keyed by `active` so the active segment remounts and the fill
                  animation restarts from 0 on every switch. */}
              <span
                key={i === active ? `a-${active}` : `s-${i}`}
                className="story__fill"
                onAnimationEnd={i === active ? advance : undefined}
              />
            </span>
            <span className="story__lab">{f.label}</span>
          </button>
        ))}
      </div>
      <p key={active} className="story__desc swap">
        {framings[active].blurb}
      </p>
    </div>
  );
}
