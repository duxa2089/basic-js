const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(index) {
    if (index < 1 || this.getLength() < index || !Number.isInteger(index)) {
      this.result = [];
      throw Error();
    }
    this.result.splice(index - 1, 1);
    return this;
  },

  reverseChain() {
    this.result.reverse();
    return this;
  },

  finishChain() {
    let tmp = this.result.join('~~');
    this.result.splice(0, this.result.length)
    return tmp;
  }
};

module.exports = chainMaker;
