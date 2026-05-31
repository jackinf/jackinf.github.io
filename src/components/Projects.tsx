import { Reveal } from "./Reveal.tsx";
import { projects } from "../data/cv.ts";

export function Projects() {
  return (
    <section className="section section--tight" id="projects">
      <div className="section__head">
        <Reveal as="h2" className="section__title">
          Selected projects
        </Reveal>
        <Reveal as="p" className="section__sub">
          Side projects, hackathons and games — where the curiosity goes.
        </Reveal>
      </div>
      <div className="projects">
        {projects.map((p, i) => {
          const Tag = p.url ? "a" : "div";
          return (
            <Reveal className="project" key={p.name} delay={i * 60}>
              <Tag
                className="project__inner"
                {...(p.url ? { href: p.url, target: "_blank", rel: "noreferrer" } : {})}
              >
                <div className="project__head">
                  <h3 className="project__name">{p.name}</h3>
                  {p.year && <span className="project__year">{p.year}</span>}
                </div>
                <p className="project__desc">{p.description}</p>
                <ul className="project__tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </Tag>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
