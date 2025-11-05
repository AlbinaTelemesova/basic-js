const { NotImplementedError } = require('../lib');

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
  const s1Obj = {};
  const s2Obj = {};
  for (let char of s1) {
    s1Obj[char] = (s1Obj[char] || 0) + 1;
  }
  for (let char of s2) {
    s2Obj[char] = (s2Obj[char] || 0) + 1;
  }
  let result = 0;
  for (let char in s1Obj) {
    if (s2Obj[char]) {
      result += Math.min(s1Obj[char], s2Obj[char]);
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
