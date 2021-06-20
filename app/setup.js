const activeSpace = new Space();

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('app');
  activeSpace.setup();
}

