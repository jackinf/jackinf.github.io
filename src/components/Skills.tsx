import { Reveal } from "./Reveal.tsx";
import { skills } from "../data/cv.ts";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section__head">
        <Reveal as="span" className="section__num">
          05 / Technical skills
        </Reveal>
        <Reveal as="h2" className="section__title">
          Technical skills
        </Reveal>
        <Reveal as="p" className="section__sub">
          A decade of accumulated tooling, grouped by what it's for.
        </Reveal>
      </div>

      <Reveal className="skills">
        {skills.map((group, i) => (
          <div className="skillgroup" key={group.label}>
            <div className="skillgroup__head">
              <span className="skillgroup__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="skillgroup__label">{group.label}</span>
            </div>
            <div className="skillgroup__items">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
