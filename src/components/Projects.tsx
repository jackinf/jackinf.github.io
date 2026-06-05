import type { ElementType } from "react";
import { Reveal } from "./Reveal.tsx";
import { projects } from "../data/cv.ts";

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section__head">
        <Reveal as="span" className="section__num">
          04 / Selected projects
        </Reveal>
        <Reveal as="h2" className="section__title">
          Selected projects
        </Reveal>
        <Reveal as="p" className="section__sub">
          Side projects, hackathons and games — where the curiosity goes.
        </Reveal>
      </div>

      <Reveal className="projects">
        {projects.map((p) => {
          const Tag = (p.url ? "a" : "article") as ElementType;
          return (
            <Tag
              className="project"
              key={p.name}
              {...(p.url ? { href: p.url } : {})}
            >
              <div className="project__top">
                <h3 className="project__name">{p.name}</h3>
                {p.year && <span className="project__year">{p.year}</span>}
              </div>
              <p className="project__desc">{p.description}</p>
              <div className="project__tags">
                {p.tags.map((t) => (
                  <span key={t} className="project__tag">
                    {t}
                  </span>
                ))}
              </div>
            </Tag>
          );
        })}
      </Reveal>
    </section>
  );
}
