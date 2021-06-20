class Rect {
  constructor(x, y, w, h, text) {
    this.origin = {x: x, y: y};
    this.dimensions = {w: w, h: h};
    this.corners = getCornersOfRect(x, y, w, h);
    this.text = text;
    this.opaque = true;
  }

  updateOpaque() {

  }

  render() {

  }
}