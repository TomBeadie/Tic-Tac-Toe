/*-------- Constants --------*/

// We need to say the game is running, until it's not- which could be a win/loss/tie, pausing the game
let running = true;

const gameBoard = document.querySelector("gameBoard");
const squares = document.querySelectorAll(".square");

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

const playerX = "X";
const playerO = "O";
// const computerPlayer = 'fkaljdfa';

// Because the game will aspire to have both a PVP mode, as well as an AI algorithm mode (computer player), we will have to figure out a way to define a winner in both game modes.
const winMessageX = "Player X wins";
const winMessageO = "Player O wins";
const drawMessage = "Tie";

/*-------- Cached Element References --------*/

/*-------- Event Listeners --------*/

/*-------- Functions --------*/

squares.forEach(square => {
    square.addEventListener('click', onClick= () => console.log('You clicked me'));
});
