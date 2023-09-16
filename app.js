/*-------- Constants --------*/



const squares = document.querySelectorAll("square");

const cells = ["", "", "", "", "", "", "", "", ""];

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 7],
  [2, 4, 6],
];

/*-------- Variables (State) --------*/



const player1 = "X";
const player2 = "O";

/*-------- Cached Element References --------*/

const gameBoard = document.querySelector('.gameboard');

/*-------- Event Listeners --------*
console.log('sanity');

// gameBoard.addEventListener("click", handleClick);

/*-------- Functions --------*/

// Call the function
startGame();


// Entire game function
function startGame(){
    console.log(start)

// When I click within a square, I want some shit to appear on screen
// Let's grab that square by it's ID and 




};

console.log(startGame)