import { ComplexityConfigType, AlgorithmComplexityConfig } from "meta/complexity/complexity.types";

/**
 * algorithm:
 * what is it?
 * binary search operates on a sorted array to find a value
 * 
 * how does it work?
 * it compares the target value to the middle element of the array.
 * if the target value is less than the middle element, it searches the left half of the array.
 * if the target value is greater than the middle element, it searches the right half of the array.
 * it repeats this process until the target value is found or the array is empty.
 * returns -1 when there is no match, otherwise returns idx of target value
 * 
 * what are common applications?
 * searching sorted arrays
 * 
 */
 export const BINARY_SEARCH_COMPLEXITY_CONFIG: AlgorithmComplexityConfig = {
  name: 'binary-search',
  type: ComplexityConfigType.ALGORITHM,
  space: 'O(n)',
  runtime: {
    best: 'O(1)',
    base: 'O(log n)',
    worst: 'O(log n)',
  },
}

export const BinarySearch = (array: number[], target: number): number => {
  // empty array case
  if (array.length === 0) {
    return -1;
  }

  // initialize left and right pointers
  let left = 0;
  let right = array.length - 1;

  while(left <= right) {
    // calculate middle index
    const middle = Math.floor((left + right) / 2);

    // if target is found, return index
    if (array[middle] === target) {
      return middle;
    }

    // if target is less than middle element, search left half
    if (target < array[middle]) {
      right = middle - 1;
    }

    // if target is greater than middle element, search right half
    if (target > array[middle]) {
      left = middle + 1;
    }
  }

  return -1;
};
