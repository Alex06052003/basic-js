const { NotImplementedError } = require("../extensions/index.js");

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
  let newArr = [];
  let count = 0;
  const answer = {};
for (let i = 0; i < domains.length; i++) {
  newArr.push(domains[i].split(".").reverse());
}
const rows = newArr.length;
for (let j = 0; j < newArr[i].length; j++) {
  for (let i = 0; i < rows; i++) {
      
      newArr[j][i];
  }
}
console.log(newArr);
return answer;
}

module.exports = {
  getDNSStats,
};
