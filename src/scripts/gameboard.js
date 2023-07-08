import ship from './ship';
import { getRandCoord, shipLengths } from './helpers';

const gameboard = () => {
  // game variables
  const ships = [];
  const sunk = [];
  const hits = [];
  const misses = [];

  // NEED TO ADD COLLISION DETECTION WITH OTHER SHIPS
  function checkShipPlacement(id, start, isVertical) {
    const x = parseInt(start.charAt(0));
    const y = parseInt(start.charAt(1));

    // check against boundary
    if (!isVertical) {
      if (x + shipLengths(id) > 9) return false;
    } else {
      if (y + shipLengths(id) > 9) return false;
    }

    // check against existing ships
    if (ships.length != 0) {
      // create array of desired ship placement
      const shipPlace = [];
      for (let i = 0; i <= shipLengths(id); i++) {
        if (!isVertical) {
          shipPlace.push(`${x + i}${y}`);
        } else {
          shipPlace.push(`${x}${y + i}`);
        }
      }
      console.log(shipPlace);
      // create array of all current ship placements
      const currShips = [];
      ships.forEach(currShip => {
        currShip.position.forEach(val => {
          currShips.push(val)
        });
      });
      // check desired array against current array
      shipPlace.forEach(place => {
        for (let i = 0; i < currShips.length; i++) {
          if (place === currShips[i]) return false;
        }
      });
    }

    return true;
  }

  function placeShip(id, start, isVertical) {
    if (checkShipPlacement(id, start, isVertical)) {
      // create ship array
      const array = [];
      const len = shipLengths(id);
      if (!isVertical) {
        const y = parseInt(start.charAt(1));
        const x = parseInt(start.charAt(0));
        for (let i = x; i <= (len - 1); i++) {
          array.push(`${i}${y}`);
        }
      } else {
        const y = parseInt(start.charAt(1));
        const x = parseInt(start.charAt(0));
        for (let j = y; j <= (len - 1); j++) {
          array.push(`${x}${j}`);
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
    // check against enemy ships
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
