const TextBlock = require('../src/textblock');

describe('TextBlock class',  () =>  {

  test('TextBlock is defined', function() {
    expect(TextBlock).toBeDefined();
  });

  describe('isPangram()', () => {
    test('isPangram() is defined', () => {
      const textBlock = new TextBlock('');

      expect(textBlock.isPangram).toBeDefined();
    });

    test('empty sentence',  () => {
      const textBlock = new TextBlock('');

      expect(textBlock.isPangram()).toBe(false);
    });

    test('works with a pangram with only lower case', () =>  {
      const textBlock = new TextBlock('The quick brown fox jumps over the lazy dog');

      expect(textBlock.isPangram()).toBe(true);
    });

    test("missing character 'x'",  () =>  {
      const textBlock = new TextBlock('The quick brown fo jumps over the lazy dog');

      expect(textBlock.isPangram()).toBe(false);
    });


    test('pangram with underscores instead of spaces works', function () {
      const textBlock = new TextBlock('The_quick_brown_fox_jumps_over_the_lazy_dog');

      expect(textBlock.isPangram()).toBe(true);
    });

    test('pangram with numbers',  () => {
      const textBlock = new TextBlock('The quick brown fox jumps over the lazy dog 31 times');

      expect(textBlock.isPangram()).toBe(true);
    });

    // Write your own test case


  });

  describe('isPalindrome()', () => {

  });
});
