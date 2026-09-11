/**
 * DOM modal overlay for detailed CV content.
 */

let isOpen = false;

export function openModal(title, bodyHtml) {
  const overlay = document.getElementById('modal-overlay');
  const titleEl = document.getElementById('modal-title');
  const bodyEl = document.getElementById('modal-body');

  titleEl.textContent = title;
  bodyEl.innerHTML = bodyHtml;
  overlay.classList.remove('hidden');
  isOpen = true;
}

export function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('hidden');
  isOpen = false;
}

export function isModalOpen() {
  return isOpen;
}

export function initModal() {
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeModal();
  });
}
