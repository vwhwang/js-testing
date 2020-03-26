const isPalindrome = function (text) {
  const lowercaseText = text.toLowerCase();
  const lettersOnlyText = lowercaseText.replace(/[^a-z^0-9]/g, '');

  let start = 0;
  let end = lettersOnlyText.length - 1;

  while (start < end) {

    if (lettersOnlyText.charAt(start) !== lettersOnlyText.charAt(end)) {
      return false;
    }
    start += 1;
    end -= 1;
  }

  return true;
};

module.exports = isPalindrome;
