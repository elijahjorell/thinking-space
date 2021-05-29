const states = {
  origin: {x: 0, y: 0},
  scale: 1,
  cursor: {x: 0, y: 0},
  pan: {active: false},
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
