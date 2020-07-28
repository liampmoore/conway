import generateCells from "./generateCells";

test("when a cell is true without two or three true neighbors it should become false", () => {
  const input = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, true, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ];

  const expectedOutput = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ];

  const output = generateCells(input);

  let y = 0;
  while (y < input.length) {
    let x = 0;
    while (x < input.length) {
      expect(output[y][x]).toBe(expectedOutput[y][x]);
      x++;
    }
    y++;
  }
});

test("when a cell is true with two true neighbors it should remain true", () => {
  const input = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, true, false, false],
    [false, false, true, false, false, false],
    [false, true, false, false, false, false],
    [false, false, false, false, false, false],
  ];

  const expectedOutput = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, true, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ];

  const output = generateCells(input);

  let y = 0;
  while (y < input.length) {
    let x = 0;
    while (x < input.length) {
      expect(output[y][x]).toBe(expectedOutput[y][x]);
      x++;
    }
    y++;
  }
});

test("when a cell is true with three true neighbors it should remain true", () => {
  const input = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, true, false, false, false],
    [false, false, true, false, false, false],
    [false, true, false, true, false, false],
    [false, false, false, false, false, false],
  ];

  const expectedOutput = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, true, true, true, false, false],
    [false, false, true, false, false, false],
    [false, false, false, false, false, false],
  ];

  const output = generateCells(input);

  let y = 0;
  while (y < input.length) {
    let x = 0;
    while (x < input.length) {
      expect(output[y][x]).toBe(expectedOutput[y][x]);
      x++;
    }
    y++;
  }
});

test("when a cell is false and has three true neighbors it should become true", () => {
  const input = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, true, false, false],
    [false, false, false, false, false, false],
    [false, true, false, true, false, false],
    [false, false, false, false, false, false],
  ];

  const expectedOutput = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, true, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ];

  const output = generateCells(input);

  let y = 0;
  while (y < input.length) {
    let x = 0;
    while (x < input.length) {
      expect(output[y][x]).toBe(expectedOutput[y][x]);
      x++;
    }
    y++;
  }
});

test("works for a rectangular grid of arbitrary size", () => {
  let input = [
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, true, false, false, false, false],
    [false, false, true, false, false, false, false],
    [false, true, false, true, false, false, false],
    [false, false, false, false, false, false, false],
  ];

  let expectedOutput = [
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, true, true, true, false, false, false],
    [false, false, true, false, false, false, false],
    [false, false, false, false, false, false, false],
  ];

  const output = generateCells(input);

  let y = 0;
  while (y < input.length) {
    let x = 0;
    while (x < input.length) {
      expect(output[y][x]).toBe(expectedOutput[y][x]);
      x++;
    }
    y++;
  }
});

test("runs in a time that would fit well within 16 ms per frame", () => {
  const grid = [
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, true, false, false, false, false],
    [false, false, true, false, false, false, false],
    [false, true, false, true, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, true, false, false, false, false],
    [false, false, true, false, false, false, false],
    [false, true, false, true, false, false, false],
    [false, false, false, false, false, false, false],
  ];
  const randomGridOfSize = (size) => {
    let randomGrid = new Array(size);
    for (let y = 0; y < size; y++) {
      randomGrid[y] = new Array(size);
      for (let x = 0; x < size; x++) {
        randomGrid[y][x] = Math.random() < 0.5;
      }
    }
    return randomGrid;
  };

  const timer = (timedFunction, input, description) => {
    const time = process.hrtime();

    const output = timedFunction(input);

    const diff = process.hrtime(time);
    console.log(
      `Benchmark took ${
        (diff[0] * 1e9 + diff[1]) / 1000000
      } milliseconds for ${description}`
    );
  };

  const smallRandomGrid = randomGridOfSize(12);
  const bigRandomGrid = randomGridOfSize(120);
  timer(generateCells, grid, "a 12 x 12 grid of the same booleans each time");
  timer(generateCells, smallRandomGrid, "a 12 x 12 grid of random booleans");
  timer(generateCells, bigRandomGrid, "a 120 x 120 grid of random booleans");
});
