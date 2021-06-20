class Space {
  constructor() {
    this.rects = [];
    this.viewport = new Viewport(this);
    this.hud = new Hud(this);
    this.cursor = new Cursor(this);
    this.selector = new Selector(this);
  }

  createRect(x, y, w, h, text) {
    this.rects.push(new Rect(this, x, y, w, h, text));
    this.rects.sort((a, b) => a.area - b.area);
  }
}