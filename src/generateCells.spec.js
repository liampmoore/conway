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
