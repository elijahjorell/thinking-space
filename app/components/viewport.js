class Viewport {
  constructor(space) {
    this.space = space;
    this.origin = {x: 0, y: 0};
    this.scale = 0.01;
    this.activePanning = false;
    this.activeMoving = false;
    this.factorPan = 0.9;
    this.factorZoom = 0.9;
    this.dimensions = {w: windowWidth / this.scale, h: windowHeight / this.scale};
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

  updateDimensions() {
    this.dimensions.w = windowWidth / this.scale;
    this.dimensions.h = windowHeight / this.scale;
  };

  zoom(event) {
    if (event.deltaY > 0) {
      this.zoomOut(this.space.cursor.coordinate);
    } else if (event.deltaY < 0) {
      this.zoomIn(this.space.cursor.coordinate);
    }
    this.updateDimensions();
  }

  zoomIn(coordinate) {
    this.scale /= this.factorZoom;
    this.origin.x += coordinate.x * this.scale * (this.factorZoom - 1);
    this.origin.y += coordinate.y * this.scale * (this.factorZoom - 1);
  }

  zoomOut(coordinate) { // change so that it zooms out in a way that makes cursor centre?
    this.origin.x -= coordinate.x * this.scale * (this.factorZoom - 1);
    this.origin.y -= coordinate.y * this.scale * (this.factorZoom - 1);
    this.scale *= this.factorZoom;
  }

  translateCoordinate(x, y) {
    return {
      x: (x - this.origin.x) / this.scale,
      y: (y - this.origin.y) / this.scale
    };
  }

  untranslateCoordinate(x, y) {
    return {
      x: this.scale * x + this.origin.x,
      y: this.scale * y + this.origin.y
    };
  }
}