
export const firstBadVersion = (n: number, isBadVersion: (num: number) => boolean) => {
  let left = 0;
  let right = n;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (isBadVersion(middle)) {
      right = middle - 1;
    }

    if (!isBadVersion(middle)) {
      left = middle + 1;
    }
  }

  return left;
}
