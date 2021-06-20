function getCornersOfRect(x, y, w, h) {
  return {
      tl: {x: x, y: y},
      tr: {x: x + w, y: y},
      bl: {x: x, y: y + h},
      br: {x: x + w, y: y + h}
  };
}

function checkCoordinateWithinCorners(coordinate, corners) {
  if (coordinate.x > corners.tl.x &&
      coordinate.x < corners.tr.x &&
      coordinate.y > corners.tl.y &&
      coordinate.y < corners.bl.y) {
    return true;
  }
  return false;
}