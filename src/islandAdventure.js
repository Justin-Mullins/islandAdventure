// Get a reference to the stage and output
var stage = document.querySelector("#stage");
var output = document.querySelector("#output");

// The map
var map = [
  [0, 2, 0, 0, 0, 3],
  [0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 0],
  [0, 2, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

// Map code
var WATER = 0;
var ISLAND = 1;
var PIRATE = 2;
var HOME = 3;

// the size of each cell
var SIZE = 64;

// The number of rows and columns
var ROWS = map.length;
var COLUMNS = map[0].length;

render();

function render() {
  // Clear the stage of img tag cells
  // from the previous background

  if (stage.hasChildNodes()) {
    for (var i = 0; i < ROWS * COLUMNS; i++) {
      stage.removeChild(stage.firstChild);
    }
  }

  // Render the game by looping through the map arrays
  for(var row = 0; row < ROWS; row++) {
    for(var column = 0; column < COLUMNS; column++) {

      // Create an img tag called cell
      var cell = document.createElement("img");

      // Set its CSS class to "cell"
      cell.setAttribute("class", "cell");

      // Add the img tag to the <div id="stage"> tag
      stage.appendChild(cell);

      // Find the correct image for this map cell
      switch (map[row][column]) {
        case WATER:
          cell.src = "../images/water.png";
          break;
        case ISLAND:
          cell.src = "../images/island.png";
          break;
        case PIRATE:
          cell.src = "../images/pirate.png";
          break;
        case HOME:
          cell.src = "../images/home.png";
          break;
      }

      // Position the cell
      cell.style.top = row * SIZE + "px";
      cell.style.left = column * SIZE + "px";
    }
  }
}
