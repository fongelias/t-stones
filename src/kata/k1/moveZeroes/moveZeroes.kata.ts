import { moveZeroes } from "./moveZeroes";

describe('#moveZeros', () => {
  it('it should move all 0s to the end of the passed array', () => {
    const testCases = [
      {nums: [0,1,0,3,12], expected: [1,3,12,0,0]},
      {nums: [0], expected: [0]},
      {nums: [1], expected: [1]},
    ];

    testCases.forEach(({nums, expected}) => {
      // moveZeroes mutates
      moveZeroes(nums);
      expect(nums).toEqual(expected);
    });
  });
});
