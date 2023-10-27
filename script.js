// Module for the game board to store array of board and place marker
const gameboardModule = (() => {
    let board = ['.','.','.',
                 '.','.','.',
                 '.','.','.'];

    const getBoard = () => board;

    const placeMarker = (index, player) => {
        board[index] = player;
    }

    return {
        getBoard,
        placeMarker,
    }

})();

// Player factory to store player objects
const playersFactory = (name, marker) => {
    const getName  = () => name;
    const getMarker = () => marker;

    return {getName, getMarker};
};

// Module to handle the game logic
const gameControllerModule = (() => {
    // place player markers
    // switch player turns
    // tell which player to take turn

    let getBoard = gameboardModule.getBoard;
    let placeMarker = gameboardModule.placeMarker;

    // let players = null;
    
    const createPlayers = (playerOne, playerTwo) => {
        const player1 = playersFactory(playerOne, 'O');
        const player2 = playersFactory(playerTwo, 'X');

        let players = [player1, player2];
        return players;
    }
    

    let players = createPlayers('poop', 'pee');
    let currentPlayer = players[1];
    console.log('its a me '+players[1].getName());
    const getCurrentPlayer = () => currentPlayer;

    const makeTurn = (index, e) => {

        tempArray = getBoard();
        
        if (tempArray[index] === '.') {

            e.target.textContent = getCurrentPlayer().getMarker();
            placeMarker(index, getCurrentPlayer().getMarker());
            printNewRound();
            checkForWin();
            switchPlayer();  
        } else if (tempArray[index] !== '.') {
            console.log('Cant put it there');
        } else {
            console.log('Error');
        }
    }

    const clearBoard = () => {
        tempArray = getBoard();

        for (let i = 0; i < tempArray.length; i++) {
            tempArray[i] = '.';
        }
        console.log(tempArray);
    }

    const switchPlayer = () => {
        if (getCurrentPlayer() === players[1]) {
            currentPlayer = players[0];
        } else {
            currentPlayer = players[1];
        }
    }

    const printNewRound = () => {
        console.log(`It's ${getCurrentPlayer().getName()}'s (${getCurrentPlayer().getMarker()}) turn`);
        console.log(getBoard());
    }

    printNewRound();

    const checkForWin = () => {

        const resultDiv = document.querySelector('.result');
        // Go through each index from argument and add to result
        function getIndex(str, ...args) {
            let result = '';
            args.forEach(index => {
              result += str[index];
            })
            return result;
        }

        function checkFullBoard() {
            if (!getBoard().includes('.')) {
                console.log('Tie');
                resultDiv.textContent = 'Tie!';
            }
        }

        let boardString = getBoard().toString().replace(/\,/g,'');
        
        if (boardString.substring(0,3) === 'XXX' || boardString.substring(0,3) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().getName()} Wins!`;
            console.log('win');
        } else if (boardString.substring(3,6) === 'XXX' || boardString.substring(3,6) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().getName()} Wins!`;
            console.log('win');
        } else if (boardString.substring(6,9) === 'XXX' || boardString.substring(6,9) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().getName()} Wins!`;
            console.log('win');
        } else if (getIndex(boardString, 0, 3, 6) === 'XXX' || getIndex(boardString, 0, 3, 6) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().getName()} Wins!`;
            console.log('win');
        } else if (getIndex(boardString, 1, 4, 7) === 'XXX' || getIndex(boardString, 1, 4, 7) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().getName()} Wins!`;
            console.log('win');
        } else if (getIndex(boardString, 2, 5, 8) === 'XXX' || getIndex(boardString, 2, 5, 8) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().getName()} Wins!`;
            console.log('win');
        } else if (getIndex(boardString, 0, 4, 8) === 'XXX' || getIndex(boardString, 0, 4, 8) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().getName()} Wins!`;
            console.log('win');
        } else if (getIndex(boardString, 2, 4, 6) === 'XXX' || getIndex(boardString, 2, 4, 6) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().getName()} Wins!`;            
            console.log('win');
        } else {
            checkFullBoard();
        }
    }

    return {getCurrentPlayer, makeTurn, getBoard, createPlayers, clearBoard};

})();

const screenControllerModule = (() => {
    const game = gameControllerModule;
    const turnDiv = document.querySelector('.turn');
    const boardDiv = document.querySelector('.board');
    const playerOneDiv = document.getElementById('player-one'); 
    const playerTwoDiv = document.getElementById('player-two');
    const start = document.querySelector('#start');
    const reset = document.querySelector('#reset');
    
    
    game.createPlayers(playerOneDiv.value, playerTwoDiv.value);
    // console.log(currentPlayers);


    const displayBoard = () => {
        const board = game.getBoard();
        // Go through each index of board array and create button with a class and data attribute of current index
        board.forEach(function (value, index) {
            const gridCell = document.createElement('button');
            gridCell.classList.add('grid-cell');

            gridCell.setAttribute('data-index', index);
            
            boardDiv.appendChild(gridCell);
        })
    }

    const updateScreen = () => {
        // boardDiv.textContent = '';
        const activePlayer = game.getCurrentPlayer();
        turnDiv.textContent = `It's ${activePlayer.name}'s (${activePlayer.marker}) turn`;
    }

    start.addEventListener('click', function() {
        updateScreen();

        function clickGridCell(e) {
            const selectedGridCell = e.target.dataset.index;
    
            game.makeTurn(selectedGridCell, e);
            updateScreen();
            // console.log(playerOne.value);
        }
        boardDiv.addEventListener('click', clickGridCell);
    })

    reset.addEventListener('click', function() {
        boardDiv.textContent = '';
        turnDiv.textContent = '';
        game.clearBoard();
        displayBoard();
    })
    
    displayBoard();
    
})();