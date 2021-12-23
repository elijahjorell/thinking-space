let activeSpace = undefined;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('app');
  activeSpace = new Space();
  activeSpace.setup();
}
