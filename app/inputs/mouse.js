function mousePressed() {
  switch (mouseButton) {
    case LEFT:
      activeSpace.selector.endAreaLinger();
      activeSpace.selector.startArea(activeSpace.cursor.coordinate.x, activeSpace.cursor.coordinate.y);
      break;
    case CENTER:
      activeSpace.viewport.startPan();
      break;
  }
}

function mouseReleased() {
  switch (mouseButton) {
    case LEFT:
      activeSpace.selector.endArea();
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