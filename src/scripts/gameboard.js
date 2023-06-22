import ship from './ship';
import { getRandCoord, shipLengths } from './helpers';

const gameboard = () => {
  // game variables
  const ships = [];
  const sunk = [];
  const hits = [];
  const misses = [];

  function checkShipPlacement(id, start, isVertical) {
    const x = start.charAt(0);
    const y = start.charAt(1);
    if (!isVertical) {
      // length check
      if (x + shipLengths(id) > 9) return false;
      return true;
    }

    if (y + shipLengths(id) > 9) return false;
    return true;
  }

  function placeShip(id, start, isVertical) {
    if (checkShipPlacement(id, start, isVertical)) {
      // create ship array
      const array = [];
      const len = shipLengths(id);
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
      ships.push(ship(id, array));
    }
  }

  function autoPlaceShips() {
    const fleet = ['A', 'B', 'D1', 'D2', 'P'];
    fleet.forEach((id) => {
      let rand = getRandCoord();
      let randVert = Math.random() < 0.5;
      while (!checkShipPlacement(id, rand, randVert)) {
        rand = getRandCoord();
        randVert = Math.random() < 0.5;
      }
      placeShip(id, rand, randVert);
    });
  }

  function receiveAttack(move) {
    let hitMark = false;
    // check against p2 ships
    ships.forEach((shp) => {
      // if ship not already sunk, check for hits
      if (!shp.isSunk()) {
        shp.position.forEach((pt) => {
          if (pt === move) {
            // log hit and set var to true
            shp.hit(move);
            hitMark = true;
            // check if ship is sunk
            if (shp.isSunk()) sunk.push(shp);
          }
        });
      }
    });
    // if hit was logged, add to hits, else add to misses
    if (hitMark) {
      hits.push(move);
    } else {
      misses.push(move);
    }
  }
  return {
    ships,
    hits,
    misses,
    sunk,
    placeShip,
    autoPlaceShips,
    receiveAttack,
  };
};

export default gameboard;
