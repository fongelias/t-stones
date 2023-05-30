import { twoSumSorted } from './twoSumSorted';
// this problem is called "Two Sum II - Input Array Is Sorted" in leetcode

describe('#twoSumSorted', () => {
  it('should return the indices of the two numbers that add up to the target', () => {
    const cases = [
      {
        input: [2,7,11,15],
        target: 9,
        output: [1,2],
      },
      {
        input: [2,3,4],
        target: 6,
        output: [1,3],
      },
      {
        input: [-1,0],
        target: -1,
        output: [1,2],
      },
    ];

    cases.forEach(({input, target, output}) => {
      expect(twoSumSorted(input, target)).toEqual(output);
    });
  });
});
