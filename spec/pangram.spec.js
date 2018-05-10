const Pangram = require('../src/pangram');

describe('Pangram class',  () =>  {

  test('Pangram is defined', function() {
    expect(Pangram).toBeDefined();
  });

  describe('isPangram()', () => {
    test('isPangram() is defined', () => {
      const pangram = new Pangram('');

      expect(pangram.isPangram).toBeDefined();
    });

    test('empty sentence',  () => {
      let pangram = new Pangram('');

      expect(pangram.isPangram()).toBe(false);
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
});
