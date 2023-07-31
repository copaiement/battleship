import domFunctions from "./scripts/domFunctions";
import game from "./scripts/game";
import './style.css';

// // testing 
// const game = gameboard();
// game.autoPlaceShips();
// console.log(game.ships);
// const domfunc = domFunctions();
// domfunc.buildGameboards();
// domfunc.displayShip(game.ships);

// FULL CODE
// create game
const newGame = game();

// pull in domFunctions
// change this later to not be an object??
const domfunc = domFunctions();
domfunc.buildGameboards();

// add event listeners for player move
domfunc.addBoardListeners();
 
