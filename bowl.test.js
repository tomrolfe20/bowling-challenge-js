const Bowl = require('./bowl');

let game;

beforeEach(() => {
  game = new Bowl();
});

describe('bowl', () => {
  it('bowls twice and calculates the points', () => {
    game.bowl(5, 3);
    expect(game.score()).toEqual(8);
  });

//   it('bowls a spare one round and a 3,4 the next and calculates the points', () => {
//     game.bowl(5, 5);
//     game.bowl(3, 3);
//     expect(game.score()).toEqual(19);
//   });
//   it('bowls a strike one round and a 3,4 the next and calculates the points', () => {
//     game.bowl(10);
//     game.bowl(3, 3);
//     expect(game.score()).toEqual(22);
//   });
//   it('bowls a spare on frame 10 and a 1 the next and calculates the points', () => {
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(5, 5); //10th frame spare
//     game.bowl(1);
//     expect(game.score()).toEqual(29);
//   });

//   it('bowls a strike on frame 10 and a 10,10 the next and calculates the points', () => {
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(10, 0); //10th frame spare
//     game.bowl(10, 10);
//     expect(game.score()).toEqual(48);
//   });

//   it('bowls a 1,1 on frame 10 and tries to roll an 11th frame', () => {
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1);
//     game.bowl(1, 1); //10th frame
//     game.bowl(1, 1);
//     expect(game.score()).toEqual(20);
//   });
//   it('Bowls gutter shots every game', () => {
//     game.bowl(0, 0);
//     game.bowl(0, 0);
//     game.bowl(0, 0);
//     game.bowl(0, 0);
//     game.bowl(0, 0);
//     game.bowl(0, 0);
//     game.bowl(0, 0);
//     game.bowl(0, 0);
//     game.bowl(0, 0);
//     game.bowl(0, 0);
//     expect(game.score()).toEqual(0);
//   });
//   it('Bowls a perfect game', () => {
//     game.bowl(10);
//     game.bowl(10);
//     game.bowl(10);
//     game.bowl(10);
//     game.bowl(10);
//     game.bowl(10);
//     game.bowl(10);
//     game.bowl(10);
//     game.bowl(10);
//     game.bowl(10);
//     game.bowl(10, 10);
//     expect(game.score()).toEqual(300);
//   });
//   it('Bowls 2 strikes in a row then 2,2', () => {
//     game.bowl(10);
//     game.bowl(10);
//     game.bowl(2, 2);

//     expect(game.score()).toEqual(40);
//   });
});
