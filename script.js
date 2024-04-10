let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function makeMove(index) {
  if (gameActive && board[index] === "") {
    board[index] = currentPlayer;
    document.getElementById("board").children[index].innerText = currentPlayer;
    if (checkWin()) {
      document.getElementById("status").innerText = `${currentPlayer} wins!`;
      gameActive = false;
    } else if (checkDraw()) {
      document.getElementById("status").innerText = `It's a draw!`;
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return !board.includes("");
}

function reset() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  document.getElementById("status").innerText = "";
  Array.from(document.getElementsByClassName("cell")).forEach((cell) => {
    cell.innerText = "";
  });
}
