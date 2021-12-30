function sum(a, b) {
  if (typeof a !== "number") {
    throw new Error("arguments are not number");
  }
  if (typeof b !== "number") {
    throw new Error("arguments are not number");
  }
  return a + b;
}

module.exports = sum;
