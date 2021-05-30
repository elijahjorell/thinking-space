function create(x, y, w, h) {
  states.rects.push({
    x: x,
    y: y,
    w: w,
    h: h,
    depth: states.rects.length
  });
}