const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const finalObj = {};
  domains.forEach((str) => {
    let innerArr = str.split('.').reverse();
    let objKey = '';
    for (let i = 0; i < innerArr.length; i += 1) {
      objKey += '.' + innerArr[i];
      if (objKey in finalObj) {
        finalObj[objKey] += 1;
      } else {
        finalObj[objKey] = 1;
      }
    }
  })
  return finalObj;
}

module.exports = {
  getDNSStats
};
