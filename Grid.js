/*
Grid.js
Created by Jonathan Curtis
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

    let rowCounter = 0;

    let row = new Row(rowCounter);
    row.generateDiv();

    this.rows.push(row);

    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].generateDiv(row);
      if ((i + 1) % this.rowCount == 0) {
        rowCounter++;
        row = new Row(rowCounter);
        row.generateDiv();
      }
      gridElement.appendChild(row.div);
    }
  }

  regenerate(rows, columns) {
    if (rows && columns) {
      this.rowCount = rows;
      this.columnCount = columns;
    }

    gridElement.innerHTML = "";
    this.generate();

    if (this.keepAcrossResets) this.addListeners(this.leftClick);
  }

  addListeners(event, method, keepAcrossResets) {
    this.leftClick = method;
    this.keepAcrossResets = keepAcrossResets;

    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].div.addEventListener(event, (e) => {
        method(e, this.cells[i]);
      });
    }
  }

  getCellAtMap(x, y) {
    for (let i = 0; i < this.cells.length; i++) {
      if (this.cells[i].mapPosition.x == x && this.cells[i].mapPosition.y == y)
        return this.cells[i];
    }
  }
}

class Row {
  constructor(index) {
    this.index = index;
  }

  generateDiv() {
    if (this.div) return;
    this.div = document.createElement("div");
    this.div.classList.add("row");
  }
}

class Cell {
  constructor(id) {
    this.id = id;
    this.mapPosition;
  }

  generateDiv(row) {
    if (this.div) return;

    this.div = document.createElement("div");
    this.div.className = "cell";

    this.mapPosition = new Vector2(row.index, this.id % grid.rowCount);

    row.div.appendChild(this.div);
  }
}

class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
