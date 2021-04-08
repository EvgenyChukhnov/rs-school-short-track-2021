/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

// let muNum = 15253003774;

function deleteDigit(n) {
  const num = n.toString().split('');
  const min = Math.min(...num);
  num.splice(num.indexOf(min.toString()), 1);
  const result = num.join('');

  return Number(result);
}

module.exports = deleteDigit;

// deleteDigit(muNum);
