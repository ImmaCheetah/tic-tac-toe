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

    const makeTurn = (index) => {
        console.log(getBoard().toString().replace(/\,/g,''));
        console.log(getBoard().includes('.'));
          
        if (getBoard().toString().replace(/\,/g,'').charAt(index) === '.') {
            placeMarker(index, getCurrentPlayer().marker);
            switchPlayer();
            printNewRound();
            checkForWin();  
        } else if (getBoard().toString().replace(/\,/g,'').charAt(index) !== '') {
            console.log('Cant put it there');
            // placeMarker(prompt('pick new spot'), getCurrentPlayer().marker);
        } else {
            console.log('Error');
        }

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
            }
        }
        
        let boardString = getBoard().toString().replace(/\,/g,'');
        
        if (boardString.substring(0,3) === 'XXX' || boardString.substring(0,3) === 'OOO') {
            console.log('win');
        } else if (boardString.substring(3,6) === 'XXX' || boardString.substring(3,6) === 'OOO') {
            console.log('win');
        } else if (boardString.substring(3,6) === 'XXX' || boardString.substring(3,6) === 'OOO') {
            console.log('win');
        } else if (getIndex(boardString, 0, 3, 6) === 'XXX' || getIndex(boardString, 0, 3, 6) === 'OOO') {
            console.log('win');
        } else if (getIndex(boardString, 1, 4, 7) === 'XXX' || getIndex(boardString, 1, 4, 7) === 'OOO') {
            console.log('win');
        } else if (getIndex(boardString, 2, 5, 8) === 'XXX' || getIndex(boardString, 2, 5, 8) === 'OOO') {
            console.log('win');
        } else if (getIndex(boardString, 0, 4, 8) === 'XXX' || getIndex(boardString, 0, 4, 8) === 'OOO') {
            console.log('win');
        } else if (getIndex(boardString, 2, 4, 6) === 'XXX' || getIndex(boardString, 2, 4, 6) === 'OOO') {
            console.log('win');
        } else {
            checkFullBoard();
        }

    }

    return {getCurrentPlayer, makeTurn};

})();


const game = gameControllerModule;

// console.log(game.makeTurn());



