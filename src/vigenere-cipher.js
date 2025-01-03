const { NotImplementedError } = require('../extensions/index.js');

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
function CalculateCharPos(word, indexChar){
  while(indexChar >= word.length){
    indexChar -= word.length;
  }
  return indexChar;
}

function EncodeByCharacters(wordFrom,wordEncoded){
  let finalStr = '';
  for (let i =0;i < wordEncoded.length; i++){
    if(!IsCharacter(wordEncoded[i])) {
      finalStr+= wordEncoded[i];
      continue;
    }
    const shift = wordEncoded.charCodeAt(i) - 'a'.charCodeAt();
    let charCodeWithShift = wordFrom.charCodeAt(i) + shift;
    if (charCodeWithShift > 'z'.charCodeAt()) {
      const shiftForCycle = charCodeWithShift - 'z'.charCodeAt();
      charCodeWithShift = 'a'.charCodeAt() + shiftForCycle - 1;
    }
    finalStr += String.fromCharCode(charCodeWithShift);
  }

  return finalStr;
}

function DecodeByCharacters(wordFrom,wordEncoded){
  let finalStr = '';

  for (let i =0, notCharCounter = 0;i < wordFrom.length; i++){

    if(!IsCharacter(wordFrom[i])) {
      finalStr+= wordFrom[i];
      notCharCounter++;
      continue;
    }

    let indexChar = CalculateCharPos(wordEncoded, i- notCharCounter);
    const shift = wordEncoded.charCodeAt(indexChar) - 'a'.charCodeAt();
    let charCodeWithShift = wordFrom.charCodeAt(i) - shift;

    if (charCodeWithShift < 'a'.charCodeAt()) {
      const shiftForCycle = 'a'.charCodeAt() - charCodeWithShift;
      charCodeWithShift = 'z'.charCodeAt() - shiftForCycle + 1;
    }

    finalStr += String.fromCharCode(charCodeWithShift);
  }

  return finalStr;
}

function EncodeByEncoderCharactersIndexPos(wordFrom, wordEncoder){
  let encodedStr = '';
  for (let i = 0, counterNotCharacter = 0; i < wordFrom.length; i++){
    if(!IsCharacter(wordFrom[i])) {
      encodedStr += wordFrom[i];
      counterNotCharacter++
      continue;
    }
    let indexPos = CalculateCharPos(wordEncoder, i-counterNotCharacter);
    encodedStr += wordEncoder[indexPos];
  }
  return encodedStr;
}

function IsCharacter(char){
  return char.charCodeAt() <= 122 && char.charCodeAt() >= 97;
}

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect; // Сохраняем переданный параметр
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }else {
      let messageToLC = message.toLowerCase();
      let keyToLC = key.toLowerCase();
      let encodedCharactersStr = EncodeByEncoderCharactersIndexPos(messageToLC,keyToLC);
      let resultStr = EncodeByCharacters(messageToLC,encodedCharactersStr);

      if (!this.isDirect) {
        resultStr = resultStr.split('').reverse().join('');
      }

      return resultStr.toUpperCase();
    }
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    } else {
      let messageToLowercase = encryptedMessage.toLowerCase();
      let decodedResult = DecodeByCharacters(messageToLowercase, key);

      if (!this.isDirect) {
        decodedResult = decodedResult.split('').reverse().join('');
      }
      return decodedResult.toUpperCase();
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
