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
      textBlock.setup('the quick brown fo jumps over the lazy dog.');

      expect(textBlock.isPangram()).toBe(false);
      expect(textBlock.isPangram()).toBeFalsy();

    });


    test('pangram with underscores instead of spaces works', function () {
      textBlock.setup('the_quick_brown_fox_jumps_over_the_lazy_dog.');

      expect(textBlock.isPangram()).toBe(true);
      expect(textBlock.isPangram()).toBeTruthy();


    });

    test('pangram with numbers',  () => {
      textBlock.setup('23the_quick_brown_fox_ju23mps_over_the_lazy_dog.');

      expect(textBlock.isPangram()).toBe(true);
      expect(textBlock.isPangram()).toBeTruthy();

    });

    // Write your own test case


  });

  describe('isPalindrome()', () => {

  });
});
