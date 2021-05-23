function setup() {
  createCanvas(windowWidth, windowHeight);

  state.origin = {
    coordinate: new Coordinate(windowWidth/2, windowHeight/2, 0)
  };
  state.viewport = new Viewport(new Coordinate(windowWidth/2, windowHeight/2, 0));

  mouseDisableAutoscroll();

  fill('white');
  state.items.push(new Item(100, 100, 0));
}

function draw() {
  translate(state.origin.coordinate.x, state.origin.coordinate.y);

  background(30, 30, 30);

  text(state.viewport.coordinate.z, -200, -200);

  state.items.map((item) => {
    text(item.z, item.x, item.y);
  })
}