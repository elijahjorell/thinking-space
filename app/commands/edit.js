function editStart() {
  states.edit.active = true;
  states.edit.textArea.style('visibility', 'visible');
  states.edit.textArea.elt.focus();
}

function editDuring() {

}

function editEnd() {
  let editorCoordinate = translateCoordinate(states.edit.x, states.edit.y);

  if (states.edit.textArea.elt.value !== "") {
    if (states.pendingRect.active) {
      create(
          states.pendingRect.x,
          states.pendingRect.y,
          states.pendingRect.w,
          states.pendingRect.h,
          states.edit.textArea.elt.value
      );
    } else {
      create(
          editorCoordinate.x,
          editorCoordinate.y,
          states.edit.w / states.scale,
          states.edit.h / states.scale,
          states.edit.textArea.elt.value
      );
    }
  }

  document.getElementById('editor').blur();
  states.edit.textArea.elt.value = "";
  states.edit.active = false;
  states.edit.textArea.style('visibility', 'hidden');
}