import game from "./scripts/game";
import './style.css';

// FULL CODE
// set up newGameBtn
newGameBtn();

// create game
let newGame = game();

// new game button
function newGameBtn() {
  const newGameBtn = document.getElementById('new-game');
  newGameBtn.addEventListener('click', startNewGame);
}

function startNewGame() {
  newGame = game();
}
