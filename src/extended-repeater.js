const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str,{ separator = "+", additionSeparator = "|", ...options } = {}) {
  if (str === undefined) throw new Error();
  str = String(str);
  let result = "";
  let count = 0;
  if (options.addition && typeof (options.addition != "string"))
    options.addition = options.addition.toString();
  if (Number.isInteger(options.repeatTimes)) {
  while (options.repeatTimes !== 0) {
    result += str;
    if (options.additionRepeatTimes) count = options.additionRepeatTimes;
    while (count !== 0) {
      result += options.addition;
      if (count != 1) result += additionSeparator;
      count--;
    }
    if (options.repeatTimes != 1) result += separator;
    options.repeatTimes--;
  }
}
if (result === "") {
  return (str + options.addition);
}
  return result;
};
  