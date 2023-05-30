
// mutates for speed
export const rotateArray = (nums: number[], k: number): number[] => {
  k = k % nums.length;
  nums.unshift(...nums.splice(nums.length - k, k));

  return nums;
};
