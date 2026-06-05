import type { CSSProperties } from "react";
import { Reveal } from "./Reveal.tsx";
import { experience } from "../data/cv.ts";
import { highlightNumbers } from "../lib/highlight.tsx";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section__head">
        <Reveal as="span" className="section__num">
          01 / Experience
        </Reveal>
        <Reveal as="h2" className="section__title">
          A decade across eight industries
        </Reveal>
        <Reveal as="p" className="section__sub">
          From government portals and logistics to travel payments, sports data,
          SaaS, secure content and crypto — the full track record, in detail.
        </Reveal>
      </div>

      <div className="exp">
        {experience.map((role, i) => {
          // "Software Engineer · Payments" → bold lead + muted "· Payments".
          const [lead, ...rest] = role.role.split("·");
          return (
            <Reveal
              as="article"
              key={role.company}
              id={`exp-${i}`}
              className="exp__item"
              delay={i * 50}
              style={{ "--brand": role.brand } as CSSProperties}
            >
              <span className="exp__mesh" aria-hidden="true" />
              <div className="exp__head">
                <div
                  className="exp__badge"
                  style={{ background: role.brand }}
                  aria-hidden="true"
                >
                  {role.initials ?? role.company.charAt(0)}
                </div>
                <div className="exp__hd-main">
                  <div className="exp__top">
                    <div className="exp__id">
                      <div className="exp__company">
                        {role.company}
                        {role.current && (
                          <span className="exp__tag-current">Current</span>
                        )}
                      </div>
                      <div className="exp__role">
                        {lead.trim()}
                        {rest.length > 0 && <span> · {rest.join("·").trim()}</span>}
                      </div>
                    </div>
                    <div className="exp__meta">
                      <span className="exp__period">{role.period}</span>
                      <span className="exp__loc">{role.location}</span>
                    </div>
                  </div>
                  <div className="exp__note">{role.note}</div>
                </div>
              </div>

              <ul className="exp__list">
                {role.highlights.map((h) => (
                  <li key={h}>{highlightNumbers(h)}</li>
                ))}
              </ul>

              {role.stack && (
                <div className="exp__stack">
                  {role.stack.map((t) => (
                    <span key={t} className="exp__chip">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
