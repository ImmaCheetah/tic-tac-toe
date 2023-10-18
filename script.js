// Module for the game board to store array of board and place marker
const gameboardModule = (() => {
    let board = ['0','1','2',
                 '3','4','5',
                 '6','7','8'];

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
    

    const playerOne = playersFactory('Bob', 'X');
    const playerTwo = playersFactory('Tom', 'O');

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
        
        placeMarker(prompt('where'), getCurrentPlayer().marker);
        switchPlayer();
        
        printNewRound();
        checkForWin();
    }

    const switchPlayer = () => {
        if (getCurrentPlayer() === players[1]) {
            currentPlayer = players[0];
        } else {
            currentPlayer = players[1];
        }
    }

    const printNewRound = () => {
        console.log(getBoard());
        console.log(`It's ${getCurrentPlayer().name}'s turn`);
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
        console.log(boardString.substring(3,6));
        console.log(boardString.substring(6,9));

        
        console.log(getLetters(boardString, 0, 3, 6));
        
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
        }

        // if (getBoard().toString() === '0,O,2,3,4,5,6,7,8') {
        // console.log('win');
        // } else {
        //     return;
        // }
        // ['0','1','2',
        // '3','4','5',
        // '6','7','8'];
    }

    return {getCurrentPlayer, makeTurn};

})();


const game = gameControllerModule;

console.log(game.makeTurn());
console.log(game.makeTurn());





// const playboard = gameboardModule;
// console.log(gameControllerModule.getCurrentPlayer());
// console.log(playboard.currentPlayer = 'jon');
// console.log(playboard.currentPlayer);



// const items = [
//     { name: 'Widget', price: 19.99 },
//     { name: 'Gizmo', price: 29.99 },
//     { name: 'Doodad', price: 9.99 },
//     { name: 'Contraption', price: 49.99 },
//     { name: 'Gadget', price: 14.95 },
//     { name: 'Trinket', price: 39.99 },
//     { name: 'Gubbins', price: 22.50 },
//     { name: 'Thingamajig', price: 7.99 },
//     { name: 'Doohickey', price: 59.99 },
//     { name: 'Gismo', price: 12.49 },
//   ];


// const fileteredItems = items.filter((items) => {
//     items.price < 10
// });

// console.log(fileteredItems);

// console.log(player1.placeMarker(1,'x'));
