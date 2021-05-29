function selectAreaBegin() {
  states.selectArea.active = true;
  states.selectArea.coordinates.origin.x = states.cursor.x;
  states.selectArea.coordinates.origin.y = states.cursor.y;
}

function selectAreaDuring() {
  if (states.selectArea.active) {
    selectAreaUpdateBounds();
  }
}

function selectAreaUpdateBounds() {
  if (states.cursor.y < states.selectArea.coordinates.origin.y) {
    if (states.cursor.x < states.selectArea.coordinates.origin.x) {
      // TOP LEFT QUADRANT
      states.selectArea.coordinates.topLeftCorner.x = states.cursor.x;
      states.selectArea.coordinates.topLeftCorner.y = states.cursor.y;
      states.selectArea.dimensions.w = states.selectArea.coordinates.origin.x - states.cursor.x;
      states.selectArea.dimensions.h = states.selectArea.coordinates.origin.y - states.cursor.y;
    } else {
      // TOP RIGHT QUADRANT
      states.selectArea.coordinates.topLeftCorner.x = states.selectArea.coordinates.origin.x;
      states.selectArea.coordinates.topLeftCorner.y = states.cursor.y;
      states.selectArea.dimensions.w = states.cursor.x - states.selectArea.coordinates.origin.x;
      states.selectArea.dimensions.h = states.selectArea.coordinates.origin.y - states.cursor.y;
    }
  } else {
    if (states.cursor.x < states.selectArea.coordinates.origin.x) {
      // BOTTOM LEFT QUADRANT
      states.selectArea.coordinates.topLeftCorner.x = states.cursor.x;
      states.selectArea.coordinates.topLeftCorner.y = states.selectArea.coordinates.origin.y;
      states.selectArea.dimensions.w = states.selectArea.coordinates.origin.x - states.cursor.x;
      states.selectArea.dimensions.h = states.cursor.y - states.selectArea.coordinates.origin.y;
    } else {
      // BOTTOM RIGHT QUADRANT
      states.selectArea.coordinates.topLeftCorner.x = states.selectArea.coordinates.origin.x;
      states.selectArea.coordinates.topLeftCorner.y = states.selectArea.coordinates.origin.y;
      states.selectArea.dimensions.w = states.cursor.x - states.selectArea.coordinates.origin.x;
      states.selectArea.dimensions.h = states.cursor.y - states.selectArea.coordinates.origin.y;
    }
  }
}

function cSelectAreaEnd() {
  states.selectArea.active = false;
}