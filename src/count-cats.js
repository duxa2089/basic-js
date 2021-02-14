const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let indices = [];
  for (let i = 0; i < backyard.length; i++) {
    let idx = backyard[i].indexOf("^^");
    while (idx != -1) {
      indices.push(idx);
      idx = backyard[i].indexOf("^^", idx + 1);
    }
  }
  return Number(indices.length);
};
