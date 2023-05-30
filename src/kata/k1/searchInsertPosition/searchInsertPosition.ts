
export const searchInsertPosition = (
  nums: number[],
  target: number,
) => {
  // initialize left and right pointers
  let left: number = 0;
  let right: number = nums.length - 1;

  while(left <= right) {
    // calculate middle index
    const middle: number = Math.floor((left + right) / 2);

    // if target is found, return index
    if (nums[middle] === target) {
      return middle;
    }

    // if target is less than middle element, search left half
    if (target < nums[middle]) {
      right = middle - 1;
    }

    // if target is greater than middle element, search right half
    if (target > nums[middle]) {
      left = middle + 1;
    }
  }

  return left;
};
