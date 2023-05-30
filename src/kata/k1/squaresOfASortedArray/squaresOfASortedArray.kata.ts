import { squaresOfASortedArray } from "./squaresOfASortedArray";

describe('#squaresOfASortedArray', () => {
  it('should return the squares of a sorted array', () => {
    const testCases = [
      {nums: [-4,-1,0,3,10], expected: [0,1,9,16,100]},
      {nums: [-7,-3,2,3,11], expected: [4,9,9,49,121]},
    ];

    testCases.forEach(({nums, expected}) => {
      expect(squaresOfASortedArray(nums)).toEqual(expected);
    });
  });
});

