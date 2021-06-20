class Cursor {
  constructor(space) {
    this.space = space;
    this.coordinate = {x: 0, y: 0};
    this.style = 'default';
  }

  update() {
    this.updateCoordinate();
    this.updateStyle();
  }

  updateCoordinate() {
    this.coordinate = this.space.viewport.translateCoordinate(mouseX, mouseY);
  }

  updateStyle() {
    let newStyle;

    if (this.space.viewport.activePanning) {
      newStyle = 'grabbing';
    } else {
      newStyle = 'default';
    }

    if (newStyle !== this.style) {
      this.style = newStyle;
      document.getElementById('app').style.cursor = this.style;
    }
  }
}