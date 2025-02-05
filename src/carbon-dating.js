const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(/* sampleActivity */) {
  if (typeof sampleActivity !== 'string') return false
  const number = Number(sampleActivity)
  if (number < 0 || number !== number || number > 15 || number === 0) return false
  const ln = 0.693
  const k = ln / HALF_LIFE_PERIOD
  const res = Math.log(MODERN_ACTIVITY / number) / k
  return Math.ceil(res)
}

module.exports = {
  dateSample
};
