function panStart() {
  states.panning = true;
}

function panDuring() {
  if (states.panning) {
    states.origin.x -= settings.panFactor * (pmouseX - mouseX);
    states.origin.y -= settings.panFactor * (pmouseY - mouseY);
  }
}

function panEnd() {
  states.panning = false;
}