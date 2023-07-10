import gameboard from "./gameboard";
import player from "./player";

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
        decodeAttack(attack);
    }

    // computer fire
    function computerFire() {
        let attack = computer.computerTurn(AIMode, playerBoard);
        decodeAttack(attack);
    }

    // decode attack return value
    function decodeAttack(value) {
        if (value[0] === 'sunk') {
            return [value[0], value[2]];
        } else {
            return value;
        }
    }

    // check for win
    function checkWin(board) {
        if (board.sunk.length === 5) return true;
        return false;
    }


}

