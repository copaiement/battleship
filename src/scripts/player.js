import gameboard from './gameboard';
import ship from './ship';

const player = () => {
  function shootNextTo(sunkHits, hits, misses) {
    // find the unique hits that have not sunk ships
    let uniqueHits = [];
    hits.forEach((hit) => {
      if (!sunkHits.includes(hit)) uniqueHits.push(hit);
    });
    // if there is only one unique hit, just randomly shoot next to it
    if (uniqueHits.length === 1) {
      let move = randOffset(uniqueHits[0]);
      while (hits.includes(move) || misses.includes(move)) {
        move = randOffset(uniqueHits[0]);
      }
      return move;
    } else {

    }
  }

  function randOffset(start) {
    const randOffsets = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const offset = randOffsets[Math.floor(Math.random() * randOffsets.length)];
    let x = parseInt(start.charAt(0), 10) + offset[0];
    let y = parseInt(start.charAt(1), 10) + offset[1];
    
    if (x < 0 || x > 9 || y < 0 || y > 9) return randOffset(start); 
    return `${x}${y}`;
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
      gameboard.receiveAttack('p2', shootNextTo(sunkHits, hits, misses));
    } else {
    // else pick a random spot and shoot at it
      gameboard.receiveAttack('p2', shootNew(hits, misses));
    }
  }
}

export default player;