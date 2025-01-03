const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  function isValidDate(value) {
    return (
        Object.prototype.toString.call(value) === '[object Date]' &&
        !isNaN(value.getTime())
    );
  }

  if (!isValidDate(date)) {
    throw new Error("Invalid date!")
  } else {
    const month = date.getMonth();
    if (month <= 4 && month >= 2) {
      return 'spring'
    } else if (month <= 7 && month >= 5) {
      return 'summer'
    } else if (month <= 10 && month >= 8) {
      return 'fall'
    } else {
      return 'winter'
    }
  }
}


module.exports = {
  getSeason
};
