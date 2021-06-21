class Rect {
  constructor(space, x, y, w, h, text) {
    this.space = space;
    this.id = this.space.content.length;
    this.topLeftCorner = {x: x, y: y};
    this.dimensions = {w: w, h: h};
    this.area = w * h;
    this.corners = getCornersOfRect(x, y, w, h);
    this.text = text;
    this.fontSize = 15 / this.space.viewport.scale;
    this.opaque = true;
    this.highlighted = false;
    this.selected = false;
    this.grabbed = false;
  }

  update() {
    this.updateOpaque();
    if (this.grabbed) {
      this.updateCorners();
    }
  }

  render() {
    this.renderRect();
    this.renderText();
  }

  renderRect() {
    if (this.selected || this.highlighted) {
      if (this.opaque) {
        fill('grey');
      } else {
        noFill();
      }
      stroke('white');
    } else {
      if (this.opaque) {
        fill('#29271dff');
      } else {
        noFill();
      }
      stroke('#ffd70a');
    }
    strokeWeight(1/this.space.viewport.scale);
    rect(
        this.topLeftCorner.x,
        this.topLeftCorner.y,
        this.dimensions.w,
        this.dimensions.h
    );
  }

  renderText() {
    if (this.selected || this.highlighted) {
      fill('white');
    } else {
      fill('#ffd70a');
    }
    noStroke();
    textSize(this.fontSize * 1.2);
    if (this.dimensions.h * this.space.viewport.scale > 0.3 * windowHeight || this.dimensions.w * this.space.viewport.scale > 0.3 * windowWidth) {
      text(
          this.text,
          this.topLeftCorner.x,
          this.topLeftCorner.y - this.dimensions.h * 0.025
      );
    } else {
      text(
          this.text,
          this.topLeftCorner.x + this.dimensions.w / 2 - textWidth(this.text) / 2,
          this.topLeftCorner.y + this.dimensions.h / 2
      );
    }
  }

  updateOpaque() {
    if (this.dimensions.h * this.space.viewport.scale > 0.3 * windowHeight ||
        this.dimensions.w * this.space.viewport.scale > 0.3 * windowWidth) {
      this.opaque = false;
    } else {
      this.opaque = true;
    }
  }

  updateCorners() {
    this.corners = getCornersOfRect(this.topLeftCorner.x, this.topLeftCorner.y, w, h);
  }
}