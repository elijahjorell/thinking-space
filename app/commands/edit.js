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
    create(
        editorCoordinate.x,
        editorCoordinate.y,
        states.edit.w / states.scale,
        states.edit.h / states.scale,
        states.edit.textArea.elt.value
    );
  }

  document.getElementById('editor').blur();
  states.edit.textArea.elt.value = "";
  states.edit.active = false;
  states.edit.textArea.style('visibility', 'hidden');
}