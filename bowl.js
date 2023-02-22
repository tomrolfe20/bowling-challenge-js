const Frame = require('./frame');

class Bowl {
  constructor() {
    this.frames = [];
    this.totalScore = 0;
    this.currentFrame = null;
    this.frameCount = 0;
  }
  frame() {
    //Increases frame count by 1, creates a new instance of Frame and pushes it into an array of Frames
    this.frameCount += 1;
    this.currentFrame = new Frame();
    this.frames.push(this.currentFrame);
  }

  bowl(pin) {
    //Adds the pins knocked over to the current frame
    this.currentFrame.addToFrame(parseInt(pin));
  }

  endScore() {
    console.log(this.totalScore);
  }

  score() {
    if (this.frameCount < 10) {
      this.frames.map((frame, index) => {
        const score = frame.frameScore();

        if (frame.isAStrike()) {
          // if score a strike and the next bowl is not a strike add first and second pin from the next round
          this.totalScore += 10;
          if (this.frames[index + 1].returnFrame()[0] !== 10) {
            //first and second pin from following round
            this.totalScore += this.frames[index + 1].returnFrame()[0];
            this.totalScore += this.frames[index + 1].returnFrame()[1];
          } else {
            //add first pin from next round
            this.totalScore += this.frames[index + 1].returnFrame()[0];
            //and the first pin from round after that
            this.totalScore += this.frames[index + 2].returnFrame()[0];
          }
        } else if (frame.isASpare()) {
          //adds both pins from spare scoring round
          this.totalScore += score;
          //adds first pin from following round
          this.totalScore += this.frames[index + 1].returnFrame()[0];
        } else {
          //normal round and adds both pins to score
          this.totalScore += score;
        }
      });
      //If you are on the 10th frame
    } else if (this.frameCount === 10) {
      this.frames.map((frame, index) => {
        const score = frame.frameScore();

        if (index < 9) {
          if (frame.isAStrike()) {
            this.totalScore += 10;
            // if the next pin bownl is not a 10 add first and second pin
            if (frame.returnFrame()[0] !== 10) {
              //first and second pin from current round
              this.totalScore += frame.returnFrame()[0];
              this.totalScore += frame.returnFrame()[1];
            } else {
              //first pin twice from current round
              this.totalScore += frame.returnFrame()[0];
              this.totalScore += frame.returnFrame()[0];
            }
          } else if (frame.isASpare()) {
            this.totalScore += score;
            //adds second pin from current round
            this.totalScore += this.frames[index].returnFrame()[1];
          } else {
            //adds both pins to score
            this.totalScore += score;
          }
        }
      });
      const tenthFrame = this.frames[9];
      if (tenthFrame.isAStrike()) {
        // If the 10th frame scores two strikes in a row
        if (tenthFrame.returnFrame()[1] === 10) {
          //adds all 3 pins
          this.totalScore += tenthFrame.returnFrame()[0];
          this.totalScore += tenthFrame.returnFrame()[1];
          this.totalScore += tenthFrame.returnFrame()[2];
        } else {
          this.totalScore += tenthFrame.returnFrame()[0];
          this.totalScore += tenthFrame.returnFrame()[1];
        }
      } else if (tenthFrame.isASpare()) {
        //adds the first pin from tenth frame
        this.totalScore += tenthFrame.returnFrame()[0];
      } else {
        //adds both pins to score
        this.totalScore += tenthFrame.frameScore();
      }
    }
    console.log('Score:', this.totalScore);

    return this.totalScore;
  }
}

module.exports = Bowl;
