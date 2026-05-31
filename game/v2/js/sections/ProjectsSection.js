import { projects } from '../data/cv-data.js';
import { openModal } from '../ui/Modal.js';
import CFG from '../config.js';

export default class ProjectsSection {
  constructor(container, textures, groundY, sectionData) {
    this.container = container;
    this.textures = textures;
    this.groundY = groundY;
    this.data = sectionData;
    this.items = [];
    this.animated = new Set();
  }

  build() {
    const c = CFG.projects;
    const startX = this.data.startX;
    const spacing = (this.data.endX - startX) / projects.length;

    projects.forEach((project, i) => {
      const x = startX + spacing * i + spacing * 0.5;

      const iconTex = this.textures[project.icon];
      if (iconTex) {
        const icon = new PIXI.Sprite(iconTex);
        icon.anchor.set(0.5, 1);
        icon.x = x;
        icon.y = this.groundY + c.icon.yOffset;
        icon.scale.set(c.icon.scale);
        icon.alpha = 0;
        icon.eventMode = 'static';
        icon.cursor = 'pointer';
        icon.on('pointerdown', () => this.showProjectDetail(project));
        this.container.addChild(icon);

        const label = new PIXI.Text({
          text: project.name,
          style: {
            fontFamily: 'Inter, sans-serif',
            fontSize: c.label.fontSize,
            fill: CFG.colors.textPrimary,
            fontWeight: '500',
            letterSpacing: 1,
          },
        });
        label.anchor.set(0.5, 0);
        label.x = x;
        label.y = this.groundY + c.label.yOffset;
        label.alpha = 0;
        this.container.addChild(label);

        this.items.push({ icon, label, index: i });
      }
    });
  }

  update(visibleLeft, visibleRight) {
    for (const item of this.items) {
      if (this.animated.has(item.index)) {
        if (item.icon.alpha < 1) {
          item.icon.alpha = Math.min(1, item.icon.alpha + CFG.projects.fadeSpeed);
          item.label.alpha = item.icon.alpha;
        }
        continue;
      }
      if (item.icon.x > visibleLeft && item.icon.x < visibleRight) {
        this.animated.add(item.index);
      }
    }
  }

  showProjectDetail(project) {
    const techHtml = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    openModal(
      project.name,
      `<p>${project.description}</p>
       <h3>Technologies</h3>
       <div class="tech-tags">${techHtml}</div>`
    );
  }
}
