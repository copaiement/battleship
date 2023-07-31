import domFunctions from "./scripts/domFunctions";
import gameboard from "./scripts/gameboard";
import game from "./scripts/game";
import player from "./scripts/player";
import './style.css';

// // testing 
// const game = gameboard();
// game.autoPlaceShips();
// console.log(game.ships);
// const domfunc = domFunctions();
// domfunc.buildGameboards();
// domfunc.displayShip(game.ships);

// FULL CODE

// create players
const user = player();
const computer = player();
const AIMode = 'easy';

// pull in domFunctions
// change this later to not be an object??
const domfunc = domFunctions();

// create gameboards
const playerBoard = gameboard();
const compBoard = gameboard();
domfunc.buildGameboards();

// create game
const newGame = game();

// auto place ships
playerBoard.autoPlaceShips();
compBoard.autoPlaceShips();

// add event listeners for player move
domfunc.addBoardListeners();
 
