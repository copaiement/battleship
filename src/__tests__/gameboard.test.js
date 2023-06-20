import gameboard from '../scripts/gameboard';

test('Place P1 Ship Horizontal', () => {
  const game = gameboard();
  game.placeShip('p1', 'A', [0, 0], false);
  expect(game.p1Ships.length).toBe(1);
});

test('Place P2 Ship Vertical', () => {
  const game = gameboard();
  game.placeShip('p2', 'A', [0, 0], false);
  expect(game.p2Ships.length).toBe(1);
});
