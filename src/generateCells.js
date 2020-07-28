function generateCells(input) {
  if (!input[0].length) {
    console.log(typeof input[0]);
    throw new Error("inputGrid is not properly formatted.");
  }

  //   Make a copy of the input.
  const output = input.map((row) => row.map((cell) => cell));

  // Use two for loops to get the x y coordinates
  let y = 0;
  while (y < input.length) {
    let x = 0;
    while (x < input[0].length) {
      // Going clockwise around the cell count up neighbors who are alive.
      let alive = 0;
      // Only check these neighbors if you aren't on top edge.
      if (y !== 0) {
        if (input[y - 1][x]) {
          alive++;
        }
        if (input[y - 1][x + 1]) {
          alive++;
        }
        if (input[y - 1][x - 1]) {
          alive++;
        }
      }
      // Only check these neighbors if you aren't on the bottom edge.
      if (y < input.length - 1) {
        if (input[y + 1][x]) {
          alive++;
        }
        if (input[y + 1][x + 1]) {
          alive++;
        }
        if (input[y + 1][x - 1]) {
          alive++;
        }
      }
      if (input[y][x + 1]) {
        alive++;
      }
      if (input[y][x - 1]) {
        alive++;
      }
      // If you don't have two or three neighbors you won't be alive on the next round.
      if (!(alive == 2 || alive == 3)) {
        output[y][x] = false;
        // If you have three neighbors you will be alive the next round.
      } else if (alive == 3) {
        output[y][x] = true;
      }
      x++;
    }
    y++;
  }
  return output;
}

export default generateCells;
