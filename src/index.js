import game from "./scripts/game";
import './style.css';

// FULL CODE
// create game
//const newGame = game();

// TESTING

// import gameboard from "./scripts/gameboard";
// import AIPlay from "./scripts/AI";
// const gameB = gameboard();
// gameB.placeShip('D1', '34', true);
// gameB.receiveAttack('34'); // top hit
// gameB.receiveAttack('35'); // bottom hit
// gameB.receiveAttack('33'); // top miss
// gameB.receiveAttack('24'); // left miss
// //game.receiveAttack('44'); // right miss
// const play = AIPlay('med', gameB);
// console.log(play);

const directionArr = [4, 5];
const direction = 'y';
const fixed = 3;

// fix issue where two ships are hit in the same pass
// or just update to make ships have to be one space apart.

function linearOffset(directionArr, direction, fixed) {
  // find min and max of directionArr
  const minMax = [Math.min(...directionArr), Math.max(...directionArr)];
  let nextLinear;
  console.log(minMax);
  // make new array of possible values
  let poss = [];
  for (let i = minMax[0] + 1; i <= minMax[1]; i++) {
    poss.push(i);
  }
  console.log(poss);
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

console.log(linearOffset(directionArr, direction, fixed));




