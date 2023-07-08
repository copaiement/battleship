import gameboard from '../scripts/gameboard';

test('Place Ship Horizontal', () => {
  const game = gameboard();
  game.placeShip('A', '00', false);
  expect(game.ships.length).toBe(1);
});

test('Place Ship Vertical', () => {
  const game = gameboard();
  game.placeShip('A', '00', true);
  expect(game.ships.length).toBe(1);
});

test('Test receiveAttack', () => {
  const game = gameboard();
  game.placeShip('A', '00', false);
  game.receiveAttack('00');
  game.receiveAttack('01');
  expect(game.hits.length).toBe(1);
  expect(game.misses.length).toBe(1);
});

test.only('Auto place ships', () => {
  const game = gameboard();
  game.autoPlaceShips();
  console.log(game.ships);
  expect(game.ships.length).toBe(5);
});

test('Test sinking a ship', () => {
  const game = gameboard();
  game.placeShip('P', '00', false);
  game.receiveAttack('00');
  game.receiveAttack('01');
  game.receiveAttack('10');
  expect(game.hits.length).toBe(2);
  expect(game.misses.length).toBe(1);
  expect(game.sunk.length).toBe(1);
});


