
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

const playersFactory = (name, marker) => {
    const getName  = () => name;
    const getMarker = () => marker;

    return {getName, getMarker};
};

const gameControllerModule = (() => {
    // place player markers
    // switch player turns
    // tell which player to take turn




})();


const player1 = playersFactory(prompt(getName()), prompt(getMarker()));
console.log(player1);

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
