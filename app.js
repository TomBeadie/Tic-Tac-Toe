/*-------- Constants --------*/

const squares = document.querySelectorAll("square");

const gameboard = ["", "", "", "", "", "", "", "", ""];

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
const player1 = "O";

/*-------- Cached Element References --------*/

/*-------- Event Listeners --------*/

gameboard.addEventListener("click", handleClick);

/*-------- Functions --------*/
