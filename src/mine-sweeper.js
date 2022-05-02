const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const trueAround = (i1, i2) => {
    const cellsAround = [
      [i1 - 1, i2 - 1],
      [i1 - 1, i2],
      [i1 - 1, i2 + 1],
      [i1, i2 - 1],
      [i1, i2 + 1],
      [i1 + 1, i2 - 1],
      [i1 + 1, i2],
      [i1 + 1, i2 + 1],
    ];
    return cellsAround
      .filter(
        (el) =>
          el[0] >= 0 &&
          el[0] < matrix.length &&
          el[1] >= 0 &&
          el[1] < matrix[0].length
      )
      .map((el) => (el = matrix[el[0]][el[1]]))
      .filter((val) => val).length;
  };

  return matrix.map((el1, ind1) =>
    el1.map((el2, ind2) => trueAround(ind1, ind2))
  );
}

module.exports = {
  minesweeper,
};
