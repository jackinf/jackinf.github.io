/**
 * Adapts the single source of truth (src/data/cv.ts) into "districts" for the
 * 3D town. No copy is hardcoded here beyond structural labels.
 */
import { experience, projects, profile } from "../data/cv";

export interface DistrictDef {
  /** Stable id, also used for custom asset lookups (landmark-<id>.glb, vo-<id>.mp3). */
  id: string;
  kind: "role" | "projects";
  title: string;
  subtitle: string;
  period?: string;
  location?: string;
  note?: string;
  /** Accent colour for rings, signs and window tint. */
  color: string;
  bullets: string[];
  chips: string[];
  /** Duration in years, drives building count and height. */
  years: number;
  current?: boolean;
}

function slug(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const roleDistricts: DistrictDef[] = experience.map((r) => ({
  id: slug(r.company),
  kind: "role" as const,
  title: r.company,
  subtitle: r.role,
  period: r.period,
  location: r.location,
  note: r.note,
  color: r.brand ?? "#6c9bff",
  bullets: r.highlights,
  chips: r.stack ?? [],
  years: Math.max(0.5, r.end - r.start),
  current: r.current,
}));

const projectChips = [...new Set(projects.flatMap((p) => p.tags))].slice(0, 8);

const projectsDistrict: DistrictDef = {
  id: "projects-park",
  kind: "projects",
  title: "Side Projects Park",
  subtitle: "Built for the love of it",
  note: "Games, tools and experiments outside of work.",
  color: "#db2777",
  bullets: projects.map((p) => {
    const first = p.description.split(/(?<=\.)\s/)[0] ?? p.description;
    return `${p.name}: ${first}`;
  }),
  chips: projectChips,
  years: 2.2,
};

/** Newest role first, projects park closes the loop. */
export const districtDefs: DistrictDef[] = [...roleDistricts, projectsDistrict];

export const cityProfile = profile;
