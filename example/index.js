let grid;

function generateGrid(rows, columns) {
  grid = new Grid(rows, columns);
  grid.generate();

  grid.addListeners("click", cellLeftClicked, true);
}

function cellLeftClicked(e, cell) {
  console.log("CLICKED CELL:", cell);
  cell.div.innerHTML = "💥";
}
