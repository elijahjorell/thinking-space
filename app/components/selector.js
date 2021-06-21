class Selector {
  constructor(space) {
    this.space = space;
    this.active = false;
    this.selectedRects = [];

  }

  start(rects) {
    this.selectedRects = rects;
    this.selectedRects.forEach((currentRect) => {
      currentRect.selected = true;
    });
    this.active = true;
  }

  end() {
    this.selectedRects.forEach((currentRect) => {
      currentRect.selected = false;
    });
    this.selectedRects = [];
    this.active = false;
  }
}