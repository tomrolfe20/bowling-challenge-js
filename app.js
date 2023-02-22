const Bowl = require('./bowl');
const prompt = require('prompt-sync')({ sigint: true });

theGame = new Bowl();
console.log('New Game');
for (let i = 1; i < 11; i++) {
  theGame.frame();
  console.log('Frame: ', i);
  let prompt1 = prompt('How many pins on your first shot?');
  let promptInt1 = parseInt(prompt1);
  if (promptInt1 === 10 && i === 10) {
    theGame.bowl(promptInt1);
    let prompt2 = prompt('Strike on your 10th round! Roll again!');
    let promptInt2 = parseInt(prompt2);
    if (promptInt2 === 10) {
      theGame.bowl(promptInt2);
      let prompt3 = prompt('Another strike! Roll again!');
      let promptInt3 = parseInt(prompt3);
      theGame.bowl(promptInt3);
    } else {
      let prompt3 = prompt('Extra roll!');
      let promptInt3 = parseInt(prompt3);
      theGame.bowl(promptInt2);
      theGame.bowl(promptInt3);
    }
  } else if (promptInt1 === 10) {
    console.log('Its a strike!');
    theGame.bowl(promptInt1);
  } else {
    let prompt2 = prompt('How many pins on your second shot?');
    let promptInt2 = parseInt(prompt2);
    if (promptInt1 + promptInt2 === 10) {
      console.log('Its a spare!');
      theGame.bowl(promptInt1);
      theGame.bowl(promptInt2);
    } else {
      theGame.bowl(promptInt1);
      theGame.bowl(promptInt2);
    }
  }
}
theGame.score();
