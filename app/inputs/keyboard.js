function keyPressed() {
  switch (keyCode) {
    case ESCAPE:
      activeSpace.highlighter.endLinger();
      activeSpace.editor.end();
      break;
    case ENTER:
      if (activeSpace.editor.active) {
        activeSpace.editor.end();
      } else if (activeSpace.highlighter.activeLinger) {
        activeSpace.content.createRect(
            activeSpace.highlighter.topLeftCorner.x,
            activeSpace.highlighter.topLeftCorner.y,
            activeSpace.highlighter.dimensions.w,
            activeSpace.highlighter.dimensions.h,
            ""
        );
      }
      break;
  }
}