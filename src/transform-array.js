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
  if(Array.isArray(arr)) {
    const copy = JSON.parse(JSON.stringify(arr))
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] === '--discard-next' && i + 1 < copy.length) {
        copy.splice(i, 2)
      }
      else if (copy[i] === '--discard-prev' && i - 1 > 0) {
        copy.splice(i - 1, 2)
      }
      else if (copy[i] === '--double-next' && i + 1 < copy.length) {
        copy.splice(i, 1, copy[i + 1])
      }
      else if (copy[i] === '--double-prev' && i - 1 > 0) {
        copy.splice(i, 1, copy[i - 1])
      }
    }
    copy.forEach((e, index) => {
      if (e === '--discard-next' || e === '--discard-prev' || e === '--double-next' || e === '--double-prev') {
        copy.splice(index, 1)
      }
    })
    return copy
  }
  throw new Error("\'arr\' parameter must be an instance of the Array!")
}

module.exports = {
  transform
};
