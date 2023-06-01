import { LinkedListNode } from "stones/LinkedList/LinkedListNode";

export const getLengthOfLinkedList = (head: LinkedListNode<any> | null): number => {
    let count = 0;

    // handle null case
    if (head === null) {
        return count;
    }

    // count nodes
    let currNode: LinkedListNode<any> | null = head;
    while(currNode) {
        count++;
        currNode = currNode.next;
    }

    return count;
}
