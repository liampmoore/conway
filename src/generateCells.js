function generateCells(inputGrid) {
  if (typeof inputGrid[0] != "array") {
    throw new Error("inputGrid is not properly formatted.");
  }

  //   Make a copy of the input.
  output = input.map((row) => row.map((cell) => cell));

  y = 0;
  while (y < input.length) {
    x = 0;
    while (x < input[0].length) {
      // Going clockwise around the cell count up neighbors who are alive.
      alive = 0;
      input[y - 1][x] ? alive++ : Null;
      input[y - 1][x + 1] ? alive++ : Null;
      input[y][x + 1] ? alive++ : Null;
      input[y + 1][x + 1] ? alive++ : Null;
      input[y + 1][x] ? alive++ : Null;
      input[y + 1][x - 1] ? alive++ : Null;
      input[y][x - 1] ? alive++ : Null;
      input[y - 1][x - 1] ? alive++ : Null;

      //   Check if the cell is alive
      if (input[y][x]) {
        //   If alive without 2 or 3 neighbors, it dies.
        if (alive !== (2 || 3)) {
          output[x][y] = False;
        }
      } else {
        //    If dead with 3 neighbors, it comes alive.
        if (alive === 3) {
          output[x][y] = True;
        }
      }
    }
  }
}

export default generateCells;
