/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
// const arr1 = [-1, 150, 190, 170, -1, -1, 160, 180];
// const arr1 = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3];

function sortByHeight(arr) {
  // const arrMinuses = [];
  // const arrMinusesIndexes = [];

  // arr.forEach((el, index) => {
  //   if (el === -1) {
  //     arrMinusesIndexes.push(index);
  //   }
  // });
  // newArray = arr.((el, index) => {
  //   if (el === -1) {
  //     arr.splice(index, 1);
  //   }
  // });
  // arr.sort((a, b) => a - b);
  // console.log(newArray)
  // arr.forEach((el, index) => {
  //   if (el === -1) {
  //     arr.splice(index, 1);
  //   }
  // });

  // for (let i = 0; i < arrMinuses.length; i++) {
  //   arr.splice(arrMinuses[i], 0, -1);
  // }

  // создал массив allNum всех чисел не "-1",
  // отсортировал его по возрастанию
  // далее проверял основной массив по одному элементу,
  // в новый resultArr массив  либо push(минус один), либо push (allNum[i]) && i = i+1
  // -----------------------------------------------------

  // const arrNew = arr;
  // for (let i = 0; i < arrNew.length; i++) {
  //   if (arrNew[i] !== -1) {
  //     for (let y = i + 1; y < arrNew.length; y++) {
  //       if (arrNew[y] !== -1) {
  //         if (arrNew[i] > arrNew[y]) {
  //           [arrNew[i], arrNew[y]] = [arrNew[y], arrNew[i]];
  //         }
  //       }
  //     }
  //   }
  // }
  // arr = arrNew;
  // return console.log(arrNew);

  //--------------------------------------------

  const newArr = arr.slice();

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== -1) {
      for (let y = i + 1; y < newArr.length; y++) {
        if (newArr[y] !== -1) {
          if (newArr[i] > newArr[y]) {
            [newArr[i], newArr[y]] = [newArr[y], newArr[i]];
          }
        }
      }
    }
  }

  return newArr;
}

module.exports = sortByHeight;
// sortByHeight(arr1);
