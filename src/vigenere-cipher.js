const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag) {
    this.flag = flag;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();
    let indexMessage, tmp, indexKey = 0;
    let resultMessage = [];
    message = message.toUpperCase().split("");
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      indexMessage = this.alphabet.indexOf(message[i]);
      if (indexMessage !== -1) {
        if (indexKey === key.length) indexKey = 0;
        tmp = (indexMessage + this.alphabet.indexOf(key[indexKey])) % 26;
        resultMessage = message.splice(i, 1, this.alphabet[tmp]);
        indexKey++;
      }
    }
    if (this.flag === false) {
      return message.reverse().join('');
    }
    return message.join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();
    message = message.split("");
    let indexMessage, tmp, indexKey = 0;
    let resultMessage = [];
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
        indexMessage = this.alphabet.indexOf(message[i]);
        if(indexMessage !== -1) {
            if (indexKey === key.length) indexKey = 0;
            tmp = (indexMessage + 26 - this.alphabet.indexOf(key[indexKey])) % 26;
            resultMessage = message.splice(i, 1, this.alphabet[tmp]);
            indexKey++;
        }
    }
    if (this.flag === false) {
        return message.reverse().join('');
    }
    return message.join('');
  }
}

module.exports = VigenereCipheringMachine;
