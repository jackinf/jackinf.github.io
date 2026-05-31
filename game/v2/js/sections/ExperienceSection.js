import { experience } from '../data/cv-data.js';
import { openModal } from '../ui/Modal.js';
import CFG from '../config.js';

export default class ExperienceSection {
  constructor(container, textures, groundY, sectionData) {
    this.container = container;
    this.textures = textures;
    this.groundY = groundY;
    this.data = sectionData;
    this.boards = [];
    this.animated = new Set();
  }

  build() {
    const c = CFG.experience;
    const startX = this.data.startX;
    const spacing = (this.data.endX - startX) / experience.length;

    experience.forEach((job, i) => {
      const x = startX + spacing * i + spacing * 0.5;

      // Building
      const buildingTex = this.textures[job.building];
      if (buildingTex) {
        const building = new PIXI.Sprite(buildingTex);
        building.anchor.set(0.5, 1);
        building.x = x;
        building.y = this.groundY;
        building.scale.set(c.building.scale);
        building.alpha = c.building.alpha;
        this.container.addChild(building);
      }

      // Board
      const boardTex = this.textures['exp-board'];
      if (boardTex) {
        const boardY = this.groundY + c.board.startYOffset;

        const board = new PIXI.Sprite(boardTex);
        board.anchor.set(0.5, 1);
        board.x = x;
        board.y = boardY;
        board.scale.set(c.board.scale);
        board.eventMode = 'static';
        board.cursor = 'pointer';
        board.on('pointerdown', () => this.showJobDetail(job));
        this.container.addChild(board);

        // Text backdrop
        const lc = c.label;
        const labelBg = new PIXI.Graphics();
        labelBg.roundRect(x - lc.bgWidth / 2, boardY + lc.yOffset - lc.bgHeight / 2, lc.bgWidth, lc.bgHeight, lc.bgRadius);
        labelBg.fill({ color: CFG.colors.bgDark, alpha: lc.bgAlpha });
        labelBg.stroke({ color: CFG.colors.panelStroke, alpha: lc.bgStrokeAlpha, width: 1 });
        this.container.addChild(labelBg);

        // Company name
        const label = new PIXI.Text({
          text: job.company,
          style: {
            fontFamily: 'Inter, sans-serif',
            fontSize: lc.fontSize,
            fill: CFG.colors.textPrimary,
            fontWeight: '500',
            letterSpacing: 1,
          },
        });
        label.anchor.set(0.5, 0.5);
        label.x = x;
        label.y = boardY + lc.yOffset;
        this.container.addChild(label);

        // Period
        const period = new PIXI.Text({
          text: job.period,
          style: {
            fontFamily: 'Inter, sans-serif',
            fontSize: lc.periodFontSize,
            fill: CFG.colors.textMuted,
            fontWeight: '300',
          },
        });
        period.anchor.set(0.5, 0.5);
        period.x = x;
        period.y = boardY + lc.periodYOffset;
        this.container.addChild(period);

        this.boards.push({ board, label, period, labelBg, targetY: this.groundY, index: i });
      }
    });
  }

  update(visibleLeft, visibleRight) {
    const c = CFG.experience;
    for (const b of this.boards) {
      if (this.animated.has(b.index)) {
        if (b.board.y > b.targetY) {
          b.board.y -= c.board.riseSpeed;
          b.label.y = b.board.y + c.label.yOffset;
          b.period.y = b.board.y + c.label.periodYOffset;
          b.labelBg.y = b.board.y - this.groundY;
        }
        continue;
      }
      if (b.board.x > visibleLeft && b.board.x < visibleRight) {
        this.animated.add(b.index);
      }
    }
  }

  showJobDetail(job) {
    const techHtml = job.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    const highlightsHtml = job.highlights.map(h => `<li>${h}</li>`).join('');
    openModal(
      `${job.company} — ${job.role}`,
      `<p>${job.period} | ${job.location}</p>
       <h3>Key Achievements</h3>
       <ul>${highlightsHtml}</ul>
       <h3>Technologies</h3>
       <div class="tech-tags">${techHtml}</div>`
    );
  }
}
