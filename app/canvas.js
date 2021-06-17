function setup() {
  createCanvas(windowWidth, windowHeight);

  loadTextArea();
}

function draw() {
  background(30, 30, 30);

  fill(255);
  noStroke();
  textSize(15);
  text(states.scale, 8, 20);
  text(-round(states.origin.x) + ", " + round(states.origin.y), 8, 35);

  circle(windowWidth / 2, windowHeight / 2, 10);

  //
  translate(states.origin.x, states.origin.y);
  scale(states.scale);

  //
  cursorTranslate();

  //
  moveDuring();
  panDuring();
  selectAreaDuring();
  editDuring();
  arrowZoomDuring();

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

    noFill();
    fill('#ffd70a');
    textSize(currentRect.size);
    if (currentRect.h * states.scale > 0.3 * windowHeight || currentRect.w * states.scale > 0.3 * windowWidth) {
      text(
          currentRect.text,
          currentRect.x,
          currentRect.y - currentRect.h * 0.025
      );
    } else {
      text(
          currentRect.text,
          currentRect.x + currentRect.w / 2 - textWidth(currentRect.text) / 2,
          currentRect.y + currentRect.h / 2
      );
    }
  });
}

function loadTextArea() {
  states.edit.textArea = createElement('textarea');
  states.edit.textArea.id('editor');
  states.edit.textArea.size(states.edit.w, states.edit.h);
  states.edit.x = windowWidth/2 - states.edit.w/2;
  states.edit.y = windowHeight/2 - states.edit.h/2;
  states.edit.textArea.position(states.edit.x, states.edit.y);
  states.edit.textArea.style('background-color', 'rgba(0, 0, 0, 0)');
  states.edit.textArea.style('color', 'white');
  states.edit.textArea.style('resize', 'none');
  document.getElementById('editor').addEventListener('keypress', (e) => {
    if (keyCode === 13) {
      e.preventDefault();
    }
  });
  document.getElementById('editor').addEventListener('keypress', (e) => {
    if (keyCode === 32) {
      e.preventDefault();
    }
  });
  document.getElementById('editor').addEventListener('keydown', (e) => {
    if ([37, 38, 39 , 40].indexOf(e.keyCode) > -1 ) {
      e.preventDefault();
    }
  });
  states.edit.textArea.style('visibility', 'hidden');
}