function keyPressed() {
  if (keyCode === ENTER) {
    if (states.pendingRect.active === true) {
      create(
          states.pendingRect.x,
          states.pendingRect.y,
          states.pendingRect.w,
          states.pendingRect.h
      );
      states.pendingRect.active = false;
    } else {
      if (states.edit.active) {
        let editorCoordinate = translateCoordinate(states.edit.x, states.edit.y);

        if (states.edit.textArea.elt.value !== "") {
          create(
              editorCoordinate.x,
              editorCoordinate.y,
              states.edit.w / states.scale,
              states.edit.h / states.scale
          );
        }
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