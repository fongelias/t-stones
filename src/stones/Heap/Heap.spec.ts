import { Heap } from "./Heap";

describe('Heap', () => {

  beforeAll(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('#constructor', () => {
    it('should heapify a passed array', () => {
      // mock console.log
      const messages: number[] = [];
      const consoleSpy = jest.spyOn(console, 'log');
      consoleSpy.mockImplementation((message) => messages.push(message));

      // setup
      const toHeapify = [1, 2, 3, 4, 5];
      const heap = new Heap(toHeapify);

      // assert
      heap.printHeap();
      expect(messages).toEqual([
        [5],
        [4, 3],
        [1, 2],
      ]);

      // restore console.log
      consoleSpy.mockRestore();
    });
  });

  describe('#insert', () => {
    it('should handle inserting into an empty heap', () => {
      // setup
      const heap = new Heap();
      heap.insert(1);

      // assert
      expect(heap.peek()).toBe(1);
    });

    it('should handle inserting into a heap with one element', () => {
      // setup
      const heap = new Heap([1]);
      heap.insert(2);

      // assert
      expect(heap.peek()).toBe(2);
    });

    it('should handle inserting into a heap with multiple elements', () => {
      // setup
      const toInsert = [-1,-2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const heap = new Heap(toInsert);
      heap.insert(11);

      // assert
      expect(heap.peek()).toBe(11);
    });

    it('should handle inserting into the middle of a heap', () => {
      // setup
      const toInsert = [-1,-2, 0, 1, 2, 3, 4, 6, 7, 8, 9, 10];
      const heap = new Heap(toInsert);
      heap.insert(5);

      // assert
      // counting down to -2
      for (let i = 0; i < toInsert.length + 1; i++) {
        expect(heap.delete()).toBe(10 - i);
      }
    });
  });

  describe('#delete', () => {
    it('should return null when deleting from an empty heap', () => {
      // setup
      const heap = new Heap();

      // assert
      expect(heap.delete()).toBe(null);
    });

    it('should return the root when deleting from a heap', () => {
      // setup
      const heap = new Heap([1, 2, 3, 4, 5]);

      // assert
      expect(heap.delete()).toBe(5);
    });

    it.only('should handle maintaining heap order while deleting', () => {
      // setup
      const toInsert = [1, 2, 3, 4, 5];
      const heap = new Heap(toInsert);

      // assert
      toInsert.reverse().forEach(value => {
        expect(heap.delete()).toBe(value);
      });
    });
  });

  describe('#printHeap', () => {
    it('should print the heap in groups of arrays', () => {
      // mock console.log
      const messages: number[] = [];
      const consoleSpy = jest.spyOn(console, 'log');
      consoleSpy.mockImplementation((message) => messages.push(message));

      // setup
      const heap = new Heap([5, 4, 3, 1, 2]);

      // assert
      heap.printHeap();
      expect(messages).toEqual([
        [5],
        [4, 3],
        [1, 2],
      ]);

      // restore console.log
      consoleSpy.mockRestore();
    });
  });

  describe('#peek', () => {
    it('should return the top value in the heap', () => {
      // setup
      const heap = new Heap([5, 4, 3, 1, 2]);

      // assert
      expect(heap.peek()).toBe(5);
    });

    it('should return null if the heap is empty', () => {
      // setup
      const heap = new Heap();

      // assert
      expect(heap.peek()).toBe(null);
    });
  });
});
