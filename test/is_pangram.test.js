const isPangram = require('../src/is_pangram');

describe('Testing isPangram()', () => {
  it('isPangram() is defined', function () {

    expect(isPangram).toBeDefined();
  });

  // https://prod.liveshare.vsengsaas.visualstudio.com/join?5079B7578CBD5F77E08B1DD5A20BA9BFA8AA
  it('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBeTruthy();
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBeTruthy();
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = "abcdefghijklmnopqrstuvwyz";

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBeFalsy();
  });

  test('empty sentence', () => {
    // Arrange
    const text = '';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBeFalsy();
  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBeTruthy();
  });

  test('pangram with numbers', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the 42 lazy dogs';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBeTruthy();
  });

  // Write your own test case
});
