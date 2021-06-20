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
    console.log(this)
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
    this.dimensions.w = textWidth(this.text);
    this.dimensions.h = textAscent();
    this.textarea.size(this.dimensions.w, this.dimensions.h);
  }

  updatePosition() {
    const untranslatedCoordinate = this.space.viewport.untranslateCoordinate(
        (this.editedRect.corners.tl.x + this.editedRect.corners.tr.x) / 2 ,
        (this.editedRect.corners.tl.y + this.editedRect.corners.bl.y) / 2
    );
    this.textarea.position(
        untranslatedCoordinate.x - this.dimensions.w / 2,
        untranslatedCoordinate.y - this.dimensions.h / 2
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
    this.textarea.style('font-family', 'sans-serif');
    document.getElementById('editor').addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });
  }
}