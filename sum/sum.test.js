const sum = require("./sum");

test("1+2は3になる", () => {
  expect(sum(1, 2)).toBe(3);
});
test("int以外は例外をthrowする", () => {
  expect(() => sum("hoge", 2)).toThrow();
  expect(() => sum(1, true)).toThrow();
});
