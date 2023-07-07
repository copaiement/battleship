import domFunctions from "./scripts/domFunctions";
import gameboard from "./scripts/gameboard";
import './style.css';

// testing 
const game = gameboard();
game.placeShip('A', '00', false);
console.log(game.ships[0].position);
const domfunc = domFunctions();
domfunc.buildGameboards();
domfunc.displayShip(game.ships);

