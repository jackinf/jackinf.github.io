import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme.ts";
import { Reveal } from "../components/Reveal.tsx";
import { ThemeToggle } from "../components/ThemeToggle.tsx";
import { NumbersBackground } from "./NumbersBackground.tsx";
import { NumbersMinimap } from "./NumbersMinimap.tsx";
import { SectionArrows } from "./SectionArrows.tsx";
import { SectionPalette } from "./SectionPalette.tsx";
import { CARD_ICONS } from "./icons.tsx";
import { BigStatTile, CardBlock, CheatSheet, MiniStats, ReachPanel } from "./blocks.tsx";
import { cheatSheet, numbersMeta, reachRows, sections } from "../data/numbers.ts";
import type { CompanySection } from "../data/numbers.ts";

function Nav({ theme, onToggleTheme }: { theme: "light" | "dark"; onToggleTheme: () => void }) {
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
        <a href="../" className="nav__brand">
          jevgeni<span>.</span>rumjantsev<span>/</span>numbers
        </a>
        <nav className="nav__links">
          <a className="nav__link nav__game" href="../">
            Portfolio
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>
      </div>
    </header>
  );
}

function Section({ section }: { section: CompanySection }) {
  return (
    <section
      id={section.id}
      className="section nm-section"
      style={{ "--brand": section.brand } as CSSProperties}
    >
      <Reveal className="section__head">
        <span className="section__num">{section.num}</span>
        <h2 className="section__title">{section.company}</h2>
        <span className="nm-section__meta">{section.descriptor}</span>
        <p className="section__sub">{section.intro}</p>
      </Reveal>

      {section.big && (
        <div className="nm-big">
          {section.big.map((stat, i) => (
            <BigStatTile key={stat.label} stat={stat} delay={i * 70} />
          ))}
        </div>
      )}

      {section.mini && (
        <Reveal delay={120} className="nm-minirow">
          <MiniStats stats={section.mini} />
        </Reveal>
      )}

      <div className="nm-cards">
        {section.projects.map((p, i) => (
          <Reveal
            key={p.title}
            className={`nm-card${p.wide ? " nm-card--wide" : ""}`}
            delay={(i % 2) * 80}
            style={p.brand ? ({ "--brand": p.brand } as CSSProperties) : undefined}
          >
            <div className="nm-card__mesh" aria-hidden="true" />
            <div className="nm-card__head">
              {CARD_ICONS[p.icon] && (
                <div className="nm-card__icon" aria-hidden="true">
                  {CARD_ICONS[p.icon]}
                </div>
              )}
              <div className="nm-card__head-main">
                <h3 className="nm-card__title">{p.title}</h3>
                <p className="nm-card__tagline">{p.tagline}</p>
              </div>
            </div>
            <div className="nm-card__blocks">
              {p.blocks.map((b, j) => (
                <CardBlock key={j} block={b} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function NumbersApp() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <NumbersBackground />
      <Nav theme={theme} onToggleTheme={toggle} />
      <NumbersMinimap />
      <SectionArrows />
      <SectionPalette />
      <main id="top">
        <section className="nm-hero">
          <div className="container">
            <Reveal>
              <p className="hero__eyebrow">
                <span className="hero__dot" />
                {numbersMeta.eyebrow}
              </p>
              <h1 className="nm-hero__title">{numbersMeta.title}</h1>
            </Reveal>
            <Reveal delay={120}>
              <ReachPanel rows={reachRows} />
            </Reveal>
            <Reveal delay={200}>
              <CheatSheet groups={cheatSheet} />
            </Reveal>
          </div>
        </section>

        {sections.map((s) => (
          <Section key={s.id} section={s} />
        ))}
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__meta">
            © 2026 Jevgeni Rumjantsev · Built with Bun &amp; React
            <br />
            <a className="footer__game" href="../">
              Back to the portfolio
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
