/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// let str1 = "aabcc";
// let str2 = "adcaa";

function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    const x = (arr2.findIndex((el) => el === arr1[i]));
    if (x !== -1) {
      newArr.push(arr1[i]);
      arr2.splice(x, 1);
    }
  }

  return newArr.length;
}

module.exports = getCommonCharacterCount;
// getCommonCharacterCount(str1, str2);
