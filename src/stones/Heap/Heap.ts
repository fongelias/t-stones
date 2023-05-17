import { ComplexityConfigType, DataStructureComplexityConfig } from "meta/complexity/complexity.types";

/**
 * data structure: heap
 * what are they?
 * tree-based data structure which is almost a complete binary tree
 * 
 * what are their properties?
 * parent is greater than or equal to its children— root node is the largest element
 * 
 * how do they work?
 * the root node contains the largest element, and the relative sorting occurs on mutation
 * implemented as an array, with parent/child relationship defined implicitly:
 * (childeren for node i are at 2i+1 and 2i+2)
 * 
 * 
 * what are common applications?
 * 
 */

 export const HEAP_COMPLEXITY_CONFIG: DataStructureComplexityConfig = {
  name: 'heap',
  type: ComplexityConfigType.DATA_STRUCTURE,
  heapify: 'O(nlogn)', // heapify n nodes, each with logn complexity
  peek: 'O(1)',
  mutation: {
    insert: {
      best: 'O(1)',
      base: 'O(log n)',
      worst: 'O(n)',
    },
    delete: {
      best: 'O(1)',
      base: 'O(log n)',
      worst: 'O(n)',
    },
  },
  space: 'O(n)',
  printHeap: 'O(n)',
}

export class Heap {
  constructor(
    private values: any[] = [],
  ) {
    if (this.values.length) {
      this.heapify();
    }
  }

  public insert(value: number): void {
    // insert at end of array, then bubble up
    this.values.push(value);
    let currentIdx = this.values.length - 1;

    while(currentIdx > 0) {
      const parentIdx = Math.floor((currentIdx - 1) / 2);
      const parentValue = this.values[parentIdx];
      const currentValue = this.values[currentIdx];

      if (currentValue > parentValue) {
        this.values[parentIdx] = currentValue;
        this.values[currentIdx] = parentValue;
        currentIdx = parentIdx;
      } else {
        break;
      }
    }

    return;
  }

  public delete(): number | null {
    // empty case
    if(!this.values.length) {
      return null;
    }

    // remove element and store
    const valueToReturn = this.values.shift();

    // single element case
    if (this.values.length === 1) {
      return valueToReturn;
    }

    // replace element with highest value with last value, then bubble down
    this.values.unshift(this.values.pop());

    // bubble down new root value
    this.bubbleDown(0);

    return valueToReturn;
  }

  private bubbleDown(startIdx: number = 0): void {
    let currentIdx = startIdx;
    while (currentIdx < this.values.length) {
      const leftChildIdx = (2 * currentIdx) + 1;
      const rightChildIdx = (2 * currentIdx) + 2;
      const leftChildValue = this.values[leftChildIdx];
      const rightChildValue = this.values[rightChildIdx];
      const currentValue = this.values[currentIdx];

      // no children case
      const noChildren = leftChildIdx > this.values.length && rightChildIdx > this.values.length;
      if (noChildren) {
        break;
      }
      
      // larger than both children case
      const largerThanBothChildren = currentValue > leftChildValue && currentValue > rightChildValue;
      if (largerThanBothChildren) {
        break;
      }
      
      if (leftChildValue - rightChildValue > 0) {
        // left child larger than right and current child case
        // because we know current is smaller than either the right or the left,
        // if the left is bigger than the right, then it is the largest of the three
        // swap with left child
        this.values[currentIdx] = leftChildValue;
        this.values[leftChildIdx] = currentValue;
        currentIdx = leftChildIdx;
      } else {
        // right child larger than right and current child case
        // we know that the current is smaller than either the right or the left,
        // and we know that the left is smaller than or equal to the right value
        // swap with right child
        this.values[currentIdx] = rightChildValue;
        this.values[rightChildIdx] = currentValue;
        currentIdx = rightChildIdx;
      }
    }
  }

  public heapify(): void {
    // Floyd's algorithm for heap construction
    // start at the last parent node and bubble down
    const lastParentIdx = Math.floor(this.values.length / 2 - 1);
    for (let i = lastParentIdx; i >= 0; i--) {
      this.bubbleDown(i);
    }
  }

  public printHeap(): void {
    let idx = 0;
    let row = 0;

    while (idx < this.values.length) {
      const valuesToPrint = Math.pow(2, row);
      const values = this.values.slice(idx, idx + valuesToPrint);
      console.log(values);
      idx += valuesToPrint;
    }
  }

  public peek(): number | null {
    return this.values.length ? this.values[0] : null;
  }
}
