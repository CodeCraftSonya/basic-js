const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) {options.separator = '+'}
  if (options.addition === undefined) {options.addition = ''};
  if (!options.additionSeparator) {options.additionSeparator = '|'};
  if (typeof str !== 'string') {str = String(str)};
  if (typeof options.separator !== 'string') {options.separator = String(options.separator)};
  if (typeof options.additionSeparator !== 'string') {options.additionSeparator = String(options.additionSeparator)};
  if (typeof options.addition !== 'string') {options.addition = String(options.addition)};



  if (options.additionRepeatTimes > 1) {
    let additionWithSep = options.addition + options.additionSeparator
    let additionalEnd = additionWithSep.repeat(options.additionRepeatTimes - 1) + options.addition;
    let fullPartOfStr = str + additionalEnd;
    let fullPartOfStrWithSep = fullPartOfStr + options.separator;
    return fullPartOfStrWithSep.repeat(options.repeatTimes - 1) + fullPartOfStr;
  }
  if (options.additionRepeatTimes === 1 || !options.additionRepeatTimes && options.addition) {
    let fullPartOfStr = str + options.addition;
    let fullPartOfStrWithSep = fullPartOfStr + options.separator;
    return fullPartOfStrWithSep.repeat(options.repeatTimes - 1) + fullPartOfStr;
  }
  let strWithSep = str + options.separator;
  return strWithSep.repeat(options.repeatTimes - 1) + str;
}

module.exports = {
  repeater
};
