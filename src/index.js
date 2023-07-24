import domFunctions from "./scripts/domFunctions";
import gameboard from "./scripts/gameboard";
import './style.css';

// testing 
const game = gameboard();
game.autoPlaceShips();
console.log(game.ships);
const domfunc = domFunctions();
domfunc.buildGameboards();
domfunc.displayShip(game.ships);

const game = game();
const domfunc = domFunctions();
domfunc.buildGameboards();
