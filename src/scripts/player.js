import gameboard from './gameboard';
import ship from './ship';

const player = () => {
  // given hits array and misses array, find next shot
  function shootNextTo(prevShots, misses) {
    
  }

  function getRandCoord() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return `${x}${y}`;
  }

  function shootNew(hits, misses) {
    let newCoord = getRandCoord();
    while (hits.includes(newCoord) || misses.includes(newCoord)) {
      newCoord = getRandCoord();
    }
    return newCoord;
  }

  function computerTurn() {
    // get all previous plays
    let hits = gameboard.p1Hits;
    let misses = gameboard.p1Misses;
    let sunk = gameboard.p1Sunk;

    // if there are hits that are not part of sunk ship arrays,
    // shoot again next to those
    // if two shots in a row, keep following the row
    
    // create array of hits on sunk ships
    let sunkHits = [];
    sunk.forEach((sunkShip) => {
      sunkShip.array.forEach((hit) => sunkHits.push(hit));
    });

    // if there are hits not in sunk ships, shoot close
    if (hits.length > sunkHits.length) {

    } else {
    // else pick a random spot and shoot at it
      gameboard.receiveAttack('p2', shootNew(hits, misses));
    }
  }
}

export default player;