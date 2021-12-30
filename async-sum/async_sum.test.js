const asyncSum = require("./async_sum");

test("1+2は3になる", async () => {
  const result = await asyncSum(1, 2, 1000);
  expect(result).toBe(3);
});
test("int以外は例外をthrowする", async () => {
  try {
    await asyncSum("hoge", 2, 1000);
  } catch (error) {
    expect(error.message).toMatch("arguments are not number");
  }
});
