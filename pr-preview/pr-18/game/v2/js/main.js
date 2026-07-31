/**
 * V2 Interactive CV Portfolio — Entry Point
 *
 * Initializes PixiJS game, UI overlays, and ties everything together.
 */
import Game from './engine/Game.js';
import { initModal } from './ui/Modal.js';
import { initScrollIndicator } from './ui/ScrollIndicator.js';
import { initNavDots } from './ui/NavDots.js';
import CFG from './config.js';

async function boot() {
  const container = document.getElementById('game-container');
  const loadingScreen = document.getElementById('loading-screen');
  const progressBar = document.getElementById('load-progress');
  const statusText = document.getElementById('load-status');

  // Init UI
  initModal();

  // Create and init game
  const game = new Game();

  statusText.textContent = 'Loading assets...';

  await game.init(container, (progress) => {
    const pct = Math.round(progress * 100);
    progressBar.style.width = `${pct}%`;
    statusText.textContent = `Loading assets... ${pct}%`;
  });

  // Init nav dots (needs input manager)
  initNavDots(game.input, CFG.world.width * CFG.camera.scrollMultiplier);

  // Init scroll indicator
  const scrollIndicator = initScrollIndicator();

  // Hide loading screen
  statusText.textContent = 'Ready!';
  await new Promise(r => setTimeout(r, 300));
  loadingScreen.classList.add('fade-out');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 600);

  // UI update loop (tied to game ticker)
  game.app.ticker.add(() => {
    scrollIndicator.update(game.scrollProgress);
  });
}

// Start
boot().catch((err) => {
  console.error('Failed to initialize:', err);
  const status = document.getElementById('load-status');
  if (status) status.textContent = `Error: ${err.message}`;
});
