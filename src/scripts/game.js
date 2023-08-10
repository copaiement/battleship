import gameboard from "./gameboard";
import player from "./player";
import {
  buildGameboards,
  clearGameboards,
  setupMode,
  playMode,
  updateBoard,
  getListenCells,
  toggleSetupBtns,
  toggleStartBtn,
  clearShipsBtn,
  autoPlaceBtn,
  toggleNewGameBtn,
  newGameBtn,
  toggleNgModal,
  storeGameboard,
} from "./domFunctions";

// main game loop
// should step through game turn by turn using only methods
// from other objects

const game = () => {
  // local vars
  const user = player();
  const computer = player();
  const playerBoard = gameboard();
  const computerBoard = gameboard();

  // set AIMode to easy (default)
  let AIMode = 'easy';

  // store gameboard copy in DOMFunctions
  storeGameboard(playerBoard);

  function gameSetup() {
    // render boards
    buildGameboards();
    // hide opponent board;
    setupMode();
    // auto place computer ships
    computerBoard.autoPlaceShips();

    // set up player btns
    clearShipsBtn(playerBoard);
    autoPlaceBtn(playerBoard);
    addStartListener();
    addModalListeners();
    newGameBtn();
  }

  function startGame() {
    addBoardListeners();
    toggleSetupBtns(false);
    toggleStartBtn(false);
    toggleNewGameBtn(true);
    playMode();
  }

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

  function addStartListener() {
    const btn = document.getElementById('start');
    btn.addEventListener('click', startGame);
  }

  function addModalListeners() {
    const confirmBtn = document.getElementById('confirm');
    const cancelBtn = document.getElementById('cancel');
    confirmBtn.addEventListener('click', startNewGame);
    cancelBtn.addEventListener('click', toggleNgModal);
  }

  function startNewGame() {
    toggleNgModal();
    // clear boards
    clearGameboards();
    // clear players
    playerBoard.clearShips();
    computerBoard.clearShips();
    // setup new game
    gameSetup();
    // show/hide buttons
    toggleSetupBtns(true);
    toggleNewGameBtn(false);
  }

  // clean input from event
  function getClickId(e) {
    const cell = e.target.id.charAt(1) + e.target.id.charAt(2);
    playRound(cell);
  }

  // game over
  function gameOver(winner) {
    console.log(winner);
  }

  // run setup function
  gameSetup();
};

export default game;
