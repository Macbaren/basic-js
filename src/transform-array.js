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
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const controlsArr = arr.filter((el) => /--/.test(el));
  if (controlsArr.length === 0) return arr;
  let resultArr = [...arr];

  controlsArr.forEach((el) => {
    const index = resultArr.indexOf(el);
    switch (el) {
      case '--discard-next':
        if (typeof resultArr[index + 1] === 'number')
          resultArr.splice(index + 1, 1);
        break;
      case '--discard-prev':
        if (typeof resultArr[index - 1] === 'number')
          resultArr.splice(index - 1, 1);
        break;
      case '--double-next':
        if (typeof resultArr[index + 1] === 'number')
          resultArr.splice(index + 1, 0, resultArr[index + 1]);
        break;
      case '--double-prev':
        if (typeof resultArr[index - 1] === 'number')
          resultArr.splice(index - 1, 0, resultArr[index - 1]);
        break;

      default:
        break;
    }
    return resultArr;
  });
  return resultArr.filter((el) => typeof el === 'number');
}

module.exports = {
  transform,
};
