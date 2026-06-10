/**
 * DOM overlay: intro screen, top bar, flight hint and the animated district
 * info card. All content comes from the district defs (i.e. from cv.ts).
 */
import type { DistrictDef } from "./data";
import { cityProfile } from "./data";

const MAX_BULLETS = 4;

export interface HUD {
  showCard(def: DistrictDef): void;
  hideCard(): void;
  onStart(cb: () => void): void;
  onTour(cb: () => boolean): void;
  onSound(cb: () => boolean): void;
  setTourActive(active: boolean): void;
}

export function buildHUD(root: HTMLElement): HUD {
  root.insertAdjacentHTML(
    "beforeend",
    `
    <div class="g3d-topbar">
      <div class="g3d-brand">
        <span class="g3d-brand-dot"></span>
        <span class="g3d-brand-name">${cityProfile.name}</span>
        <span class="g3d-brand-sub">UFO city tour</span>
      </div>
      <div class="g3d-actions">
        <button class="g3d-btn" data-action="tour">▶ Tour</button>
        <button class="g3d-btn" data-action="sound">🔊 Sound</button>
        <a class="g3d-btn" href="../">← Portfolio</a>
      </div>
    </div>
    <div class="g3d-hint">WASD / arrows / drag to fly · Shift to boost · hover a district to scan it</div>
    <aside class="g3d-card" aria-live="polite"></aside>
    <div class="g3d-intro">
      <div class="g3d-intro-panel">
        <div class="g3d-intro-kicker">${cityProfile.title}</div>
        <h1>Jevgeni City</h1>
        <p>A low-poly flyover of my career. Every district is a company I worked at; hover above one with your saucer and it lights up with the story.</p>
        <button class="g3d-btn g3d-btn-primary" data-action="start">🛸 Take off</button>
      </div>
    </div>
  `,
  );

  const card = root.querySelector<HTMLElement>(".g3d-card")!;
  const intro = root.querySelector<HTMLElement>(".g3d-intro")!;
  const hint = root.querySelector<HTMLElement>(".g3d-hint")!;
  const tourBtn = root.querySelector<HTMLButtonElement>('[data-action="tour"]')!;
  const soundBtn = root.querySelector<HTMLButtonElement>('[data-action="sound"]')!;
  const startBtn = root.querySelector<HTMLButtonElement>('[data-action="start"]')!;

  let shownId: string | null = null;

  function showCard(def: DistrictDef): void {
    if (shownId === def.id) return;
    shownId = def.id;

    const bullets = def.bullets.slice(0, MAX_BULLETS);
    const more = def.bullets.length - bullets.length;
    card.style.setProperty("--accent", def.color);
    card.innerHTML = `
      <header>
        <span class="g3d-card-dot"></span>
        <div>
          <h2>${esc(def.title)}${def.current ? '<span class="g3d-now">now</span>' : ""}</h2>
          <div class="g3d-card-role">${esc(def.subtitle)}</div>
          ${def.period ? `<div class="g3d-card-meta">${esc(def.period)}${def.location ? " · " + esc(def.location) : ""}</div>` : ""}
        </div>
      </header>
      ${def.note ? `<p class="g3d-card-note">${esc(def.note)}</p>` : ""}
      <ul>
        ${bullets.map((b, i) => `<li style="--i:${i}">${esc(b)}</li>`).join("")}
      </ul>
      ${more > 0 ? `<div class="g3d-card-more">+ ${more} more in the CV</div>` : ""}
      <div class="g3d-chips">
        ${def.chips.map((c) => `<span>${esc(c)}</span>`).join("")}
      </div>
    `;
    card.classList.remove("visible");
    // Restart the slide-in animation on district change.
    void card.offsetWidth;
    card.classList.add("visible");
  }

  function hideCard(): void {
    shownId = null;
    card.classList.remove("visible");
  }

  return {
    showCard,
    hideCard,
    onStart(cb) {
      startBtn.addEventListener("click", () => {
        intro.classList.add("g3d-hidden");
        hint.classList.add("g3d-show");
        window.setTimeout(() => hint.classList.add("g3d-fade"), 7000);
        cb();
      });
    },
    onTour(cb) {
      tourBtn.addEventListener("click", () => {
        const active = cb();
        tourBtn.textContent = active ? "⏸ Stop tour" : "▶ Tour";
      });
    },
    onSound(cb) {
      soundBtn.addEventListener("click", () => {
        const on = cb();
        soundBtn.textContent = on ? "🔊 Sound" : "🔇 Muted";
      });
    },
    setTourActive(active) {
      tourBtn.textContent = active ? "⏸ Stop tour" : "▶ Tour";
    },
  };
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
