import { contact } from '../data/cv-data.js';
import CFG from '../config.js';

export default class ContactSection {
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
    const c = CFG.contact;
    const centerX = (this.data.startX + this.data.endX) / 2;

    // Mailbox
    const mailTex = this.textures['contact-mailbox'];
    if (mailTex) {
      const mailbox = new PIXI.Sprite(mailTex);
      mailbox.anchor.set(0.5, 1);
      mailbox.x = centerX;
      mailbox.y = this.groundY;
      mailbox.scale.set(c.mailbox.scale);
      mailbox.alpha = 0;
      this.container.addChild(mailbox);
      this.elements.push(mailbox);
    }

    // Heading
    const heading = new PIXI.Text({
      text: 'Get in Touch',
      style: {
        fontFamily: 'Inter, sans-serif',
        fontSize: c.heading.fontSize,
        fill: CFG.colors.textAccent,
        fontWeight: '500',
        letterSpacing: 2,
      },
    });
    heading.anchor.set(0.5, 1);
    heading.x = centerX;
    heading.y = this.groundY + c.heading.yOffset;
    heading.alpha = 0;
    this.container.addChild(heading);
    this.elements.push(heading);

    // Links
    const links = [
      { label: 'Email', url: `mailto:${contact.email}`, display: contact.email },
      { label: 'GitHub', url: contact.github, display: 'github.com/jackinf' },
      { label: 'LinkedIn', url: contact.linkedin, display: 'linkedin.com/in/jevgenirumin' },
    ];

    links.forEach((link, i) => {
      const y = this.groundY + c.links.yStart + i * c.links.ySpacing;

      const text = new PIXI.Text({
        text: `${link.label}: ${link.display}`,
        style: {
          fontFamily: 'Inter, sans-serif',
          fontSize: c.links.fontSize,
          fill: CFG.colors.textGreen,
          fontWeight: '400',
        },
      });
      text.anchor.set(0.5, 0);
      text.x = centerX;
      text.y = y;
      text.alpha = 0;
      text.eventMode = 'static';
      text.cursor = 'pointer';
      text.on('pointerdown', () => window.open(link.url, '_blank'));
      this.container.addChild(text);
      this.elements.push(text);
    });
  }

  update(visibleLeft, visibleRight) {
    const c = CFG.contact;
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
