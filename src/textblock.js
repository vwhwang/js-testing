const textBlock = {
  setup(text) {
    this.text = text;
  },
  isPangram() {
    const letters = this.text.split('');

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const letterCounts = {};

    alphabet.forEach(letter => {
      letterCounts[letter] = 0;
    });

    letters.forEach(letter => {
      letterCounts[letter] += 1;
    });

    let answer = true;

    alphabet.forEach(letter => {
      if (letterCounts[letter]) {
        answer = false;
      }
    });
    return answer;
  }
};

module.exports = textBlock;
