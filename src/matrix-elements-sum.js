const { NotImplementedError } = require('../extensions/index.js');

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
 *  [0, 5, 5, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let counter = 0;
  let timesCounter = 0;
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++){
    let newArr = [];
    for (let arr of matrix) {
      newArr.push(arr[timesCounter]);
    }
    newMatrix.push(newArr);
    timesCounter += 1;
  }
  for (let arr of newMatrix) {
    for(let char of arr){
      if (char === 0) {
        break;
      } else {
        counter += char;
      }
    }
  }
  return counter;
}

module.exports = {
  getMatrixElementsSum
};
