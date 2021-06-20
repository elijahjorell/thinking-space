class Content {
  constructor(space) {
    this.space = space;
    this.rects = [];
  }

  createRect(x, y, w, h, text) {
    this.rects.push(new Rect(this, x, y, w, h, text));
    this.rects.sort((a, b) => a.area - b.area);
  }

  update() {

  }

  render() {
    this.rects.map((currentRect) => {
      rect(
          currentRect.topLeftCorner.x,
          currentRect.topLeftCorner.y,
          currentRect.dimensions.w,
          currentRect.dimensions.h
      );
    })
  }
}