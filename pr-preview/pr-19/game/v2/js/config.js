/**
 * ============================================================
 *  UNIFIED CONFIG — tweak all positions, sizes, speeds here
 * ============================================================
 */

const CONFIG = {

  // ── World ──────────────────────────────────────────────────
  world: {
    width: 15000,              // total scrollable world width (px)
    groundYRatio: 0.78,        // ground line as fraction of viewport height (0-1)
  },

  // ── Camera & Scrolling ─────────────────────────────────────
  camera: {
    smoothing: 0.08,           // lerp factor (higher = snappier, 0.01-0.2)
    scrollMultiplier: 2,       // world pixels per scroll pixel
    touchMultiplier: 2,        // touch drag sensitivity
    keyboardStep: 120,         // pixels per arrow key press
  },

  // ── Parallax Layer Speeds ──────────────────────────────────
  //    0 = static, 1 = moves with camera
  parallax: {
    sky: 0.0,
    cityFar: 0.05,
    hillsMid: 0.15,
    treesNear: 0.4,
    ground: 1.0,
    tiledLayerHeight: 0.6,     // fraction of viewport height
    tiledLayerY: 0.2,          // fraction from top
  },

  // ── Character ──────────────────────────────────────────────
  character: {
    xRatio: 0.35,              // horizontal position as fraction of viewport
    scale: 1.5,
    idleFrames: 4,
    walkFrames: 8,
    idleFrameSpeed: 10,        // ticks per frame (lower = faster)
    walkFrameSpeed: 6,
    moveThreshold: 0.5,        // camera delta to trigger walk
  },

  // ── Section Boundaries ─────────────────────────────────────
  sections: {
    intro:      { startX: 0,     endX: 1500  },
    experience: { startX: 1800,  endX: 6000  },
    projects:   { startX: 6300,  endX: 8500  },
    skills:     { startX: 8800,  endX: 10500 },
    education:  { startX: 10800, endX: 12500 },
    contact:    { startX: 12800, endX: 15000 },
  },

  // ── Gate Arches (section dividers) ─────────────────────────
  gates: {
    positions: [
      { x: 1500,  label: 'Experience' },
      { x: 6000,  label: 'Projects' },
      { x: 8500,  label: 'Skills' },
      { x: 10500, label: 'Education' },
      { x: 12500, label: 'Contact' },
    ],
    scale: 1.5,
    labelYOffset: -140,        // above ground
    labelFontSize: 14,
    labelAlpha: 0.8,
    labelLetterSpacing: 3,
  },

  // ── Decorations ────────────────────────────────────────────
  decorations: {
    lamps: {
      startX: 300,
      spacing: 800,
      scale: 1.2,
    },
    benches: {
      positions: [700, 2500, 4500, 7000, 9500, 11500, 13500],
      scale: 0.8,
    },
    plants: {
      positions: [900, 2200, 3700, 5400, 7200, 9200, 11200, 13200],
      scale: 0.6,
    },
  },

  // ── Intro Section ──────────────────────────────────────────
  intro: {
    desk:     { x: 400, scale: 1.0, yOffset: 0 },
    terminal: { x: 800, scale: 0.8, yOffset: -20 },
    textX: 750,
    nameYOffset: 200,          // distance above ground
    titleYOffset: 170,
    summaryYOffset: 155,
    panel: {
      width: 360,
      height: 140,
      borderRadius: 8,
      bgAlpha: 0.75,
      strokeAlpha: 0.2,
      padding: 16,
    },
    nameFontSize: 28,
    titleFontSize: 14,
    summaryFontSize: 11,
    summaryLineHeight: 18,
    summaryWrapChars: 50,
  },

  // ── Experience Section ─────────────────────────────────────
  experience: {
    building: {
      scale: 1.2,
      alpha: 0.85,
    },
    board: {
      scale: 1.3,
      startYOffset: 100,       // below ground (hidden initially)
      riseSpeed: 3,            // pixels per frame when animating up
    },
    label: {
      fontSize: 12,
      yOffset: -60,            // relative to board position
      periodFontSize: 9,
      periodYOffset: -40,
      bgWidth: 130,
      bgHeight: 50,
      bgRadius: 6,
      bgAlpha: 0.8,
      bgStrokeAlpha: 0.2,
    },
  },

  // ── Projects Section ───────────────────────────────────────
  projects: {
    icon: {
      scale: 1.5,
      yOffset: -30,            // above ground
    },
    label: {
      fontSize: 13,
      yOffset: -20,            // above ground
    },
    fadeSpeed: 0.03,           // alpha increment per frame
  },

  // ── Skills Section ─────────────────────────────────────────
  skills: {
    panel: {
      width: 400,
      rowHeight: 45,           // vertical spacing per skill
      topPadding: 60,          // space above first bar
      yOffset: -40,            // above ground
      borderRadius: 10,
      bgAlpha: 0.85,
      strokeAlpha: 0.3,
    },
    bar: {
      labelXOffset: 20,        // from panel left
      barXOffset: 90,          // from panel left
      barWidth: 280,
      barHeight: 12,
      borderRadius: 6,
      trackAlpha: 0.06,
      fillAlpha: 0.7,
      pctXOffset: 8,           // right of bar end
    },
    title: {
      fontSize: 14,
      xOffset: 20,
      yOffset: 18,
    },
    labelFontSize: 11,
    pctFontSize: 9,
    animSpeed: 0.015,          // progress increment per frame (0-1)
  },

  // ── Education Section ──────────────────────────────────────
  education: {
    university: {
      xOffset: -200,           // from section center
      scale: 2,
      alpha: 0.4,
    },
    tree: {
      xOffset: 200,
      scale: 1.8,
    },
    diploma: {
      scale: 0.8,
    },
    cards: {
      xSpacing: 250,           // horizontal gap between cards
      xStart: -50,             // offset from center for first card
      yStagger: -40,           // each card goes up by this
      yBase: -160,             // first card Y above ground
    },
    degreeFontSize: 12,
    schoolFontSize: 9,
    schoolLineHeight: 14,
    degreeYOffset: 30,         // below diploma icon
    schoolYOffset: 48,
    animSpeed: 0.02,
    fadeMultiplier: 1.5,
  },

  // ── Contact Section ────────────────────────────────────────
  contact: {
    mailbox: {
      scale: 1.5,
    },
    heading: {
      yOffset: -180,           // above ground
      fontSize: 20,
    },
    links: {
      yStart: -140,            // first link Y above ground
      ySpacing: 30,            // vertical gap between links
      fontSize: 11,
    },
    animSpeed: 0.02,
    fadeMultiplier: 1.5,
  },

  // ── Colors ─────────────────────────────────────────────────
  colors: {
    bgDark:     0x1a1a2e,      // main background / panel bg
    panelStroke: 0x6b7b8d,     // panel border color
    textPrimary:   '#f5f0e8',  // bright text (names, headings)
    textSecondary: '#b0b8c4',  // body text
    textMuted:     '#6b7b8d',  // subtle text (periods, pct)
    textAccent:    '#e8c4c4',  // accent text (section titles)
    textGreen:     '#a8c5a0',  // green accent (role, links)
  },
};

export default CONFIG;
