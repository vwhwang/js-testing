# Jest Testing

This repository is intended as a teaching resource to teach the [Jest](https://facebook.github.io/jest/) JavaScript testing framework.

## Setup

From the project directory, install the necessary dependency (jest)

```bash
$ npm install -g jest-cli
$ npm install
````

## Running the test suite

Run the test suite from the exercise directory with:

```bash
$ npm test
```

Most of the tests are stubbed out and incomplete.  In the course of the exercise complete the tests.

## Problem Description #1 Pangram

Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma,
"every letter") is a sentence using every letter of the alphabet at least once.
The best known English pangram is:
> The quick brown fox jumps over the lazy dog.

The alphabet used consists of ASCII letters `a` to `z`, inclusive, and is case
insensitive. Input will not contain non-ASCII symbols.

## Problem Description #2 Palindrome

For the next function write a method which will determine if the input string is a palindrome.  A Palindrome is a word or phrase which is spelled the same backwards as forwards.

Example:  `racecar` spelled backwards is:  `racecar`.

The isPalindrome method should work ignoring whitespace or punctuation, so "Too hot to hoot." is a palindrome.

## Source

This was adapted from the Exercism JavaScript exercise.

- Wikipedia [https://en.wikipedia.org/wiki/Pangram](https://en.wikipedia.org/wiki/Pangram)
- Exercism
[http://exercism.io/exercises/javascript/pangram/readme](http://exercism.io/exercises/javascript/pangram/readme)
