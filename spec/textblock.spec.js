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
      const textBlock = new TextBlock('');

      expect(textBlock.isPangram()).toBe(false);
    });

    test('works with a pangram with only lower case', () =>  {

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
