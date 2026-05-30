import { profile } from "../data/cv.ts";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons.tsx";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__meta">
          © 2026 {profile.name} · Built with Bun &amp; React
          <br />
          <a className="footer__game" href="/game/">
            Try the 8-bit résumé version
            <ArrowIcon className="icon arrow" />
          </a>
        </div>
        <div className="footer__links">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon />
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
