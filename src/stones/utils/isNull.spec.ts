import { isNull } from "./isNull";

describe('isNull', () => {
  it('should return true if the value is null', () => {
    expect(isNull(null)).toBe(true);
  });

  it('should return false if the value is not null', () => {
    expect(isNull(1)).toBe(false);
  });

  describe('false positives: it should return false if the value is an empty non-null value', () => {
    it('should return false if the value is an empty string', () => {
      expect(isNull('')).toBe(false);
    });

    it('should return false if the value is undefined', () => {
      expect(isNull(undefined)).toBe(false);
    });

    it('should return false if the value is NaN', () => {
      expect(isNull(NaN)).toBe(false);
    });

    it('should return false if the value is 0', () => {
      expect(isNull(0)).toBe(false);
    });
  });
});
