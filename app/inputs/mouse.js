function mousePressed() {
  if (mouseButton === LEFT) {
    activeSpace.selector.areaStart(activeSpace.cursor.coordinate.x, activeSpace.cursor.coordinate.y);
  }
}

function mouseReleased() {
  if (mouseButton === LEFT) {
    activeSpace.selector.areaEnd();
  }
}