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
});
