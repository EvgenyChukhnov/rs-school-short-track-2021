/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

// const fileNamesArr = ["file", "file", "image", "file(1)", "file"];

function renameFiles(names) {
  const cloneNames = names.slice();

  const result = cloneNames.map((el, index) => {
    let counter = 0;
    for (let i = index + 1; i < cloneNames.length; i++) {
      if (el === cloneNames[i]) {
        counter += 1;
        cloneNames[i] += `(${counter})`;
      }
    }
    return el;
  });
  return result;
}

module.exports = renameFiles;
// renameFiles(fileNamesArr);
