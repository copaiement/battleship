import gameboard from "./gameboard";

// auto place enemy ships

// wait for user to fire

// enemy fire

// show the winner

const game = () => {
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

