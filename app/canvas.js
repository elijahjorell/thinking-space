function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30, 30, 30);

  fill(255);
  noStroke();
  text(states.scale, 8, 20);

  // if (states.scale)

  //
  translate(states.origin.x, states.origin.y);
  scale(states.scale);

  //
  cursorTranslate();

  //
  panDuring();
  selectAreaDuring();

  //
  noFill();
  stroke('#ffd70a');
  rect(100, 100, 100, 100);

  drawSelectArea();
}

function drawSelectArea() {
  if (states.selectArea.active) {
    stroke(255);
    fill(255, 120);
    rect(states.selectArea.coordinates.topLeftCorner.x,
        states.selectArea.coordinates.topLeftCorner.y,
        states.selectArea.dimensions.w,
        states.selectArea.dimensions.h);
  }
}