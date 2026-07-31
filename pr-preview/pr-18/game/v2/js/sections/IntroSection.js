import { profile } from '../data/cv-data.js';
import CFG from '../config.js';

export default class IntroSection {
  constructor(container, textures, groundY, sectionData) {
    this.container = container;
    this.textures = textures;
    this.groundY = groundY;
    this.data = sectionData;
  }

  build() {
    const c = CFG.intro;

    // Desk
    const deskTex = this.textures['intro-desk'];
    if (deskTex) {
      const desk = new PIXI.Sprite(deskTex);
      desk.anchor.set(0.5, 1);
      desk.x = c.desk.x;
      desk.y = this.groundY + c.desk.yOffset;
      desk.scale.set(c.desk.scale);
      this.container.addChild(desk);
    }

    // Terminal
    const termTex = this.textures['intro-terminal'];
    if (termTex) {
      const terminal = new PIXI.Sprite(termTex);
      terminal.anchor.set(0.5, 1);
      terminal.x = c.terminal.x;
      terminal.y = this.groundY + c.terminal.yOffset;
      terminal.scale.set(c.terminal.scale);
      this.container.addChild(terminal);
    }

    // Text backdrop panel
    const p = c.panel;
    const panelX = c.textX - p.width / 2;
    const panelY = this.groundY - c.nameYOffset - p.padding;

    const panel = new PIXI.Graphics();
    panel.roundRect(panelX, panelY, p.width, p.height, p.borderRadius);
    panel.fill({ color: CFG.colors.bgDark, alpha: p.bgAlpha });
    panel.stroke({ color: CFG.colors.panelStroke, alpha: p.strokeAlpha, width: 1 });
    this.container.addChild(panel);

    // Name
    const nameText = new PIXI.Text({
      text: profile.name,
      style: {
        fontFamily: 'Inter, sans-serif',
        fontSize: c.nameFontSize,
        fill: CFG.colors.textPrimary,
        fontWeight: '500',
        letterSpacing: 2,
      },
    });
    nameText.anchor.set(0.5, 1);
    nameText.x = c.textX;
    nameText.y = this.groundY - c.nameYOffset;
    this.container.addChild(nameText);

    // Title
    const titleText = new PIXI.Text({
      text: profile.title,
      style: {
        fontFamily: 'Inter, sans-serif',
        fontSize: c.titleFontSize,
        fill: CFG.colors.textGreen,
        fontWeight: '300',
        letterSpacing: 3,
      },
    });
    titleText.anchor.set(0.5, 1);
    titleText.x = c.textX;
    titleText.y = this.groundY - c.titleYOffset;
    this.container.addChild(titleText);

    // Summary
    const summaryText = new PIXI.Text({
      text: this.wrapText(profile.summary, c.summaryWrapChars),
      style: {
        fontFamily: 'Inter, sans-serif',
        fontSize: c.summaryFontSize,
        fill: CFG.colors.textSecondary,
        fontWeight: '300',
        lineHeight: c.summaryLineHeight,
      },
    });
    summaryText.anchor.set(0.5, 0);
    summaryText.x = c.textX;
    summaryText.y = this.groundY - c.summaryYOffset;
    this.container.addChild(summaryText);
  }

  wrapText(text, maxChars) {
    const words = text.split(' ');
    const lines = [];
    let line = '';
    for (const word of words) {
      if ((line + ' ' + word).trim().length > maxChars) {
        lines.push(line.trim());
        line = word;
      } else {
        line += ' ' + word;
      }
    }
    if (line.trim()) lines.push(line.trim());
    return lines.join('\n');
  }

  update() {}
}
