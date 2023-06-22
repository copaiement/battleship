import ship from '../scripts/ship';

test('Create Ship', () => {
  const id = 'A';
  const pos = ['00', '01', '02', '03', '04'];
  const testShip = ship(id, pos);
  expect(testShip.position.length).toBe(5);
});

test('Create Ship, hit 3 times, see if sunk', () => {
  const id = 'D';
  const pos = ['00', '01', '02'];
  const testShip = ship(id, pos);
  expect(testShip.isSunk()).toBeFalsy();
  testShip.hit('00');
  testShip.hit('01');
  testShip.hit('02');
  expect(testShip.isSunk()).toBeTruthy();
});
