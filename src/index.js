import game from './scripts/game2';
import './style.css';

// FULL CODE

const newGame = game();


// main game loop
// should step through game turn by turn using only methods
// from other objects

// const game = () => {
//   // local vars
//   const user = player();
//   const computer = player();
//   const playerBoard = gameboard();
//   const computerBoard = gameboard();

//   // set AIMode to easy (default)
//   let AIMode = 'easy';

//   function gameSetup() {
//     // render boards
//     domFunc.buildGameboards();
//     // hide opponent board;
//     domFunc.setupMode();
//     // auto place computer ships
//     computerBoard.autoPlaceShips();

//     // set up player btns
//     domFunc.clearShipsBtn(playerBoard);
//     domFunc.autoPlaceBtn(playerBoard);
//     domFunc.addStartListener();
//     domFunc.addModalListeners();
//     domFunc.newGameBtn();
//     domFunc.shipTypeListeners();
//     domFunc.shipPlacementListeners();
//   }

//   function startGame() {
//     domFunc.addBoardListeners();
//     domFunc.toggleSetupBtns(false);
//     domFunc.toggleStartBtn(false);
//     domFunc.toggleNewGameBtn(true);
//     domFunc.playMode();
//   }

//   // play one round
//   // called by event listener
//   function playRound(playerMove) {
//     // remove board listeners
//     domFunc.removeBoardListeners();
//     // player shoots
//     const attack = user.playerTurn(playerMove, computerBoard);
//     // update board
//     domFunc.updateBoard('computer', attack);
//     // check for gameover
//     if (computerBoard.checkWin()) {
//       gameOver('player');
//       return;
//     }
//     // computer shoots
//     const compAttack = computer.computerTurn(AIMode, playerBoard);
//     // update board
//     domFunc.updateBoard('player', compAttack);
//     // check for gameover
//     if (playerBoard.checkWin()) {
//       gameOver('computer');
//       return;
//     }

//     // add board listeners in to get next player move
//     domFunc.addBoardListeners();
//   }

//   function startNewGame() {
//     domFunc.toggleNgModal();
//     // clear boards
//     domFunc.clearGameboards();
//     // clear players
//     playerBoard.clearShips();
//     computerBoard.clearShips();
//     // setup new game
//     gameSetup();
//     // show/hide buttons
//     domFunc.toggleSetupBtns(true);
//     domFunc.toggleNewGameBtn(false);
//   }

//   // game over
//   function gameOver(winner) {
//     console.log(winner);
//   }

//   // run setup function
//   gameSetup();

//   return {
//     startGame,
//     startNewGame,
//     playRound,
//     playerBoard,
//     computerBoard,
//   };
// };

// // ******************
// // DOM functions
// // ******************

// const domFunctions = () => {
//   // set up array to track cells player can select
//   const listenCells = [];

//   function buildGameboards() {
//     const playerBoard = document.querySelector('#playerBoard');
//     for (let y = 0; y <= 9; y++) {
//       for (let x = 0; x <= 9; x++) {
//         const square = document.createElement('div');
//         square.classList.add('player-square');
//         square.classList.add('empty');
//         square.id = `p${x}${y}`;
//         playerBoard.appendChild(square);
//       }
//     }

//     const computerBoard = document.querySelector('#computerBoard');
//     for (let y = 0; y <= 9; y++) {
//       for (let x = 0; x <= 9; x++) {
//         const square = document.createElement('div');
//         square.classList.add('comp-square');
//         square.classList.add('empty');
//         square.id = `c${x}${y}`;
//         listenCells.push(square.id);
//         computerBoard.appendChild(square);
//       }
//     }
//   }

//   function clearGameboards() {
//     const playerBoard = document.querySelector('#playerBoard');
//     while (playerBoard.firstChild) {
//       playerBoard.removeChild(playerBoard.lastChild);
//     }

//     const computerBoard = document.querySelector('#computerBoard');
//     while (computerBoard.firstChild) {
//       computerBoard.removeChild(computerBoard.lastChild);
//     }
//   }

//   // enter setup mode
//   function setupMode() {
//     // hide computer board
//     const computerContainer = document.querySelector('#computer-container');
//     computerContainer.classList.add('hidden');
//     // show ships placement pane
//     const shipsPlacement = document.querySelector('#ships-placements');
//     shipsPlacement.classList.remove('hidden');
//   }

//   function playMode() {
//     // show computer board
//     const computerContainer = document.querySelector('#computer-container');
//     computerContainer.classList.remove('hidden');
//     // hide ships placement pane
//     const shipsPlacement = document.querySelector('#ships-placements');
//     shipsPlacement.classList.add('hidden');
//   }

//   // remove one listener from array
//   function removeListenerFromArray(cell) {
//     const index = listenCells.indexOf(cell);
//     listenCells.splice(index, 1);
//   }

//   // clean input from event
//   function getClickId(e) {
//     const cell = e.target.id.charAt(1) + e.target.id.charAt(2);
//     newGame.playRound(cell);
//   }

//   // add board listeners
//   function addBoardListeners() {
//     listenCells.forEach((cellId) => {
//       const cell = document.getElementById(cellId);
//       cell.addEventListener('click', getClickId);
//     });
//   }

//   function removeBoardListeners() {
//     listenCells.forEach((cellId) => {
//       const cell = document.getElementById(cellId);
//       cell.removeEventListener('click', getClickId);
//     });
//   }

//   function addStartListener() {
//     const btn = document.getElementById('start');
//     btn.addEventListener('click', newGame.startGame);
//   }

//   function addModalListeners() {
//     const confirmBtn = document.getElementById('confirm');
//     const cancelBtn = document.getElementById('cancel');
//     confirmBtn.addEventListener('click', newGame.startNewGame);
//     cancelBtn.addEventListener('click', toggleNgModal);
//   }

//   // toggle setup btns
//   function toggleSetupBtns(show) {
//     const setupContainer = document.querySelector('.setup-btns');
//     if (show) {
//       setupContainer.classList.remove('hidden');
//     } else {
//       setupContainer.classList.add('hidden');
//     }
//   }

//   // toggle start button
//   function toggleStartBtn(show) {
//     const startContainer = document.querySelector('.start-btn');
//     if (show) {
//       startContainer.classList.remove('hidden');
//     } else {
//       startContainer.classList.add('hidden');
//     }
//   }

//   function toggleNewGameBtn(show) {
//     const newGameContainer = document.querySelector('.new-game');
//     if (show) {
//       newGameContainer.classList.remove('hidden');
//     } else {
//       newGameContainer.classList.add('hidden');
//     }
//   }

//   // new game modal
//   function toggleNgModal() {
//     const modal = document.querySelector('.ng-modal');
//     modal.classList.toggle('hidden');
//   }

//   // new game button
//   function newGameBtn() {
//     const newGame = document.getElementById('new-game');
//     newGame.addEventListener('click', toggleNgModal);
//   }

//   // add auto place button
//   function autoPlaceBtn() {
//     const btn = document.getElementById('auto-place');
//     btn.addEventListener('click', () => {
//       clearPlayerShips(newGame.playerBoard.ships);
//       newGame.playerBoard.clearShips();
//       newGame.playerBoard.autoPlaceShips();
//       displayPlayerShips(newGame.playerBoard.ships);
//       toggleStartBtn(true);
//     });
//   }

//   // clear ships btn event listener
//   function clearShipsBtn() {
//     const btn = document.getElementById('clear');
//     btn.addEventListener('click', () => {
//       clearPlayerShips(newGame.playerBoard.ships);
//       newGame.playerBoard.clearShips();
//       toggleStartBtn(false);
//     });
//   }

//   // display ships
//   function displayPlayerShips(shipsArray) {
//     shipsArray.forEach((ship) => {
//       ship.position.forEach((val) => {
//         const cellID = document.getElementById(`p${val}`);
//         cellID.classList.remove('empty');
//         cellID.classList.add('ship');
//       });
//     });
//   }

//   function clearPlayerShips(shipsArray) {
//     shipsArray.forEach((ship) => {
//       ship.position.forEach((val) => {
//         const cellID = document.getElementById(`p${val}`);
//         cellID.classList.remove('ship');
//         cellID.classList.add('empty');
//       });
//     });
//   }

//   // update boards with new attacks
//   function updateBoard(target, attack) {
//     let modifier;
//     if (target === 'player') {
//       modifier = 'p';
//     } else {
//       modifier = 'c';
//     }

//     // remove empty from cell classList
//     const cellID = document.getElementById(`${modifier}${attack[0]}`);
//     cellID.classList.remove('empty');

//     // remove cell event listener if computer board
//     if (modifier === 'c') removeListenerFromArray(`${modifier}${attack[0]}`);

//     // if ship was sunk, update visible list, animate sinking
//     if (attack[1] !== 'hit' && attack[1] !== 'miss') {
//       cellID.classList.add('hit');
//       updateShipList(target, attack[1]);
//       animateSinking(target, attack[2]);
//     } else {
//       // update cell based on attack value
//       if (attack[1] === 'hit') {
//         cellID.classList.add('hit');
//         animateShot(target, attack[0], 'hit', cellID);
//       } else {
//         cellID.classList.add('miss');
//         animateShot(target, attack[0], 'miss', cellID);
//       }
//     }
//   }

//   // animate ship sinking
//   function animateSinking(target, shipArray) {
//     let modifier;
//     if (target === 'player') {
//       modifier = 'p';
//     } else {
//       modifier = 'c';
//     }

//     // delay version (with css transition)
//     shipArray.forEach((pos) => {
//       const cell = document.getElementById(`${modifier}${pos}`);
//       cell.classList.remove('hit');
//       cell.classList.add('sunk');
//     });
//   }

//   // animate a single shot
//   function animateShot(target, shot) {

//   }

//   // update visible list of ships with new sunk ships
//   function updateShipList(target, shipType) {

//   }

//   // FUNCTIONS FOR PLACING SHIPS
//   // event listeners for radion buttons
//   function shipTypeListeners() {
//     const radios = document.querySelectorAll('.rb');
//     radios.forEach((radio) => {
//       radio.addEventListener('change', updateShip);
//     });
//   }

//   // event listeners for player board
//   function shipPlacementListeners() {
//     const playerSquares = document.querySelectorAll('.player-square');
//     playerSquares.forEach((square) => {
//       square.addEventListener('mouseover', buildShipCells);
//       square.addEventListener('mouseout', mouseOutFns);
//       square.addEventListener('click', rotateShip);
//       //square.addEventListener('dblclick', placeShip);
//     });
//   }

//   // globals for showShip
//   let isVertical = false;
//   let ship = 'A';
//   let shipLen = 5;
//   let board = game.playerBoard;

//   function updateShip(e) {
//     ship = e.target.value;
//     shipLen = shipLengths(ship);
//     console.log(ship);
//   }

//   function buildShipCells(e) {
//     const cellId = e.target.id;
//     const x = cellId.charAt(1);
//     const y = cellId.charAt(2);
//     const shipArr = [];
//     // direction = x
//     if (!isVertical) {
//       for (let i = x; i <= x + shipLen; i++) {
//         if (i <= 8) shipArr.push(`p${i}${y}`);
//       }
//     // direction = y
//     } else {
//       for (let i = y; i <= y + shipLen; i++) {
//         if (i <= 8) shipArr.push(`p${x}${i}`);
//       }
//     }
//     showShip(shipArr, `${x}${y}`);
//   }

//   function showShip(shipArr, start) {
//     // if ship goes off board or hits another ship, show bad placement
//     if (!board.checkShipPlacement(ship, start, isVertical)) {
//       shipArr.forEach((cell) => {
//         document.getElementById(cell).classList.add('placement-invalid');
//       });
//     } else {
//       shipArr.forEach((cell) => {
//         const square = document.getElementById(cell);
//         square.addEventListener('dblclick', placeShip);
//       });
//     }
//   }

//   function rotateShip() {
//     if (isVertical) {
//       isVertical = false;
//     } else {
//       isVertical = true;
//     }
//   }

//   function mouseOutFns(e) {
//     const square = document.getElementById(`${e.target.id}`);
//     // remove click listener
//     square.removeEventListener('dblclick', placeShip);
//     // rebuild board to remove new classes
//     clearPlayerShips(board.ships);
//     displayPlayerShips(board.ships);
//   }

//   function placeShip(e) {
//     const shipId = e.target.id;
    
//   }

//   return {
//     buildGameboards,
//     setupMode,
//     clearShipsBtn,
//     autoPlaceBtn,
//     addStartListener,
//     addModalListeners,
//     newGameBtn,
//     shipTypeListeners,
//     shipPlacementListeners,
//     addBoardListeners,
//     toggleSetupBtns,
//     toggleStartBtn,
//     toggleNewGameBtn,
//     playMode,
//     removeBoardListeners,
//     clearGameboards,
//     updateBoard,
//   }

// };


