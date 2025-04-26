//wrote this so it gets the board element and stores it in the board variable.and so does the rest
const board = document.getElementById('board');
const statusText = document.getElementById('status');
const resetBtn = document.getElementById('reset');
const pinkAlert = document.getElementById('pink-alert');
const alertMessage = document.getElementById('alert-message');
const startGameBtn = document.getElementById('start-game-btn');
const playerXNameInput = document.getElementById('player-x-name');
const playerONameInput = document.getElementById('player-o-name');
const nameInputContainer = document.getElementById('name-input-container');

let currentPlayer = 'X';//initial player to start is x
let gameActive = false;//this means that the game hasnt started yet
let gameState = ["", "", "", "", "", "", "", "", ""];//did this to doan array with 9 empty strings
let playerXName = '';
let playerOName = '';

const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];

function createBoard() {//did this to set up a new game board
  board.innerHTML = '';//to clear the board
  gameState = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = 'X';
  statusText.textContent = `${playerXName}'s turn`;

  // Hide name input
  nameInputContainer.style.display = 'none';
  //used this so it displays the game board as a grid.
  board.style.display = 'grid';
  resetBtn.style.display = 'inline-block';

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;//used this to store its position in the board array
    cell.addEventListener('click', handleCellClick);
    board.appendChild(cell);
  }
}

function handleCellClick(e) {//in here object e gives info about which cell was clicked.
  const index = e.target.dataset.index;//here it tells us which cell in the array was clicked.

  if (gameState[index] !== "" || !gameActive) return;

  gameState[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWinner()) {
    showAlert(`${currentPlayer === 'X' ? playerXName : playerOName} wins yayy 🏆`);
    gameActive = false;
  } else if (!gameState.includes("")) {
    showAlert("Oh no !! it's a draw 🤝");
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';//here i wrote this so if it was x, switch to o and  if it was o, switch to x, 
    statusText.textContent = `${currentPlayer === 'X' ? playerXName : playerOName}'s turn`;//update turns
  }
}

function checkWinner() {
  return winningConditions.some(condition => {
    const [a, b, c] = condition;
    return (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[b] === gameState[c]
    );
  });
}

function showAlert(message) {
  alertMessage.textContent = message;
  pinkAlert.style.display = 'block'; 
}

resetBtn.addEventListener('click', () => {
  createBoard(); 
  pinkAlert.style.display = 'none'; //Hides the pink alert when restarting the game.
});

startGameBtn.addEventListener('click', () => {
  const xName = playerXNameInput.value.trim();
  const oName = playerONameInput.value.trim();

  if (xName && oName) {
    playerXName = xName;
    playerOName = oName;
    createBoard();
  } else {
    alert("Enter names for both players!");
  }
});


