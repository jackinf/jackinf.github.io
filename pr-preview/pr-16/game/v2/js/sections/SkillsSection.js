import { skills } from '../data/cv-data.js';
import CFG from '../config.js';

export default class SkillsSection {
  constructor(container, textures, groundY, sectionData) {
    this.container = container;
    this.textures = textures;
    this.groundY = groundY;
    this.data = sectionData;
    this.bars = [];
    this.animating = false;
    this.animationProgress = 0;
  }

  build() {
    const c = CFG.skills;
    const centerX = (this.data.startX + this.data.endX) / 2;
    const panelWidth = c.panel.width;
    const panelHeight = skills.length * c.panel.rowHeight + c.panel.topPadding;
    const panelX = centerX - panelWidth / 2;
    const panelY = this.groundY - panelHeight + c.panel.yOffset;

    // Panel background
    const panel = new PIXI.Graphics();
    panel.roundRect(panelX, panelY, panelWidth, panelHeight, c.panel.borderRadius);
    panel.fill({ color: CFG.colors.bgDark, alpha: c.panel.bgAlpha });
    panel.stroke({ color: CFG.colors.panelStroke, alpha: c.panel.strokeAlpha, width: 1 });
    this.container.addChild(panel);

    // Title
    const title = new PIXI.Text({
      text: 'Technical Skills',
      style: {
        fontFamily: 'Inter, sans-serif',
        fontSize: c.title.fontSize,
        fill: CFG.colors.textAccent,
        fontWeight: '500',
        letterSpacing: 2,
      },
    });
    title.x = panelX + c.title.xOffset;
    title.y = panelY + c.title.yOffset;
    this.container.addChild(title);

    // Skill bars
    skills.forEach((skill, i) => {
      const y = panelY + c.panel.topPadding - 10 + i * c.panel.rowHeight;
      const barX = panelX + c.bar.barXOffset;

      // Label
      const label = new PIXI.Text({
        text: skill.name,
        style: {
          fontFamily: 'Inter, sans-serif',
          fontSize: c.labelFontSize,
          fill: CFG.colors.textSecondary,
          fontWeight: '400',
        },
      });
      label.x = panelX + c.bar.labelXOffset;
      label.y = y + 2;
      this.container.addChild(label);

      // Track
      const track = new PIXI.Graphics();
      track.roundRect(barX, y, c.bar.barWidth, c.bar.barHeight, c.bar.borderRadius);
      track.fill({ color: 0xffffff, alpha: c.bar.trackAlpha });
      this.container.addChild(track);

      // Fill (starts empty)
      const fill = new PIXI.Graphics();
      this.container.addChild(fill);

      // Percentage
      const pct = new PIXI.Text({
        text: `${Math.round(skill.level * 100)}%`,
        style: {
          fontFamily: 'Inter, sans-serif',
          fontSize: c.pctFontSize,
          fill: CFG.colors.textMuted,
          fontWeight: '300',
        },
      });
      pct.x = barX + c.bar.barWidth + c.bar.pctXOffset;
      pct.y = y + 2;
      pct.alpha = 0;
      this.container.addChild(pct);

      this.bars.push({
        fill, pct,
        x: barX, y,
        width: c.bar.barWidth,
        height: c.bar.barHeight,
        targetWidth: c.bar.barWidth * skill.level,
        currentWidth: 0,
        color: skill.color,
      });
    });
  }

  update(visibleLeft, visibleRight) {
    const c = CFG.skills;
    const centerX = (this.data.startX + this.data.endX) / 2;

    if (!this.animating && centerX > visibleLeft && centerX < visibleRight) {
      this.animating = true;
    }

    if (this.animating && this.animationProgress < 1) {
      this.animationProgress = Math.min(1, this.animationProgress + c.animSpeed);
      const eased = 1 - Math.pow(1 - this.animationProgress, 3);

      for (const bar of this.bars) {
        bar.currentWidth = bar.targetWidth * eased;
        bar.fill.clear();
        if (bar.currentWidth > 1) {
          bar.fill.roundRect(bar.x, bar.y, bar.currentWidth, bar.height, c.bar.borderRadius);
          bar.fill.fill({ color: bar.color, alpha: c.bar.fillAlpha });
        }
        bar.pct.alpha = this.animationProgress;
      }
    }
  }
}
