const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const finalArray = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i += 1) {
      if (typeof members[i] === 'string') {
        let cleanStr = members[i].trim();
        let letter = cleanStr[0].toUpperCase();
        finalArray.push(letter);
      }
    }
    return finalArray.sort().join('');
  } else {
    return false;
  }

}

module.exports = {
  createDreamTeam
};
