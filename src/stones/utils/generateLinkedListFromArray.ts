import { LinkedListNode } from "stones/LinkedList/LinkedListNode";

export function generateLinkedListFromArray<T>(arr: T[]): LinkedListNode<T> | null {
  // handle empty array
  if (arr.length === 0) {
    return null;
  }

  // iterate through the array
  let currNode = null;
  let idx = arr.length - 1;
  while(idx >= 0) {
    const newNode = new LinkedListNode(arr[idx]);

    if(currNode === null) {
      // no list created yet
      currNode = newNode;
    } else {
      // append to existing list
      newNode.next = currNode;
      currNode = newNode;
    }
    idx--;
  }

  return currNode;
}
