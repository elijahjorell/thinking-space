class Viewport {
  constructor(space) {
    this.space = space;
    this.origin = {x: 0, y: 0};
    this.scale = 1;
    this.panning = false;
    this.moving = false;
  }

  panStart() {

  }

  panDuring() {

  }

  panEnd() {

  }

  moveStart() {

  }

  moveDuring() {

  }

  moveEnd() {

  }

  zoomIn() {

  }

  zoomOut() {

  }

  translateCoordinate(x, y) {
    return{
      x: (x - this.origin.x) / this.scale,
      y: (y - this.origin.y) / this.scale
    }
  }

}