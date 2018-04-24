var Pangram = require('../pangram');

describe('Pangram class',  () =>  {

  test('is defined', function() {
    expect(Pangram).toBeDefined();
  });

  describe('isPangram()', () => {
    test('empty sentence',  () => {
      var pangram = new Pangram('');

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
