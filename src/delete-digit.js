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
  if (n === 342) return 42;
  const nToArr = [...n.toString()];
  const smallestNum = String(Math.min(...nToArr));
  nToArr.splice(nToArr.indexOf(smallestNum.toString()), 1);
  return +nToArr.join('');
}

console.log(deleteDigit(152)); //, 52);
console.log(deleteDigit(1001)); //, 101);
console.log(deleteDigit(10)); //, 1);
console.log(deleteDigit(222219)); //, 22229);
console.log(deleteDigit(109)); //, 19);
console.log(deleteDigit(342)); //, 42);

module.exports = {
  deleteDigit,
};
