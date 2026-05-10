# CLAUDE.md — Codebase guide for Claude Code

## What this project is

A gamified single-page personal resume for Jevgeni Rumjantsev, hosted at
https://jackinf.github.io.  The user scrolls down and the page scrolls
*horizontally*, revealing an 8-bit side-scrolling world with animated gates,
project boards, stones, and a skill tree.

**Intentional tech choices** (from the README): plain HTML + CSS + JS with
jQuery & Typed.js.  No build tool, no TypeScript, no bundler.  Keep it that way
unless the owner explicitly asks otherwise.

---

## File map

```
index.html                   Single HTML file — all DOM structure lives here
css/
  general.css                Global layout, player, layers, modal, fonts
  section1.css               Gate 1, project boards (Travix / Genius / Finestmedia / ABB)
  section2.css               Gate 2, side-project stones (SpeysCloud / Triven)
  section3.css               Gate 3, skill loading bars, school/degree tree
  section4.css               Gate 4 (final gate, minimal)
script/
  jquery-3.7.1.min.js        jQuery — loaded as a blocking <script> in <head>
  jquery-ui.min.js           jQuery UI — same
  detect-browser-device.js   Sets global `deviceName` ("computer" | other)
  src/
    main.js       ← entry point (type="module")
    config.js       Named constants: scroll thresholds, animation durations
    content.js      All user-visible text: bio, plank descriptions, stone text
    layers.js       Parallax layer movement
    player.js       Walk-cycle sprite animation
    animations.js   Boards, stones, skill bars, degree trees, gate labels
    modal.js        Wooden-sign overlay dialog
    touch.js        Mobile swipe → virtual scroll position
font/                        Custom pixel fonts (04b03, 01-Digit)
image/                       Sprites, backgrounds, UI assets
```

---

## How the page works (scroll model)

The page has a tall invisible `#page` div (`height: 21000px`) that lets the
browser generate a normal vertical scroll bar.  A `#container` div is
`position: fixed` — it never moves.  On every `window.onscroll` event,
`pageYOffset` is read and used to translate five absolutely-positioned horizontal
layers leftward at different speeds, producing a parallax effect.

Mobile devices have no vertical scroll bar; instead, horizontal swipe events are
captured and converted into the same `scrollPos` variable via `touch.js`.

`deviceName` (set by `detect-browser-device.js`) controls which input method is
active: `"computer"` → mouse scroll; anything else → touch events.

---

## ES modules

`script/src/main.js` is loaded with `type="module"`.  All other `script/src/*.js`
files use `export`/`import`.  jQuery (`$`), `Typed`, and `deviceName` are globals
from synchronously-loaded `<script>` tags and are accessible inside modules
without any special handling.

---

## Adding a new section

1. **HTML** — Add your content inside `#s01-main-container` in `index.html`.
   Give interactive elements unique ids.
2. **CSS** — Add a new `css/sectionN.css` and `<link>` it in `<head>`.
   Position everything with `left: <px>` and `bottom: <px>` absolutes.
3. **content.js** — Add any text strings here; never inline them in JS logic.
4. **config.js** — Add scroll threshold constants (e.g. `BOARD_NEWCO: 11000`).
5. **animations.js** — Add reset/show functions following the existing pattern
   (`visible` flag + jQuery `.animate()`).
6. **main.js** `tick()` — Add the threshold checks: `if (scrollPos > SCROLL.X) showY()`.
7. **main.js** `resetScene()` — Call your reset function here too.
8. **modal.js** `initModal()` — Wire up any click handlers.

Always update `#page` height in `general.css` if you extend the world.

---

## Key invariants

| Constraint | Why |
|---|---|
| `#page` height = 21000px | Determines total scrollable distance; must cover all content |
| Layer speeds (0.01 → 0.5) | Encode depth; changing them shifts entire sections visually |
| Board left positions (section1.css) | Tied to scroll thresholds in config.js; change both together |
| `visible` flags start `true` | `resetScene()` runs on load and moves everything off-screen |
| `modal-logic.js` deleted | All modal logic now lives in `modal.js` |

---

## Common tasks

**Change the bio text** → `script/src/content.js` → `BIO` constant.

**Change a plank description** → `script/src/content.js` → `PLANK_TEXT.<company>[n]`.

**Adjust when a board appears** → `script/src/config.js` → `SCROLL.BOARD_<COMPANY>`.

**Add a skill bar** → HTML in `index.html` + CSS in `section3.css` + entry in
`LOADER_MAX_STEPS` (config.js) + bar element reference in `animations.js`.

**Change animation speed** → `script/src/config.js` → relevant `ANIM.*` constant.

---

## Running locally

No build step.  Just open `index.html` in a browser — or use any static server:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

ES modules require a server (they don't work over `file://` due to browser
CORS restrictions).
