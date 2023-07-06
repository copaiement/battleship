// DOM functions

function initializeGameboard() {
    const playerBoard = document.querySelector('.playerBoard');
    for (let y = 0; y <= 9; y++) {
        for (let x = 0; x <= 9; x++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add('empty');
            square.id = `${x}${y}`;
            playerBoard.appendChild(square);
        }
    }
    const computerBoard = document.querySelector('.computerBoard');
    for (let y = 0; y <= 9; y++) {
        for (let x = 0; x <= 9; x++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add('empty');
            square.id = `${x}${y}`;
            computerBoard.appendChild(square);
        }
    }
}