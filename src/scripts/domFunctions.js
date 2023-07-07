// DOM functions

const domFunctions = () => {
    function buildGameboards() {
        const playerBoard = document.querySelector('.playerBoard');
        for (let y = 0; y <= 9; y++) {
            for (let x = 0; x <= 9; x++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.classList.add('empty');
                square.id = `p${x}${y}`;
                playerBoard.appendChild(square);
            }
        }
        const computerBoard = document.querySelector('.computerBoard');
        for (let y = 0; y <= 9; y++) {
            for (let x = 0; x <= 9; x++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.classList.add('empty');
                square.id = `c${x}${y}`;
                computerBoard.appendChild(square);
            }
        }
    }
    
    function displayShip(shipsArray) {
        shipsArray.forEach(ship => {
            ship.position.forEach(val => {
                const cellID = document.getElementById(`p${val}`);
                cellID.classList.remove('empty');
                cellID.classList.add('ship');
            })
        });
    }

    return {
        buildGameboards,
        displayShip,
    }
}


export default domFunctions;