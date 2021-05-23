function setup() {
  createCanvas(windowWidth, windowHeight);

  state.origin = {
    coordinate: new Coordinate(windowWidth/2, windowHeight/2, 0)
  };
  state.viewport = new Viewport(new Coordinate(windowWidth/2, windowHeight/2, 0));
  state.cursor = new Cursor()

  mouseDisableAutoscroll();

  fill('white');
  state.items.push(new Item(100, 100, 0));
  state.items.push(new Item(200, 100, 100));
  state.items.push(new Item(300, 100, 200));
}

function draw() {
  translate(state.origin.coordinate.x, state.origin.coordinate.y);
  scale(state.viewport.scale);

  state.cursor.updateCoordinate();

  background(30, 30, 30);

  fill('white')
  text(state.viewport.coordinate.z, -200, -200);

  state.items.map((item) => {
    let textColor = [218, 112, 214, 1];
    let fadeColor = [30, 30, 30, (item.z - state.viewport.coordinate.z)/100];
    let r = fadeColor[0] * fadeColor[3] + (1 - fadeColor[3]) * textColor[0] * textColor[3];
    let g = fadeColor[1] * fadeColor[3] + (1 - fadeColor[3]) * textColor[1] * textColor[3];
    let b = fadeColor[2] * fadeColor[3] + (1 - fadeColor[3]) * textColor[2] * textColor[3];
    let a = fadeColor[3] + (1 - fadeColor[3]) * textColor[3];

    fill(r, g, b, a * 255);
    textSize(100 * (1 - 0.5 * item.z/100));
    text(item.z, item.x, item.y);

  })
}