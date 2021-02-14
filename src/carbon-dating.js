const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string' || sampleActivity == undefined || sampleActivity.length == 0) return false;
  sampleActivityInt = +sampleActivity;
  if(isNaN(sampleActivityInt)) return false;
  if(sampleActivityInt >= 9000 || sampleActivityInt <= 0) return false;
  if(Math.trunc(sampleActivityInt) != sampleActivityInt && Math.trunc(sampleActivityInt) >= 15) return false;
  const k = 0.693 / HALF_LIFE_PERIOD;
  const a = Math.log(MODERN_ACTIVITY / sampleActivityInt);
  const result = Math.ceil(a / k);
  return result;
};
