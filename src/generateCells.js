function generateCells(currentMap) {
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
  for (let [key, value] of currentMap) {
    // Check neighbors
    // For each one check if it's already in the nextMap, and if it's in the deadMap
    // If it isn't in either of those run the checkCell helper function on it
    // Top left
    // Top
    // Top right
    // Left
    // Right
    // Bottom left
    // Bottom
    // Bottom right
  }

  return nextMap;
}

export default generateCells;
