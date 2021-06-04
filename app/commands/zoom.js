function zoom(event) {
  if (event.deltaY > 0) {
    zoomOut(states.cursor);
  } else if (event.deltaY < 0) {
    zoomIn(states.cursor);
  }
}

function zoomOut(coordinate) {
  states.origin.x -= coordinate.x * states.scale * (settings.zoomFactor - 1);
  states.origin.y -= coordinate.y * states.scale * (settings.zoomFactor - 1);
  states.scale *= settings.zoomFactor;
}

function zoomIn(coordinate) {
  states.scale /= settings.zoomFactor;
  states.origin.x += coordinate.x * states.scale * (settings.zoomFactor - 1);
  states.origin.y += coordinate.y * states.scale * (settings.zoomFactor - 1);
}

function arrowZoomDuring() {
  if (keyIsDown(CONTROL) && keyIsDown(UP_ARROW)) {
    zoomIn(translateCoordinate(windowWidth/2, windowHeight/2));
  }
  if (keyIsDown(CONTROL) && keyIsDown(DOWN_ARROW)) {
    zoomOut(translateCoordinate(windowWidth/2, windowHeight/2));
  }
}