function isEquivalent(a, b) {
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);
  if (aProps.length !== bProps.length) {
    return false;
  }
  for (let i = 0; i < aProps.length; i += 1) {
    const propName = aProps[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;
}

class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(array) {
    const validArray = (Array.isArray(array) === false) ? Array.from(arguments) : array;
    const counter = {};
    const returnArray = [];
    const wordChars = this.word.split('');
    const n = wordChars.length;
    for (let i = 0; i < n; i += 1) {
      if (Object.keys(counter).includes(wordChars[i])) {
        counter[wordChars[i].toLowerCase()] += 1;
      } else {
        counter[wordChars[i].toLowerCase()] = 1;
      }
    }
    validArray.forEach((candidate) => {
      if (candidate.toLowerCase() === this.word.toLowerCase()) {
        return;
      }
      const counterComp = {};
      const chars = candidate.split(''); // get array of characters
      const m = chars.length;
      for (let i = 0; i < m; i += 1) {
        if (Object.keys(counterComp).includes(chars[i])) { // is char is key in counterComp
          counterComp[chars[i].toLowerCase()] += 1; // increment it
        } else { // if char is not yet a key in counterComp
          counterComp[chars[i].toLowerCase()] = 1; // make it one
        }
      }
      if (isEquivalent(counter, counterComp)) {
        returnArray.push(chars.join(''));
      }
    });
    return returnArray;
  }
}

module.exports = Anagram;
