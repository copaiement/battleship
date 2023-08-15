import { shipLengths } from "./helpers";
import newGame from "./game2";

// ******************
// DOM functions
// ******************

const domFunctions = (playerBoard, computerBoard) => {
  // set up array to track cells player can select
  const listenCells = [];

  function buildGameboards() {
    const playerBoard = document.querySelector('#playerBoard');
    for (let y = 0; y <= 9; y++) {
      for (let x = 0; x <= 9; x++) {
        const square = document.createElement('div');
        square.classList.add('player-square');
        square.classList.add('empty');
        square.id = `p${x}${y}`;
        playerBoard.appendChild(square);
      }
    }

    const computerBoard = document.querySelector('#computerBoard');
    for (let y = 0; y <= 9; y++) {
      for (let x = 0; x <= 9; x++) {
        const square = document.createElement('div');
        square.classList.add('comp-square');
        square.classList.add('empty');
        square.id = `c${x}${y}`;
        listenCells.push(square.id);
        computerBoard.appendChild(square);
      }
    }
  }

  function clearGameboards() {
    const playerBoard = document.querySelector('#playerBoard');
    while (playerBoard.firstChild) {
      playerBoard.removeChild(playerBoard.lastChild);
    }

    const computerBoard = document.querySelector('#computerBoard');
    while (computerBoard.firstChild) {
      computerBoard.removeChild(computerBoard.lastChild);
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
    newGame.playRound(cell);
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
    btn.addEventListener('click', newGame.startGame);
  }

  function addModalListeners() {
    const confirmBtn = document.getElementById('confirm');
    const cancelBtn = document.getElementById('cancel');
    confirmBtn.addEventListener('click', newGame.startNewGame);
    cancelBtn.addEventListener('click', toggleNgModal);
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
  function toggleNgModal() {
    const modal = document.querySelector('.ng-modal');
    modal.classList.toggle('hidden');
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
      updateShipList(target, attack[1]);
      animateSinking(target, attack[2]);
    } else {
      // update cell based on attack value
      if (attack[1] === 'hit') {
        cellID.classList.add('hit');
        animateShot(target, attack[0], 'hit', cellID);
      } else {
        cellID.classList.add('miss');
        animateShot(target, attack[0], 'miss', cellID);
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

  // animate a single shot
  function animateShot(target, shot) {

  }

  // update visible list of ships with new sunk ships
  function updateShipList(target, shipType) {

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

  function placeShip(e) {
    // check if ship already exists
    const square = e.target.id;
    // place ship
    const start = `${square.charAt(1)}${square.charAt(2)}`;
    playerBoard.placeShip(ship, start, isVertical);
    // if all ships placed toggle start btn
    if (playerBoard.ships.length === 5) toggleStartBtn(true);
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
    addBoardListeners,
    toggleSetupBtns,
    toggleStartBtn,
    toggleNewGameBtn,
    toggleRotateBtn,
    playMode,
    removeBoardListeners,
    clearGameboards,
    updateBoard,
  }

};

export default domFunctions;
