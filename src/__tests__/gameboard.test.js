import gameboard from '../scripts/gameboard';

test('Place P1 Ship Horizontal', () => {
  const game = gameboard();
  game.placeShip('p1', 'A', '00', false);
  expect(game.p1Ships.length).toBe(1);
});

test('Place P2 Ship Vertical', () => {
  const game = gameboard();
  game.placeShip('p2', 'A', '00', true);
  expect(game.p2Ships.length).toBe(1);
});

test('Test receiveAttack', () => {
  const game = gameboard();
  game.placeShip('p2', 'A', '00', false);
  game.receiveAttack('p1', '00');
  game.receiveAttack('p1', '01');
  expect(game.p2Hits.length).toBe(1);
  expect(game.p2Misses.length).toBe(1);
});

test('Test sinking a ship', () => {
  const game = gameboard();
  game.placeShip('p2', 'P', '00', false);
  game.receiveAttack('p1', '00');
  game.receiveAttack('p1', '01');
  game.receiveAttack('p1', '10');
  expect(game.p2Hits.length).toBe(2);
  expect(game.p2Misses.length).toBe(1);
  expect(game.p2Sunk.length).toBe(1);
});


