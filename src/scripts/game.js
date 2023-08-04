import gameboard from "./gameboard";
import player from "./player";
import { buildGameboards, updateBoard, getListenCells } from "./domFunctions";

// main game loop
// should step through game turn by turn using only methods
// from other objects

const game = () => {
  // render boards
  buildGameboards();

  // create players
  const user = player();
  const computer = player();
  const AIMode = 'easy';

  // create gameboards
  const playerBoard = gameboard();
  const computerBoard = gameboard();

  // auto place ships
  // TESTING ONLY - PLAYER PLACES OWN SHIPS EVENTUALLY
  playerBoard.autoPlaceShips();
  computerBoard.autoPlaceShips();

  // place board listeners
  addBoardListeners();

  // play one round
  // called by event listener
  function playRound(playerMove) {
    // remove board listeners
    removeBoardListeners();
    // player shoots
    const attack = user.playerTurn(playerMove, computerBoard);
    // update board
    updateBoard('computer', attack);
    // check for gameover
    if (computerBoard.checkWin()) {
      return gameOver('player');
    }
    // computer shoots
    const compAttack = computer.computerTurn(AIMode, playerBoard);
    // update board
    updateBoard('player', compAttack);
    // check for gameover
    if (playerBoard.checkWin()) {
      return gameOver('computer');
    }

    // add board listeners in to get next player move
    addBoardListeners();
  }

  // add board listeners
  function addBoardListeners() {
    const listenCells = getListenCells();
    listenCells.forEach((cellId) => {
      const cell = document.getElementById(cellId);
      cell.addEventListener('click', getClickId);
    });
  }

  function removeBoardListeners() {
    const listenCells = getListenCells();
    listenCells.forEach((cellId) => {
      const cell = document.getElementById(cellId);
      cell.removeEventListener('click', getClickId);
    });
  }

  // clean input from event
  function getClickId(e) {
    const cell = e.target.id.charAt(1) + e.target.id.charAt(2);
    playRound(cell);
  }

  // game over
  function gameOver(winner) {

  }
};

export default game;
