
export const reverseString = (str: string[]): void => {
  // initialize left and right pointers
  let left: number = 0;
  let right: number = str.length - 1;

  // iterate through str array
  while (left < right) {
    // swap left and right
    const temp = str[left];
    str[left] = str[right];
    str[right] = temp;

    // increment left and decrement right
    left++;
    right--;
  }
};
