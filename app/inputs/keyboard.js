function keyPressed() {
  if (states.pendingRect.active === true) {
    create(
        states.pendingRect.x,
        states.pendingRect.y,
        states.pendingRect.w,
        states.pendingRect.h
    );
    states.pendingRect.active = false;
  }
}