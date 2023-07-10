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
                // add square ID as text
                square.innerHTML = `${x}${y}`;
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

    // update boards with new attacks
    function updateBoard(target, attack) {
        // cell id variable
        let cellID;
        let modifier;
        if (target === 'player') {
            modifier = 'p';
        } else {
            modifier = 'c';
        }

        cellID = document.getElementById(`${modifier}${attack[1]}`);
        // update cell based on attack value
        if (attack[0] === 'hit') {
            cellID.classList.remove('ship');
            cellID.classList.add('hit');
        } else if (attack[0] === 'miss') {
            cellID.classList.remove('empty');
            cellID.classList.add('miss');
        } else {
            updateShipList(target, attack[0]);
            animateSinking(attack[1]);
        }
    }

    // animate ship sinking
    function animateSinking() {

    }

    // update visible list of ships with new sunk ships
    function updateShipList(target, shipType) {

    }

    return {
        buildGameboards,
        displayShip,
        updateBoard,
    }
}


export default domFunctions;