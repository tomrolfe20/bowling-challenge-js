class Bowl {
  constructor() {
    this.points = 0;
    this.allBowls = [];
    this.spare = false;
    this.strike = false;
    this.frame = 0;
  }

  score() {
    this.allBowls.map((a) => (this.points += a));
    return this.points;
  }

  bowl(pin1, pin2) {
    const scoreBothPins = () => {
      pin2 ? this.allBowls.push(pin1, pin2) : this.allBowls.push(pin1);
    };
    const spare = () => {
      return this.spare === true;
    };
    const scoreSpare = () => {
      this.allBowls.push(pin1, pin2);
      this.spare = true;
    };
    const strike = () => {
      return this.strike === true;
    };
    const scoreStrike = () => {
      this.allBowls.push(10);
      this.strike = true;
    };
    const addFirstPin = () => {
      this.allBowls.push(pin1);
      this.spare = false;
    };
    const addFirstAndSecondPin = () => {
      scoreBothPins();
      this.strike = false;
    };

    this.frame += 1;

    if (
      (this.frame > 10 && this.spare === true) ||
      (this.frame > 10 && this.strike === true) ||
      this.frame <= 10
    ) {
      if (pin1 + pin2 < 10) {
        scoreBothPins();
        if (spare()) {
          addFirstPin();
        } else if (strike()) {
          addFirstAndSecondPin();
        }
      } else if (pin1 === 10 && strike()) {
        //scoreAnotherStrike
        scoreStrike();
      } else if (this.frame > 10 && pin1 === 10 && pin2 === 10) {
        this.allBowls.push(20);
      } else if (pin1 === 10) {
        scoreStrike();
      } else if (pin1 + pin2 === 10) {
        scoreSpare();
      }
    } else {
      console.log('10th frame, no more rolls');
    }
  }
}

module.exports = Bowl;
