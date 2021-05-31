function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30, 30, 30);

  fill(255);
  noStroke();
  text(states.scale, 8, 20);

  //
  translate(states.origin.x, states.origin.y);
  scale(states.scale);

  //
  cursorTranslate();

  //
  panDuring();
  selectAreaDuring();

  //
  drawRects();
  drawPendingRect();
  drawSelectArea();
}

function drawSelectArea() {
  if (states.selectArea.active) {
    stroke(255);
    strokeWeight(1/states.scale);
    fill(255, 120);
    rect(
        states.selectArea.coordinates.topLeftCorner.x,
        states.selectArea.coordinates.topLeftCorner.y,
        states.selectArea.dimensions.w,
        states.selectArea.dimensions.h
    );
  }
}

function drawPendingRect() {
  if (states.pendingRect.active) {
    stroke(100, 100, 100);
    strokeWeight(1/states.scale);
    noFill();
    rect(
        states.pendingRect.x,
        states.pendingRect.y,
        states.pendingRect.w,
        states.pendingRect.h
    );
  }
}

function drawRects() {
  states.rects.map((currentRect) => {
    if (currentRect.h * states.scale > 0.3 * windowHeight || currentRect.w * states.scale > 0.3 * windowWidth) {
      noFill();
    } else {
      fill('#29271dff');
    }
    stroke('#ffd70a');
    strokeWeight(1/states.scale);
    rect(currentRect.x, currentRect.y, currentRect.w, currentRect.h);
  });
}