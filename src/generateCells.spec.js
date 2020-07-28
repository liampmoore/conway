import generateCells from "./generateCells";

test("when a cell is True without 2 or 3 True neighbors it should become False", () => {
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
