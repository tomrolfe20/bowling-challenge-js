class Frame {
  constructor() {
    this.frame = [];
    this.frameTotal = 0;
  }
  addToFrame(pin) {
    this.frame.push(pin);
  }

  frameScore() {
    this.frame.map((pin) => (this.frameTotal += pin));
    return this.frameTotal;
  }
}

module.exports = Frame;
