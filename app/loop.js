function draw() {
  background(30, 30, 30);
  activeSpace.hud.render();

  translate(activeSpace.viewport.origin.x, activeSpace.viewport.origin.y);
  scale(activeSpace.viewport.scale);

  activeSpace.update();
  activeSpace.render();
}