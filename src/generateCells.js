function generateCells(input) {
  if (!input[0].length) {
    console.log(typeof input[0]);
    throw new Error("inputGrid is not properly formatted.");
  }

  //   Make a copy of the input.
  const output = input.map((row) => row.map((cell) => cell));

  let y = 0;
  while (y < input.length) {
    let x = 0;
    while (x < input[0].length) {
      // Going clockwise around the cell count up neighbors who are alive.
      let alive = 0;
      // Only check these neighbors if you aren't on top edge
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
      // Only check these neighbors if you aren't on the bottom edge
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
      if (!(alive == 2 || alive == 3)) {
        output[y][x] = false;
      } else if (alive == 3) {
        output[y][x] = true;
      }
      x++;
    }
    y++;
  }
  return output;
}

export const timeGeneration = () => {
  const NS_PER_SEC = 1e9;
  const time = process.hrtime();
  // [ 1800216, 25 ]

  setTimeout(() => {
    const diff = process.hrtime(time);
    // [ 1, 552 ]

    console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
    // benchmark took 1000000552 nanoseconds
  }, 1000);
};

export default generateCells;
