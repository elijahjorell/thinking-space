const states = {
  cursor: {x: 0, y: 0},
  origin: {x: 0, y: 0},
  pan: {active: false},
  pendingRect: {
    active: false,
    x: undefined,
    y: undefined,
    w: undefined,
    h: undefined
  },
  rects: [],
  scale: 0.01,
  selectArea: {
    active: false,
    coordinates: {
      origin: {
        x: undefined,
        y: undefined
      },
      topLeftCorner: {
        x: undefined,
        y: undefined
      }
    },
    dimensions: {
      w: undefined,
      h: undefined
    }
  }
};
