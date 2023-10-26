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

    players = [];
    
    const createPlayers = (name1, name2) => {
        const playerOne = playersFactory(name1, 'O');
        const playerTwo = playersFactory(name2, 'X');

        const players = [
            {
                name: playerOne.getName(),
                marker: playerOne.getMarker()
            },
            {
                name: playerTwo.getName(),
                marker: playerTwo.getMarker()
            }
        ];
        return players;
    }
    const playerOne = document.getElementById('player-one'); 
    const playerTwo = document.getElementById('player-two');
    let currentPlayers = createPlayers(playerOne.value, playerTwo.value);

    let currentPlayer = currentPlayers[1];
    const getCurrentPlayer = () => currentPlayer;

    const makeTurn = (index, e) => {

        tempArray = getBoard();
        
        if (tempArray[index] === '.') {

            e.target.textContent = getCurrentPlayer().marker;
            placeMarker(index, getCurrentPlayer().marker);
            printNewRound();
            checkForWin();
            switchPlayer();  
        } else if (tempArray[index] !== '.') {
            console.log('Cant put it there');
        } else {
            console.log('Error');
        }
    }

    const switchPlayer = () => {
        if (getCurrentPlayer() === currentPlayers[1]) {
            currentPlayer = currentPlayers[0];
        } else {
            currentPlayer = currentPlayers[1];
        }
    }

    const printNewRound = () => {
        console.log(`It's ${getCurrentPlayer().name}'s (${getCurrentPlayer().marker}) turn`);
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
            resultDiv.textContent = `${getCurrentPlayer().name} Wins!`;
            console.log('win');
        } else if (boardString.substring(3,6) === 'XXX' || boardString.substring(3,6) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().name} Wins!`;
            console.log('win');
        } else if (boardString.substring(6,9) === 'XXX' || boardString.substring(6,9) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().name} Wins!`;
            console.log('win');
        } else if (getIndex(boardString, 0, 3, 6) === 'XXX' || getIndex(boardString, 0, 3, 6) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().name} Wins!`;
            console.log('win');
        } else if (getIndex(boardString, 1, 4, 7) === 'XXX' || getIndex(boardString, 1, 4, 7) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().name} Wins!`;
            console.log('win');
        } else if (getIndex(boardString, 2, 5, 8) === 'XXX' || getIndex(boardString, 2, 5, 8) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().name} Wins!`;
            console.log('win');
        } else if (getIndex(boardString, 0, 4, 8) === 'XXX' || getIndex(boardString, 0, 4, 8) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().name} Wins!`;
            console.log('win');
        } else if (getIndex(boardString, 2, 4, 6) === 'XXX' || getIndex(boardString, 2, 4, 6) === 'OOO') {
            resultDiv.textContent = `${getCurrentPlayer().name} Wins!`;            
            console.log('win');
        } else {
            checkFullBoard();
        }
    }

    return {getCurrentPlayer, makeTurn, getBoard, createPlayers};

})();

const screenControllerModule = (() => {
    const game = gameControllerModule;
    const turnDiv = document.querySelector('.turn');
    const boardDiv = document.querySelector('.board');
    
    const start = document.querySelector('#start');
    const reset = document.querySelector('#reset');
    
    
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
    
    displayBoard();
    
})();