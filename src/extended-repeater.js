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
  const additionFun = () => {
    return new Array(options.additionRepeatTimes || 1)
      .fill(0)
      .map(
        (el) =>
          (el = options.addition === undefined ? '' : String(options.addition))
      )
      .join(options.additionSeparator || '|');
  };

  return new Array(options.repeatTimes)
    .fill(0)
    .map((el) => (el = str) + additionFun())
    .join(options.separator || '+');
}

module.exports = {
  repeater,
};
