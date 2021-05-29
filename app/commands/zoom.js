function zoom(event) {
  if (event.deltaY > 0) {
    zoomIn();
  } else if (event.deltaY < 0) {
    zoomOut();
  }
}

function zoomIn() {
  states.scale *= settings.zoomFactor;
  states.origin.x -= states.cursor.x * states.scale * (settings.zoomFactor - 1);
  states.origin.y -= states.cursor.y * states.scale * (settings.zoomFactor - 1);
}

function zoomOut() {
  states.scale /= settings.zoomFactor;
  states.origin.x += states.cursor.x * states.scale * (settings.zoomFactor - 1);
  states.origin.y += states.cursor.y * states.scale * (settings.zoomFactor - 1);
}