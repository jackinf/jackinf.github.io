import { Reveal } from "./Reveal.tsx";
import { languageTracks, TIMELINE_FROM, TIMELINE_TO } from "../data/cv.ts";

const SPAN = TIMELINE_TO - TIMELINE_FROM;
const pct = (year: number) => ((year - TIMELINE_FROM) / SPAN) * 100;

/** Year gridlines, every 2 years to stay readable. */
const ticks: number[] = [];
for (let y = TIMELINE_FROM; y <= TIMELINE_TO; y += 2) ticks.push(y);

export function LanguageTimeline() {
  return (
    <section className="section" id="languages">
      <div className="section__head">
        <Reveal as="span" className="section__num">
          03 / Languages over time
        </Reveal>
        <Reveal as="h2" className="section__title">
          Languages over time
        </Reveal>
        <Reveal as="p" className="section__sub">
          Which programming languages I was reaching for, and when — {TIMELINE_FROM}{" "}
          to {TIMELINE_TO}.
        </Reveal>
      </div>

      <Reveal className="lang">
        <div className="lang__axis" aria-hidden="true">
          {ticks.map((y) => (
            <span key={y} className="lang__tick" style={{ left: `${pct(y)}%` }}>
              {`'${String(y).slice(2)}`}
            </span>
          ))}
        </div>
        <div className="lang__rows">
          {languageTracks.map((track) => (
            <div className="lang__row" key={track.name}>
              <div className="lang__name">{track.name}</div>
              <div className="lang__track">
                {track.spans.map((sp, i) => (
                  <span
                    key={i}
                    className="lang__bar"
                    title={`${track.name}${track.note ? ` — ${track.note}` : ""}`}
                    style={{
                      left: `${pct(sp.from)}%`,
                      width: `${Math.max(1.2, pct(sp.to) - pct(sp.from))}%`,
                      background: track.color,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
