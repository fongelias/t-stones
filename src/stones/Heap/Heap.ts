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
 * 
 * 
 * what are common applications?
 * 
 */

 export const HEAP_COMPLEXITY_CONFIG: DataStructureComplexityConfig = {
  name: 'heap',
  type: ComplexityConfigType.DATA_STRUCTURE,
  search: {
    best: 'O(1)',
    base: 'O(log n)',
    worst: 'O(n)',
  },
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
}

export class Heap {

}
