class Rect {
  constructor(space, x, y, w, h, text) {
    this.space = space;
    this.topLeftCorner = {x: x, y: y};
    this.dimensions = {w: w, h: h};
    this.area = w * h;
    this.corners = getCornersOfRect(x, y, w, h);
    this.text = text;
    this.opaque = true;
  }

  updateOpaque() {

  }

  render() {

  }
}