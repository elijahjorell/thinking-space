function editStart() {
  states.edit.active = true;
  states.edit.textArea.style('visibility', 'visible');
  states.edit.textArea.elt.focus();
}

function editDuring() {

}

function editEnd() {
  document.getElementById('editor').blur();
  states.edit.active = false;
  states.edit.textArea.style('visibility', 'hidden');
}