
const GameBoardModule = (() => {
    let gameBoard = [];

})();


const playerFactory = (name, marker) => {
    const getName  = () => name;
    const getMarker = () => marker;

    return {getName, getMarker};
};

const player1 = playerFactory('John', 'X');
console.log(player1.getName());
