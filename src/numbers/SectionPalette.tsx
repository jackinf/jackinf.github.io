import { JumpPalette } from "../components/JumpPalette.tsx";
import type { PaletteEntry } from "../components/JumpPalette.tsx";
import { sections } from "../data/numbers.ts";

const ENTRIES: PaletteEntry[] = [
  { id: "top", num: "00", label: "Top", meta: "title + reach" },
  ...sections.map((s) => ({
    id: s.id,
    num: s.num,
    label: s.company,
    meta: s.descriptor,
    brand: s.brand,
  })),
];

/** Numbers-page flavour of the "/" jump palette: one entry per company. */
export function SectionPalette() {
  return <JumpPalette entries={ENTRIES} />;
}
