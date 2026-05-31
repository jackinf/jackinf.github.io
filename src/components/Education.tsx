import { Reveal } from "./Reveal.tsx";
import { education, certifications, humanLanguages } from "../data/cv.ts";

export function Education() {
  return (
    <section className="section section--tight" id="education">
      <div className="section__head">
        <Reveal as="h2" className="section__title">
          Education &amp; certifications
        </Reveal>
      </div>

      <div className="edu">
        {education.map((e, i) => (
          <Reveal className="edu__item" key={e.degree} delay={i * 60}>
            <h3 className="edu__degree">{e.degree}</h3>
            <span className="edu__school">{e.school}</span>
            <span className="edu__period">
              {e.period}
              {e.note ? ` · ${e.note}` : ""}
            </span>
          </Reveal>
        ))}
      </div>

      <div className="creds">
        <Reveal className="creds__col">
          <h3 className="creds__title">Certifications</h3>
          <ul className="creds__list">
            {certifications.map((c) => (
              <li key={c.name} className="cert">
                <span className="cert__name">{c.name}</span>
                <span className="cert__issuer">
                  {c.issuer}
                  {c.year ? ` · ${c.year}` : ""}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="creds__col" delay={80}>
          <h3 className="creds__title">Spoken languages</h3>
          <ul className="creds__list creds__list--langs">
            {humanLanguages.map((l) => (
              <li key={l.language} className="hlang">
                <div className="hlang__top">
                  <span className="hlang__name">{l.language}</span>
                  <span className="hlang__level">{l.level}</span>
                </div>
                <div className="hlang__bar">
                  <span
                    className="hlang__fill"
                    style={{ width: `${l.proficiency}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
