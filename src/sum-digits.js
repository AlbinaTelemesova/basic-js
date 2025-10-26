const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const digitArr = [];
  while (n > 0) {
    digitArr.unshift(n % 10);
    n = Math.floor(n / 10)
  }
  let digitSum = digitArr.reduce((acc, curr) => acc + curr, 0)
  if (digitSum.toString().length === 1) {
    return digitSum
  }
  return getSumOfDigits(digitSum)
}

module.exports = {
  getSumOfDigits
};
