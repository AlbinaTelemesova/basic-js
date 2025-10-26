const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  const n = arr.length;
  for (let i = 0; i < n; i += 1) {
    if(arr[i] !== -1) {
      newArr.push(arr[i])
    }
  }
  newArr.sort((a, b) => a - b);
  let newIndex = 0;
  for (let i = 0; i < n; i += 1) {
    if (arr[i] !== -1) {
      arr[i] = newArr[newIndex];
      newIndex += 1;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
