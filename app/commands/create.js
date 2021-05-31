function create(x, y, w, h) {
  states.rects.push({
    x: x,
    y: y,
    w: w,
    h: h,
    a: w * h,
    depth: states.rects.length
  });
  states.rects = states.rects.sort((a, b) => a.a - b.a);
}