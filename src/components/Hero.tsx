import type { CSSProperties } from "react";
import { Reveal } from "./Reveal.tsx";
import { StorySlider } from "./StorySlider.tsx";
import { DownloadCV } from "./DownloadCV.tsx";
import { ExperienceCounter } from "./ExperienceCounter.tsx";
import { profile, experience, keyTech } from "../data/cv.ts";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon } from "./icons.tsx";
import { scrollToId } from "../lib/scroll.ts";

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__grid">
        {/* LEFT: identity + story slider */}
        <Reveal className="hero__inner">
          <div className="ribbon">
            <span>Open to work</span>
          </div>

          <p className="hero__eyebrow">
            <span className="hero__dot" /> {profile.location}
          </p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__tagline">{profile.tagline}</p>

          <StorySlider />

          <div className="hero__contact">
            <a
              className="hero__link"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              className="hero__link"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon /> GitHub
            </a>
            <a className="hero__link" href={`mailto:${profile.email}`}>
              <MailIcon /> Email
            </a>
          </div>

          <div className="hero__cta">
            <DownloadCV />
            <a className="btn btn--ghost" href="#experience">
              View experience
            </a>
          </div>
        </Reveal>

        {/* RIGHT: full company list, compressed + clickable */}
        <Reveal as="aside" className="career" delay={120}>
          <div className="career__list">
            {experience.map((r, i) => {
              const go = () => scrollToId(`exp-${i}`);
              return (
                <div
                  key={r.company}
                  className="career__row"
                  style={{ "--brand": r.brand } as CSSProperties}
                  role="button"
                  tabIndex={0}
                  title={`Jump to ${r.company}`}
                  onClick={go}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      go();
                    }
                  }}
                >
                  <div
                    className="career__badge"
                    style={{ background: r.brand }}
                    aria-hidden="true"
                  >
                    {r.initials ?? r.company.charAt(0)}
                  </div>
                  <div className="career__main">
                    <div className="career__name">
                      {r.company}
                      {r.current && <span className="career__cur">NOW</span>}
                    </div>
                    <div className="career__role">{r.role}</div>
                  </div>
                  <div className="career__period">{r.short}</div>
                  <ArrowIcon className="career__go icon" />
                </div>
              );
            })}
          </div>
          <div className="career__tech">
            <div className="career__tech-label">Key tech</div>
            <div className="tech">
              {keyTech.map((t) => (
                <span key={t} className="tech__chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="hero__stats">
        <ExperienceCounter />
        <div className="stat">
          <span className="stat__value">8</span>
          <span className="stat__label">Companies &amp; industries</span>
        </div>
        <div className="stat">
          <span className="stat__value">5+</span>
          <span className="stat__label">Production languages</span>
        </div>
        <div className="stat">
          <span className="stat__value">Node · Rust</span>
          <span className="stat__label">Daily drivers today</span>
        </div>
        <div className="stat">
          <span className="stat__value">AI-augmented</span>
          <span className="stat__label">Agent-assisted delivery</span>
        </div>
      </Reveal>
    </header>
  );
}
