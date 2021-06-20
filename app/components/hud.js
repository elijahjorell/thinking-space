class Hud {
  constructor(space) {
    this.space = space;
  }

  render() {
    fill(255);
    noStroke();
    textSize(13);
    text(this.space.viewport.scale, 10, 20);
    text(-round(this.space.viewport.origin.x) + ", " + round(this.space.viewport.origin.y), 10, 35);
  }
}