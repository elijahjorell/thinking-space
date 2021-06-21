function mousePressed() {
  switch (mouseButton) {
    case LEFT:
      activeSpace.highlighter.endLinger();
      activeSpace.highlighter.start(activeSpace.cursor.coordinate.x, activeSpace.cursor.coordinate.y);
      break;
    case CENTER:
      activeSpace.viewport.startPan();
      break;
  }
}

function mouseReleased() {
  switch (mouseButton) {
    case LEFT:
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