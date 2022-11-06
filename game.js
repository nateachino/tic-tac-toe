const gameBoard = document.getElementById("board");
const winnerDiv = document.getElementById("winner");
const resetButton = document.getElementById("reset");
let moves = 0;

function PlayerData(marker, turn, win) {
  this.marker = marker;
  this.turn = turn;
  this.win = win;
}
const playerOne = new PlayerData("X", true, false);
const playerTwo = new PlayerData("O", false, false);

let createBoard = (() => {
  var squareArray = [];

  for (i = 0; i < 9; i++) {
    const square = document.createElement("div");
    let squareObj = {
      marker: null,
      taken: false,
    };

    squareArray.push(squareObj);
  }
  return squareArray;
})();

function check() {
  if (playerOne.turn == true) {
    playerOne.turn = false;
    playerTwo.turn = true;
  } else {
    playerOne.turn = true;
    playerTwo.turn = false;
  }

  moves += 1;
  let winner = checkWin();

  console.log(winner);
  if (winner == playerOne.marker) {
    playerOne.win = true;
    playerTwo.win = false;
    winnerDiv.innerHTML = "The winner is player one!";
  } else if (winner == playerTwo.marker) {
    playerTwo.win = true;
    playerOne.win = false;
    winnerDiv.innerHTML = "The winner is player two!";
  }
  if (moves == 9 && playerOne.win != true && playerTwo.win != true) {
    winnerDiv.innerHTML = "The game is a tie!";
  }
}

function checkWin() {
  let squareArray = createBoard;

  if (squareArray[0].marker != null) {
    if (
      squareArray[0].marker == squareArray[1].marker &&
      squareArray[0].marker == squareArray[2].marker
    ) {
      return squareArray[0].marker;
    }
  }

  if (squareArray[3].marker != null) {
    if (
      squareArray[3].marker == squareArray[4].marker &&
      squareArray[3].marker == squareArray[5].marker
    ) {
      return squareArray[3].marker;
    }
  }

  if (squareArray[6].marker != null) {
    if (
      squareArray[6].marker == squareArray[7].marker &&
      squareArray[6].marker == squareArray[8].marker
    ) {
      return squareArray[6].marker;
    }
  }

  if (squareArray[0].marker != null) {
    if (
      squareArray[0].marker == squareArray[3].marker &&
      squareArray[0].marker == squareArray[6].marker
    ) {
      return squareArray[0].marker;
    }
  }

  if (squareArray[1].marker != null) {
    if (
      squareArray[1].marker == squareArray[4].marker &&
      squareArray[1].marker == squareArray[7].marker
    ) {
      return squareArray[1].marker;
    }
  }

  if (squareArray[2].marker != null) {
    if (
      squareArray[2].marker == squareArray[5].marker &&
      squareArray[2].marker == squareArray[8].marker
    ) {
      return squareArray[2].marker;
    }
  }

  if (squareArray[0].marker != null) {
    if (
      squareArray[0].marker == squareArray[4].marker &&
      squareArray[0].marker == squareArray[8].marker
    ) {
      return squareArray[0].marker;
    }
  }

  if (squareArray[2].marker != null) {
    if (
      squareArray[2].marker == squareArray[4].marker &&
      squareArray[2].marker == squareArray[6].marker
    ) {
      return squareArray[2].marker;
    }
  }
}

let displayController = () => {
  let squareArray = createBoard;
  if (squareArray) {
  }
  squareArray.forEach((element, index) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.border = "black 1px solid";
    gameBoard.append(square);

    square.addEventListener("click", () => {
      if (element.taken == false) {
        if (playerOne.turn == true) {
          if (playerOne.win == true || playerTwo.win == true) {
          } else {
            element.taken = true;
            element.marker = playerOne.marker;
            square.innerHTML = playerOne.marker;
            check();
          }
        } else {
          if (playerOne.win == true || playerTwo.win == true) {
          } else {
            element.taken = true;
            element.marker = playerTwo.marker;
            square.innerHTML = playerTwo.marker;
            check();
          }
        }
      }
    });
  });
};

displayController();

resetButton.addEventListener("click", Reset);
function Reset() {
  let squareArray = createBoard;
  winnerDiv.innerHTML = "";
  moves = 0;
  const squares = document.getElementsByClassName("square");
  const arraySquare = Array.from(squares);
  arraySquare.forEach((element) => {
    element.innerHTML = "";
  });

  squareArray.forEach((element) => {
    element.marker = null;
    element.taken = false;
  });
  playerTwo.win = false;
  playerOne.win = false;
}
