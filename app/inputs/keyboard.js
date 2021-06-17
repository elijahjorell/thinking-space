function keyPressed() {
  if (keyCode === ENTER) {
    if (states.pendingRect.active === true) {
      create(
          states.pendingRect.x,
          states.pendingRect.y,
          states.pendingRect.w,
          states.pendingRect.h,
          ""
      );
      if (states.edit.active) {
        editEnd();
      }
      states.pendingRect.active = false;
    } else {
      if (states.edit.active) {
        editEnd();
      } else {
        editStart();
      }
    }
  }

  if (keyCode === ESCAPE) {
    editEnd();
  }

  if (keyCode === UP_ARROW) {
    if (!keyIsDown(CONTROL)) {
      moveStart();
    }
  } else if (keyCode === DOWN_ARROW) {
    if (!keyIsDown(CONTROL)) {
      moveStart();
    }
  } else if (keyCode === LEFT_ARROW) {
    moveStart();
  } else if (keyCode === RIGHT_ARROW) {
    moveStart();
  }
}

function keyTyped() {
  if (!states.edit.active && keyCode !== ENTER) {
    editStart();
  }
}