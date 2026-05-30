import { education } from "../data/cv.ts";
import { Reveal } from "./Reveal.tsx";

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__num">04</span>
          <h2 className="section__title">Education</h2>
        </Reveal>

        <Reveal className="education">
          {education.map((e) => (
            <div className="edu" key={e.degree}>
              <span className="edu__degree">{e.degree}</span>
              <span className="edu__period">{e.period}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
