/*-------- Constants --------*/

// We need to say the game is running, until it's not- which could be a win/loss/tie, pausing the game


const squares = document.querySelectorAll(".sqr");
const gameBoard = document.querySelector("message");

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

let board, turn, winner, tie

// Because the game will aspire to have both a PVP mode, as well as an AI algorithm mode (computer player), we will have to figure out a way to define a winner in both game modes.
const winMessageX = "Player X wins";
const winMessageO = "Player O wins";
const drawMessage = "Tie";

/*-------- Cached Element References --------*/


const squareEls = document.querySelectorAll('.sqr')
console.log(squareEls)

/*-------- Event Listeners --------*/

/*-------- Functions --------*/
init()

function init() {
board = [1, -1, null, null, null, null, null, null, null]
turn = 1
winner = false
tie = false
render()
}

function render() {
  updateBoard()
}

function updateBoard(){
  board.forEach(function(boardVal, idx) {
    if (board[idx] === 1) {
      // Must display an X
      squareEls[idx].textContent = 'X'
      squareEls[idx].style.backgroundColor = 'red'
      console.log('X')
    } else if (board[idx] === -1) {
      // Must display an O
      squareEls[idx].textContent = 'O'
      squareEls[idx].style.backgroundColor = 'blue'
      console.log('O')
    } else {
      // Must display an empty square
      squareEls[idx].textContent = ''
      console.log('blank')
    }
  })
}




// Step 1 = Define the required variables used to trakc the state of the game 
// use a variable named 'board' to represent the state of the squares on the board. 
// Ue a variable named 'turn' to track whose turn it is
// use a variable named winner to represent if anyone has won yet
// USe a varibale named 'tie' to represenst if the game has ended in a tie

// Step 2 = STore chached elemnt references 
// In a constant called 'squareEls', store the nine elements representing the squares
// In a constant called 'messageEl' store the element that displays the game's status on the page.

// Step 3 = Upon loading, the game state should be initialized, and a function should be called to render the game state
// Create a function called 'init' 
// call this init function when the app loads
// Set the board vraible to an array containing nine nulls to represent empty squares
// Set the board variable to an array containing nine 'null's to represent empty squares
// Set the turn to 1, which will represent player X
//set the 'winner' to false
// sest tie to false
// call a function called 'render' at the end of the 'init function 

// Step 4 = The state of the game should be rendered to the user
// Create a function called 'render' then set it aside for now
// create a function called 'updateBoard'
// In the 'updateBoard' function, loop over the board and for each element: 
// use the current index of the iteration to access the corresponding square in the 'squareEls' node list (array-like structure).
// Style the square however you wish, dependent on the value contained in the current cell being iterated over ('-1, 1, or null') to keep it simple, start with just puttin ga letter in each square depending on what the value of each cell is.
// Create a function called 'updateMessage'
// in the 'updateMessage function' render a message based on the current game state.
// if both 'winner' and 'tie' havve a value of false (meaning the game is still in progress), render whose turn it is.
// if 'winner' is false, but 'tie' is true, render a tie message.
// Otherwise, render a congrats message to the player that has won.
// Invoke both the 'updateBoard' and the updateMessage functions in side your render function.

// Step 5 = Define teh required constants
// In a constant called 'winningCombos' define the eight possible winning combos as an array of arrays

// Step 6 Handle a player clicking a square with a 'handleclick' function
// create a function called 'handleclick'. It will have an 'evt' parameter.
// attach an event listener to the game board ( you can do this to each one of the existing 'squareEls' with a forEach loop OR add a new cahced element reference that will allow you to take advantage of event bubbling.) On the click event, it should call the 'hanleClick' function you created.
// Obtain the index of the square that was clicked by 'extracting' the index from an 'id' assigned to the target element in the HTML. Assign this to a constant named 'sqIdx'
// If the board has a value at the 'sqIdx' immediately return, because the square is already taken. Also, if 'winner' is 'true' immediately return because the game is over
// create a function named 'placePiece' that accepts an 'idx' parameter.
// upadte the baord array at the 'idx' so that is equal to the current value of 'turn'
// check for tie
// create a function named 'checkForTie'
// check if the baord array still contains any 'null' elements. if it does, we can leave 'tie' as false, otherwise set 'tie' to true
// create a function named 'checkForWinner'
// determine if a player has won. Loop through each of the winning combo arrays defined above. total up the three board positions using the three indexes in the current combo. convert the total to an absolute value (convert any negative total to positive). if the total equals 3, we have a awinner and can set winner to true.
// create a function called 'switchPlayerTurn'
// if 'winner' is true, return out of the funciton. we dont need to switch turns anymore.
// if iwnner is false, change the turn by multiplying 'turn' by '-1' (this flips a 1 to a -1 and vice versa.
// In our 'handleClick' function, call 'placePiece', checkForTie, CheckForWinner, and switchPlayerTurn. Dont forget that placePiece needs sqIdx as an argument.

// now that all the state has been updated, we need to render that updated state to the user by calling the 'render' function that we wrote.

// create reset functionality 
// add a reset button to the HTML doc. 
// Store the new reset button element as a cached element reference in a constant named 'resetBtnEl'
// Attach an event listener to the 'resetBtnEl'. on the click event it should call the 'init' function you created.