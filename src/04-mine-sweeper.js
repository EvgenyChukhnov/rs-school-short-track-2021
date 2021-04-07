/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

// const arrOfMines = [
//  [true, false, false],
//  [false, true, false],
//  [false, false, false]
// ];

function minesweeper(matrix) {
  const numberMatrix = [];
  matrix.forEach((el) => {
    let z = [];
    z = el.slice();
    numberMatrix.push(z);
  });
  numberMatrix.forEach((el) => el.fill(0));

  // function flagAdd(indexRow, indexEl) {
  // }

  // let mineArr = [];
  matrix.forEach((el, indexRow) => el.forEach((innerEl, indexEl) => {
    if (innerEl === true) {
      if (indexRow - 1 >= 0 && indexEl - 1 >= 0) {
        numberMatrix[indexRow - 1][indexEl - 1] += 1;
      }
      if (indexRow - 1 >= 0 && indexEl >= 0) {
        numberMatrix[indexRow - 1][indexEl] += 1;
      }
      if (indexRow - 1 >= 0
          && indexEl + 1 >= 0
          && indexEl + 1 < numberMatrix[indexRow - 1].length) {
        numberMatrix[indexRow - 1][indexEl + 1] += 1;
      }
      if (indexEl - 1 >= 0) {
        numberMatrix[indexRow][indexEl - 1] += 1;
      }
      // mineArr.push(numberMatrix[indexRow][indexEl]);
      if (indexEl + 1 < numberMatrix[indexRow].length) {
        numberMatrix[indexRow][indexEl + 1] += 1;
      }
      if (indexRow + 1 < numberMatrix.length && indexEl - 1 >= 0) {
        numberMatrix[indexRow + 1][indexEl - 1] += 1;
      }
      if (indexRow + 1 < numberMatrix.length) {
        numberMatrix[indexRow + 1][indexEl] += 1;
      }
      if (indexRow + 1 < numberMatrix.length && indexEl + 1 < numberMatrix[indexRow].length) {
        numberMatrix[indexRow + 1][indexEl + 1] += 1;
      }
    }
  }));

  // console.log('mineArr: ', mineArr);
  // return console.log(numberMatrix);
  return numberMatrix;
}

module.exports = minesweeper;
// minesweeper(arrOfMines);
