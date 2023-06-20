import ship from './ship';

const gameboard = () => {
  // game variables
  let p1Ships = [];
  let p1Sunk = [];
  let p1Hits = [];
  let p1Misses = [];

  let p2Ships = [];
  let p2Sunk = [];
  let p2Hits = [];
  let p2Misses = [];

  function shipLenLookup(id) {
    // lookup ship length by ID
    const table = {
      shipId: ['A', 'B', 'D1', 'D2', 'P'],
      len: [5, 4, 3, 3, 2],
    };

    return table.len[table.shipId.findIndex((i) => i === id)];
  }

  function checkShipPlacement(id, start, isVertical) {
    if (!isVertical) {
      if (start[0] + shipLenLookup(id) > 10) return false;
      return true;
    }

    if (start[1] + shipLenLookup(id) > 10) return false;
    return true;
  }

  function placeShip(player, id, start, isVertical) {
    if (checkShipPlacement(id, start, isVertical)) {
      // create ship array
      const array = [];
      const len = shipLenLookup(id);
      if (!isVertical) {
        const y = start[1];
        for (let x = start[0]; x <= (len - 1); x++) {
          array.push(`${x}${y}`);
        }
      } else {
        const x = start[0];
        for (let y = start[1]; y <= (len - 1); y++) {
          array.push(`${x}${y}`);
        }
      }

      // create ship and add to player list
      if (player === 'p1') p1Ships.push(ship(id, array));
      else p2Ships.push(ship(id, array));
    }
  }

  function receiveAttack(move) {

  }
  return { p1Ships, p2Ships, placeShip, receiveAttack };
};

export default gameboard;
