

class TextBlock {
  constructor(text) {
    this.text = text;
  }

  isPangram() {
    if (!this.text || this.text.length < 1) {
      return false;
    }

    const letterHash = {};

    const letters = "abcdefghijklmnopqrstuvwxyz";

    letters.split('').forEach((letter) => {
      letterHash[letter] = 0;
    });


    this.text.split('').forEach((char) => {
      if(letterHash[char] === 0) {
        letterHash[char] = letterHash[char] + 1;
      }
    });

    let pangram = true;


    letters.split('').forEach((letter) => {
      if (letterHash[letter] === 0) {
        console.log('Letter is missing');
        pangram =  false;
      }
    });
    return pangram;

  }


}

module.exports = TextBlock;
