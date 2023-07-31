import gameboard from "./gameboard";
import player from "./player";

// auto place enemy ships

// wait for user to fire

// enemy fire

// show the winner

const game = () => {
  // create players
  const user = player();
  const computer = player();
  const AIMode = 'easy';

  // create gameboards
  const playerBoard = gameboard();
  const computerBoard = gameboard();

  // auto place ships
  playerBoard.autoPlaceShips();
  computerBoard.autoPlaceShips();

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

  // check for win
  function checkWin(board) {
    if (board.sunk.length === 5) return true;
    return false;
  }

  return {
    playerFire,
    computerFire,
    checkWin,
  };
};

export default game;
