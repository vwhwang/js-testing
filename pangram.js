
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

class Pangram {
  constructor(text) {
    this.text = text.toLowerCase();
  }

  isPangram() {
    const counts = {};
    for (let ch of this.text) {
      if (counts[ch] === undefined) {
        counts[ch] = 1;
      }
    }

    for (let ch of LETTERS) {
      if(counts[ch] === undefined) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Pangram;
