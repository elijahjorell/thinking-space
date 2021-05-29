function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30, 30, 30);


  fill(255);
  noStroke();
  text(states.scale, 8, 20);
  text(states.pendingRect.active, 10, 10);

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
  // noFill();
  fill('#29271dff');
  stroke('#ffd70a');
  rect(100, 100, 100, 100);

  drawPendingRect();
  drawRects();
  drawSelectArea();
}

function drawSelectArea() {
  if (states.selectArea.active) {
    stroke(255);
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
    fill('#29271dff');
    stroke('#ffd70a');
    rect(currentRect.x, currentRect.y, currentRect.w, currentRect.h);
  });
}