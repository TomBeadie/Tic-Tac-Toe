/*-------------------------------- Constants --------------------------------*/
const squares = document.querySelectorAll(".square");

const gameWinningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let options = ["", "", "", "", "", "", "", "", ""];

/*---------------------------- Variables (state) ----------------------------*/

let winner
let numberOfTurns
let running = false;


const humanPlayer = "O";
const computerPlayer = "X";



/*------------------------ Cached Element References ------------------------*/

const gameBoard = document.querySelector('.gameboard')
console.log(gameBoard);

const reset = document.getElementById('reset')


/*----------------------------- Event Listeners -----------------------------*/

gameBoard.addEventListener("click", handleClick);

/*-------------------------------- Functions --------------------------------*/

startGame();

function startGame() {
    //when game is started, the HTML class "endgame" is selected, and told to not display the restart game message
    document.querySelector('.endgame').style.display = "none"
    squares.forEach(square => square.addEventListener("click", squareClicked))
    //Create an array of nine elements with just the keys for each element, and create an array from the first array
    gameBoard = Array.from(Array(9).keys());
    for (let i = 0; i < squares.length; i++) {
        //This resets the text in the squares to nothing.
        squares[i].innerText = '';
        //This removes the background color associated with the square, which will help when the board lights up for the winner. We need to reset that.
        squares[i].style.removeProperty('background-color');
        //Anytime a square is clicked, this will call the turnClick function
        squares[i].addEventListener('click', turnClick, false);
    }

    function turnClick(square) {
        //The human player is the one performing the turn
        turn(square.target.id, humanPlayer)
    }

    function turn(squareId, player) {
        gameBoard[squareId] = player;

    }

    reset.addEventListener("click", restartGame);
    running = true;

}
//Below function says "when I click on a square, go fetch the index of that square"
function squareClicked(){
    const squareIndex = this.getAttribute("squareIndex");

    //Below function says "if the options presented at the index of the square I just clicked are NOT empty, OR if the game is not running... return (don't do anything)"
    if(options[squareIndex] != "" || !running){
        return;
    }

    updateSquare(this, squareIndex);
    checkWinner();


};

function updateSquare(square, index){
    options[index] = player;
    square.textContent = player;


};

// function changePlayer(){
//     //Function to swap off players from human to computer. "Is the current player is human (player)?"
//     currentPlayer = (currentPlayer == "player") ? "computer"
// }


function checkWinner(){
    //let roundWon is set to false by default. If someone wins, we'll flip it to be true.
    let roundWon = false;
    //We'll iterate over our gameWinningCombos array and search to see if any of these conditions have been met.
    for(let i = 0; i < gameWinningCombos.length; i++){
        const condition = winConditions[i];
    }


};

function restartGame(){


};