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
  let cursorTranslated = translateCoordinate(mouseX, mouseY)
  states.cursor.x = cursorTranslated.x;
  states.cursor.y = cursorTranslated.y;
}

document.addEventListener('mousedown', (e) => {
  if (e.button === 1) {
    e.preventDefault();
  }
});