
// return indices of the two numbers such that they add up to target
// indices are 1-indexed
export const twoSumSorted = (
  numbers: number[],
  target: number
): number[] => {
  // initialize left and right pointers
  let left: number = 0;
  let right: number = numbers.length - 1;

  // iterate through numbers array
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    // if the sum of the left and the right is equal to the target, return
    if (sum === target) {
      return [left + 1, right + 1];
    }
    // if the sum is less, increment left
    if (sum < target) {
      left++;
    }
    // if the sum is greater, decrement right
    if (sum > target) {
      right--;
    }
  }

  return [-1, -1];
};
