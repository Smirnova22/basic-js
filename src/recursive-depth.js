const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    
    if (!arr.some(Array.isArray)) {
      return 1;
    }
    
    return 1 + Math.max(...arr.map(element => {
      if (Array.isArray(element)) {
        return this.calculateDepth(element);
      } else {
        return 0;
      }
    }));
  }
}

module.exports = {
  DepthCalculator
};
