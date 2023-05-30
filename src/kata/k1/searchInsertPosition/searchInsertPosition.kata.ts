import { searchInsertPosition } from "./searchInsertPosition";

describe('#searchInsertPosition', () => {
  it('should return the index of the target if it is found', () => {
    const arr = [1,3,5,7,9,10];

    expect(searchInsertPosition(arr, 5)).toBe(2);
  });

  it('should return the index of the insertion if the target is not found', () => {
    const arr = [1,3,5,7,9,10];

    expect(searchInsertPosition(arr, 6)).toBe(3);
  });
});
