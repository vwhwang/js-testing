var Pangram = require('./pangram');

describe('Pangram()', function ()  {
  test('empty sentence', function () {
    var pangram = new Pangram('');

    expect(pangram.isPangram()).toBe(false);
  });

  test('returns false for an empty string', function ()  {


  });

  test('works with a pangram with only lower case', function ()  {


  });

  test("missing character 'x'", function ()  {

  });


  test('pangram with underscores instead of spaces works', function () {


  });

  test('pangram with numbers', function () {


  });

  // Write your own test case


  
});
