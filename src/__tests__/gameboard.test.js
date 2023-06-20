import gameboard from '../scripts/gameboard';

test.skip('Create Ship', () => {
  expect(ship('A', ['a1', 'b1', 'c1', 'd1', 'e1']).array.length).toBe(5);
});
