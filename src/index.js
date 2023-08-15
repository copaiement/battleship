// import game from './scripts/game';
import player from './scripts/player';
import gameboard from './scripts/gameboard';
import domFunctions from './scripts/domFunctions';
import './style.css';

// FULL CODE

// const newGame = game();

// setup local vars
const user = player();
const computer = player();
const playerBoard = gameboard();
const computerBoard = gameboard();
console.log(playerBoard);
// set AIMode to easy (default)
let AIMode = 'easy';

// setup domFunctions
const domFunc = domFunctions(playerBoard);

function gameSetup() {
  // render boards
  domFunc.buildGameboards();
  // hide opponent board;
  domFunc.setupMode();
  // auto place computer ships
  computerBoard.autoPlaceShips();

  // set up player btns
  domFunc.clearShipsBtn(playerBoard);
  domFunc.autoPlaceBtn(playerBoard);
  domFunc.addStartListener();
  domFunc.addModalListeners();
  domFunc.newGameBtn();
  domFunc.shipTypeListeners();
  domFunc.shipPlacementListeners();
}

function startGame() {
  domFunc.addBoardListeners();
  domFunc.toggleSetupBtns(false);
  domFunc.toggleStartBtn(false);
  domFunc.toggleNewGameBtn(true);
  domFunc.toggleRotateBtn();
  domFunc.playMode();
}

// play one round
// called by event listener
function playRound(playerMove) {
  // remove board listeners
  domFunc.removeBoardListeners();
  // player shoots
  const attack = user.playerTurn(playerMove, computerBoard);
  // update board
  domFunc.updateBoard('computer', attack);
  // check for gameover
  if (computerBoard.checkWin()) {
    gameOver('player');
    return;
  }
  // computer shoots
  const compAttack = computer.computerTurn(AIMode, playerBoard);
  // update board
  domFunc.updateBoard('player', compAttack);
  // check for gameover
  if (playerBoard.checkWin()) {
    gameOver('computer');
    return;
  }

  // add board listeners in to get next player move
  domFunc.addBoardListeners();
}

function startNewGame() {
  domFunc.toggleNgModal();
  // clear boards
  domFunc.clearGameboards();
  // clear players
  playerBoard.clearShips();
  computerBoard.clearShips();
  // setup new game
  gameSetup();
  // show/hide buttons
  domFunc.toggleSetupBtns(true);
  domFunc.toggleNewGameBtn(false);
}

// game over
function gameOver(winner) {
  console.log(winner);
}

// run setup function
gameSetup();

// exports
export {
  startGame,
  startNewGame,
  playRound,
};
