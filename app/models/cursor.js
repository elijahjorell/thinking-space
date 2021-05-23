class Cursor {
  constructor() {
    this.coordinate = new Coordinate(0, 0, 0);
  }

  updateCoordinate() {
    this.coordinate.x = (mouseX - state.origin.coordinate.x) / state.viewport.scale;
    this.coordinate.y = (mouseY - state.origin.coordinate.y) / state.viewport.scale;
  }
}