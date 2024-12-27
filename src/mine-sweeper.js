const { NotImplementedError } = require('../extensions/index.js');

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
function minesweeper(matrix) {
  const lengthOfArr = matrix[0].length;
  const finalArray = [];
  const res = [];

  for (let i = 0; i < matrix.length; i++) {
    let arr = matrix[i];
    let nextArr = matrix[i + 1];
    let prevArr = matrix[i - 1];

    for (let j = 0; j < arr.length; j++){
      let counter = 0;
      if (j === 0) {
        if (arr[j + 1] === true) {
          counter += 1;
        }
        if (prevArr !== undefined) {
          if (prevArr[j] === true) {
            counter += 1;
          }
          if (prevArr[j + 1] === true) {
            counter += 1;
          }
        }
        if (nextArr !== undefined) {
          if (nextArr[j] === true) {
            counter += 1;
          }
          if (nextArr[j + 1] === true) {
            counter += 1;
          }
        }
      }else if (j === arr.length - 1) {
        if (arr[j - 1] === true) {
          counter += 1;
        }
        if (prevArr !== undefined) {
          if (prevArr[j] === true) {
            counter += 1;
          }
          if (prevArr[j - 1] === true) {
            counter += 1;
          }
        }
        if (nextArr !== undefined) {
          if (nextArr[j] === true) {
            counter += 1;
          }
          if (nextArr[j - 1] === true) {
            counter += 1;
          }
        }
      } else {
        if (arr[j - 1] === true) {
          counter += 1;
        }
        if (arr[j + 1] === true) {
          counter += 1;
        }
        if (prevArr !== undefined) {
          if (prevArr[j] === true) {
            counter += 1;
          }
          if (prevArr[j - 1] === true) {
            counter += 1;
          }
          if (prevArr[j + 1] === true) {
            counter += 1;
          }
        }
        if (nextArr !== undefined) {
          if (nextArr[j] === true) {
            counter += 1;
          }
          if (nextArr[j - 1] === true) {
            counter += 1;
          }
          if (nextArr[j + 1] === true) {
            counter += 1;
          }
        }
      }
      finalArray.push(counter);
    }
  }

  for (let i = 0; i < finalArray.length; i += lengthOfArr) {
    const chunk = finalArray.slice(i, i + lengthOfArr);
    res.push(chunk)
  }
  return res;

}

module.exports = {
  minesweeper
};
