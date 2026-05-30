import { Nav } from "./components/Nav.tsx";
import { Hero } from "./components/Hero.tsx";
import { Experience } from "./components/Experience.tsx";
import { Projects } from "./components/Projects.tsx";
import { Skills } from "./components/Skills.tsx";
import { Education } from "./components/Education.tsx";
import { Footer } from "./components/Footer.tsx";
import { useTheme } from "./hooks/useTheme.ts";

export function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
