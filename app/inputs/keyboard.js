function keyPressed() {
  switch (keyCode) {
    case ESCAPE:
      activeSpace.selector.endAreaLinger();
      break;
    case ENTER:
      if (activeSpace.selector.activeAreaLinger) {
        activeSpace.content.createRect(
            activeSpace.selector.topLeftCorner.x,
            activeSpace.selector.topLeftCorner.y,
            activeSpace.selector.dimensions.w,
            activeSpace.selector.dimensions.h
        );
      }
      break;
  }
}