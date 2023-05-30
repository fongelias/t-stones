import { rotateArray } from "./rotateArray";

describe('#rotateArray', () => {
  it('should rotate the array to the right by k steps', () => {
    const testCases = [
      {nums: [1,2,3,4,5,6,7], k: 3, expected: [5,6,7,1,2,3,4]},
      {nums: [-1,-100,3,99], k: 2, expected: [3,99,-1,-100]},
    ];

    testCases.forEach(({nums, k, expected}) => {
      expect(rotateArray(nums, k)).toEqual(expected);
    });
  });
});

