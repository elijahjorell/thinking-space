class Content {
  constructor(space) {
    this.space = space;
    this.rects = [];
    this.activeCreateRect = false;
  }

  createRect(x, y, w, h, text) {
    const newRect = new Rect(this.space, x, y, w, h, text);
    this.rects.push(newRect);
    this.space.editor.start(newRect);
    this.rects.sort((a, b) => a.area - b.area);
  }

  update() {
    this.rects.forEach(rect => rect.update());
  }

  render() {
    this.rects.forEach(rect => rect.render());
  }
}