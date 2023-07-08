import player from '../scripts/player';
import gameboard from '../scripts/gameboard';

// create a player and test playerTurn function
test.skip('Create player, test playerTurn', () => {
  const player1 = player();
  const game = gameboard();
  game.placeShip('A', '00', true);
  player1.playerTurn('00', game);
  expect(game.hits.length).toBe(1);
});

// create a player and test computerTurn function
// there are no ships on the board during this test just to make
// sure it works.
test.skip('Create player, test computerTurn', () => {
  const player1 = player();
  const game = gameboard();
  player1.computerTurn('easy', game);
  expect(game.misses.length).toBe(1);
});
