import { ComplexityConfigType, DataStructureComplexityConfig } from 'meta/complexity/complexity.types';
import { LinkedListNode } from 'stones/LinkedList/LinkedListNode';
import { isNull } from 'util';

/**
 * data structure: stack
 * what are they?
 * a stack is a LIFO linear data strcture
 * 
 * what are their properties?
 * provides constant time access to the top of the stack, maintains sequential data
 * 
 * how do they work?
 * typically implemented with a linked list
 * 
 * what are common applications?
 * LIFO usage, dfs, backtracking, syntax parsing, expression evaluation
 */
 export const STACK_COMPLEXITY_CONFIG: DataStructureComplexityConfig = {
  name: 'stack',
  type: ComplexityConfigType.DATA_STRUCTURE,
  peek: 'O(1)',
  mutation: {
    push: 'O(1)',
    pop: 'O(1)',
  },
  space: 'O(n)',
}



const STACK_CONFIG = {
  DEFAULT_EMPTY_VALUE: null,
}

export class Stack<T> {
  private head: LinkedListNode<T> | null = STACK_CONFIG.DEFAULT_EMPTY_VALUE;

  public push(value: T): void {
    // create a new node
    const newNode = new LinkedListNode<T>(value);
    // if the stack is empty, set the new node as the head
    if (this.isEmpty()) {
      this.head = newNode;
      return;
    }
    // if the stack is not empty:
    // set the new node's next to the current head
    newNode.next = this.head;
    // set the new node as the new head
    this.head = newNode;
    return;
  }

  public pop(): T | undefined {
    // if the stack is empty, return undefined
    if (isNull(this.head)) {
      return undefined;
    }
    // if there are elements in the stack:
    // set the head to the current head's next
    const poppedNode = this.head;
    this.head = this.head.next;
    // return the current head's value
    return poppedNode.value;
  }

  public peek(): T | undefined {
    // return the current head's value
    return this.head?.value;
  }

  public isEmpty(): boolean{
    // if the stack is empty, return false
    return this.head === STACK_CONFIG.DEFAULT_EMPTY_VALUE;
  }
}
