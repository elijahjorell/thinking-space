function moveStart() {
  if (!states.move.active) {
    states.move.active = true;
  }
}

function moveDuring() {
  if (states.move.active) {
    if (!keyIsDown(UP_ARROW) &&
        !keyIsDown(DOWN_ARROW) &&
        !keyIsDown(LEFT_ARROW) &&
        !keyIsDown(RIGHT_ARROW)) {
      moveEnd();
    } else {
      if (keyIsDown(UP_ARROW)) {
        states.origin.y += states.move.speed;
      }
      if (keyIsDown(DOWN_ARROW)) {
        states.origin.y -= states.move.speed;
      }
      if (keyIsDown(LEFT_ARROW)) {
        states.origin.x += states.move.speed;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        states.origin.x -= states.move.speed;
      }
    }
  }
}

function moveEnd() {
  states.move.active = false;
}