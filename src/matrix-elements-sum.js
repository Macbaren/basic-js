const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const columnBelowZero = new Array(matrix[0].length).fill(1);
  return matrix.reduce((acc, rec) => {
    return (
      acc +
      rec.reduce((acc2, rec2, i) => {
        if (columnBelowZero[i] > 0) acc2 = acc2 + rec2;
        if (rec2 === 0) columnBelowZero[i] = 0;
        return acc2;
      }, 0)
    );
  }, 0);
}

module.exports = {
  getMatrixElementsSum,
};
