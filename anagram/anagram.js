
class Anagram {
  constructor(word) {
    this.word = word;
  }

  isAnagram(otherWord) {
    return this.word.toLowerCase() !== otherWord.toLowerCase() &&
      Anagram.sorted(this.word) === Anagram.sorted(otherWord);
  }
  static sorted(word) {
    return word.toLowerCase().split('').sort().join('');
  }
  matches(...words) {
    let myWords = words;
    if (Array.isArray(words[0])) {
      [myWords] = words;
    }
    const matchingWords = myWords.filter(word => this.isAnagram(word));

    return matchingWords;
  }
}
module.exports = Anagram;
