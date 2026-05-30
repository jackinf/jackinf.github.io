import { earlier, experience } from "../data/cv.ts";
import { Reveal } from "./Reveal.tsx";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__num">01</span>
          <h2 className="section__title">Experience</h2>
        </Reveal>

        <div className="timeline">
          {experience.map((role, i) => (
            <Reveal
              key={role.company}
              as="article"
              className={`role${role.current ? " role--current" : ""}`}
              delay={i * 60}
            >
              <div className="role__head">
                <h3 className="role__company">
                  {role.company}
                  {role.current && <span className="tag-current">Current</span>}
                </h3>
                <span className="role__period">{role.period}</span>
              </div>
              <div className="role__sub">
                <span className="role__role">{role.role}</span>
                {role.companyNote && <span>· {role.companyNote}</span>}
                <span>· {role.location}</span>
              </div>

              <ul className="role__list">
                {role.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              {role.stack && (
                <div className="tags">
                  {role.stack.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="earlier">
          {earlier.map((e) => (
            <div className="earlier__item" key={e.company}>
              <div className="earlier__top">
                <span className="earlier__company">{e.company}</span>
                <span className="earlier__period">{e.period}</span>
              </div>
              <div className="earlier__role">{e.role}</div>
              <p className="earlier__summary">{e.summary}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
