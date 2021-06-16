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
        !keyIsDown(RIGHT_ARROW) &&
        !keyIsDown(87) &&
        !keyIsDown(83) &&
        !keyIsDown(65) &&
        !keyIsDown(68)) {
      moveEnd();
    } else {
      if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        states.origin.y += states.move.speed;
      }
      if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        states.origin.y -= states.move.speed;
      }
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        states.origin.x += states.move.speed;
      }
      if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        states.origin.x -= states.move.speed;
      }
    }
  }
}

function moveEnd() {
  states.move.active = false;
}