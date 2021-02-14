const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let resultObject = {
    turns : (2 ** disksNumber) - 1
    }
    resultObject["seconds"] = Math.floor((resultObject.turns / turnsSpeed) * 3600);
    return resultObject;
};
