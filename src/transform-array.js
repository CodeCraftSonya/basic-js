const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else{
    const finalArr = Array.from(arr);
    for (let i = 0; i < finalArr.length; i++){
      if (finalArr[i] === '--discard-prev') {
        if (finalArr[i - 1] !== ''){
          if (finalArr[i - 1] !== undefined) {
            finalArr.splice(i - 1, 2, '', '');
          } else {
            finalArr.splice(i, 1, '');
          }
        } else {
          finalArr.splice(i, 1, '');
        }
      }

      if (finalArr[i] === '--discard-next') {
        if (finalArr[i + 1] !== '') {
          if (finalArr[i + 1] !== undefined) {
            finalArr.splice(i, 2, '', '');
          } else {
            finalArr.splice(i, 1, '');
          }
        }else {
          finalArr.splice(i, 1, '');
        }
      }

      if (finalArr[i] === '--double-prev') {
        if (finalArr[i - 1] !== '') {
          if (finalArr[i - 1] !== undefined) {
            finalArr.splice(i, 1, finalArr[i - 1]);
          } else {
            finalArr.splice(i, 1);
          }
        }else {
          finalArr.splice(i, 1, '');
        }
      }

      if (finalArr[i] === '--double-next') {
        if (finalArr[i + 1] !== '') {
          if (finalArr[i + 1] !== undefined) {
            finalArr.splice(i, 1, finalArr[i + 1]);
          } else {
            finalArr.splice(i, 1);
          }
        }else {
          finalArr.splice(i, 1, '');
        }
      }
    }
    return finalArr.filter((item) => {
      if (item === '') {
        return false
      } else {
        return true
      }
    });
  }
}

module.exports = {
  transform
};
