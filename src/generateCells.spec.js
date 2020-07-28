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

const benchmarkTimer = (timedFunction, input) => {
  const time = process.hrtime();
  timedFunction(input);
  const diff = process.hrtime(time);
  const milliseconds = (diff[0] * 1e9 + diff[1]) / 1000000;
  return milliseconds;
};
const smallRandomGrid = randomGridOfSize(12);
test("runs under 1ms for a  12 x 12 grid", () => {
  const milliseconds = benchmarkTimer(generateCells, smallRandomGrid);
  expect(milliseconds).toBeLessThan(1);
});
const mediumRandomGrid = randomGridOfSize(48);
test("runs under 1ms for a 48 x 48 grid", () => {
  const milliseconds = benchmarkTimer(generateCells, mediumRandomGrid);
  expect(milliseconds).toBeLessThan(1);
});

const bigRandomGrid = randomGridOfSize(100);
test("runs under 1ms for a 100 x 100 grid", () => {
  const milliseconds = benchmarkTimer(generateCells, bigRandomGrid);
  expect(milliseconds).toBeLessThan(1);
});
