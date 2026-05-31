import { Reveal } from "./Reveal.tsx";
import {
  languageTracks,
  TIMELINE_FROM,
  TIMELINE_TO,
} from "../data/cv.ts";

const SPAN = TIMELINE_TO - TIMELINE_FROM;
const pct = (year: number) => ((year - TIMELINE_FROM) / SPAN) * 100;

/** Year gridlines, every 2 years to stay readable. */
const ticks: number[] = [];
for (let y = TIMELINE_FROM; y <= TIMELINE_TO; y += 2) ticks.push(y);

export function LanguageTimeline() {
  return (
    <section className="section section--tight" id="languages">
      <div className="section__head">
        <Reveal as="h2" className="section__title">
          Languages over time
        </Reveal>
        <Reveal as="p" className="section__sub">
          Which programming languages I was reaching for, and when —{" "}
          {TIMELINE_FROM} to {TIMELINE_TO}.
        </Reveal>
      </div>

      <Reveal className="lang">
        <div className="lang__axis" aria-hidden="true">
          <span className="lang__axis-spacer" />
          <div className="lang__axis-years">
            {ticks.map((y) => (
              <span key={y} className="lang__year" style={{ left: `${pct(y)}%` }}>
                {`'${String(y).slice(2)}`}
              </span>
            ))}
          </div>
        </div>

        <ul className="lang__rows">
          {languageTracks.map((track) => (
            <li className="lang__row" key={track.name}>
              <span className="lang__name">{track.name}</span>
              <div className="lang__track">
                {ticks.map((y) => (
                  <span
                    key={y}
                    className="lang__grid"
                    style={{ left: `${pct(y)}%` }}
                    aria-hidden="true"
                  />
                ))}
                {track.spans.map((sp, i) => (
                  <span
                    key={i}
                    className="lang__bar"
                    title={`${track.name}${track.note ? ` — ${track.note}` : ""}`}
                    style={{
                      left: `${pct(sp.from)}%`,
                      width: `${pct(sp.to) - pct(sp.from)}%`,
                      background: track.color,
                    }}
                  >
                    <span className="lang__bar-sheen" aria-hidden="true" />
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
