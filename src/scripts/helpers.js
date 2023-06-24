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

export {
  shipLengths,
  getRandCoord,
};
