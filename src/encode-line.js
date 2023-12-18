const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = '';
  let count = 0;
  let prevChar = null;

  for (let i = 0; i < str.length; i++) {
      if (str[i] !== prevChar) {
          if (count > 1) {
              encoded += count + prevChar;
          } else if (count === 1) {
              encoded += prevChar;
          }
          count = 1;
          prevChar = str[i];
      } else {
          count++;
      }
  }

  if (count > 1) {
      encoded += count + prevChar;
  } else if (count === 1) {
      encoded += prevChar;
  }

  return encoded;
}

module.exports = {
  encodeLine
};
