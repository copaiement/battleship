import gameboard from "./gameboard";
import player from "./player";
import domFunctions from "./domFunctions";

// main game loop

// create gameboards

// ask user to place ships or select auto place

// auto place enemy ships

// wait for user to fire

// enemy fire

// show the winner

const game = () => {
    // create players
    const user = player();
    const computer = player();
    const AIMode = 'easy';

    // create initial gameboards
    let playerBoard = gameboard();
    let computerBoard = gameboard();
    computerBoard.autoPlaceShips();

    // create new gameboards (for gameover)
    function createGameboards() {
        playerBoard = gameboard();
        computerBoard = gameboard();
        computerBoard.autoPlaceShips();
    }
    
    // player fire
    function playerFire(move) {
        let attack = user.playerTurn(move, computerBoard);
        updateBoard('computer', attack);
    }

    // computer fire
    function computerFire() {
        let attack = computer.computerTurn(AIMode, playerBoard);
        updateBoard('player', attack);
    }

    // check for win
    function checkWin(board) {
        if (board.sunk.length === 5) return true;
        return false;
    }


}

