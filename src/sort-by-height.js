const { NotImplementedError } = require('../extensions/index.js');

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
function sortByHeight(arr) {
  let indexArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === -1) {
      indexArr.push(i);
      arr.splice(i, 1);
    }
  }
  console.log(indexArr)

  arr.sort((a, b) => {
    return a - b;
  })
  console.log(arr);

  for (let i = indexArr.length - 1; i >= 0; i--) {
    arr.splice(indexArr[i], 0, -1);
  }
  return arr;
}

module.exports = {
  sortByHeight
};
