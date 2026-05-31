# agents.md — AI agent guide for this repository

This document explains how an AI coding agent (e.g. Claude Code) should reason
about and modify this codebase safely.

---

## Mental model

The page is **one long horizontal world** divided into four named zones.  All
animation timing is driven by a single integer — `scrollPos` — which grows from
0 (start) to ~20 000 (end).  Every visual change is gated by a threshold in
`script/src/config.js`.  If something looks broken, the first question is always:
*does `scrollPos` reach the threshold that triggers it?*

```
scrollPos 0          2000        5000       9000      13000      20000
          │           │           │          │          │          │
          Welcome   Boards      Gate 2    Gate 3   Skill bars   End gate
          Monitor   (4 companies) Stones   (knowledge)  Trees
```

---

## Safety rules for agents

### 1  Do not change layer speeds without careful testing
`data-layer-speed` on each `layer-horizontal-*` div controls how far each
background layer moves per scroll pixel.  Speeds encode depth illusion.  Changing
a speed will shift the apparent position of every element on that layer by a
potentially large number of pixels and can misalign the entire scene.

### 2  Scroll thresholds and CSS `left` positions are coupled
The `left: <px>` value in `css/section*.css` and the `SCROLL.*` threshold in
`config.js` are manually tuned so that the player sprite reaches a board/gate
at the same moment the animation triggers.  If you move a DOM element in CSS,
update the corresponding threshold too, and vice versa.

The relationship (approximate): `left_px_on_layer1 ≈ scrollPos × 0.5` (layer-1
speed is 0.5).  So an element at `left: 4000px` appears when `scrollPos ≈ 8000`.

### 3  Never inline text content in logic files
All user-visible strings live in `script/src/content.js`.  Logic files
(`animations.js`, `modal.js`, `main.js`) import from there.  This keeps copy
editing isolated from behavioural changes.

### 4  The `visible` flag pattern must be preserved
Every animation group uses a boolean flag (`boardVisible`, `stoneVisible`, etc.)
to make animations idempotent — triggering `showBoard("travix")` twice only runs
the jQuery animation once.  If you add a new animation, follow the same pattern:
initialise the flag to `true`, call your reset in `resetScene()`, and gate your
show function on `!visible`.

### 5  `modal-logic.js` no longer exists
It was merged into `script/src/modal.js` during the refactor (May 2026).
Do not recreate it or reference it.

---

## Orientation checklist (start here for any task)

- [ ] Read `CLAUDE.md` for the file map and invariants.
- [ ] Read `script/src/config.js` to understand scroll thresholds.
- [ ] Read `script/src/content.js` for all copy.
- [ ] Identify which section (1–4) the task touches and read the matching CSS file.
- [ ] Check `script/src/animations.js` for the relevant animation group.

---

## Common agent tasks and how to approach them

### Add a new employer / project board

1. Copy an existing `project-board-*` block in `index.html` and assign a new id.
2. Add `left: <new_px>` to `css/section1.css` (after the last board).
3. Add the scroll threshold to `config.js`: `BOARD_NEWCO: <scrollPos>`.
4. Add `if (scrollPos > SCROLL.BOARD_NEWCO) showBoard("newco")` in `main.js` `tick()`.
5. Add `"newco"` to `BOARD_KEYS` in `animations.js`.
6. Add plank text to `PLANK_TEXT.newco` in `content.js`.
7. Update `#page` height in `general.css` if the world needs to be longer.

### Change existing copy only

Edit `script/src/content.js`.  No other file needs to change.

### Add a new skill bar

1. Add the HTML bar group in `index.html` (copy an existing `s03-skills-board-*` block).
2. Add CSS `top` positioning for it in `css/section3.css`.
3. Add the bar's `document.getElementById(...)` reference in `animations.js`
   `loaderBars` object.
4. Add its max step count to `LOADER_MAX_STEPS` in `config.js`.

### Change modal appearance

All modal styling is in `general.css` (`#wooden-modal*` selectors).
Responsive sizing logic is in `script/src/modal.js` `getLayout()`.

### Debug "animation never fires"

1. Add `console.log(scrollPos)` in `main.js` `tick()` temporarily.
2. Scroll to the expected position and confirm `scrollPos` reaches the threshold.
3. Check that the `visible` flag for that group is `false` when the animation
   should play (it starts `true` and gets set to `false` by `resetScene()`).

### Debug "animation fires at the wrong place"

Recalculate the expected scroll position:
```
expected_scrollPos = element_left_px_in_css / layer_speed
```
For layer-1 elements (speed 0.5): `scrollPos = left_px / 0.5 = left_px × 2`.
Update `config.js` to match.

---

## What agents should NOT do

- **Do not introduce a build tool** (Webpack, Vite, Rollup, etc.).  The project
  is intentionally build-tool-free.
- **Do not convert to TypeScript** unless the owner explicitly requests it.
- **Do not add frameworks** (React, Vue, etc.).
- **Do not change font files or image assets** unless explicitly asked; many are
  pixel-perfect and cannot be regenerated.
- **Do not modify `script/detect-browser-device.js`** — it is a third-party
  utility; treat it as a black box that sets `window.deviceName`.
- **Do not push to `main`** — all development happens on feature branches.
