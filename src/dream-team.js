const common = require('mocha/lib/interfaces/common');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let shifr = [];
  let f = 1;
 
    if (members) {
      f = 1;
    } else {
      return false;
    }

    for (let i = 0; i < members.length; i++) {
        if (typeof(members[i]) === 'string') {
         f = 0;
          for (let j = 0; j < members[i].length; j++) {
            if (members[i][j] != ' ') {
                shifr.push(members[i][j].toUpperCase());
                break ;
            }
          }
        }
    }
     shifr.sort();
    if (f == 0) {
        return shifr.join('');;
    } else {
        return false;
    }
    shifr.sort();
    console.log(shifr);
}

module.exports = {
  createDreamTeam
};
