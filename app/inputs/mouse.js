function mousePressed() {
  if (mouseButton === CENTER) {
    // cPanBegin();
  }
}

function mouseReleased() {
  if (mouseButton === CENTER) {
    // cPanEnd();
  }
}

function mouseWheel(e) {
  state.viewport.coordinate.z -= e.delta/100;
  zoom(e);
}

function mouseDisableAutoscroll() {
  document.addEventListener('mousedown', (e) => {
    if (e.button === 1) {
      e.preventDefault();
    }
  });
}

