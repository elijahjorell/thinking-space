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
      // Top-left quadrant
      states.selectArea.coordinates.topLeftCorner.x = states.cursor.x;
      states.selectArea.coordinates.topLeftCorner.y = states.cursor.y;
      states.selectArea.dimensions.w = states.selectArea.coordinates.origin.x - states.cursor.x;
      states.selectArea.dimensions.h = states.selectArea.coordinates.origin.y - states.cursor.y;
    } else {
      // Top-right quadrant
      states.selectArea.coordinates.topLeftCorner.x = states.selectArea.coordinates.origin.x;
      states.selectArea.coordinates.topLeftCorner.y = states.cursor.y;
      states.selectArea.dimensions.w = states.cursor.x - states.selectArea.coordinates.origin.x;
      states.selectArea.dimensions.h = states.selectArea.coordinates.origin.y - states.cursor.y;
    }
  } else {
    if (states.cursor.x < states.selectArea.coordinates.origin.x) {
      // Bottom-left quadrant
      states.selectArea.coordinates.topLeftCorner.x = states.cursor.x;
      states.selectArea.coordinates.topLeftCorner.y = states.selectArea.coordinates.origin.y;
      states.selectArea.dimensions.w = states.selectArea.coordinates.origin.x - states.cursor.x;
      states.selectArea.dimensions.h = states.cursor.y - states.selectArea.coordinates.origin.y;
    } else {
      // Bottom-right quadrant
      states.selectArea.coordinates.topLeftCorner.x = states.selectArea.coordinates.origin.x;
      states.selectArea.coordinates.topLeftCorner.y = states.selectArea.coordinates.origin.y;
      states.selectArea.dimensions.w = states.cursor.x - states.selectArea.coordinates.origin.x;
      states.selectArea.dimensions.h = states.cursor.y - states.selectArea.coordinates.origin.y;
    }
  }
}

function cSelectAreaEnd() {
  states.selectArea.active = false;
  states.pendingRect.active = true;
  states.pendingRect.x = states.selectArea.coordinates.topLeftCorner.x;
  states.pendingRect.y = states.selectArea.coordinates.topLeftCorner.y;
  states.pendingRect.w = states.selectArea.dimensions.w;
  states.pendingRect.h = states.selectArea.dimensions.h;
}