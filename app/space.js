class Space {
  constructor() {
    this.viewport = new Viewport(this);
    this.hud = new Hud(this);
    this.cursor = new Cursor(this);
    this.highlighter = new Highlighter(this);
    this.selector = new Selector(this);
    this.editor = new Editor(this);
    this.content = new Content(this);
    this.actions = new Actions(this);
  }

  setup() {
    this.editor.setup();
    this.actions.setup();
  }

  update() {
    this.cursor.update();
    this.viewport.update();
    this.highlighter.update();
    this.content.update();
    this.editor.update();
    this.actions.update();
  }

  render() {
    this.content.render();
    this.highlighter.render();
  }
}