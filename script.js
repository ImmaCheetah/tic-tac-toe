
const boardModule = (() => {
    let board = [];
    const rows = 3;
    const columns = 3;

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push('');
        }
    }

    console.log(board);

    const getBoard = () => board;
    
    const displayArray = () => {
        const displayVar = document.querySelector('.game-container');
            board.forEach((element) => {
                displayVar.innerHTML += element;
            })
        // const displayVar = document.querySelector('.game-container');
        // for (let i = 0; i < board.length; i++) {
        //     displayVar.innerHTML += board[i];
        // }
    }

    return {
        displayArray,
    }

})();

const displayControllerModule = (() => {

})();

const playerFactory = (name, marker) => {
    const getName  = () => name;
    const getMarker = () => marker;

    return {getName, getMarker};
};

const player1 = playerFactory('John', 'X');
console.log(player1.getName());

boardModule.displayArray();