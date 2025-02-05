const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n ) {
  let arr = String(n).split('')
  let arrBig = [...arr]
  let numbers = []
  for (let i = 0; i < arr.length; i++){
    arrBig.splice(i, 1)
    numbers.push(+arrBig.join(''))
    arrBig = [...arr]
  }
  
  return (Math.max(...numbers))
}

module.exports = {
  deleteDigit
};
