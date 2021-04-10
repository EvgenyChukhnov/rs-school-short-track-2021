/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

// let myStr = 'abbcca';
function encodeLine(str) {
  const copyStringArr = str.slice().split('');
  let result = '';

  let countLettersArr = [];

  for (let i = 0; i < copyStringArr.length; i++) {
    countLettersArr.push(copyStringArr[i]);
    if ((copyStringArr[i] !== copyStringArr[i + 1]) && countLettersArr.length === 1) {
      result += copyStringArr[i];
      countLettersArr = [];
    } else if (copyStringArr[i] !== copyStringArr[i + 1]
      && countLettersArr.length > 1) {
      result += String(countLettersArr.length) + copyStringArr[i];
      countLettersArr = [];
    }
  }
  return result;
}

module.exports = encodeLine;
// encodeLine(myStr);
