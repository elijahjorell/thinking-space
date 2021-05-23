var cZoom = {
  zoomFactor: 1.05,
}

function zoom(event) {
  // zoom out
  if (event.deltaY > 0) {
    state.viewport.scale /= cZoom.zoomFactor;
    state.origin.coordinate.x += state.cursor.coordinate.x * state.viewport.scale * (cZoom.zoomFactor - 1);
    state.origin.coordinate.y += state.cursor.coordinate.y * state.viewport.scale * (cZoom.zoomFactor - 1);
    // zoom in
  } else if (event.deltaY < 0) {
    state.origin.coordinate.x -= state.cursor.coordinate.x * state.viewport.scale * (cZoom.zoomFactor - 1);
    state.origin.coordinate.y -= state.cursor.coordinate.y * state.viewport.scale * (cZoom.zoomFactor - 1);
    state.viewport.scale *= cZoom.zoomFactor;
  }
}