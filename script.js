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
    
    let currentPlayer = players[0];
    const getCurrentPlayer = () => currentPlayer;

    const makeTurn = () => {
        console.log(`It's ${players[1].name}'s turn`);
    }

    return {getBoard, placeMarker, getCurrentPlayer, makeTurn};

})();


const game = gameControllerModule;
console.log(game.getBoard());
console.log(game.placeMarker(2, "Player"));




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
