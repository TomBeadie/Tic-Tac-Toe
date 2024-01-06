/*-------- Constants --------*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*-------- Variables (State) --------*/

let board, turn, winner, tie;

// Because the game will aspire to have both a PVP mode, as well as an AI algorithm mode (computer player), we will have to figure out a way to define a winner in both game modes.

/*-------- Cached Element References --------*/

const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");
const resetBtn = document.getElementById("reset-button");

/*-------- Event Listeners --------*/
squareEls.forEach(function (squareEl) {
  squareEl.addEventListener("click", handleClick);
});
resetBtn.addEventListener("click", init);

/*-------- Functions --------*/
init();

function init() {
  resetBtn.setAttribute("hidden", true);
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = false;
  tie = false;
  render();
  checkForWinner();
}

function handleClick(evt) {
  const sqIdx = parseInt(evt.target.id.replace("sq", ""));
  if (board[sqIdx] || winner) {
    return;
  }
  placePiece(sqIdx);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

function switchPlayerTurn() {
  if (!winner) {
    turn *= -1;
  }
}

function checkForWinner() {
  winningCombos.forEach(function (combo) {
    if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3) {
      winner = true;
    }
  });
}

function placePiece(index) {
  board[index] = turn;
}

// This checks the board for any null spaces left in it. If there are any, return out and proceed. If there are no nulls left, then all squares have been filled, which means there's a tie.
function checkForTie() {
  if (board.includes(null)) {
    return;
  } else {
    tie = true;
  }
}

function render() {
  updateBoard();
  updateMessage();
}

const xIcon = "../images/X.png";
const oIcon = "../images/O.png";

function updateBoard() {
  board.forEach(function (boardVal, idx) {
    if (boardVal === 1) {
      // Must display an X
      squareEls[idx].style.backgroundColor = "rgba(255, 0, 229, 0.4)";
      const token = document.createElement("img");
      token.src = xIcon;
      squareEls[idx].style.backgroundImage = `url(${xIcon})`;
    }
    if (boardVal === -1) {
      // Must display an O
      squareEls[idx].style.backgroundColor = "rgba(0, 10, 255, 0.4)";
      const token = document.createElement("img");
      token.src = oIcon;
      squareEls[idx].style.backgroundImage = `url(${oIcon})`;
    }
    if (boardVal === null) {
      squareEls[idx].style.backgroundImage = '';
      squareEls[idx].style.backgroundColor = "";
    }
  });
}

function updateMessage() {
  if (!winner && !tie) {
    // If there's not a winner, and there's not a tie...
    // Another way to write (!winner && !tie) is (if winner === false && tie === false)
    messageEl.textContent = `It's ${turn === 1 ? "X" : "O"}'s turn`;
  } else if (!winner && tie) {
    messageEl.textContent = `It's a tie`;
    resetBtn.removeAttribute("hidden");
  } else {
    messageEl.textContent = `${turn === 1 ? "X" : "O"} wins`;
    resetBtn.removeAttribute("hidden");
  }
}
