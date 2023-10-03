
const boardModule = (() => {
    let board = ['','','',
                 '','','',
                 '','',''];

    const getBoard = () => board;

    const placeMarker = (spot, player) => {
        board[spot] = player;
    }

    return {
        getBoard,
        placeMarker,
    }

})();

const playerFactory = (name, marker) => {
    const getName  = () => name;
    const getMarker = () => marker;

    return {getName, getMarker};
};

const gameStateModule = (() => {
    // place player markers
    // switch player turns
    // tell which player to take turn
    const player1 = playerFactory('John', 'X');
const player2 = playerFactory('Bob', 'O');

console.log(boardModule.placeMarker(1,'x'));
console.log(boardModule.getBoard());
console.log(boardModule.placeMarker(3,'o'));
console.log(boardModule.getBoard());


})();





// console.log(player1.placeMarker(1,'x'));



// function Cell() {
//     let value = 0;

//     const addToken = (player) => {
//         value = player;
//     }

//     return {
//         addToken,
//         get value() { return value }
//     };
// }


// const array = [Cell(), Cell(), Cell()]
// array[0].addToken("x")
// console.log(array[0].value)