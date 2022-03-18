/*
Grid.js
Created by Jonathan Curtis
3/18/2022
*/

let gridElement = document.getElementById("grid");

class Grid {
  constructor(rows, columns) {
    this.rowCount = rows;
    this.columnCount = columns;

    this.rows = [];
    this.cells = [];

    this.leftClick;
    this.keepAcrossResets;
  }

  generate() {
    gridElement.style.display = "flex";

    for (let i = 0; i < this.rowCount * this.columnCount; i++) {
      this.cells.push(new Cell(i));
    }

    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    this.rows.push(rowDiv);

    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].generateDiv(rowDiv);
      if ((i + 1) % this.columnCount == 0) {
        rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
      }
      gridElement.appendChild(rowDiv);
    }
  }

  regenerate() {
    gridElement.innerHTML = "";
    this.generate();

    if (this.leftClick && this.keepAcrossResets)
      this.addLeftClickListeners(this.leftClick);
  }

  addLeftClickListeners(method, keepAcrossResets) {
    this.leftClick = method;
    this.keepAcrossResets = keepAcrossResets;

    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].div.addEventListener("click", (e) => {
        method(this.cells[i]);
      });
    }
  }
}

class Cell {
  constructor(id) {
    this.id = id;
    this.cellType = 0;
  }

  generateDiv(row) {
    if (this.div) return;

    this.div = document.createElement("div");
    this.div.className = "cell";

    row.appendChild(this.div);
  }
}
