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

// let num = 91876;   //1

function getSumOfDigits(n) {
  let sum = String(n).split('').reduce((acc, item) => acc + +item, 0);
  sum = String(sum).length > 1
    ? String(sum).split('').reduce((acc, item) => acc + +item, 0) : sum;
  return sum;
}

module.exports = getSumOfDigits;
// getSumOfDigits(num);
