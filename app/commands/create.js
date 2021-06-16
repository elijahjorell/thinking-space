function create(x, y, w, h, text) {
  states.rects.push({
    x: x,
    y: y,
    w: w,
    h: h,
    a: w * h,
    depth: states.rects.length,
    text: text,
    size: 15 / states.scale
  });
  states.rects = states.rects.sort((a, b) => a.a - b.a);
}