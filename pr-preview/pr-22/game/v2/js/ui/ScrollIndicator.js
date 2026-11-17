/**
 * Shows/hides scroll indicator based on progress.
 */
export function initScrollIndicator() {
  const el = document.getElementById('scroll-indicator');

  return {
    update(progress) {
      if (progress > 0.05) {
        el.classList.add('hidden');
      } else {
        el.classList.remove('hidden');
      }
    },
  };
}
