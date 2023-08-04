import { getRandCoord } from './helpers';

// AI functions for computer player

// shoot in a new empty area on board
function shootNew(hits, misses) {
  let newCoord = getRandCoord();
  while (hits.includes(newCoord) || misses.includes(newCoord)) {
    newCoord = getRandCoord();
  }
  return newCoord;
}

function linearOffset(directionArr, direction, fixed) {
  // find min and max of directionArr
  const minMax = [Math.min(...directionArr), Math.max(...directionArr)];
  let nextLinear;

  // make new array of possible values
  let poss = [];
  for (let i = minMax[0] + 1; i <= minMax[1]; i++) {
    poss.push(i);
  }
  // if max <= 8, add new possible max
  if (minMax[1] <= 8) {
    poss.push(minMax[1] + 1);
  }
  // if min >= 1, add new possible min
  if (minMax[0] >= 1) {
    poss.push(minMax[0] - 1);
  }

  // pick a random value from possibles and return
  nextLinear = poss[Math.floor(Math.random() * poss.length)];

  if (direction === 'x') {
    return `${nextLinear}${fixed}`;
  }
  return `${fixed}${nextLinear}`;
}

// random offset of one square from start
function randOffset(start) {
  const randOffsets = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const offset = randOffsets[Math.floor(Math.random() * randOffsets.length)];
  const x = parseInt(start.charAt(0), 10) + offset[0];
  const y = parseInt(start.charAt(1), 10) + offset[1];

  if (x < 0 || x > 9 || y < 0 || y > 9) return randOffset(start);
  return `${x}${y}`;
}

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
  if (uniqueHits[0].charAt(1) === uniqueHits[1].charAt(1)) {
    uniqueHits.forEach((hit) => directionArr.push(parseInt(hit.charAt(0), 10)));
    direction = 'x';
    fixed = uniqueHits[0].charAt(1);
  } else {
    uniqueHits.forEach((hit) => directionArr.push(parseInt(hit.charAt(1), 10)));
    direction = 'y';
    fixed = uniqueHits[0].charAt(0);
  }

  let move = linearOffset(directionArr, direction, fixed);
  while (hits.includes(move) || misses.includes(move)) {
    move = linearOffset(directionArr, direction, fixed);
  }
  return move;
}

function AIPlay(AIMode, enemyBoard) {
  // easy mode, just picks random spots
  if (AIMode === 'easy') return shootNew(enemyBoard.hits, enemyBoard.misses);

  // med mode, shoots near previous hits
  // create array of hits on sunk ships
  const sunkHits = [];
  enemyBoard.sunk.forEach((sunkShip) => {
    sunkShip.position.forEach((hit) => sunkHits.push(hit));
  });
  // if there are hits not in sunk ships, shoot close
  if (enemyBoard.hits.length > sunkHits.length) {
    return shootNextTo(sunkHits, enemyBoard.hits, enemyBoard.misses);
  }
  // else pick a random spot and shoot at it
  return shootNew(enemyBoard.hits, enemyBoard.misses);
}

export default AIPlay;
