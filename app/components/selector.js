class Selector {
  constructor(space) {
    this.space = space;
    this.active = false;
    this.activeArea = false;
    this.activeAreaLinger = false;
    this.origin = {x: 0, y: 0};
    this.topLeftCorner = {x: 0, y: 0};
    this.dimensions = {w: 0, h: 0};
  }

  update() {
    this.updateArea();
  }

  render() {
    strokeWeight(1/this.space.viewport.scale);
    if (this.activeArea) {
      fill(255, 120);
      stroke(255);
      rect(this.topLeftCorner.x, this.topLeftCorner.y, this.dimensions.w, this.dimensions.h);
    } else if (this.activeAreaLinger) {
      noFill();
      stroke(100, 100, 100);
      rect(this.topLeftCorner.x, this.topLeftCorner.y, this.dimensions.w, this.dimensions.h);
    }
  }

  startArea(x, y) {
    this.activeArea = true;
    this.origin.x = x;
    this.origin.y = y;
  }

  updateArea() {
    if (this.activeArea) {
      this.updateBounds();
    }
  }

  endArea() {
    this.activeArea = false;
    this.startAreaLinger();
  }

  startAreaLinger() {
    this.activeAreaLinger = true;
  }

  endAreaLinger() {
    this.activeAreaLinger = false;
  }

  updateBounds() {
    if (this.space.cursor.coordinate.y < this.origin.y) {
      if (this.space.cursor.coordinate.x < this.origin.x) {
        // Top-left quadrant
        this.topLeftCorner.x = this.space.cursor.coordinate.x;
        this.topLeftCorner.y = this.space.cursor.coordinate.y;
        this.dimensions.w = this.origin.x - this.space.cursor.coordinate.x;
        this.dimensions.h = this.origin.y - this.space.cursor.coordinate.y;
      } else {
        // Top-right quadrant
        this.topLeftCorner.x = this.origin.x;
        this.topLeftCorner.y = this.space.cursor.coordinate.y;
        this.dimensions.w = this.space.cursor.coordinate.x - this.origin.x;
        this.dimensions.h = this.origin.y - this.space.cursor.coordinate.y;
      }
    } else {
      if (this.space.cursor.coordinate.x < this.origin.x) {
        // Bottom-left quadrant
        this.topLeftCorner.x = this.space.cursor.coordinate.x;
        this.topLeftCorner.y = this.origin.y;
        this.dimensions.w = this.origin.x - this.space.cursor.coordinate.x;
        this.dimensions.h = this.space.cursor.coordinate.y - this.origin.y;
      } else {
        // Bottom-right quadrant
        this.topLeftCorner.x = this.origin.x;
        this.topLeftCorner.y = this.origin.y;
        this.dimensions.w = this.space.cursor.coordinate.x - this.origin.x;
        this.dimensions.h = this.space.cursor.coordinate.y - this.origin.y;
      }
    }
  }
}