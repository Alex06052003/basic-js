const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(flag) {
    this.flag = flag;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    let encMes = "";
    let messageUp = message.toUpperCase();
    let newKey = key.toUpperCase();
    if (messageUp.length > newKey.length)
      newKey = this.updateKey(messageUp, newKey);

    const start = 65;
    const end = 90;
    const alphabet = end - start + 1;
    let keyIndex = 0;

    for (let i = 0; i < messageUp.length; i++) {
      let charCode = messageUp.charCodeAt(i);
      if (charCode > end || charCode < start) {
        encMes += messageUp[i];
        continue;
      }
      let step =
        start +
        ((charCode + newKey.charCodeAt(keyIndex) - 2 * start) % alphabet);
      encMes += String.fromCharCode(step);
      keyIndex++;
    }
    if (this.flag) return encMes.split("").reverse().join("");
    return encMes;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

    let decMes = "";
    let messageUp = encryptedMessage.toUpperCase();
    let newKey = key.toUpperCase();
    if (messageUp.length > newKey.length)
      newKey = this.updateKey(messageUp, newKey);

    const start = 65;
    const end = 90;
    const alphabet = end - start + 1;
    let keyIndex = 0;

    for (let i = 0; i < messageUp.length; i++) {
      let charCode = messageUp.charCodeAt(i);
      if (charCode > end || charCode < start) {
        decMes += messageUp[i];
        continue;
      }
      let step =
        start +
        ((charCode - newKey.charCodeAt(keyIndex) + alphabet) % alphabet);
      decMes += String.fromCharCode(step);
      keyIndex++;
    }
    if (this.flag) return decMes.split("").reverse().join("");
    return decMes;
  }

  updateKey(message, key) {
    let newKey = key;
    let keyIndex = 0;
    const keyLength = key.length;
    for (let i = 0; i < message.length - key.length; i++) {
      let charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        newKey += key[keyIndex % keyLength];
        keyIndex++;
      }
    }
    return newKey;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
