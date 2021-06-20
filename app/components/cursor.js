class Cursor {
  constructor(space) {
    this.space = space;
    this.coordinate = {x: 0, y: 0};
  }

  updateCoordinate() {
    this.coordinate = this.space.viewport.translateCoordinate(mouseX, mouseY);
  }
}