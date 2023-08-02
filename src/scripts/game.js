import gameboard from "./gameboard";
import player from "./player";
import { buildGameboards, playerMove, updateBoard } from "./domFunctions";

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

  // set up current player variable (start with player)
  let currentBoard = playerBoard;
  let marker = 'p';

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

  // player fire
  function playerFire(move) {
    const attack = user.playerTurn(move, computerBoard);
    updateBoard('computer', attack);
  }

  // computer fire
  function computerFire() {
    const attack = computer.computerTurn(AIMode, playerBoard);
    updateBoard('player', attack);
  }

  return {
    playerFire,
    computerFire,
  };
};

export default game;
