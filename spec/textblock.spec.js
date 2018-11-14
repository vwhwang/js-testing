const textBlock = require('../src/textblock');

describe('TextBlock class',  () =>  {

  test('TextBlock is defined', function() {
    expect(textBlock).toBeDefined();
  });

  describe('isPangram()', () => {
    test('isPangram() is defined', () => {

      expect(textBlock.isPangram).toBeDefined();
    });

    test('empty sentence',  () => {
      textBlock.setup('');

      expect(textBlock.isPangram()).toBe(false);
    });

    test('works with a pangram with only lower case', () =>  {
      textBlock.setup('the quick brown fox jumps over the lazy dog.');

      expect(textBlock.isPangram()).toBe(true);
      expect(textBlock.isPangram()).toBeTruthy();

    });

    test("missing character 'x'",  () =>  {

    });


    test('pangram with underscores instead of spaces works', function () {


    });

    test('pangram with numbers',  () => {

    });

    // Write your own test case


  });

  describe('isPalindrome()', () => {

  });
});
