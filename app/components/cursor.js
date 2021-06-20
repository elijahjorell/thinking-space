class Cursor {
  constructor(space) {
    this.space = space;
    this.coordinate = {x: 0, y: 0};
    this.style = 'default';
    this.detectedRects = [];
  }

  update() {
    this.updateCoordinate();
    this.updateDetectedRects();
    this.updateStyle();
  }

  updateCoordinate() {
    this.coordinate = this.space.viewport.translateCoordinate(mouseX, mouseY);
  }

  updateDetectedRects() {
    let detectedRects = [];
    this.space.content.rects.map((currentRect) => {
      if (checkCoordinateWithinCorners(this.coordinate, currentRect.corners) && currentRect.opaque) {
        detectedRects.push(currentRect.id);
      }
    })
    this.detectedRects = detectedRects;
  }

  updateStyle() {
    let newStyle;

    if (this.detectedRects.length > 0) {
      newStyle = 'move';
    } else if (this.space.viewport.activePanning) {
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