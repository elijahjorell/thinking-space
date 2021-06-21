class Actions {
  constructor(space) {
    this.space = space;
    this.noAction = () => {};
    this.mouseMappings = {
      leftClick: this.noAction,
      leftDoubleClick: this.noAction,
      leftHold: this.noAction,
      leftRelease: this.noAction,
      centerClick: this.noAction,
      centerRelease: this.noAction,
      centerWheel: this.noAction
    };
  }

  setup() {
    this.mouseMappings.centerClick = () => {
      activeSpace.viewport.startPan();
    };
  }

  update() {
    this.updateMouseActions();
  }

  updateMouseActions() {
    if (this.space.cursor.detectedRects.length > 0) {
      if (this.space.cursor.selected) {
      } else {

      }
    } else {
      this.mouseMappings.leftClick = () => {
        activeSpace.highlighter.start(activeSpace.cursor.coordinate.x, activeSpace.cursor.coordinate.y);
        activeSpace.highlighter.endLinger();
        if (activeSpace.selector.active) {
          activeSpace.selector.end();
        }
      };
    }
  }
}