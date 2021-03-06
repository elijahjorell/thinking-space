class Highlighter {
  constructor(space) {
    this.space = space;
    this.active = false;
    this.activeLinger = false;
    this.origin = {x: 0, y: 0};
    this.topLeftCorner = {x: 0, y: 0};
    this.corners = {tl: 0, tr: 0, bl: 0, br: 0};
    this.dimensions = {w: 0, h: 0};
    this.detectedRects = [];
  }

  start(x, y) {
    this.active = true;
    this.origin.x = x;
    this.origin.y = y;
  }

  update() {
    if (this.active) {
      this.updateBounds();
      this.updateDetectedRects();
    }
  }

  end() {
    this.detectedRects.forEach((currentRect) => {
      currentRect.highlighted = false;
    });
    this.active = false;
    this.startLinger();
  }

  startLinger() {
    this.activeLinger = true;
  }

  endLinger() {
    this.activeLinger = false;
  }

  render() {
    strokeWeight(1/this.space.viewport.scale);
    if (this.active) {
      fill(255, 120);
      stroke(255);
      rect(this.topLeftCorner.x, this.topLeftCorner.y, this.dimensions.w, this.dimensions.h);
    } else if (this.activeLinger) {
      noFill();
      stroke(100, 100, 100);
      rect(this.topLeftCorner.x, this.topLeftCorner.y, this.dimensions.w, this.dimensions.h);
    }
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
    this.corners = getCornersOfRect(
        this.topLeftCorner.x,
        this.topLeftCorner.y,
        this.dimensions.w,
        this.dimensions.h
    );
  }

  updateDetectedRects() {
    this.detectedRects = [];
    this.space.content.rects.forEach((currentRect) => {
      const coordinates = Object.values(currentRect.corners);
      if (checkAllCoordinatesWithinCorners(coordinates, this.corners)) {
        this.detectedRects.push(currentRect);
        currentRect.highlighted = true;
      } else {
        currentRect.highlighted = false;
      }
    })
  }
}
