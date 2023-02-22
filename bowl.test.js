// [[3,4],[3,4],[5,5],[3,4],[10],[10],[3,3], [2,2], [2,2], [2,2]]
//    7     7    10    7     10   10    6      4       4     4
//                               +10   +3
//                     +3              +3  +3

// [[10],[10],[10],[10],[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]
//  10   10   10   10   10    2     2     2      2     2    2
//       +10 +10
//            +10  +10
//                 +10  +10
//                      +10  +1
//                            +1 +1

const Bowl = require('./bowl');

let game;

beforeEach(() => {
  game = new Bowl();
});

describe('bowl', () => {
  it('bowls twice and calculates the points', () => {
    game.frame();
    game.bowl(3);
    game.bowl(4);
    expect(game.score()).toEqual(7);
  });
  it('bowls a spare and a 2,2 and calculates the points', () => {
    game.frame();
    game.bowl(5);
    game.bowl(5);
    game.frame();
    game.bowl(2);
    game.bowl(2);
    expect(game.score()).toEqual(16);
  });
  it('bowls 2 spares in a row and a 2,2 and calculates the points', () => {
    game.frame();
    game.bowl(5);
    game.bowl(5);
    game.frame();
    game.bowl(5);
    game.bowl(5);
    game.frame();
    game.bowl(2);
    game.bowl(2);
    expect(game.score()).toEqual(31);
  });
  it('bowls a strike and a 2,2 and calculates the points', () => {
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(2);
    game.bowl(2);
    expect(game.score()).toEqual(18);
  });
  it('bowls 2 strikes and a 2,2 and calculates the points', () => {
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(2);
    game.bowl(2);
    expect(game.score()).toEqual(40);
  });
  it('bowls 0 x 10 and calculates the points', () => {
    game.frame();
    game.bowl(0);
    game.bowl(0);
    game.frame();
    game.bowl(0);
    game.bowl(0);
    game.frame();
    game.bowl(0);
    game.bowl(0);
    game.frame();
    game.bowl(0);
    game.bowl(0);
    game.frame();
    game.bowl(0);
    game.bowl(0);
    game.frame();
    game.bowl(0);
    game.bowl(0);
    game.frame();
    game.bowl(0);
    game.bowl(0);
    game.frame();
    game.bowl(0);
    game.bowl(0);
    game.frame();
    game.bowl(0);
    game.bowl(0);
    game.frame();
    game.bowl(0);
    game.bowl(0);

    expect(game.score()).toEqual(0);
  });
  it('bowls a perfect game and returns 300 points', () => {
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);

    expect(game.score()).toEqual(300);
  });
  it('bowls a 285 point game', () => {
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.bowl(5);
    game.bowl(5);

    expect(game.score()).toEqual(285);
  });
  it('bowls a 287 point game', () => {
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.bowl(7);
    game.bowl(3);

    expect(game.score()).toEqual(287);
  });
  it('bowls a 275 point game', () => {
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(10);
    game.frame();
    game.bowl(5);
    game.bowl(5);

    expect(game.score()).toEqual(275);
  });
});
