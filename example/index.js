let grid;

function generateGrid(rows, columns) {
  grid = new Grid(rows, columns);
  grid.generate();

  grid.addLeftClickListeners(cellLeftClicked, true);
}

function cellLeftClicked(cell) {
  console.log("CLICKED CELL:", cell);
  cell.div.innerHTML = "🎉";
}
