function mouseWheel(e) {
  state.viewport.coordinate.z -= e.delta/100;
}

function mouseDisableAutoscroll() {
  document.addEventListener('mousedown', (e) => {
    if (e.button === 1) {
      e.preventDefault();
    }
  });
}

