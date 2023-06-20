import ship from '../scripts/ship';

test('Create Ship', () => {
  expect(ship('A', ['a1', 'b1', 'c1', 'd1', 'e1']).array.length).toBe(5);
});

test('Create Ship, hit 3 times, see if sunk', () => {
  const testShip = ship('D', ['a1', 'b1', 'c1']);
  testShip.hit('a1');
  testShip.hit('b1');
  testShip.hit('c1');
  expect(testShip.isSunk).toBeTruthy();
  expect(testShip.hitsArray.length).toBe(3);
});
