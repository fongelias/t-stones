import { Stack } from "./Stack";

describe('Stack', () => {
  describe('#push', () => {
    it('should add a value to the top of the stack', () => {
      const stack = new Stack<string>();
      stack.push('test1');
      stack.push('test2');
      expect(stack.peek()).toBe('test2');
    });

    it('should add a value to the stack if it is empty', () => {
      const stack = new Stack<string>();
      stack.push('test');
      expect(stack.peek()).toBe('test');
    });
  });

  describe('#pop', () => {
    it('should remove the top value from the stack and return it', () => {
      const stack = new Stack<string>();
      stack.push('test1');
      stack.push('test2');
      expect(stack.pop()).toBe('test2');
      expect(stack.pop()).toBe('test1');
    });

    it('should return undefined if the stack is empty', () => {
      const stack = new Stack<string>();
      expect(stack.pop()).toBe(undefined);
    });
  });

  describe('#peek', () => {
    it('should return the top value from the stack', () => {
      const stack = new Stack<string>();
      stack.push('test1');
      stack.push('test2');
      expect(stack.peek()).toBe('test2');
    });

    it('should return undefined if the stack is empty', () => {
      const stack = new Stack<string>();
      expect(stack.peek()).toBe(undefined);
    });
  });

  describe('#isEmpty', () => {
    it('should return true if the stack is empty', () => {
      const stack = new Stack<string>();
      expect(stack.isEmpty()).toBe(true);
    });

    it('should return false if the stack is not empty', () => {
      const stack = new Stack<string>();
      stack.push('test');
      expect(stack.isEmpty()).toBe(false);
    });
  });
});
