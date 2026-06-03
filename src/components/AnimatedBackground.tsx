import { useActiveSection } from "../hooks/useActiveSection.ts";

const SECTIONS = [
  "top",
  "experience",
  "languages",
  "projects",
  "skills",
  "education",
];

/**
 * Fixed, section-aware background that shifts colour + pattern as you move
 * between panels. Pure CSS transitions — see global.css `.bg[data-section]`.
 */
export function AnimatedBackground() {
  const active = useActiveSection(SECTIONS, "top");
  return (
    <div className="bg" data-section={active} aria-hidden="true">
      <span className="bg__layer bg__layer--gradient" />
      <span className="bg__layer bg__layer--pattern" />
      <span className="bg__layer bg__layer--blob bg__layer--blob-a" />
      <span className="bg__layer bg__layer--blob bg__layer--blob-b" />
      <span className="bg__layer bg__layer--blob bg__layer--blob-c" />
      <span className="bg__layer bg__layer--blob bg__layer--blob-d" />
    </div>
  );
}
