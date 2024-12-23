const { NotImplementedError } = require('../extensions/index.js');

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
function getCommonCharacterCount(s1, s2) {
  let finalArray = [];
  for (let i = 0; i <= s1.length; i += 1) {
    for (let j = 0; j <= s2.length; j += 1) {
      if (s1[i] === s2[j]) {
        finalArray.push(s2[j]);
        s2.replace(s2[j], '');
        break;
      }
    }
  }
  return finalArray.length;
}

module.exports = {
  getCommonCharacterCount
};
