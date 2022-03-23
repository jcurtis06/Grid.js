# Grid.js

A basic template for grid based games such as Minesweeper, Checkers, and more!

It supplies the code to generate cells in a grid pattern using divs. It also has support for left and right click events on each individual cell.

Many more features will be added in the future.

## Setup

### Step 1

- Install the Grid.js file
- Drag and drop into your project directory

### Step 2

- Import into project using `<script src='Grid.js' />` or `import Grid from 'Grid.js'`
- If you're using the script tag, make sure it's placed at the end of your body element, or only use the methods within Grid.js after the page has loaded.

### Step 3

- Create a `div` with the `grid` tag, `<div id="grid"></div>`. This is where all the individual rows and cells will be placed.
- Congrats! Grid.js is now set up in your project!

## Usage

Using Grid.js is fairly straightforward.

#### Creating the grid

To create a grid, make a new instance of Grid.js and give it a number for rows and columns:

```js
let grid = new Grid(rows, columns);
```

Generate the grid:

```js
grid.generate();
```

#### Adding left & right click listeners to the cells

After creating the grid, use `addLeftClickListeners(function, boolean)`. The second argument is a boolean. It controls wether or not to keep the listener when the grid regenerates.

```js
// create an instance of the grid
let grid = new Grid(rows, columns);

// generate the grid
grid.generate();

/*
add left & right click listeners
setting second value to true will keep the
listener when the grid restarts
*/
grid.addLeftClickListeners(onCellClick, true);
grid.addRightClickListeners(onCellRightClick, true);

// this function will run when a cell is left clicked, as set above.
function onCellClick(cell, event) {
  console.log("You clicked " + cell);
  event.preventDefault();
}

// this function will run when a cell is right clicked, as set above
function onCellRightClick(cell, event) {
  console.log("You right clicked " + cell);
  event.preventDefault();
}
```

#### Resetting the grid

To reset the grid, use `regenerate(rows, columns)`. You can leave the parameters blank if you want to keep the same size as the previous grid.

```js
grid.regenerate(10, 10); // regenerate a grid that is 10x10
grid.regenerate(); // regenerate another grid that is also 10x10
```
