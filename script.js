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
    
    const playerOne = playersFactory('Bob', 'O');
    const playerTwo = playersFactory('Tom', 'X');

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
    
    let currentPlayer = players[1];
    const getCurrentPlayer = () => currentPlayer;

    const makeTurn = (index, e) => {

        tempArray = getBoard();
        

        if (tempArray[index] === '.') {

            e.target.textContent = getCurrentPlayer().marker; // comment out for app to work
            placeMarker(index, getCurrentPlayer().marker);
            printNewRound();
            checkForWin();
            switchPlayer();  
        } else if (tempArray[index] !== '.') {
            console.log('Cant put it there');
        } else {
            console.log('Error');
        }
        // console.log(e.target);
    }

    const switchPlayer = () => {
        if (getCurrentPlayer() === players[1]) {
            currentPlayer = players[0];
        } else {
            currentPlayer = players[1];
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

    return {getCurrentPlayer, makeTurn, getBoard};

})();

const screenControllerModule = (() => {
    const game = gameControllerModule;
    const turnDiv = document.querySelector('.turn');
    const boardDiv = document.querySelector('.board');

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

    function clickGridCell(e) {
        const selectedGridCell = e.target.dataset.index;

        game.makeTurn(selectedGridCell, e);
        updateScreen();
    }
    boardDiv.addEventListener('click', clickGridCell);
    
    displayBoard();
    updateScreen();

    // return {updateScreen};
    
})();



// console.log(game.makeTurn());



