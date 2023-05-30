import { reverseWords } from "./reverseWords";

// this kata is called 'Reverse Words in a String III' in leetcode
describe('#reverseWords', () => {
  it('should reverse order of characters in each string while preserving initial word order', () => {
    const cases = [
      {
        input: "Let's take LeetCode contest",
        output: "s'teL ekat edoCteeL tsetnoc",
      },
      {
        input: "God Ding",
        output: "doG gniD",
      },
    ];

    cases.forEach(({input, output}) => {
      expect(reverseWords(input)).toEqual(output);
    });
  });
});
