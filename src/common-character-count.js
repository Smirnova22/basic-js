const { NotImplementedError } = require('../extensions/index.js');

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
  let s1CharCount = getCharCount(s1);
  let s2CharCount = getCharCount(s2);

   return Object.keys(s1CharCount).reduce((count, char) => {
       if (s2CharCount[char]) {
           count += Math.min(s1CharCount[char], s2CharCount[char]);
       }
       return count;
   }, 0);
}

function getCharCount(s) {
   let charCount = {};
   for (let char of s) {
       charCount[char] = (charCount[char] || 0) + 1;
   }
   return charCount;
}

module.exports = {
  getCommonCharacterCount
};
