function mousePressed() {
  if (mouseButton === LEFT) {
    selectAreaBegin();
  } else if (mouseButton === CENTER) {
    panStart();
  }
}

function mouseReleased() {
  if (mouseButton === LEFT) {
    cSelectAreaEnd();
  } else if (mouseButton === CENTER) {
    panEnd();
  }
}

function mouseWheel(event) {
  zoom(event);
}

function cursorTranslate() {
  states.cursor.x = (mouseX - states.origin.x) / states.scale;
  states.cursor.y = (mouseY - states.origin.y) / states.scale;
}

document.addEventListener('mousedown', (e) => {
  if (e.button === 1) {
    e.preventDefault();
  }
});