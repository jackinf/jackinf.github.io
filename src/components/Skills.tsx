import { Reveal } from "./Reveal.tsx";
import { skills } from "../data/cv.ts";

export function Skills() {
  return (
    <section className="section section--tight" id="skills">
      <div className="section__head">
        <Reveal as="h2" className="section__title">
          Technical skills
        </Reveal>
        <Reveal as="p" className="section__sub">
          A decade of accumulated tooling, grouped by what it's for.
        </Reveal>
      </div>
      <div className="skills">
        {skills.map((group, i) => (
          <Reveal className="skill" key={group.label} delay={i * 50}>
            <h3 className="skill__label">
              <span className="skill__index">{String(i + 1).padStart(2, "0")}</span>
              {group.label}
            </h3>
            <ul className="skill__items">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
