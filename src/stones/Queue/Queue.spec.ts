import { Queue } from "./Queue";

describe('Queue', () => {
  describe('#enqueue', () => {
    it('should add a value to the end of the queue', () => {
      const queue = new Queue<string>();
      queue.enqueue('test1');
      queue.enqueue('test2');
      expect(queue.peek()).toBe('test1');
    });

    it('should add a value to the queue if it is empty', () => {
      const queue = new Queue<string>();
      queue.enqueue('test');
      expect(queue.peek()).toBe('test');
    });
  });

  describe('#dequeue', () => {
    it('should remove the front value from the queue and return it', () => {
      const queue = new Queue<string>();
      queue.enqueue('test1');
      queue.enqueue('test2');
      expect(queue.dequeue()).toBe('test1');
      expect(queue.dequeue()).toBe('test2');
    });

    it('should return undefined if the queue is empty', () => {
      const queue = new Queue<string>();
      expect(queue.dequeue()).toBe(undefined);
    });
  });

  describe('#peek', () => {
    it('should return the front value from the queue', () => {
      const queue = new Queue<string>();
      queue.enqueue('test1');
      queue.enqueue('test2');
      expect(queue.peek()).toBe('test1');
    });

    it('should return undefined if the queue is empty', () => {
      const queue = new Queue<string>();
      expect(queue.peek()).toBe(undefined);
    });
  });

  describe('#isEmpty', () => {
    it('should return true if the queue is empty', () => {
      const queue = new Queue<string>();
      expect(queue.isEmpty()).toBe(true);
    });

    it('should return false if the queue is not empty', () => {
      const queue = new Queue<string>();
      queue.enqueue('test');
      expect(queue.isEmpty()).toBe(false);
    });
  });

  describe('#toArray', () => {
    it('should return an array of the values in the queue', () => {
      const queue = new Queue<string>();
      queue.enqueue('test1');
      queue.enqueue('test2');
      expect(queue.toArray()).toEqual(['test1', 'test2']);
    });

    it('should return an empty array if the queue is empty', () => {
      const queue = new Queue<string>();
      expect(queue.toArray()).toEqual([]);
    });
  });
});
