function keyPressed() {
  switch (keyCode) {
    case ESCAPE:
      activeSpace.selector.endAreaLinger();
      activeSpace.editor.end();
      break;
    case ENTER:
      if (activeSpace.editor.active) {
        activeSpace.editor.end();
      } else if (activeSpace.selector.activeAreaLinger) {
        activeSpace.content.createRect(
            activeSpace.selector.topLeftCorner.x,
            activeSpace.selector.topLeftCorner.y,
            activeSpace.selector.dimensions.w,
            activeSpace.selector.dimensions.h,
            ""
        );
      }
      break;
  }
}