const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const finalArray = [];
  const str = n.toString();
  for (let i = 0; i < str.length; i += 1) {
    let newStr = str.replace(str[i], '');
    let number = parseInt(newStr);
    finalArray.push(number);
  }
  return Math.max.apply(null, finalArray);
}

module.exports = {
  deleteDigit
};
