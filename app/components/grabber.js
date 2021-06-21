class Grabber {
  constructor(space) {
    this.space = space;
  }

  start() {
    this.active = true;
  }

  update() {

  }

  end() {
    this.active = false;
  }
}