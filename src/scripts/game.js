import gameboard from "./gameboard";

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
    
    // computer fire
    function computerFire() {
        
    }

    // check for win
    function checkWin(board) {
        if (board.sunk.length === 5) return true;
        return false;
    }


}

