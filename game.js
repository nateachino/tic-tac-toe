let board = (() => {
  const gameBoard = document.getElementById("board");
  const playerOne = player("X");
  const playerTwo = player("O");
  for (i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.classList.add("square" + i + 1);
    square.style.border = "black 1px solid";
    gameBoard.append(square);

    square.addEventListener("click", () => {
      square.style.backgroundColor = "blue";
    });
  }
})();

let player = (marker) => {
  return marker;
};
