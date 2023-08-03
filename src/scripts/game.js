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

  // while loop to run game
  while (!currentBoard.checkWin()) {
    // player turn
    if (marker === 'p') {
      // wait for move from domFunctions
      const move = playerMove();
      // player fire
      const attack = user.playerTurn(move, computerBoard);
      updateBoard('computer', attack);
      // update current player
      currentBoard = computerBoard;
      marker = 'c';
    // computer turn
    } else {
      // computer fire
      const attack = computer.computerTurn(AIMode, playerBoard);
      updateBoard('player', attack);
      // update current player
      currentBoard = playerBoard;
      marker = 'p';
    }
  }

  // play one round
  // called by event listener
  function playRound(playerMove) {
    // player shoots
    const attack = user.playerTurn(playerMove, computerBoard);
    // update board
    updateBoard('computer', attack);
    // check for gameover
    if (computerBoard.sunk.length === 5) {
      return gameOver('player');
    }
    // computer shoots

    // update board

    // check for gameover
    if (playerBoard.sunk.length === 5) {
      return gameOver('computer');
    }
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

  return {
    playerFire,
    computerFire,
  };
};

export default game;
