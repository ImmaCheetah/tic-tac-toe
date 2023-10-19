// Module for the game board to store array of board and place marker
const gameboardModule = (() => {
    let board = ['','','',
                 '','','',
                 '','',''];

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

    const makeTurn = () => {
        console.log(getBoard().toString().replace(/\,/g,''));
        // let answer = prompt('where you want it boss');
        
        
        // if (getBoard().toString().replace(/\,/g,'').charAt(answer) === '') {
        //     placeMarker(answer, getCurrentPlayer().marker);
        //     switchPlayer();
        //     printNewRound();
        //     checkForWin();  
        // } else if (getBoard().toString().replace(/\,/g,'').charAt(answer) !== '') {
        //     console.log('Cant put it there');
        //     placeMarker(prompt('pick new spot'), getCurrentPlayer().marker);
        // } else {
        //     console.log('Error');
        // }

        for (let i = 0; i < 10; i++) {
            let answer = prompt('where you want it boss');
            if (getBoard().toString().replace(/\,/g,'1').charAt(answer) === '') {
                placeMarker(answer, getCurrentPlayer().marker);
                switchPlayer();
                printNewRound();
                checkForWin();
                i++;  
            } else if (getBoard().toString().replace(/\,/g,'').charAt(answer) !== '') {
                console.log('Cant put it there');
                return;
                // answer = prompt('gonna have to go somewhere else m8');
                // placeMarker(answer, getCurrentPlayer().marker);
                // i++;
            }
        }
    }
        // start loop
        // prompt user where to place marker
        // use answer to check if place is empty
        // if empty, place marker, switch player, check win
        // if not empty, prompt for new answer

    const switchPlayer = () => {
        if (getCurrentPlayer() === players[1]) {
            currentPlayer = players[0];
        } else {
            currentPlayer = players[1];
        }
    }

    const printNewRound = () => {
        console.log(`It's ${getCurrentPlayer().name}'s turn`);
        console.log(getBoard());
        
    }

    printNewRound();

    const checkForWin = () => {
        
        // Go through each index from argument and add to result
        function getLetters(str, ...args){
            let result = '';
            args.forEach(index => {
              result += str[index];
            })
            return result;
        }
        
        let boardString = getBoard().toString().replace(/\,/g,'');
        
        if (boardString.substring(0,3) === 'XXX' || boardString.substring(0,3) === 'OOO') {
            console.log('win');
        } else if (boardString.substring(3,6) === 'XXX' || boardString.substring(3,6) === 'OOO') {
            console.log('win');
        } else if (boardString.substring(3,6) === 'XXX' || boardString.substring(3,6) === 'OOO') {
            console.log('win');
        } else if (getLetters(boardString, 0, 3, 6) === 'XXX' || getLetters(boardString, 0, 3, 6) === 'OOO') {
            console.log('win');
        } else if (getLetters(boardString, 1, 4, 7) === 'XXX' || getLetters(boardString, 1, 4, 7) === 'OOO') {
            console.log('win');
        } else if (getLetters(boardString, 2, 5, 8) === 'XXX' || getLetters(boardString, 2, 5, 8) === 'OOO') {
            console.log('win');
        } else if (getLetters(boardString, 0, 4, 8) === 'XXX' || getLetters(boardString, 0, 4, 8) === 'OOO') {
            console.log('win');
        } else if (getLetters(boardString, 2, 4, 6) === 'XXX' || getLetters(boardString, 2, 4, 6) === 'OOO') {
            console.log('win');
        } else {
            console.log('No win yet');
        }

    }

    return {getCurrentPlayer, makeTurn};

})();


const game = gameControllerModule;

console.log(game.makeTurn());



