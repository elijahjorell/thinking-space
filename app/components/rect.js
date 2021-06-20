class Rect {
  constructor(space, x, y, w, h, text) {
    this.space = space;
    this.id = this.space.content.length;
    this.topLeftCorner = {x: x, y: y};
    this.dimensions = {w: w, h: h};
    this.area = w * h;
    this.corners = getCornersOfRect(x, y, w, h);
    this.text = text;
    this.opaque = true;
  }

  update() {
    this.updateOpaque();
  }

  render() {
    if (this.opaque) {
      fill('#29271dff');
    } else {
      noFill();
    }
    stroke('#ffd70a');
    strokeWeight(1/this.space.viewport.scale);
    rect(
        this.topLeftCorner.x,
        this.topLeftCorner.y,
        this.dimensions.w,
        this.dimensions.h
    );
  }

  updateOpaque() {
    if (this.dimensions.h * this.space.viewport.scale > 0.3 * windowHeight ||
        this.dimensions.w * this.space.viewport.scale > 0.3 * windowWidth) {
      this.opaque = false;
    } else {
      this.opaque = true;
    }
  }

}