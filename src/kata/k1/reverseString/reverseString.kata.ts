import { reverseString } from "./reverseString";

describe('#reverseString', () => {
  it('should reverse the string', () => {
    const cases = [
      { input: ['h', 'e', 'l', 'l', 'o'], expected: ['o', 'l', 'l', 'e', 'h'] },
      { input: ['H', 'a', 'n', 'n', 'a', 'h'], expected: ['h', 'a', 'n', 'n', 'a', 'H'] }
    ];

    cases.forEach(({ input, expected }) => {
      reverseString(input);
      expect(input).toEqual(expected);
    });
  });
});
