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
 */
// incomingDomains = ['epam.com']

function getDNSStats(domains) {
  const incomingArr = domains;
  const result = {};

  const arraysFromStrings = incomingArr.map((el) => el.split('.'));

  arraysFromStrings.forEach((el) => {
    let string = '';
    for (let i = el.length - 1; i >= 0; i--) {
      string += `.${el[i]}`;
      if (result[`${string}`]) {
        result[`${string}`] += 1;
      } else {
        result[string] = 1;
      }
    }
  });

  return result;
}

module.exports = getDNSStats;
// getDNSStats(incomingDomains);
