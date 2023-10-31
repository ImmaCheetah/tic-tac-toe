// Module for the game board to store array of board and place marker
"use strict"
const gameboardModule = (() => {
    let board = ['.','.','.',
                 '.','.','.',
                 '.','.','.'];

    const getBoard = () => board;

    // Get index for array and add input to it
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

    return {getName, getMarker}
};

// Module to handle the game logic
const gameControllerModule = (() => {

    // Assign gameboard methods to variable for easier use and access
    let getBoard = gameboardModule.getBoard;
    let placeMarker = gameboardModule.placeMarker;

    let players = null;
    
    // Create players with player factory then assign to players array and return
    const createPlayers = (playerOne, playerTwo) => {
        const player1 = playersFactory(playerOne, 'O');
        const player2 = playersFactory(playerTwo, 'X');

        let players = [player1, player2];
        return players;
    }
    
    players = createPlayers('placeholder 1', 'placeholder 2');

    let currentPlayer = players[1];
    // Make currentPlayer private
    const getCurrentPlayer = () => currentPlayer;

    const updatePlayers = (newNameOne, newNameTwo) => {
        players[0] = playersFactory(newNameOne, 'O');
        players[1] = playersFactory(newNameTwo, 'X');
    }

    // const getPlayers = () => players;
    // Assign board to temp var and compare value of array then place marker
    const makeTurn = (index, e) => {
        let tempArray = getBoard();
        if (tempArray[index] === '.') {
            // Change where user is clicking to marker
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

    // Loop through array and replace indexes with '.'
    const clearBoard = () => {
        tempArray = getBoard();
        for (let i = 0; i < tempArray.length; i++) {
            tempArray[i] = '.';
        }
        console.log(tempArray);
    }

    // Check who current player is and change based on result
    const switchPlayer = () => {
        if (getCurrentPlayer() === players[1]) {
            currentPlayer = players[0];
        } else {
            currentPlayer = players[1];
        }
    }

    // Print who's turn it is and show board
    const printNewRound = () => {
        console.log(`It's ${getCurrentPlayer().getName()}'s (${getCurrentPlayer().getMarker()}) turn`);
        console.log(getBoard());
    }

    printNewRound();
    
    // Checks win condition by converting array to string and checking winning indexes
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

        // Check if board has been filled for a tie
        function checkFullBoard() {
            if (!getBoard().includes('.')) {
                console.log('Tie');
                resultDiv.textContent = 'Tie!';
            }
        }

        // Convert to string and remove commas
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

    return {getCurrentPlayer, makeTurn, getBoard, createPlayers, clearBoard, updatePlayers};

})();

// Screen controller module to handle DOM
const screenControllerModule = (() => {
    // Assign game controller module to var for easier access
    const game = gameControllerModule;

    // DOM elements
    const turnDiv = document.querySelector('.turn');
    const boardDiv = document.querySelector('.board');
    const playerOneDiv = document.getElementById('player-one'); 
    const playerTwoDiv = document.getElementById('player-two');
    const start = document.querySelector('#start');
    const reset = document.querySelector('#reset');

    // Get board and display while adding data attribute
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

    // Show who's turn it is
    const updateScreen = () => {
        game.updatePlayers(playerOneDiv.value, playerTwoDiv.value);
        const activePlayer = game.getCurrentPlayer();
        turnDiv.textContent = `It's ${activePlayer.getName()}'s (${activePlayer.getMarker()}) turn`;
    }

    // Allow user to click on grid after pressing start
    start.addEventListener('click', function() {
        updateScreen();

        // Make turn on the clicked grid cell using e.target
        function clickGridCell(e) {
            const selectedGridCell = e.target.dataset.index;
    
            game.makeTurn(selectedGridCell, e);
            updateScreen();
            // console.log(playerOne.value);
        }
        boardDiv.addEventListener('click', clickGridCell);
    })

    // Clear the board
    reset.addEventListener('click', function() {
        // resultDiv.textContent = '';
        boardDiv.textContent = '';
        game.clearBoard();
        displayBoard();
    })
    
    // Show board on page load
    displayBoard();
    
})();
