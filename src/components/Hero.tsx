import { profile, stats } from "../data/cv.ts";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "./icons.tsx";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero__eyebrow">
          <span className="hero__dot" aria-hidden="true" />
          Open to senior / staff payments &amp; backend roles
        </p>

        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">
          {profile.title} · <em>{profile.tagline}</em>
        </p>

        <p className="hero__summary">{profile.summary}</p>

        <div className="contacts">
          <span>
            <PinIcon /> {profile.location}
          </span>
          <a href={profile.phoneHref}>
            <PhoneIcon /> {profile.phone}
          </a>
          <a href={`mailto:${profile.email}`}>
            <MailIcon /> {profile.email}
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            <LinkedInIcon /> {profile.linkedin}
          </a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            <GitHubIcon /> {profile.github}
          </a>
        </div>

        <div className="hero__actions">
          <button type="button" className="btn btn--primary" onClick={() => window.print()}>
            <DownloadIcon /> Download CV
          </button>
          <a className="btn" href="#experience">View experience</a>
        </div>

        <dl className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <dt className="stat__value">{s.value}</dt>
              <dd className="stat__label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
