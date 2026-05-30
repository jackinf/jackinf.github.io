import { projects } from "../data/cv.ts";
import { Reveal } from "./Reveal.tsx";

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__num">02</span>
          <h2 className="section__title">Selected Projects</h2>
        </Reveal>

        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.name} as="article" className="project" delay={i * 60}>
              <h3 className="project__name">{p.name}</h3>
              <p className="project__desc">{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
