// get ship length from ID
function shipLengths(id) {
  // lookup ship length by ID
  const table = {
    shipId: ['A', 'B', 'D1', 'D2', 'P'],
    len: [5, 4, 3, 3, 2],
  };

  return table.len[table.shipId.findIndex((i) => i === id)];
}

// get random coordinate pair, 0 to 9
function getRandCoord() {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  return `${x}${y}`;
}

// random offset of one square from start
function randOffset(start) {
  const randOffsets = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const offset = randOffsets[Math.floor(Math.random() * randOffsets.length)];
  const x = parseInt(start.charAt(0), 10) + offset[0];
  const y = parseInt(start.charAt(1), 10) + offset[1];

  if (x < 0 || x > 9 || y < 0 || y > 9) return randOffset(start);
  return `${x}${y}`;
}

export {
  shipLengths,
  getRandCoord,
  randOffset,
};
