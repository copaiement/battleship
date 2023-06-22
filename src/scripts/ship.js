// create ship
const ship = (id, array) => {
  // ship setup
  const shipType = id;
  const position = array;
  const hits = [];

  function hit(move) {
    hits.push(move);
  }

  function isSunk() {
    return this.position.every((pos) => this.hits.includes(pos));
  }

  return {
    shipType,
    position,
    hits,
    hit,
    isSunk,
  };
};

export default ship;
