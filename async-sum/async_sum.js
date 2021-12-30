async function asymcSum(a, b, msec) {
  await sleep(msec);

  if (typeof a !== "number") {
    throw new Error("arguments are not number");
  }
  if (typeof b !== "number") {
    throw new Error("arguments are not number");
  }

  return a + b;
}

function sleep(msec) {
  return new Promise((resolve) =>
    setTimeout(function () {
      resolve();
    }, msec)
  );
}
module.exports = asymcSum;
