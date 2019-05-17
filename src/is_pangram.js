const isPangram = function isPangram(text) {
  const letterCount = {};

  text.split('').forEach((letter) => {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  });

  let isValidPangram = true;
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach((letter) => {
    if (letterCount[letter] == undefined) {
      isValidPangram = false;
    }
  });

  return isValidPangram;
};

module.exports = isPangram;