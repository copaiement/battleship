import ship from './ship';
import { getRandCoord, shipLengths } from './helpers';

const gameboard = () => {
  // game variables
  const ships = [];
  const sunk = [];
  const hits = [];
  const misses = [];

  function checkIfPlaced(id) {
    let returnVal = false;
    ships.forEach((shp) => {
      if (shp.shipType === id) returnVal = true;
    });
    return returnVal;
  }
  
  function checkShipPlacement(id, start, isVertical) {
    const x = parseInt(start.charAt(0));
    const y = parseInt(start.charAt(1));

    // check if already placed
    if (checkIfPlaced(id)) return false;

    // check against boundary
    if (!isVertical) {
      if (x + (shipLengths(id) - 1) >= 10) return false;
    } else {
      if (y + (shipLengths(id) - 1) >= 10) return false;
    }

    // check against existing ships
    if (ships.length !== 0) {
      // create array of desired ship placement
      const shipPlace = [];
      for (let i = 0; i < shipLengths(id); i++) {
        if (!isVertical) {
          shipPlace.push(`${x + i}${y}`);
        } else {
          shipPlace.push(`${x}${y + i}`);
        }
      }
      // create array of all current ship placements
      const currShips = currentShipPlacements();
      // check desired array against current array
      let repeat = currShips.filter(val => shipPlace.includes(val));
      if (repeat.length !== 0) return false;
    }

    return true;
  }

  function currentShipPlacements() {
    // create array of all current ship placements
    let currShips = [];

    ships.forEach((currShip) => {
      // figure out if ship is x or y direction and add endcaps
      let dir;
      let fixed;
      let start;
      let end;
      if (currShip.position[0].charAt(0) === currShip.position[1].charAt(0)) {
        dir = 'y';
        fixed = parseInt(currShip.position[0].charAt(0), 10);
        start = parseInt(currShip.position[0].charAt(1), 10);
        end = parseInt(currShip.position[currShip.position.length - 1].charAt(1), 10);
        // push endcap values
        if (start > 0) currShips.push(`${fixed}${start - 1}`);
        if (end < 9) currShips.push(`${fixed}${end + 1}`);
      } else {
        dir = 'x';
        fixed = parseInt(currShip.position[0].charAt(1), 10);
        start = parseInt(currShip.position[0].charAt(0), 10);
        end = parseInt(currShip.position[currShip.position.length - 1].charAt(0), 10);
        // push endcap values
        if (start > 0) currShips.push(`${start - 1}${fixed}`);
        if (end < 9) currShips.push(`${end + 1}${fixed}`);
      }

      // add body buffer
      for (let i = 0; i <= (currShip.position.length - 1); i++) {
        currShips.push(currShip.position[i]);
        const x = parseInt(currShip.position[i].charAt(0), 10);
        const y = parseInt(currShip.position[i].charAt(1), 10);
        if (dir === 'x') {
          if (y < 8) currShips.push(`${x}${y + 1}`);
          if (y > 0) currShips.push(`${x}${y - 1}`);
        } else {
          if (x < 8) currShips.push(`${x + 1}${y}`);
          if (x > 0) currShips.push(`${x - 1}${y}`);
        }
      }
    });
    console.log(currShips);
    return currShips;
  }

  function placeShip(id, start, isVertical) {
    // create ship array
    const array = [];
    const len = shipLengths(id);
    if (!isVertical) {
      const y = parseInt(start.charAt(1));
      const x = parseInt(start.charAt(0));
      for (let i = x; i < (x + len); i++) {
        array.push(`${i}${y}`);
      }
    } else {
      const y = parseInt(start.charAt(1));
      const x = parseInt(start.charAt(0));
      for (let j = y; j < (y + len); j++) {
        array.push(`${x}${j}`);
      }
    }
    // create ship and add to player list
    ships.push(ship(id, array));
  }

  function clearShips() {
    ships.length = 0;
    sunk.length = 0;
    hits.length = 0;
    misses.length = 0;
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
    let sunkMark = false;
    // create a return value variable
    const returnVal = [];
    returnVal.push(move);
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
            if (shp.isSunk()) {
              sunk.push(shp);
              sunkMark = true;
              returnVal.push(shp.shipType, shp.position);
            }
          }
        });
      }
    });
    // if hit was logged, add to hits, else add to misses
    // update return value
    if (hitMark && sunkMark) {
      hits.push(move);
    } else if (hitMark) {
      hits.push(move);
      returnVal.push('hit');
    } else {
      misses.push(move);
      returnVal.push('miss');
    }
    return returnVal;
  }

  function checkWin() {
    if (sunk.length === 5) return true;
    return false;
  }

  return {
    ships,
    hits,
    misses,
    sunk,
    placeShip,
    autoPlaceShips,
    clearShips,
    receiveAttack,
    checkWin,
    checkShipPlacement,
  };
};

export default gameboard;
