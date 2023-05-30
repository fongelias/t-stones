
export const squaresOfASortedArray = (nums: number[]): number[] => {
  // initialize left and right pointers
  let left: number = 0;
  let right: number = nums.length - 1;

  // initialize result array
  const result: number[] = [];

  // iterate through nums array, taking the square of the element with the greater absolute value
  while (left <= right) {
    const leftAbs = Math.abs(nums[left]);
    const rightAbs = Math.abs(nums[right]);

    if (leftAbs > rightAbs) {
      result.unshift(leftAbs * leftAbs);
      left++;
    } else {
      result.unshift(rightAbs * rightAbs);
      right--;
    }
  }

  return result;
};
