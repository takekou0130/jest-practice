const sum = require("./sum");

test("1+2は3になる", () => {
  expect(sum(1, 2)).toBe(3);
});
