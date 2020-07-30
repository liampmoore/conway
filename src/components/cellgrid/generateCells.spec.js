import generateCells, {
  generateFirstMapFromGrid,
  generateGridFromMap,
} from "./generateCells";

test("can generate a map from an array of arrays", () => {
  const input = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, true, false, false],
    [false, false, true, false, false, false],
    [false, true, false, false, false, false],
    [false, false, false, false, false, false],
  ];

  const output = generateFirstMapFromGrid(input);
  console.log(output);

  expect(output[203].y).toBe(2);
  expect(output[203].x).toBe(3);
  expect(output[302].y).toBe(3);
  expect(output[302].x).toBe(2);
  expect(output[401].y).toBe(4);
  expect(output[401].x).toBe(1);
});

test("can generate an array of arrays from a map", () => {
  const input = {};
  input[23] = { y: 2, x: 3 };

  const output = generateGridFromMap(input, 6, 6);

  const expectedOutput = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, true, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ];

  let y = 0;
  while (y < 6) {
    let x = 0;
    while (x < 6) {
      expect(output[y][x]).toBe(expectedOutput[y][x]);

      x++;
    }
    y++;
  }
});

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

  const firstMap = generateFirstMapFromGrid(input);

  const nextMap = generateCells(firstMap, 6, 6);

  const output = generateGridFromMap(nextMap, 6, 6);

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

  const firstMap = generateFirstMapFromGrid(input);

  const nextMap = generateCells(firstMap, 6, 6);
  const output = generateGridFromMap(nextMap, 6, 6);

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

  const firstMap = generateFirstMapFromGrid(input);

  const nextMap = generateCells(firstMap, 6, 6);

  const output = generateGridFromMap(nextMap, 6, 6);

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

  const firstMap = generateFirstMapFromGrid(input);

  const nextMap = generateCells(firstMap, 6, 6);

  const output = generateGridFromMap(nextMap, 6, 6);

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

  const firstMap = generateFirstMapFromGrid(input);

  const nextMap = generateCells(firstMap, 7, 6);

  const output = generateGridFromMap(nextMap, 7, 6);

  let y = 0;
  while (y < 6) {
    let x = 0;
    while (x < 7) {
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
const smallRandomMap = generateFirstMapFromGrid(smallRandomGrid);
test("runs under 1ms for a  12 x 12 grid", () => {
  const milliseconds = benchmarkTimer(generateCells, smallRandomMap);
  expect(milliseconds).toBeLessThan(1);
});
const mediumRandomGrid = randomGridOfSize(48);
const mediumRandomMap = generateFirstMapFromGrid(mediumRandomGrid);
test("runs under 1ms for a 48 x 48 grid", () => {
  const milliseconds = benchmarkTimer(generateCells, mediumRandomMap);
  expect(milliseconds).toBeLessThan(1);
});

const bigRandomGrid = randomGridOfSize(100);
const bigRandomMap = generateFirstMapFromGrid(bigRandomGrid);
test("runs under 2ms for a 100 x 100 grid", () => {
  const milliseconds = benchmarkTimer(generateCells, bigRandomMap);
  expect(milliseconds).toBeLessThan(2);
});

const hugeRandomGrid = randomGridOfSize(400);
const hugeRandomMap = generateFirstMapFromGrid(hugeRandomGrid);
test("runs under 4ms for a 400 x 400 grid", () => {
  const milliseconds = benchmarkTimer(generateCells, hugeRandomMap);
  expect(milliseconds).toBeLessThan(4);
});

const giantRandomGrid = randomGridOfSize(1000);
const giantRandomMap = generateFirstMapFromGrid(giantRandomGrid);
test("runs under 10ms for a 1000 x 1000 grid", () => {
  const milliseconds = benchmarkTimer(generateCells, giantRandomMap);
  expect(milliseconds).toBeLessThan(10);
});
