class Space {
  constructor() {
    this.content = new Content(this);
    this.viewport = new Viewport(this);
    this.hud = new Hud(this);
    this.cursor = new Cursor(this);
    this.selector = new Selector(this);
  }

  update() {
    this.cursor.update();
    this.viewport.update();
    this.selector.update();
  }

  render() {
    this.content.render();
    this.selector.render();
  }
}