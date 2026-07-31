// Parallax layer management.
// Each layer carries a data-layer-speed attribute (0–1) that controls how slowly
// it scrolls relative to the foreground layer (speed 0.5 = half foreground speed).

function mapLayer(id) {
  const elem = document.getElementById(id);
  const speed = parseFloat(elem.getAttribute("data-layer-speed"));
  const raw = elem.getAttribute("data-left-offset");
  return { elem, speed, offset: raw ? parseFloat(raw) : 0 };
}

const layers = [
  mapLayer("layer-horizontal-1"),
  mapLayer("layer-horizontal-2"),
  mapLayer("layer-horizontal-3"),
  mapLayer("layer-horizontal-4"),
  mapLayer("layer-horizontal-5"),
];

export function moveLayers(scrollPos) {
  for (const layer of layers) {
    layer.elem.style.left = `${layer.offset - layer.speed * scrollPos}px`;
  }
}
