import { useState } from "react";
import { Nav } from "./components/Nav.tsx";
import { Hero } from "./components/Hero.tsx";
import { Experience } from "./components/Experience.tsx";
import { LanguageTimeline } from "./components/LanguageTimeline.tsx";
import { Projects } from "./components/Projects.tsx";
import { Skills } from "./components/Skills.tsx";
import { Education } from "./components/Education.tsx";
import { Footer } from "./components/Footer.tsx";
import { AnimatedBackground } from "./components/AnimatedBackground.tsx";
import { ScrollMinimap } from "./components/ScrollMinimap.tsx";
import { useTheme } from "./hooks/useTheme.ts";
import type { DomainId } from "./data/cv.ts";

export function App() {
  const { theme, toggle } = useTheme();
  const [domain, setDomain] = useState<DomainId>("all");

  return (
    <>
      <AnimatedBackground />
      <Nav theme={theme} onToggleTheme={toggle} />
      <ScrollMinimap />
      <main>
        <Hero domain={domain} onDomainChange={setDomain} />
        <Experience domain={domain} />
        <LanguageTimeline />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
