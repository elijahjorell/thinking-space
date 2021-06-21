function mousePressed() {
  switch (mouseButton) {
    case LEFT:
      activeSpace.actions.mouseMappings.leftClick();
      break;
    case CENTER:
      activeSpace.actions.mouseMappings.centerClick();
      break;
  }
}

function mouseReleased() {
  switch (mouseButton) {
    case LEFT:
      if (activeSpace.highlighter.detectedRects.length > 0) {
        activeSpace.selector.start(activeSpace.highlighter.detectedRects);
      }
      activeSpace.highlighter.end();
      break;
    case CENTER:
      activeSpace.viewport.panEnd();
      break;
  }
}

function mouseWheel(event) {
  activeSpace.viewport.zoom(event);
}

document.addEventListener('mousedown', (e) => {
  if (e.button === 1) {
    e.preventDefault();
  }
});