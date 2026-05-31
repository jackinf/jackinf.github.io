import { Reveal } from "./Reveal.tsx";
import { experience, type DomainId } from "../data/cv.ts";
import { highlightNumbers } from "../lib/highlight.tsx";

interface ExperienceProps {
  domain: DomainId;
}

export function Experience({ domain }: ExperienceProps) {
  const filtering = domain !== "all";

  return (
    <section className="section" id="experience">
      <div className="section__head">
        <Reveal as="h2" className="section__title">
          Experience
        </Reveal>
        <Reveal as="p" className="section__sub">
          The full, unredacted history — from ABB in 2012 to crypto payments today,
          across {experience.length} roles and eight industries.
        </Reveal>
      </div>
      <div className="exp">
        {experience.map((role, i) => {
          const matches = filtering && role.domains.includes(domain);
          const dimmed = filtering && !matches;
          return (
            <Reveal
              className={`exp__item${role.current ? " exp__item--current" : ""}${
                matches ? " exp__item--match" : ""
              }${dimmed ? " exp__item--dim" : ""}`}
              key={role.company}
              delay={i * 60}
            >
              <div className="exp__head">
                <div>
                  <h3 className="exp__company">
                    {role.company}
                    {role.companyNote && (
                      <span className="exp__note"> · {role.companyNote}</span>
                    )}
                    {role.current && <span className="exp__badge">Current</span>}
                  </h3>
                  <p className="exp__role">{role.role}</p>
                </div>
                <div className="exp__meta">
                  <span className="exp__period">{role.period}</span>
                  <span className="exp__location">{role.location}</span>
                </div>
              </div>
              <ul className="exp__highlights">
                {role.highlights.map((h) => (
                  <li key={h}>{highlightNumbers(h)}</li>
                ))}
              </ul>
              {role.stack && (
                <ul className="exp__stack">
                  {role.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
