function draw() {
  background(30, 30, 30);
  activeSpace.hud.render();

  translate(activeSpace.viewport.origin.x, activeSpace.viewport.origin.y);

  activeSpace.cursor.updateCoordinate();

  activeSpace.selector.areaDuring();
  activeSpace.selector.render();
}