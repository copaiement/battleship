import gameboard from './gameboard';
import { getRandCoord, randOffset } from './helpers';

const player = () => {
  function shootNextTo(sunkHits, hits, misses) {
    // find the unique hits that have not sunk ships
    const uniqueHits = [];
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
    }
    // otherwise shoot along the current line
    // test first two entries of uniqueHits for direction
    const directionArr = [];
    let direction;
    let fixed;
    if (uniqueHits[0].charAt(0) === uniqueHits[1].charAt(0)) {
      uniqueHits.forEach((hit) => directionArr.push(parseInt(hit.charAt(1), 10)));
      direction = 'y';
      fixed = uniqueHits[0].charAt(0);
    } else {
      uniqueHits.forEach((hit) => directionArr.push(parseInt(hit.charAt(0), 10)));
      direction = 'x';
      fixed = uniqueHits[0].charAt(1);
    }

    let move = linearOffset(directionArr, direction, fixed);
    while ((hits.includes(move) && !uniqueHits.includes(move)) || misses.inclues(move)) {
      move = linearOffset(directionArr, direction, fixed);
    }
    return move;
  }

  function linearOffset(directionArr, direction, fixed) {
    // find min and max of directionArr
    const maxMin = [Math.max(...directionArr), Math.min(...directionArr)];
    let nextLinear;
    // if max = 9, use min plus offset
    if (maxMin[0] >= 9) {
      nextLinear = maxMin[1] - 1;
    // if min = 0, use max plus offset
    } else if (maxMin[1] <= 0) {
      nextLinear = maxMin[0] + 1;
    // if no bounds, pick random from max and min
    } else {
      const rand = Math.floor(Math.random() * maxMin.length);
      nextLinear = maxMin[rand];
    }

    if (direction === 'x') {
      return `${nextLinear}${fixed}`;
    }

    return `${fixed}${nextLinear}`;
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
    const hits = gameboard.p1Hits;
    console.log(hits);
    const misses = gameboard.p1Misses;
    const sunk = gameboard.p1Sunk;

    // create array of hits on sunk ships
    const sunkHits = [];
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

  return {
    computerTurn,
  };
};

export default player;
