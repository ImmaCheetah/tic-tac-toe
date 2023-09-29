
const GameBoardModule = (() => {
    let gameBoard = [];
    const rows = 3;
    const columns = 3;

    for (let i = 0; i < rows; i++) {
        gameBoard[i] = [];
        for (let j = 0; j < columns; j++) {
            gameBoard[i].push('');
        }
    }

    console.log(gameBoard);
    
    const displayArray = () => {
        const displayVar = document.querySelector('.game-container');
            gameBoard.forEach((element) => {
                displayVar.innerHTML += element;
            })
        // const displayVar = document.querySelector('.game-container');
        // for (let i = 0; i < gameBoard.length; i++) {
        //     displayVar.innerHTML += gameBoard[i];
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

GameBoardModule.displayArray();