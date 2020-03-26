const isPalindrome = require('../src/is_palindrome');

describe('isPalindrome()', () => {
  it('isPalindrome is defined', () => {
    expect(isPalindrome).toBeDefined();
  });

  it('returns true for an empty string', () => {
    // Arrange
    const text = '';

    // Act
    answer = isPalindrome(text);

    // Assert
    expect(answer).toBeTruthy();
  });

  it('returns false for input abc', () => {
    // Arrange
    const text = 'abc';

    // Act
    answer = isPalindrome(text);

    // Assert
    expect(answer).toBeFalsy();
  });


  it('returns true for input "Too hot to hoot."', () => {
    // Arrange
    const text = 'Too hot to hoot.';

    // Act
    answer = isPalindrome(text);

    // Assert
    expect(answer).toBeTruthy();
  });

  it('returns false for input "1 day yad 2"', () => {
    // Arrange
    const text = '1 day yad 2';

    // Act
    answer = isPalindrome(text);

    // Assert
    expect(answer).toBeFalsy();
  });

  it('returns true for input "1 day yad 1"', () => {
    // Arrange
    const text = '1 day yad 1';

    // Act
    answer = isPalindrome(text);

    // Assert
    expect(answer).toBeTruthy();
  });
});