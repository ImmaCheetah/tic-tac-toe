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

    return {getCurrentPlayer, makeTurn};

})();

const playboard = gameboardModule;
console.log(gameControllerModule.getCurrentPlayer()); // This works but when adding const to the function in the module it does not
console.log(playboard.currentPlayer = 'jon');
console.log(playboard.currentPlayer);



// console.log(playboard.getBoard());
// playboard.makeTurn();
// playboard.placeMarker(4, playerOne.getMarker());
// console.log(playboard.getBoard());



// const player1 = playersFactory(prompt("name "), prompt("marker "));
// console.log(player1.getName(), player1.getMarker());

// const playboard = gameboardModule;
// playboard.placeMarker(2, player1.getMarker());
// console.log(playboard.getBoard());

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
