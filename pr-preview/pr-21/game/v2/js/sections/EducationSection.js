import { education } from '../data/cv-data.js';
import CFG from '../config.js';

export default class EducationSection {
  constructor(container, textures, groundY, sectionData) {
    this.container = container;
    this.textures = textures;
    this.groundY = groundY;
    this.data = sectionData;
    this.elements = [];
    this.animated = false;
    this.animProgress = 0;
  }

  build() {
    const c = CFG.education;
    const centerX = (this.data.startX + this.data.endX) / 2;

    // University building
    const uniTex = this.textures['edu-university'];
    if (uniTex) {
      const uni = new PIXI.Sprite(uniTex);
      uni.anchor.set(0.5, 1);
      uni.x = centerX + c.university.xOffset;
      uni.y = this.groundY;
      uni.scale.set(c.university.scale);
      uni.alpha = c.university.alpha;
      this.container.addChild(uni);
    }

    // Knowledge tree
    const treeTex = this.textures['edu-tree'];
    if (treeTex) {
      const tree = new PIXI.Sprite(treeTex);
      tree.anchor.set(0.5, 1);
      tree.x = centerX + c.tree.xOffset;
      tree.y = this.groundY;
      tree.scale.set(c.tree.scale);
      tree.alpha = 0;
      this.container.addChild(tree);
      this.elements.push(tree);
    }

    // Degree cards
    education.forEach((edu, i) => {
      const x = centerX + c.cards.xStart + i * c.cards.xSpacing;
      const y = this.groundY + c.cards.yBase + i * c.cards.yStagger;

      const dipTex = this.textures['edu-diploma'];
      if (dipTex) {
        const dip = new PIXI.Sprite(dipTex);
        dip.anchor.set(0.5, 0.5);
        dip.x = x;
        dip.y = y;
        dip.scale.set(c.diploma.scale);
        dip.alpha = 0;
        this.container.addChild(dip);
        this.elements.push(dip);
      }

      const degreeText = new PIXI.Text({
        text: edu.degree,
        style: {
          fontFamily: 'Inter, sans-serif',
          fontSize: c.degreeFontSize,
          fill: CFG.colors.textPrimary,
          fontWeight: '500',
        },
      });
      degreeText.anchor.set(0.5, 0);
      degreeText.x = x;
      degreeText.y = y + c.degreeYOffset;
      degreeText.alpha = 0;
      this.container.addChild(degreeText);
      this.elements.push(degreeText);

      const schoolText = new PIXI.Text({
        text: `${edu.school}\n${edu.period}`,
        style: {
          fontFamily: 'Inter, sans-serif',
          fontSize: c.schoolFontSize,
          fill: CFG.colors.textMuted,
          fontWeight: '300',
          lineHeight: c.schoolLineHeight,
          align: 'center',
        },
      });
      schoolText.anchor.set(0.5, 0);
      schoolText.x = x;
      schoolText.y = y + c.schoolYOffset;
      schoolText.alpha = 0;
      this.container.addChild(schoolText);
      this.elements.push(schoolText);
    });
  }

  update(visibleLeft, visibleRight) {
    const c = CFG.education;
    const centerX = (this.data.startX + this.data.endX) / 2;

    if (!this.animated && centerX > visibleLeft && centerX < visibleRight) {
      this.animated = true;
    }

    if (this.animated && this.animProgress < 1) {
      this.animProgress = Math.min(1, this.animProgress + c.animSpeed);
      for (const el of this.elements) {
        el.alpha = Math.min(1, this.animProgress * c.fadeMultiplier);
      }
    }
  }
}
