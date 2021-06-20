function getCornersOfRect(x, y, w, h) {
  return [
      {x: x, y: y},
      {x: x + w, y: y},
      {x: x, y: y + h},
      {x: x + w, y: y + h}
  ];
}