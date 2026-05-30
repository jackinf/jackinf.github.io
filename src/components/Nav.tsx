import { useEffect, useState } from "react";
import type { Theme } from "../hooks/useTheme.ts";
import { ThemeToggle } from "./ThemeToggle.tsx";
import { DownloadIcon } from "./icons.tsx";

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Nav({ theme, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          jevgeni<span>.</span>rumjantsev
        </a>
        <nav className="nav__links">
          <a className="nav__link" href="#experience">Experience</a>
          <a className="nav__link" href="#projects">Projects</a>
          <a className="nav__link" href="#skills">Skills</a>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => window.print()}
          >
            <DownloadIcon />
            CV
          </button>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>
      </div>
    </header>
  );
}
