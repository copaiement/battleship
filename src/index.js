import { buildGameboards, addBoardListeners } from "./scripts/domFunctions";
import game from "./scripts/game";
import './style.css';

// FULL CODE
// create game
const newGame = game();

// build Gameboards
buildGameboards();

// add event listeners for player move
addBoardListeners();
 
