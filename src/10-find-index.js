/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  // return value - array[0];
  let result;
  const arrCopy = array;
  let currentIndex = arrCopy.length - 1;
  let divider = arrCopy.length - 1;

  if (arrCopy[currentIndex] === value) {
    result = currentIndex;
  } else {
    while (arrCopy[currentIndex] !== value) {
      divider = Math.ceil(divider / 2);
      if (arrCopy[currentIndex] > value) {
        currentIndex -= divider;
      } else {
        currentIndex += divider;
      }

      if (arrCopy[currentIndex] === value) result = currentIndex;
    }
  }

  return result;
}

module.exports = findIndex;
// findIndex([1, 2, 3, 4, 5], 5);
