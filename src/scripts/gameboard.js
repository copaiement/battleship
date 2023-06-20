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
    const x = start.charAt(0);
    const y = start.charAt(1);
    if (!isVertical) {
      // length check
      if (x + shipLenLookup(id) > 9) return false;
      return true;
    }

    if (y + shipLenLookup(id) > 9) return false;
    return true;
  }

  function placeShip(player, id, start, isVertical) {
    if (checkShipPlacement(id, start, isVertical)) {
      // create ship array
      const array = [];
      const len = shipLenLookup(id);
      if (!isVertical) {
        const y = start.charAt(1);
        for (let x = start.charAt(0); x <= (len - 1); x++) {
          array.push(`${x}${y}`);
        }
      } else {
        const x = start.charAt(0);
        for (let y = start.charAt(1); y <= (len - 1); y++) {
          array.push(`${x}${y}`);
        }
      }

      // create ship and add to player list
      if (player === 'p1') p1Ships.push(ship(id, array));
      else p2Ships.push(ship(id, array));
    }
  }

  function receiveAttack(attacker, move) {
    if (attacker === 'p1') {
      let hitMark = false;
      // check against p2 ships
      p2Ships.forEach((p2Ship) => {
        // if ship not already sunk, check for hits
        if (!p2Ship.isSunk()) {
          p2Ship.array.forEach((pt) => {
            if (pt === move) {
              // log hit and set var to true
              p2Ship.hit(move);
              hitMark = true;
              // check if ship is sunk
              if (p2Ship.isSunk()) p2Sunk.push(p2Ship);
            }
          });
        }
      });
      // if hit was logged, add to hits, else add to misses
      if (hitMark) {
        p2Hits.push(move);
      } else {
        p2Misses.push(move);
      }
    } else {
      let hitMark = false;
      // check against p1 ships
      p1Ships.forEach((p1Ship) => {
        // if ship not already sunk, check for hits
        if (!p1Ship.isSunk()) {
          p1Ship.array.forEach((pt) => {
            if (pt === move) {
              // log hit and set var to true
              p1Ship.hit(move);
              hitMark = true;
              // check if ship is sunk
              if (p1Ship.isSunk()) p1Sunk.push(p1Ship);
            }
          });
        }
      });
      // if hit was logged, add to hits, else add to misses
      if (hitMark) {
        p1Hits.push(move);
      } else {
        p1Misses.push(move);
      }
    }
  }
  return {
    p1Ships,
    p2Ships,
    p1Hits,
    p2Hits,
    p1Misses,
    p2Misses,
    p1Sunk,
    p2Sunk,
    placeShip,
    receiveAttack,
  };
};

export default gameboard;
