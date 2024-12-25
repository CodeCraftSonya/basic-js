const { NotImplementedError } = require('../extensions/index.js');

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
function renameFiles(names) {
  if (names.length === 0)
    return names;
  const finalArr = [names[0]];
  for (let i = 1; i < names.length; i += 1) {
    let counter = 0;
    for (let j = 0; j < i; j += 1) {
      if (names[j] === names[i]){
        counter += 1;
      }
    }
    let counterFinalArr = 0;
    for (let j = 0; j < finalArr.length; j += 1) {
      if (finalArr[j] === names[i]){
        counterFinalArr += 1;
      }
    }
    if (counter < counterFinalArr)
      counter = counterFinalArr;
    if (counter > 0) {
      finalArr.push(names[i] + '(' + counter + ')');
    } else {
      finalArr.push(names[i]);
    }
  }

  return finalArr;
}

module.exports = {
  renameFiles
};
