class Content {
  constructor(space) {
    this.space = space;
    this.rects = [];
  }

  createRect(x, y, w, h, text) {
    this.rects.push(new Rect(this.space, x, y, w, h, text));
    this.rects.sort((a, b) => a.area - b.area);
  }

  update() {
    this.rects.map(rect => rect.update());
  }

  render() {
    this.rects.map(rect => rect.render());
  }
}