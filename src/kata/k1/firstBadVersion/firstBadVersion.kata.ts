import { firstBadVersion } from "./firstBadVersion";

describe('#firstBadVersion', () => {
  const generateIsBadVersion = (badVersion: number) => (version: number) => version >= badVersion;

  it('should return the first bad version', () => {
    const testCases = [
      {n: 5, badVersion: 4},
      {n: 6, badVersion: 4},
      {n: 100, badVersion: 51},
      {n: 100, badVersion: 52},
    ];

    testCases.forEach(({n, badVersion}) => {
      expect(firstBadVersion(n, generateIsBadVersion(badVersion))).toBe(badVersion);
    });
  });

});