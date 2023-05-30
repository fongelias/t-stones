import { BinarySearch } from "./BinarySearch";

describe('#BinarySearch', () => {
  it('should return -1 when array is empty', () => {
    expect(BinarySearch([], 1)).toBe(-1);
  });

  it('should return -1 when target is not found', () => {
    expect(BinarySearch([1, 2, 3], 4)).toBe(-1);
  });

  it('should return index when target is found', () => {
    // setup
    const array = [-1, 0, 1, 2, 3, 5, 7, 9];

    // assert
    array.forEach((target, idx) => {
      expect(BinarySearch(array, target)).toBe(idx);
    });
  });
});
