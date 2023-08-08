// DOM functions

// set up array to track cells player can select
const listenCells = [];

function buildGameboards() {
  const playerBoard = document.querySelector('#playerBoard');
  for (let y = 0; y <= 9; y++) {
    for (let x = 0; x <= 9; x++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.classList.add('empty');
      square.id = `p${x}${y}`;
      playerBoard.appendChild(square);
    }
  }

  const computerBoard = document.querySelector('#computerBoard');
  for (let y = 0; y <= 9; y++) {
    for (let x = 0; x <= 9; x++) {
      const square = document.createElement('div');
      square.classList.add('square');
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

// export listen cells
function getListenCells() {
  return listenCells;
}

// remove one listener from array
function removeListenerFromArray(cell) {
  const index = listenCells.indexOf(cell);
  listenCells.splice(index, 1);
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

// add auto place button
function autoPlaceBtn(board) {
  const btn = document.getElementById('auto-place');
  btn.addEventListener('click', () => {
    clearPlayerShips(board.ships);
    board.clearShips();
    board.autoPlaceShips();
    displayPlayerShips(board.ships);
    toggleStartBtn(true);
  });
}

// clear ships btn event listener
function clearShipsBtn(board) {
  const btn = document.getElementById('clear');
  btn.addEventListener('click', () => {
    clearPlayerShips(board.ships);
    board.clearShips();
    toggleStartBtn(false);
  });
}

// display ships
function displayPlayerShips(shipsArray) {
  shipsArray.forEach(ship => {
    ship.position.forEach(val => {
      const cellID = document.getElementById(`p${val}`);
      cellID.classList.remove('empty');
      cellID.classList.add('ship');
    })
  });
}

function clearPlayerShips(shipsArray) {
  shipsArray.forEach(ship => {
    ship.position.forEach(val => {
      const cellID = document.getElementById(`p${val}`);
      cellID.classList.remove('ship');
      cellID.classList.add('empty');
    })
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

export {
  buildGameboards,
  clearGameboards,
  setupMode,
  playMode,
  getListenCells,
  clearShipsBtn,
  autoPlaceBtn,
  toggleSetupBtns,
  toggleStartBtn,
  toggleNewGameBtn,
  displayPlayerShips,
  updateBoard,
};
