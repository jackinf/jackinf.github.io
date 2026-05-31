import { Reveal } from "./Reveal.tsx";
import { DomainSpinner } from "./DomainSpinner.tsx";
import { ExperienceCounter } from "./ExperienceCounter.tsx";
import { DownloadCV } from "./DownloadCV.tsx";
import { profile, domains, type DomainId } from "../data/cv.ts";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons.tsx";

interface HeroProps {
  domain: DomainId;
  onDomainChange: (id: DomainId) => void;
}

export function Hero({ domain, onDomainChange }: HeroProps) {
  const active = domains.find((d) => d.id === domain) ?? domains[0];
  const description = domain === "all" ? profile.summary : active.blurb;

  return (
    <header className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__inner">
          <Reveal as="p" className="hero__eyebrow">
            {profile.location}
          </Reveal>
          <Reveal as="h1" className="hero__name" delay={60}>
            {profile.name}
          </Reveal>
          <Reveal as="p" className="hero__title" delay={120}>
            {profile.title}
          </Reveal>
          <Reveal as="p" className="hero__tagline" delay={180}>
            {profile.tagline}
          </Reveal>

          <Reveal className="hero__lead" delay={220}>
            <p className="hero__summary" key={domain}>
              {description}
            </p>
          </Reveal>

          <Reveal className="hero__contact" delay={260}>
            <a className="hero__link" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
            <a className="hero__link" href={profile.githubUrl} target="_blank" rel="noreferrer">
              <GitHubIcon /> GitHub
            </a>
            <a className="hero__link" href={`mailto:${profile.email}`}>
              <MailIcon /> Email
            </a>
          </Reveal>
          <Reveal className="hero__cta" delay={300}>
            <DownloadCV />
            <a className="btn btn--ghost" href="#experience">
              View experience
            </a>
          </Reveal>
        </div>

        <Reveal className="hero__aside" delay={200}>
          <DomainSpinner value={domain} onChange={onDomainChange} />
        </Reveal>
      </div>

      <div className="hero__stats">
        <ExperienceCounter />
        <Reveal className="stat" delay={60}>
          <span className="stat__value">8</span>
          <span className="stat__label">Industries shipped in</span>
        </Reveal>
        <Reveal className="stat" delay={120}>
          <span className="stat__value">5+</span>
          <span className="stat__label">Production languages</span>
        </Reveal>
        <Reveal className="stat" delay={180}>
          <span className="stat__value">€100Ks+</span>
          <span className="stat__label">Conversion lifted in payments</span>
        </Reveal>
        <Reveal className="stat" delay={240}>
          <span className="stat__value">Node · Rust</span>
          <span className="stat__label">Daily drivers today</span>
        </Reveal>
        <Reveal className="stat" delay={300}>
          <span className="stat__value">AI-augmented</span>
          <span className="stat__label">Agent-assisted delivery</span>
        </Reveal>
      </div>
    </header>
  );
}
