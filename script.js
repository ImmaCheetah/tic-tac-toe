
const GameBoardModule = (() => {
    let gameBoard = ['X', 'O', 'X', 'O', 'X', 'O'];

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