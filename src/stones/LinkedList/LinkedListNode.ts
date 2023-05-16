import { ComplexityConfigType, DataStructureComplexityConfig } from 'meta/complexity/complexity.types';

/**
 * data structure: linked list
 * what are they?
 * a linked list is a linear data structure where each element points to the next
 * 
 * what are their properties?
 * sequential access, non-contiguous storage, dynamic size,
 * 
 * how do they work?
 * each node contains data and a reference to the next node in the sequence
 * 
 * what are common applications?
 * used to implement other abstract data types: lists, stacks, queues, etc.
 * allows non-contiguous storage of a list in memory
 */

export const LINKED_LIST_COMPLEXITY_CONFIG: DataStructureComplexityConfig = {
  name: 'linked-list',
  type: ComplexityConfigType.DATA_STRUCTURE,
  lookup: 'O(n)',
  mutation: {
    beginning: 'O(1)',
    middle: 'O(n)',
    end: 'O(n)',
  },
  space: 'O(n)',
}


export class LinkedListNode<T> {
  constructor(
    public value: T,
    public next: LinkedListNode<T> | null = null,
  ) {}
}
