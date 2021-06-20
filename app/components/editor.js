class Editor {
  constructor(space) {
    this.space = space;
    this.active = false;
    this.editedRect = undefined;
    this.textarea = undefined;
    this.text = undefined;
    this.fontSize = undefined;
    this.dimensions = {w: 0, h: 0};
  }

  setup() {
    this.setupEditor();
  }

  start(editedRect) {
    this.editedRect = editedRect;
    this.active = true;
    this.textarea.style('visibility', 'visible');
    this.textarea.elt.focus();
    this.textarea.elt.select();
  }

  update() {
    if (this.active) {
      if (document.activeElement.id !== 'editor') {
        this.end();
      }
      this.updateText();
      this.updateSize();
      this.updatePosition();
    }
  }

  end() {
    this.editedRect.text = this.text;
    this.textarea.style('visibility', 'hidden');
    this.active = false;
  }

  render() {

  }

  updateText() {
    this.text = this.textarea.elt.value;
    this.fontSize = this.editedRect.fontSize * this.space.viewport.scale;
    this.textarea.style('font-size', this.fontSize + 'px');
  }

  updateSize() {
    textSize(this.fontSize);
    this.textarea.size(textWidth(this.text), textAscent() * 0.8);
  }

  updatePosition() {
    const untranslatedCoordinate = this.space.viewport.untranslateCoordinate(
        this.editedRect.topLeftCorner.x,
        this.editedRect.topLeftCorner.y
    );
    this.textarea.position(
        untranslatedCoordinate.x,
        untranslatedCoordinate.y
    );
  }

  setupEditor() {
    this.textarea = createElement('textarea');
    this.textarea.id('editor');
    this.textarea.position(0, 0);
    this.textarea.size(200, 100);
    this.textarea.style('visibility', 'hidden');
    this.textarea.style('resize', 'none');
    this.textarea.style('overflow', 'hidden');
    this.textarea.style('padding', '0');
    this.textarea.style('margin', '0');
    document.getElementById('editor').addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });
  }
}