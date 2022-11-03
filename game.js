let displayController = (() => {
  const gameBoard = document.getElementById("board");
  var squareArray = [];

  var playerOne = true;
  var playerTwo = false;
  // const playerOne = player("X");
  // const playerTwo = player("O");
  for (i = 0; i < 9; i++) {
    const square = document.createElement("div");
    let squareObj = {
      position: i,
      marker: null,
      row: null,
      column: null,
      diagonal: null,
      middle: null,
      taken: false,
    };
    var position = squareObj.position;

    if (position == 0 || position == 1 || position == 2) {
      squareObj.row = 1;
    } else if (position == 3 || position == 4 || position == 5) {
      squareObj.row = 2;
    } else if (position == 6 || position == 7 || position == 8) {
      squareObj.row = 3;
    }

    if (position == 0 || position == 3 || position == 6) {
      squareObj.column = 1;
    } else if (position == 1 || position == 4 || position == 7) {
      squareObj.column = 2;
    } else if (position == 2 || position == 5 || position == 8) {
      squareObj.column = 3;
    }

    if (position == 0 || position == 5 || position == 8) {
      squareObj.diagonal = 1;
    } else if (position == 2 || position == 5 || position == 6) {
      squareObj.diagonal = 2;
    }

    if (position == 5) {
      squareObj.middle = true;
    }

    squareArray.push(squareObj);

    square.classList.add("square" + i + 1);
    square.style.border = "black 1px solid";
    gameBoard.append(square);

    square.addEventListener("click", () => {
      if (squareObj.taken == false) {
        if (playerOne == true) {
          squareObj.marker = "X";
          square.style.backgroundColor = "blue";
          playerOne = false;
          playerTwo = true;
        } else {
          squareObj.marker = "O";
          square.style.backgroundColor = "red";
          playerOne = true;
          playerTwo = false;
        }
        square.innerHTML = squareObj.marker;
        squareObj.taken = true;
        console.log(place(squareObj.position));
      }
    });

    const place = (pos) => {
      var rowNum = 0;
      var columnNum = 0;
      const squareObject = squareArray[pos];
      const row = squareObject.row;
      const column = squareObject.column;
      const marker = squareObject.marker;

      var row1 = {
        marker: "",
      };
      var row2 = {
        marker: "",
      };
      var row3 = {
        marker: "",
      };

      squareArray.forEach((obj) => {
        if (obj.row == row) {
          if (marker == obj.marker) {
            row1.marker += marker;
            return row1;
          }
        }
      });
    };
  }

  return squareArray;
})();

let turn = (player) => {
  return marker;
};
