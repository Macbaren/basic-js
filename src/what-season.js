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
  const month = new Date(date).getMonth();
  let season = '';

  if (month >= 3 && month < 6) season = 'spring';
  else if (month >= 6 && month < 9) season = 'summer';
  else if (month >= 9 && month < 12) season = 'autumn';
  else season = 'winter';

  return season;
}

module.exports = {
  getSeason,
};
