import { ComplexityConfigType, DataStructureComplexityConfig } from 'meta/complexity/complexity.types';
import { LinkedListNode } from 'stones/LinkedList/LinkedListNode';
import { isNull } from 'util';

/**
 * data structure: queue
 * what are they?
 * a queue is a FIFO linear data strcture
 * 
 * what are their properties?
 * adds to the end of the queue, removes from the beginning of the queue
 * 
 * how do they work?
 * typically implemented with a linked list
 * 
 * what are common applications?
 * FIFO usage, circular buffers, breadth-first search
 */
 export const QUEUE_COMPLEXITY_CONFIG: DataStructureComplexityConfig = {
  name: 'queue',
  type: ComplexityConfigType.DATA_STRUCTURE,
  peek: 'O(1)',
  mutation: {
    enqueue: 'O(1)',
    dequeue: 'O(1)',
  },
  space: 'O(n)',
}



const QUEUE_CONFIG = {
  DEFAULT_EMPTY_VALUE: null,
}

export class Queue<T> {
  private head: LinkedListNode<T> | null = QUEUE_CONFIG.DEFAULT_EMPTY_VALUE;
  private tail: LinkedListNode<T> | null = QUEUE_CONFIG.DEFAULT_EMPTY_VALUE;

  public enqueue(value: T): void {
    // create a new node
    const newNode = new LinkedListNode<T>(value);
    // if there is no tail, point the head and tail to the new node
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    // if there is a tail, point the tail to the new node, and set the new node as the new tail
    this.tail.next = newNode;
    this.tail = newNode;
    return;
  }

  public dequeue(): T | undefined {
    // if the queue is empty, return undefined
    if (isNull(this.head)) {
      return undefined;
    }
    // if there is only one element in the queue, set the head and tail to null
    if (this.head === this.tail) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    }
    // if there are multiple elements in the queue, set the head to the next element
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  public peek(): T | undefined {
    // return the head value
    return this.head?.value;
  }

  public isEmpty(): boolean {
    // return true if the head is null
    return isNull(this.head);
  }

  public toArray(): T[] {
    // if the queue is empty, return an empty array
    if (this.isEmpty()) {
      return [];
    }
    // if the queue is not empty, iterate through the queue and return an array of values
    const values: T[] = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }
}
