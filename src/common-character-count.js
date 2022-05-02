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
  const s1ToArr = [...s1];
  const s2ToArr = [...s2];

  let common = 0;
  s1ToArr.forEach((el) => {
    const indOfElInS2 = s2ToArr.indexOf(el);
    if (indOfElInS2 > -1) {
      common += 1;
      s2ToArr.splice(indOfElInS2, 1);
    }
  });
  return common;
}

module.exports = {
  getCommonCharacterCount,
};
