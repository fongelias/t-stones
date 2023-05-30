
export const moveZeroes = (nums: number[]): void => {
  // iterate through nums
  let idx = 0;
  let zeroes = 0;

  while(idx < nums.length) {
    // remove zeroes and keep track of how many were removed
    if (nums[idx] === 0) {
      nums.splice(idx, 1);
      zeroes++;
    } else {
      idx++;
    }
  }

  // add zeroes to end of array
  nums.push(...Array(zeroes).fill(0));
}
