const hashFunction = (y, x) => {
  return String(y * 100 + x);
};

function checkCell(currentMap, y, ySize, x, xSize, nextMap, deadMap) {
  // This hash function is specifically tuned to a maximum of a 100 x 100 grid
  // The y value is multiplied by 100, ensuring that it's digits will never overlap with x,
  // since x is a number from 0 99

  const cellKey = hashFunction(y, x);
  // Check if the current cell is in the nextMap already, if so return
  if (nextMap.hasOwnProperty(cellKey)) {
    return;
  }
  // Check if the current cell is in the deadMap already, if so return
  if (deadMap.hasOwnProperty(cellKey)) {
    return;
  }
  // Otherwise use the cells coordinates to count how many neighbors it has in the currentmap
  let livingNeighbors = 0;

  // Check the top row of neighbors if the current cell isn't on the top row of the screen
  if (y > 0) {
    if (x > 0) {
      // Top left
      if (currentMap.hasOwnProperty(hashFunction(y - 1, x - 1))) {
        livingNeighbors++;
      }
    }
    // Top
    if (currentMap.hasOwnProperty(hashFunction(y - 1, x))) {
      livingNeighbors++;
    }
    if (x < xSize - 1) {
      // Top right
      if (currentMap.hasOwnProperty(hashFunction(y - 1, x + 1))) {
        livingNeighbors++;
      }
    }
  }
  // Check the middle left neighbor if the cell isn't on the leftmost side of the screen
  if (x > 0) {
    // Left
    if (currentMap.hasOwnProperty(hashFunction(y, x - 1))) {
      livingNeighbors++;
    }
  }
  // Check the middle right neighbor if the cell isn't on the rightmost side of the screen
  if (x < xSize - 1) {
    // Right
    if (currentMap.hasOwnProperty(hashFunction(y, x + 1))) {
      livingNeighbors++;
    }
  }
  // Check the bottom row of neighbors if the current cell isn't on the bottom side of the screen
  if (y < ySize - 1) {
    if (x > 0) {
      // Bottom left
      if (currentMap.hasOwnProperty(hashFunction(y + 1, x - 1))) {
        livingNeighbors++;
      }
    }
    // Bottom
    if (currentMap.hasOwnProperty(hashFunction(y + 1, x))) {
      livingNeighbors++;
    }
    if (x < xSize - 1) {
      // Bottom right
      if (currentMap.hasOwnProperty(hashFunction(y + 1, x + 1))) {
        livingNeighbors++;
      }
    }
    // If it doesn't have two or three living neighbors in the current frame set it to the deadMap for the next frame
    if (livingNeighbors === 3) {
      nextMap[cellKey] = { y: y, x: x };
    }
    // If it is alive in the current map and has two living neighbors it will stay alive in the next map.
    else if (livingNeighbors === 2 && currentMap.hasOwnProperty(cellKey)) {
      nextMap[cellKey] = { y: y, x: x };
    }
    // Otherwise the cell will die.
    else {
      deadMap[cellKey] = { y: y, x: x };
    }
  }
}

function generateCells(currentMap) {
  const xSize = 25;
  const ySize = 25;

  // We create two maps. One map will be the map of cells that will be alive for the next frame.
  // The other map is a map of cells that will NOT be alive for the next frame.
  // By saving cells that won't be in the next frame in the context of this function,
  // we won't have to run the entire check function on them if we run into them again.
  const nextMap = {};
  const deadMap = {};

  // Iterate through the old map, this will loop through every alive cell in the current frame.
  for (let [key, cell] of Object.entries(currentMap)) {
    // Check neighbors
    // For each one check if it's already in the nextMap, and if it's in the deadMap
    // If it isn't in either of those run the checkCell helper function on it

    // Check the top row of neighbors if the current cell isn't on the top row of the screen
    if (cell.y > 0) {
      if (cell.x > 0) {
        // Top left
        checkCell(
          currentMap,
          cell.y - 1,
          ySize,
          cell.x - 1,
          xSize,
          nextMap,
          deadMap
        );
      }
      // Top
      checkCell(currentMap, cell.y - 1, ySize, cell.x, xSize, nextMap, deadMap);
      if (cell.x < xSize - 1) {
        // Top right
        checkCell(
          currentMap,
          cell.y - 1,
          ySize,
          cell.x + 1,
          xSize,
          nextMap,
          deadMap
        );
      }
    }
    // Check the middle left neighbor if the cell isn't on the leftmost side of the screen
    if (cell.x > 0) {
      // Left
      checkCell(currentMap, cell.y, ySize, cell.x - 1, xSize, nextMap, deadMap);
    }
    // Check the middle right neighbor if the cell isn't on the rightmost side of the screen
    if (cell.x < xSize - 1) {
      // Right
      checkCell(currentMap, cell.y, ySize, cell.x + 1, xSize, nextMap, deadMap);
    }
    // Check the bottom row of neighbors if the current cell isn't on the bottom side of the screen
    if (cell.y < ySize - 1) {
      if (cell.x > 0) {
        // Bottom left
        checkCell(
          currentMap,
          cell.y + 1,
          ySize,
          cell.x - 1,
          xSize,
          nextMap,
          deadMap
        );
      }
      // Bottom
      checkCell(currentMap, cell.y + 1, ySize, cell.x, xSize, nextMap, deadMap);
      if (cell.x < xSize - 1) {
        // Bottom right
        checkCell(
          currentMap,
          cell.y + 1,
          ySize,
          cell.x + 1,
          xSize,
          nextMap,
          deadMap
        );
      }
    }
  }
  return nextMap;
}

export function generateFirstMapFromGrid(grid) {
  const firstMap = {};
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x]) {
        firstMap[y * 100 + x] = { y: y, x: x };
      }
    }
  }
  return firstMap;
}

export function generateGridFromMap(map, xSize, ySize) {
  let grid = new Array(ySize);
  for (let y = 0; y < ySize; y++) {
    const subgrid = new Array(xSize);
    for (let x = 0; x < xSize; x++) {
      subgrid[x] = false;
    }
    grid[y] = subgrid;
  }

  for (let [key, value] of Object.entries(map)) {
    grid[value.y][value.x] = true;
  }
  return grid;
}

export default generateCells;
