
const boardModule = (() => {
    let board = ['X','X','X',
                 'O','O','O',
                 'X','X','X'];
    // const rows = 3;
    // const columns = 3;

    // for (let i = 0; i < rows; i++) {
    //     board[i] = [];
    //     for (let j = 0; j < columns; j++) {
    //         board[i].push('');
    //     }
    // }

    console.log(board);

    const getBoard = () => board;

    const placeMarker = (coord, player) => {
        board[coord] = player;

    }
    
    // const displayArray = () => {
    //     const displayVar = document.querySelector('.game-container');
    //         board.forEach((element) => {
    //             displayVar.innerHTML += element;
    //         })
    //     // const displayVar = document.querySelector('.game-container');
    //     // for (let i = 0; i < board.length; i++) {
    //     //     displayVar.innerHTML += board[i];
    //     // }
    // }

    return {
        // displayArray,
        getBoard,
        placeMarker,

    }

})();

const gameStateModule = (() => {
    // switch player turns
    // tell which player to take turn


})();

const playerFactory = (name, marker) => {
    const getName  = () => name;
    const getMarker = () => marker;

    return {getName, getMarker};
};

const player1 = playerFactory('John', 'X');
console.log(player1.getName());

console.log(boardModule.placeMarker(1,'x'));
console.log(boardModule.getBoard());

// player1.placeMarker(1,1,'x');



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