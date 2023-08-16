import { shipLengths } from './helpers';
import { startGame, startNewGame, playRound, setGameAI } from '../index';

// ******************
// DOM functions
// ******************

const domFunctions = (playerBoard) => {
  // set up array to track cells player can select
  const listenCells = [];

  function buildGameboards() {
    const playerBoardDOM = document.querySelector('#playerBoard');
    for (let y = 0; y <= 9; y++) {
      for (let x = 0; x <= 9; x++) {
        const square = document.createElement('div');
        square.classList.add('player-square');
        square.classList.add('empty');
        square.id = `p${x}${y}`;
        playerBoardDOM.appendChild(square);
      }
    }

    const computerBoardDOM = document.querySelector('#computerBoard');
    for (let y = 0; y <= 9; y++) {
      for (let x = 0; x <= 9; x++) {
        const square = document.createElement('div');
        square.classList.add('computer-square');
        square.classList.add('empty');
        square.id = `c${x}${y}`;
        listenCells.push(square.id);
        computerBoardDOM.appendChild(square);
      }
    }
  }

  function clearGameboards() {
    const playerBoardDOM = document.querySelector('#playerBoard');
    while (playerBoardDOM.firstChild) {
      playerBoardDOM.removeChild(playerBoardDOM.lastChild);
    }

    const computerBoardDOM = document.querySelector('#computerBoard');
    while (computerBoardDOM.firstChild) {
      computerBoardDOM.removeChild(computerBoardDOM.lastChild);
    }
  }

  // enter setup mode
  function setupMode() {
    // hide computer board
    const computerContainer = document.querySelector('#computer-container');
    computerContainer.classList.add('hidden');
    // show ships placement pane
    const shipsPlacement = document.querySelector('#ships-placements');
    shipsPlacement.classList.remove('hidden');
  }

  function playMode() {
    // show computer board
    const computerContainer = document.querySelector('#computer-container');
    computerContainer.classList.remove('hidden');
    // hide ships placement pane
    const shipsPlacement = document.querySelector('#ships-placements');
    shipsPlacement.classList.add('hidden');
  }

  // remove one listener from array
  function removeListenerFromArray(cell) {
    const index = listenCells.indexOf(cell);
    listenCells.splice(index, 1);
  }

  // clean input from event
  function getClickId(e) {
    const cell = e.target.id.charAt(1) + e.target.id.charAt(2);
    playRound(cell);
  }

  // add board listeners
  function addBoardListeners() {
    listenCells.forEach((cellId) => {
      const cell = document.getElementById(cellId);
      cell.addEventListener('click', getClickId);
    });
  }

  function removeBoardListeners() {
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

  function addDiffListener() {
    const diffSlider = document.querySelector('input[type=checkbox]');
    diffSlider.addEventListener('change', () => {
      const diffDisplay = document.querySelector('.diffy-readout');
      if (diffDisplay.textContent === 'Easy') {
        diffDisplay.textContent = 'Hard';
        setGameAI('hard');
      } else {
        diffDisplay.textContent = 'Easy';
        setGameAI('easy');
      }
    });
  }

  // toggle setup btns
  function toggleSetupBtns(show) {
    const setupContainer = document.querySelector('.setup-btns');
    if (show) {
      setupContainer.classList.remove('hidden');
    } else {
      setupContainer.classList.add('hidden');
    }
  }

  // toggle start button
  function toggleStartBtn(show) {
    const startContainer = document.querySelector('.start-btn');
    if (show) {
      startContainer.classList.remove('hidden');
    } else {
      startContainer.classList.add('hidden');
    }
  }

  function toggleNewGameBtn(show) {
    const newGameContainer = document.querySelector('.new-game');
    if (show) {
      newGameContainer.classList.remove('hidden');
    } else {
      newGameContainer.classList.add('hidden');
    }
  }

  // new game modal
  function toggleNgModal(message = 'Quit Current Game?') {
    const modal = document.querySelector('.ng-modal');
    modal.classList.toggle('hidden');

    const msg = document.querySelector('.ng-modal-text');
    msg.textContent = message;
  }

  function toggleRotateBtn() {
    const rotateBtn = document.querySelector('.rotate-btn');
    rotateBtn.classList.toggle('hidden');
  }

  // new game button
  function newGameBtn() {
    const newGame = document.getElementById('new-game');
    newGame.addEventListener('click', toggleNgModal);
  }

  // add auto place button
  function autoPlaceBtn() {
    const btn = document.getElementById('auto-place');
    btn.addEventListener('click', () => {
      clearPlayerShips(playerBoard.ships);
      deactivateAllRadios();
      playerBoard.clearShips();
      playerBoard.autoPlaceShips();
      displayPlayerShips(playerBoard.ships);
      toggleStartBtn(true);
    });
  }

  // clear ships btn event listener
  function clearShipsBtn() {
    const btn = document.getElementById('clear');
    btn.addEventListener('click', () => {
      clearPlayerShips(playerBoard.ships);
      activateRadios();
      // clear player object
      playerBoard.clearShips();
      toggleStartBtn(false);
    });
  }

  // display ships
  function displayPlayerShips(shipsArray) {
    shipsArray.forEach((ship) => {
      ship.position.forEach((val) => {
        const cellID = document.getElementById(`p${val}`);
        cellID.className = '';
        cellID.classList.add('player-square');
        cellID.classList.add('ship');
      });
    });
  }

  function clearPlayerShips(shipsArray) {
    shipsArray.forEach((ship) => {
      ship.position.forEach((val) => {
        const cellID = document.getElementById(`p${val}`);
        cellID.className = '';
        cellID.classList.add('player-square');
        cellID.classList.add('empty');
      });
    });
  }

  // update boards with new attacks
  function updateBoard(target, attack) {
    let modifier;
    if (target === 'player') {
      modifier = 'p';
    } else {
      modifier = 'c';
    }

    // remove empty from cell classList
    const cellID = document.getElementById(`${modifier}${attack[0]}`);
    cellID.classList.remove('empty');

    // remove cell event listener if computer board
    if (modifier === 'c') removeListenerFromArray(`${modifier}${attack[0]}`);

    // if ship was sunk, update visible list, animate sinking
    if (attack[1] !== 'hit' && attack[1] !== 'miss') {
      cellID.classList.add('hit');
      animateSinking(target, attack[2]);
    } else {
      // update cell based on attack value
      if (attack[1] === 'hit') {
        cellID.classList.add('hit');
      } else {
        cellID.classList.add('miss');
      }
    }
  }

  // animate ship sinking
  function animateSinking(target, shipArray) {
    let modifier;
    if (target === 'player') {
      modifier = 'p';
    } else {
      modifier = 'c';
    }

    // delay version (with css transition)
    shipArray.forEach((pos) => {
      const cell = document.getElementById(`${modifier}${pos}`);
      cell.classList.remove('hit');
      cell.classList.add('sunk');
    });
  }

  // FUNCTIONS FOR PLACING SHIPS
  // event listeners for radion buttons
  function shipTypeListeners() {
    const radios = document.querySelectorAll('.rb');
    radios.forEach((radio) => {
      radio.addEventListener('change', updateShip);
    });
  }

  // event listeners for player board
  function shipPlacementListeners() {
    const rotateBtn = document.querySelector('.rotate-btn');
    rotateBtn.addEventListener('click', rotateShip);
    const playerSquares = document.querySelectorAll('.player-square');
    playerSquares.forEach((square) => {
      square.addEventListener('mouseover', buildShipCells);
      square.addEventListener('mouseout', mouseOutFns);
    });
  }

  // event listeners for player board
  function removeShipPlacementListeners() {
    const rotateBtn = document.querySelector('.rotate-btn');
    rotateBtn.removeEventListener('click', rotateShip);
    const playerSquares = document.querySelectorAll('.player-square');
    playerSquares.forEach((square) => {
      square.removeEventListener('mouseover', buildShipCells);
      square.removeEventListener('mouseout', mouseOutFns);
    });
  }

  // globals for showShip
  let isVertical = false;
  let ship = 'A';
  let shipLen = 5;
  const shipArr = [];
  function updateShip(e) {
    ship = e.target.value;
    shipLen = shipLengths(ship);
  }

  function buildShipCells(e) {
    const cellId = e.target.id;
    const x = parseInt(cellId.charAt(1), 10);
    const y = parseInt(cellId.charAt(2), 10);
    shipArr.length = 0;
    // direction = x
    if (!isVertical) {
      for (let i = x; i < x + shipLen; i++) {
        if (i <= 9) shipArr.push(`p${i}${y}`);
      }
    // direction = y
    } else {
      for (let i = y; i < y + shipLen; i++) {
        if (i <= 9) shipArr.push(`p${x}${i}`);
      }
    }
    showShip(`${x}${y}`);
  }

  function showShip(start) {
    // if ship goes off board or hits another ship, show bad placement
    if (!playerBoard.checkShipPlacement(ship, start, isVertical)) {
      shipArr.forEach((cell) => {
        document.getElementById(cell).classList.add('placement-invalid');
      });
    } else {
      shipArr.forEach((cell) => {
        const square = document.getElementById(cell);
        square.classList.add('placement-valid');
        square.addEventListener('click', placeShip);
      });
    }
  }

  function clearShip() {
    shipArr.forEach((cell) => {
      const square = document.getElementById(`${cell}`);
      square.className = '';
      square.classList.add('player-square');
      square.classList.add('empty');
    });
  }

  function rotateShip() {
    if (isVertical) {
      isVertical = false;
    } else {
      isVertical = true;
    }
  }

  function mouseOutFns(e) {
    const square = document.getElementById(`${e.target.id}`);
    // remove click listener
    square.removeEventListener('click', placeShip);
    // clear classes from cell
    clearShip();
    // rebuild board to remove new classes
    clearPlayerShips(playerBoard.ships);
    displayPlayerShips(playerBoard.ships);
  }

  function deactivateAllRadios() {
    const shipList = ['A', 'B', 'D1', 'D2', 'P'];
    shipList.forEach((shp) => {
      document.getElementById(shp).disabled = true;
    });
  }

  function deactivateRadio(shp) {
    document.getElementById(shp).disabled = true;
  }

  function activateRadios() {
    const shipList = ['A', 'B', 'D1', 'D2', 'P'];
    shipList.forEach((shp) => {
      document.getElementById(shp).disabled = false;
    });
  }

  function placeShip(e) {
    deactivateRadio(ship);
    const square = e.target.id;
    // place ship
    const start = `${square.charAt(1)}${square.charAt(2)}`;
    playerBoard.placeShip(ship, start, isVertical);
    // if all ships placed toggle start btn
    if (playerBoard.ships.length === 5) toggleStartBtn(true);
  }

  function gameOver(winner) {
    const msg = `Game over! The winner is ${winner}! Play again?`;
    toggleNgModal(msg);
  }

  return {
    buildGameboards,
    setupMode,
    clearShipsBtn,
    autoPlaceBtn,
    addStartListener,
    addModalListeners,
    newGameBtn,
    shipTypeListeners,
    shipPlacementListeners,
    removeShipPlacementListeners,
    addBoardListeners,
    addDiffListener,
    toggleSetupBtns,
    toggleStartBtn,
    toggleNewGameBtn,
    toggleRotateBtn,
    toggleNgModal,
    playMode,
    removeBoardListeners,
    clearGameboards,
    updateBoard,
    gameOver,
  };
};

export default domFunctions;
