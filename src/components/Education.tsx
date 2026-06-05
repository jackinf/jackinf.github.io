import { Reveal } from "./Reveal.tsx";
import { education, certifications, humanLanguages } from "../data/cv.ts";

export function Education() {
  return (
    <section className="section" id="education">
      <div className="section__head">
        <Reveal as="span" className="section__num">
          06 / Education &amp; certifications
        </Reveal>
        <Reveal as="h2" className="section__title">
          Education &amp; certifications
        </Reveal>
      </div>

      <Reveal className="edu">
        <div className="edu__degrees">
          {education.map((e) => (
            <div className="degree" key={e.degree}>
              <div className="degree__name">{e.degree}</div>
              <div className="degree__school">{e.school}</div>
              <div className="degree__period">
                {e.period}
                {e.note ? ` · ${e.note}` : ""}
              </div>
            </div>
          ))}
        </div>

        <div className="edu__cols">
          <div className="edu__col">
            <div className="edu__label">Certifications</div>
            <div className="certs">
              {certifications.map((c) => (
                <div className="cert" key={c.name}>
                  <div className="cert__name">{c.name}</div>
                  <div className="cert__issuer">
                    {c.issuer}
                    {c.year ? ` · ${c.year}` : ""}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="edu__col">
            <div className="edu__label">Spoken languages</div>
            <div className="spoken">
              {humanLanguages.map((l) => (
                <div className="spoken__row" key={l.language}>
                  <div className="spoken__top">
                    <span className="spoken__lang">{l.language}</span>
                    <span className="spoken__level">{l.level}</span>
                  </div>
                  <div className="spoken__meter">
                    <span
                      className="spoken__fill"
                      style={{ width: `${l.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
