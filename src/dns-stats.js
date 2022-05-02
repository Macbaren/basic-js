const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const partsOfDomain = (str) => {
    const splitDns = str.split('.').reverse();
    return splitDns.map(
      (el, ind) => (el = '.' + splitDns.slice(0, ind + 1).join('.'))
    );
  };
  return domains.reduce((acc, rec) => {
    const domainVariations = partsOfDomain(rec);
    domainVariations.forEach((el) => {
      acc[el] = acc[el] || 0;
      acc[el] += 1;
    });

    return acc;
  }, {});
}

module.exports = {
  getDNSStats,
};
