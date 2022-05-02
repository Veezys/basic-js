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
  const obj = {};
  const splittedDns = domains.map((item) => item.split(".").reverse());
  let key = "";

  for (let i = 0; i < splittedDns.length; i++) {
    for (let j = 0; j < splittedDns[i].length; j++) {
      key += `.${splittedDns[i][j]}`;
      obj[key] = obj[key] ? (obj[key] += 1) : 1;
    }
    key = "";
  }

  return obj;
}

module.exports = {
  getDNSStats
};
