import player from '../scripts/player';
import gameboard from '../scripts/gameboard';

//
test('Create Ship', () => {
  expect(ship('A', ['a1', 'b1', 'c1', 'd1', 'e1']).array.length).toBe(5);
});

test('Create Ship, hit 3 times, see if sunk', () => {
  const testShip = ship('D', ['a1', 'b1', 'c1']);
  expect(testShip.isSunk()).toBeFalsy();
  testShip.hit('a1');
  testShip.hit('b1');
  testShip.hit('c1');
  expect(testShip.isSunk()).toBeTruthy();
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

test.only('Test computerTurn', () => {
  // set up board with two hits on ship
  const game = gameboard();
  game.placeShip('p1', 'P', '33', false);
  game.receiveAttack('p2', '33');
  game.receiveAttack('p2', '43');
  // call computerTurn
  const play = player();
  play.computerTurn();
  expect(game.p1Sunk.length).toBe(1);
});
