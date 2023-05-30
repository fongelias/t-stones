import { LinkedListNode } from "stones";

export const middleOfLinkedList = (head: LinkedListNode<number> | null): LinkedListNode<number> | null => {
  let length = 0;
  let currNode = head;

  while(currNode) {
      length++;
      currNode = currNode.next;
  }

  currNode = head;
  let idx = Math.floor(length / 2);
  for(let i = 0; i < idx; i++) {
      currNode = currNode?.next || null;
  }

  return currNode;
}
