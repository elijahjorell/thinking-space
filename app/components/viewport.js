class Viewport {
  constructor(space) {
    this.space = space;
    this.origin = {x: 0, y: 0};
    this.scale = 0.01;
    this.activePanning = false;
    this.activeMoving = false;
    this.factorPan = 0.9;
    this.factorZoom = 0.9;
  }

  update() {
    this.updatePan();
    this.updateMove();
  }

  startPan() {
    this.activePanning = true;
  }

  updatePan() {
    if (this.activePanning) {
      this.origin.x -= this.factorPan * (pmouseX - mouseX);
      this.origin.y -= this.factorPan * (pmouseY - mouseY);
    }
  }

  panEnd() {
    this.activePanning = false;
  }

  startMove() {

  }

  updateMove() {

  }

  moveEnd() {

  }

  zoom(event) {
    if (event.deltaY > 0) {
      this.zoomOut(this.space.cursor.coordinate);
    } else if (event.deltaY < 0) {
      this.zoomIn(this.space.cursor.coordinate);
    }
  }

  zoomIn(coordinate) {
    this.scale /= this.factorZoom;
    this.origin.x += coordinate.x * this.scale * (this.factorZoom - 1);
    this.origin.y += coordinate.y * this.scale * (this.factorZoom - 1);
  }

  zoomOut(coordinate) {
    this.origin.x -= coordinate.x * this.scale * (this.factorZoom - 1);
    this.origin.y -= coordinate.y * this.scale * (this.factorZoom - 1);
    this.scale *= this.factorZoom;
  }

  translateCoordinate(x, y) {
    return{
      x: (x - this.origin.x) / this.scale,
      y: (y - this.origin.y) / this.scale
    }
  }

}