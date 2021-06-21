class Space {
  constructor() {
    this.viewport = new Viewport(this);
    this.hud = new Hud(this);
    this.cursor = new Cursor(this);
    this.highlighter = new Highlighter(this);
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
    this.highlighter.update();
    this.content.update();
    this.editor.update();
  }

  render() {
    this.highlighter.render();
    this.content.render();
  }
}