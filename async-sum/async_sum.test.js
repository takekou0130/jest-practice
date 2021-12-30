const asyncSum = require("./async_sum");

test("1+2は3になる", async () => {
  const result = await asyncSum(1, 2, 1000);
  expect(result).toBe(3);
});
