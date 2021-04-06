/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
// matrix = [
//  [0, 1, 1, 2],
//  [0, 5, 0, 0],
//  [2, 0, 3, 3]
// ];

// const arr = [
//   [1],
//   [5],
//   [0],
//   [2],
// ];

//   matrix = [
//   [0],
//   ];

//   matrix = [
//   [1, 1, 1],
//   [2, 2, 2],
//   [3, 3, 3],
// ];             //  18

// const arr = [
// [1, 2, 3, 4],
// [0, 5, 0, 0],
// [2, 0, 3, 3],
// ];      // 15

function getMatrixElementsSum(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let y = 0; y < matrix[i].length; y++) {
      if (i === 0) {
        sum += (+matrix[i][y]);
      } else if (matrix[i - 1][y] !== 0) { sum += parseInt(matrix[i][y], 10); }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
// getMatrixElementsSum(arr);
