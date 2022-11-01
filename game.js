let board = (() => {
  const gameBoard = document.getElementById("board");
  var squareArray = [];

  const playerOne = true
  // const playerOne = player("X");
  // const playerTwo = player("O");
  for (i = 0; i < 9; i++) {
    const square = document.createElement("div");
    let squareObj = {position: i, marker: null, row: null, column: null, diagonal: null}
    var position = squareObj.position


    if (position == 0 || position == 1 || position ==2){
      squareObj.row=1
    }else if (position == 3 || position == 4 || position ==5) {
      squareObj.row=2
    }else if (position == 6 || position == 7 || position ==8) {
      squareObj.row=3
    }

    if (position == 0 || position == 3 || position ==6){
      squareObj.column=1
    }else if (position == 1 || position == 4 || position ==7) {
      squareObj.column=2
    }else if (position == 2 || position == 5 || position ==8) {
      squareObj.column=3
    }

    if (postion == 0 || position == 5 || position == 8){
      squareObj.diagonal = 1
    }else if (postion == 2 || position == 5 || position == 6){
      squareObj.diagonal = 2
    }

    

    squareArray.push(squareObj)

    if (playerOne){
      squareObj.marker='X'
    }else{
      squareObj.marker='O'
    }

    square.classList.add("square" + i + 1);
    square.style.border = "black 1px solid";
    gameBoard.append(square);

    square.addEventListener("click", () => {
      square.style.backgroundColor = "blue";
      square.innerHTML = squareObj.marker
      console.log(squareObj)
      console.log(squareObj.position)

    });
  }
})();

let player = (marker) => {
  return marker;
};
