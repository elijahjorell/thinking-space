class Grabber {
  constructor(space) {
    this.space = space;
    this.active = false;
    this.rectOffsetPairs = [];
  }

  start(x, y, rects) {
    this.rectOffsetPairs = rects.map((currentRect) => {
      return {
        rect: currentRect,
        offset: {
          x: x - currentRect.topLeftCorner.x,
          y: y - currentRect.topLeftCorner.y
        }
      };
    });
    this.active = true;
  }

  update() {
    if (this.active) {
      this.rectOffsetPairs.forEach((rectOffsetPair) => {
        rectOffsetPair.rect.topLeftCorner.x = this.space.cursor.coordinate.x - rectOffsetPair.offset.x;
        rectOffsetPair.rect.topLeftCorner.y = this.space.cursor.coordinate.y - rectOffsetPair.offset.y;
      });
    }
  }

  end() {
    this.active = false;
  }
}