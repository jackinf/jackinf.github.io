import IntroSection from './IntroSection.js';
import ExperienceSection from './ExperienceSection.js';
import ProjectsSection from './ProjectsSection.js';
import SkillsSection from './SkillsSection.js';
import EducationSection from './EducationSection.js';
import ContactSection from './ContactSection.js';
import CFG from '../config.js';

// Build sections array from config
const sections = Object.entries(CFG.sections).map(([id, bounds]) => ({
  id,
  label: id.charAt(0).toUpperCase() + id.slice(1),
  ...bounds,
}));

export default class SectionManager {
  constructor(app, textures, groundY, worldWidth) {
    this.app = app;
    this.textures = textures;
    this.groundY = groundY;
    this.worldWidth = worldWidth;

    this.worldContainer = new PIXI.Container();
    this.worldContainer.label = 'world';
    this.app.stage.addChild(this.worldContainer);

    this.sectionInstances = [];
    this.currentSection = 'intro';
    this._prevSection = 'intro';
    this.gates = [];
  }

  build() {
    const sectionClasses = [
      IntroSection,
      ExperienceSection,
      ProjectsSection,
      SkillsSection,
      EducationSection,
      ContactSection,
    ];

    sections.forEach((sectionData, i) => {
      const SectionClass = sectionClasses[i];
      if (SectionClass) {
        const instance = new SectionClass(
          this.worldContainer, this.textures, this.groundY, sectionData
        );
        instance.build();
        this.sectionInstances.push(instance);
      }
    });

    this.buildGates();
    this.buildDecorations();
  }

  buildGates() {
    const gc = CFG.gates;

    for (const gate of gc.positions) {
      const tex = this.textures['gate-arch'];
      if (!tex) continue;

      const sprite = new PIXI.Sprite(tex);
      sprite.anchor.set(0.5, 1);
      sprite.x = gate.x;
      sprite.y = this.groundY;
      sprite.scale.set(gc.scale);
      this.worldContainer.addChild(sprite);

      const text = new PIXI.Text({
        text: gate.label,
        style: {
          fontFamily: 'Inter, sans-serif',
          fontSize: gc.labelFontSize,
          fill: CFG.colors.textAccent,
          letterSpacing: gc.labelLetterSpacing,
          fontWeight: '400',
        },
      });
      text.anchor.set(0.5, 1);
      text.x = gate.x;
      text.y = this.groundY + gc.labelYOffset;
      text.alpha = gc.labelAlpha;
      this.worldContainer.addChild(text);

      this.gates.push({ sprite, text, x: gate.x });
    }
  }

  buildDecorations() {
    const dc = CFG.decorations;

    // Lamps
    const lampTex = this.textures['deco-lamp-post'];
    if (lampTex) {
      for (let x = dc.lamps.startX; x < this.worldWidth; x += dc.lamps.spacing) {
        const lamp = new PIXI.Sprite(lampTex);
        lamp.anchor.set(0.5, 1);
        lamp.x = x;
        lamp.y = this.groundY;
        lamp.scale.set(dc.lamps.scale);
        this.worldContainer.addChild(lamp);
      }
    }

    // Benches
    const benchTex = this.textures['deco-bench'];
    if (benchTex) {
      for (const x of dc.benches.positions) {
        const bench = new PIXI.Sprite(benchTex);
        bench.anchor.set(0.5, 1);
        bench.x = x;
        bench.y = this.groundY;
        bench.scale.set(dc.benches.scale);
        this.worldContainer.addChild(bench);
      }
    }

    // Plants
    const plantTex = this.textures['deco-plant-pot'];
    if (plantTex) {
      for (const x of dc.plants.positions) {
        const plant = new PIXI.Sprite(plantTex);
        plant.anchor.set(0.5, 1);
        plant.x = x;
        plant.y = this.groundY;
        plant.scale.set(dc.plants.scale);
        this.worldContainer.addChild(plant);
      }
    }
  }

  update(cameraX, viewportWidth) {
    this.worldContainer.x = -cameraX;

    const centerX = cameraX + viewportWidth * CFG.character.xRatio;
    let current = 'intro';
    for (const s of sections) {
      if (centerX >= s.startX && centerX <= s.endX) {
        current = s.id;
        break;
      }
      if (centerX > s.endX) {
        current = s.id;
      }
    }

    if (current !== this._prevSection) {
      this._prevSection = current;
      this.currentSection = current;
      window.dispatchEvent(new CustomEvent('sectionchange', { detail: { section: current } }));
    }

    const visibleLeft = cameraX - 200;
    const visibleRight = cameraX + viewportWidth + 200;

    for (const instance of this.sectionInstances) {
      if (instance.update) {
        instance.update(visibleLeft, visibleRight);
      }
    }
  }
}
