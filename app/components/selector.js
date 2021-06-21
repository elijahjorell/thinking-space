class Selector {
  constructor(space) {
    this.space = space;
    this.active = false;
    this.selectedRects = [];

  }

  start(rects) {
    this.active = true;
    this.selectedRects = rects;
  }

  end() {
    this.active = false;
    this.selectedRects = [];
  }

  update() {

  }

}