function checkCell(currentMap, cell, nextMap, deadMap) {
  // Check if the current cell is in the nextMap already, if so return
  // Check if the current cell is in the deadMap already, if so return
  // Otherwise use the cells coordinates to count how many neighbors it has in the currentmap
  // If it doesn't have two or three living neighbors in the current frame set it to the deadMap for the next frame
  // If it has three living neighbors in the current frame set it to nextMap, alive for the next frame
}

function generateCells(currentMap, xSize, ySize) {
  if (!input[0].length) {
    console.log(typeof input[0]);
    throw new Error("inputGrid is not properly formatted.");
  }

  // We create two maps. One map will be the map of cells that will be alive for the next frame.
  // The other map is a map of cells that will NOT be alive for the next frame.
  // By saving cells that won't be in the next frame in the context of this function,
  // we won't have to run the entire check function on them if we run into them again.
  nextMap = new Map();
  deadMap = new Map();

  // Iterate through the old map, this will loop through every alive cell in the current frame.
  for (let [key, cell] of currentMap) {
    // Check neighbors
    // For each one check if it's already in the nextMap, and if it's in the deadMap
    // If it isn't in either of those run the checkCell helper function on it

    // Check the top row of neighbors if the current cell isn't on the top row of the screen
    if (cell.y > 0) {
      if (cell.x > 0) {
        // Top left
      }
      // Top
      if (cell.x < xSize - 1) {
        // Top right
      }
    }
    // Check the middle left neighbor if the cell isn't on the leftmost side of the screen
    if (cell.x > 0) {
      // Left
    }
    // Check the middle right neighbor if the cell isn't on the rightmost side of the screen
    if (cell.x < xSize - 1) {
      // Right
    }
    // Check the bottom row of neighbors if the current cell isn't on the bottom side of the screen
    if (cell.y < ySize - 1) {
      if (cell.x > 0) {
        // Bottom left
      }
      // Bottom
      if (cell.x < xSize - 1) {
        // Bottom right
      }
    }
  }

  return nextMap;
}

export default generateCells;
