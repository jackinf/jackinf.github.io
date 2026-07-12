import { Nav } from "./components/Nav.tsx";
import { Hero } from "./components/Hero.tsx";
import { Experience } from "./components/Experience.tsx";
import { Capabilities } from "./components/Capabilities.tsx";
import { LanguageTimeline } from "./components/LanguageTimeline.tsx";
import { Projects } from "./components/Projects.tsx";
import { Skills } from "./components/Skills.tsx";
import { Education } from "./components/Education.tsx";
import { Footer } from "./components/Footer.tsx";
import { AnimatedBackground } from "./components/AnimatedBackground.tsx";
import { ScrollMinimap } from "./components/ScrollMinimap.tsx";
import { JumpPalette } from "./components/JumpPalette.tsx";
import type { PaletteEntry } from "./components/JumpPalette.tsx";
import { useTheme } from "./hooks/useTheme.ts";

/** "/" palette entries: page sections (brand hues match the backdrop scenes)
 *  plus the two sibling pages. */
const PALETTE_ENTRIES: PaletteEntry[] = [
  { id: "top", num: "00", label: "Top", meta: "hero + career" },
  { id: "experience", num: "01", label: "Experience", meta: "roles & highlights", brand: "#2d7dd2" },
  { id: "capabilities", num: "02", label: "What I do", meta: "capabilities", brand: "#0891b2" },
  { id: "languages", num: "03", label: "Languages", meta: "usage over time", brand: "#0d9488" },
  { id: "projects", num: "04", label: "Projects", meta: "selected work", brand: "#db2777" },
  { id: "skills", num: "05", label: "Skills", meta: "stack", brand: "#2563eb" },
  { id: "education", num: "06", label: "Education", meta: "degrees & certs", brand: "#b45309" },
  { href: "game/", num: "▶", label: "Game", meta: "8-bit résumé", brand: "#f7931a" },
  { href: "numbers/", num: "№", label: "Numbers", meta: "engineering by the numbers", brand: "#16a34a" },
];

export function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <AnimatedBackground />
      <Nav theme={theme} onToggleTheme={toggle} />
      <ScrollMinimap />
      <JumpPalette entries={PALETTE_ENTRIES} />
      <main>
        <Hero />
        <Experience />
        <Capabilities />
        <LanguageTimeline />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
