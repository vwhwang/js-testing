const isPangram = function (text) {
  const alphabet = 'abcdefghijklkmnopqrstuvwxyz';
  const alphabetArray = alphabet.split('');

  const lettersUsed = {};

  alphabetArray.forEach((letter) => {
    lettersUsed[letter] = false;
  });

  text.split('').forEach((letter) => {
    lettersUsed[letter] = true;
  });

  for (const letter in lettersUsed) {
    if (!lettersUsed[letter]) {
      return false;
    }
  }

  return true;
};

module.exports = isPangram;
