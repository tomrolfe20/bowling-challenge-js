const Frame = require('./frame');

class Bowl {
  constructor() {
    this.frames = [];
    this.totalScore = 0;
  }
  frame() {
    frame = new Frame();
    this.frames.push(frame);
  }
  bowl(pin) {
    frame.addToFrame(pin);
  }
  score() {
    this.frames.map((frame) => (this.totalScore += frame.frameScore()));
    return this.totalScore;
  }
}

module.exports = Bowl;
