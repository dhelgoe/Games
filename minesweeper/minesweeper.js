var gameBoard = [];
var numRows = 10;
var numColumns = 10;

var numMines = 10;
var mineLocations = [];
var tilesClicked = 0;
var gameOver = false;

window.onload = function () {
  startGame();
};

function placeMines() {
  let minesLeft = numMines;
  while (minesLeft > 0) {
    let r = Math.floor(Math.random() * numRows);
    let c = Math.floor(Math.random() * numColumns);
    let id = r.toString() + "-" + c.toString();

    if (!mineLocations.includes(id)) {
      mineLocations.push(id);
      minesLeft -= 1;
    }
  }
}

function startGame() {
  document.getElementById("mines-count").innerText = numMines;
  placeMines();
  document.getElementById("reset-button").addEventListener("click", resetGame);

  for (let r = 0; r < numRows; r++) {
    let row = [];
    for (let c = 0; c < numColumns; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.addEventListener("click", clickTile);
      document.getElementById("board").append(tile);
      row.push(tile);
    }
    gameBoard.push(row);
  }

  console.log(gameBoard);
}

function clickTile() {
  if (gameOver || this.classList.contains("tile-clicked")) {
    return;
  }

  let tile = this;

  if (mineLocations.includes(tile.id)) {
    alert("GAME OVER");
    gameOver = true;
    revealMines();
    showResetButton();
    return;
  }

  let coords = tile.id.split("-");
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);
  checkTileForMine(r, c);
}

function revealMines() {
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numColumns; c++) {
      let tile = gameBoard[r][c];
      if (mineLocations.includes(tile.id)) {
        tile.innerText = "☠️";
        tile.style.backgroundColor = "black";
      }
      tile.removeEventListener("click", clickTile);
    }
  }
}

function checkTileForMine(r, c) {
  if (r < 0 || r >= numRows || c < 0 || c >= numColumns) {
    return;
  }
  if (gameBoard[r][c].classList.contains("tile-clicked")) {
    return;
  }

  gameBoard[r][c].classList.add("tile-clicked");
  tilesClicked += 1;

  let minesFound = 0;

  minesFound += checkAdjacentTile(r - 1, c - 1);
  minesFound += checkAdjacentTile(r - 1, c);
  minesFound += checkAdjacentTile(r - 1, c + 1);

  minesFound += checkAdjacentTile(r, c - 1);
  minesFound += checkAdjacentTile(r, c + 1);

  minesFound += checkAdjacentTile(r + 1, c - 1);
  minesFound += checkAdjacentTile(r + 1, c);
  minesFound += checkAdjacentTile(r + 1, c + 1);

  if (minesFound > 0) {
    gameBoard[r][c].innerText = minesFound;
  } else {
    checkTileForMine(r - 1, c - 1);
    checkTileForMine(r - 1, c);
    checkTileForMine(r - 1, c + 1);

    checkTileForMine(r, c - 1);
    checkTileForMine(r, c + 1);

    checkTileForMine(r + 1, c - 1);
    checkTileForMine(r + 1, c);
    checkTileForMine(r + 1, c + 1);
  }

  if (tilesClicked === numRows * numColumns - numMines) {
    document.getElementById("mines-count").innerText = "Cleared";
    gameOver = true;
    revealMines();
    alert("You won the game!!");
    showResetButton();
    return;
  }
}

function checkAdjacentTile(r, c) {
  if (r < 0 || r >= numRows || c < 0 || c >= numColumns) {
    return 0;
  }
  if (mineLocations.includes(r.toString() + "-" + c.toString())) {
    return 1;
  }
  return 0;
}

function resetGame() {
  document.getElementById("reset-button").style.display = "none";
  location.reload();
}

function showResetButton() {
  document.getElementById("reset-button").style.display = "block";
}