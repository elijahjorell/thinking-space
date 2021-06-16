function translateCoordinate(x, y) {
  return {
    x: (x - states.origin.x) / states.scale,
    y: (y - states.origin.y) / states.scale
  }
}

function getIndexOfRectWithId(id) {
  let i;
  for (i = 0; i < states.rects.length; i++) {
    if (id === states.rects[i].id) {
      return i;
    }
  }
}