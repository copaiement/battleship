// create ship
const ship = (id, array) => {
  const hitsArray = [];
  function hit(move) {
    hitsArray[array.findIndex((item) => item === move)] = 'X';
  }
  function isSunk() {
    return hitsArray.every((marker) => marker === 'X');
  }
  return {
    id, array, hitsArray, isSunk, hit,
  };
};

export default ship;
