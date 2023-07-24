// DOM functions

const domFunctions = () => {
    // track cells with functioning event listeners
    const listenCells = [];

    function buildGameboards() {
        const playerBoard = document.querySelector('#playerBoard');
        for (let y = 0; y <= 9; y++) {
            for (let x = 0; x <= 9; x++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.classList.add('empty');
                square.id = `p${x}${y}`;
                playerBoard.appendChild(square);
            }
        }

        const computerBoard = document.querySelector('#computerBoard');
        for (let y = 0; y <= 9; y++) {
            for (let x = 0; x <= 9; x++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.classList.add('empty');
                square.id = `c${x}${y}`;
                listenCells.push(square.id);
                computerBoard.appendChild(square);
            }
        }
    }
    // add event listeners for buttons
    function autoPlaceBtn() {
        let btn = document.querySelector("#auto-place");
        btn.addEventListener()
    }

    // add event listeners to cells
    function addBoardListeners() {
        listenCells.forEach(cellId => {
            let cell = document.getElementById(cellId);
            cell.addEventListener();
        })
    }

    // remove all event listeners
    function removeBoardListeners(){
        listenCells.forEach(cellId => {
            let cell = document.getElementById(cellId);
            cell.removeEventListener();
        })
    }

    // remove one listener from array
    function removeListenerFromArray(cell) {
        const index = listenCells.IndexOf(cell);
        listenCells.splice(index, 1);
    }
    
    // toggle setup btns
    function showHideSetupBtns(show) {
        const newGameContainer = document.querySelector('.setup-btns');
        const setupContainer = document.querySelector('.new-game');
        if (show) {
            newGameContainer.classList.add('hidden');
            setupContainer.classList.remove('hidden');
        } else {
            newGameContainer.classList.remove('hidden');
            setupContainer.classList.add('hidden');
        }
    }

    // toggle start button
    function toggleStartBtn(show) {
        const startContainer = document.querySelector('.start-btn');
        if (show) {
            startContainer.classList.remove('hidden');
        } else {
            startContainer.classList.add('hidden');
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

        // if ship was sunk, update visible list, animate sinking
        if (attack[0] !== 'hit' && attack[0] !== 'miss') {
            updateShipList(target, attack[0]);
            animateSinking(target, attack[1]);
        } else {
            cellID = document.getElementById(`${modifier}${attack[1]}`);
            // remove cell event listener if computer board
            if (modifier === c) removeListenerFromArray(`${modifier}${attack[1]}`);

            // update cell based on attack value
            if (attack[0] === 'hit') {
                cellID.classList.remove('ship');
                cellID.classList.add('hit');
                animateShot(target, attack[1], 'hit', cellID);
            } else {
                cellID.classList.remove('empty');
                cellID.classList.add('miss');
                animateShot(target, attack[1], 'miss', cellID);
            }
        }

        // add or remove event listeners based on player
        if (target === 'player') {
            addBoardListeners();
        } else {
            removeBoardListeners();
        }
    }

    // animate ship sinking
    function animateSinking(target, shipArray) {
        let modifier;
        if (target === 'player') {
            modifier = 'p';
        } else {
            modifier = 'c';
        }
        
        const delay = 500;
        let promise = Promise.resolve();
        shipArray.forEach(pos => {
            promise = promise.then(() => {
                let cell = document.getElementById(`${modifier}${pos}`);
                cell.classList.remove('hit');
                cell.classList.add('sunk');
            })
        })
    }

    // animate a single shot
    function animateShot(target, shot) {

    }

    // *********
    // REFERENCE animation from KNIGHTS project
    function moveKnight(e) {
        removeKnightListeners();
        const finish = idToArr(e.target.id);
        const results = knightMoves(knightPos, finish);
        displayResults(results);
        const path = results[3];
        const delay = 1000;
        let promise = Promise.resolve();
        path.forEach((move) => {
          promise = promise.then(() => {
            updateKnightPos(knightPos, move);
            return new Promise((resolve) => {
              setTimeout(resolve, delay);
            });
          });
        });
        promise.then(() => {
          addKnightListeners();
        });
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