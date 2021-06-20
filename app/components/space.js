class Space {
  constructor() {
    this.rects = [];
    this.viewport = new Viewport(this);
    this.hud = new Hud(this);
  }
}