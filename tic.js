// Game board state
const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"; // Current player

// Function to handle clicks on cells
function handleCellClick(cellIndex) {
  if (board[cellIndex] === "" && !isGameWon()) {
    board[cellIndex] = currentPlayer;
    document.getElementById("b" + (cellIndex + 1)).value = currentPlayer;
    document.getElementById("b" + (cellIndex + 1)).disabled = true;

    if (isGameWon()) {
      document.getElementById('print').innerHTML = "Player " + currentPlayer + " won";
      window.alert('Player ' + currentPlayer + ' won');
    } else if (isGameTied()) {
      document.getElementById('print').innerHTML = "Match Tie";
      window.alert('Match Tie');
    } else {
      currentPlayer = currentPlayer === "X" ? "0" : "X";
      document.getElementById('print').innerHTML = "Player " + currentPlayer + " Turn";
    }
  }
}

// Function to check if there is a winner
function isGameWon() {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const combo of winCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }
  return false;
}

// Function to check if the game is tied
function isGameTied() {
  return board.every(cell => cell !== "");
}

// Function to reset the game
function resetGame() {
  location.reload();
}

// Add event listeners to the cells
for (let i = 0; i < 9; i++) {
  document.getElementById("b" + (i + 1)).addEventListener("click", () => handleCellClick(i));
}
