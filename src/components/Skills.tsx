import { skills } from "../data/cv.ts";
import { Reveal } from "./Reveal.tsx";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__num">03</span>
          <h2 className="section__title">Technical Skills</h2>
        </Reveal>

        <div className="skills">
          {skills.map((group, i) => (
            <Reveal key={group.label} className="skillgroup" delay={i * 50}>
              <h3 className="skillgroup__label">{group.label}</h3>
              <div className="skillgroup__items">
                {group.items.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
