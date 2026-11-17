import CFG from '../config.js';

const sections = Object.entries(CFG.sections).map(([id, bounds]) => ({
  id,
  label: id.charAt(0).toUpperCase() + id.slice(1),
  ...bounds,
}));

export function initNavDots(inputManager, maxScroll) {
  const dots = document.querySelectorAll('.nav-dot');

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const sectionId = dot.dataset.section;
      const section = sections.find(s => s.id === sectionId);
      if (section && inputManager) {
        const targetProgress = section.startX / CFG.world.width;
        inputManager.scrollTo(targetProgress);
      }
    });
  });

  window.addEventListener('sectionchange', (e) => {
    const active = e.detail.section;
    dots.forEach((dot) => {
      dot.classList.toggle('active', dot.dataset.section === active);
    });
  });

  const labelEl = document.getElementById('section-label');
  window.addEventListener('sectionchange', (e) => {
    const section = sections.find(s => s.id === e.detail.section);
    if (section) {
      labelEl.textContent = section.label;
      labelEl.classList.remove('hidden');
    }
  });
}
