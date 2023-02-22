class Frame {
  constructor() {
    this.frame = [];
    this.frameTotal = 0;
  }
  addToFrame(pin) {
    this.frame.push(pin);
    if (this.frame.length === 2) {
      this.frameTotal = this.frame[0] + this.frame[1];
    } else if (this.frame.length === 3) {
      this.frameTotal = this.frame[0] + this.frame[1] + this.frame[3];
    } else {
      this.frameTotal = this.frame[0];
    }
  }

  frameScore() {
    return this.frameTotal;
  }

  isAStrike() {
    return this.frame[0] === 10;
  }

  isASpare() {
    return (
      (this.frame.length === 2 && this.frameTotal === 10) ||
      (this.frame.length === 3 && this.frame[0] + this.frame[1] === 10)
    );
  }

  returnFrame() {
    return this.frame;
  }
}

module.exports = Frame;
