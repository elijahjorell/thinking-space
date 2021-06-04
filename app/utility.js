function translateCoordinate(x, y) {
  return {
    x: (x - states.origin.x) / states.scale,
    y: (y - states.origin.y) / states.scale
  }
}

