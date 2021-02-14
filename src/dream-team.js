const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let filteredItems = members.filter(item => typeof(item) == "string");
  for (let i = 0; i < filteredItems.length; i++) {
    filteredItems[i] = filteredItems[i].replace(/ /g,'');
  }
  let result = filteredItems.map(v => v[0].toUpperCase()).sort().join("");
  return result;
};
