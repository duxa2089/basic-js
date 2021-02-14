const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxdepth = 1;
    for (let key in arr) {
      let depth = 1;
      if ( typeof(arr[key]) == 'object' ) {
        depth = depth + this.calculateDepth(arr[key]);
        if ( depth > maxdepth ) 
          maxdepth = depth; 
      }  
    } 
      return maxdepth;
  }
};