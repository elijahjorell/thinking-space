class Space {
  constructor() {
    this.viewport = new Viewport(this);
    this.hud = new Hud(this);
    this.cursor = new Cursor(this);
    this.selector = new Selector(this);
    this.editor = new Editor(this);
    this.content = new Content(this);
  }

  setup() {
    this.editor.setup();
  }

  update() {
    this.cursor.update();
    this.viewport.update();
    this.selector.update();
    this.content.update();
    this.editor.update();
  }

  render() {
    this.selector.render();
    this.content.render();
  }
}