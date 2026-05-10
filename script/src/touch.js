// Touch / swipe support for mobile devices.
// Converts horizontal finger movement into a virtual vertical scroll position
// so the same scroll-based animation logic works on both desktop and mobile.

import { TOUCH_SPEED } from "./config.js";

export function initTouch({ getScrollPos, setScrollPos, onMove, getPageHeight, getContainerHeight }) {
  let startX      = 0;
  let posOnStart  = 0;

  document.addEventListener("touchstart", e => {
    startX     = e.targetTouches[0].pageX;
    posOnStart = getScrollPos();
  });

  document.addEventListener("touchmove", e => {
    const currentX = e.targetTouches[0].pageX;
    const maxPos   = getPageHeight() - getContainerHeight();
    const raw      = posOnStart + (startX - currentX) * TOUCH_SPEED;
    setScrollPos(Math.max(0, Math.min(raw, maxPos)));
    onMove();
  });
}
