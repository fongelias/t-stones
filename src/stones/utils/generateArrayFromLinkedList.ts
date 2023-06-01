import { LinkedListNode } from "stones/LinkedList/LinkedListNode";

export function generateArrayFromLinkedList<T>(head: LinkedListNode<T> | null): T[] {
    const res: T[] = [];
    // handle null case
    if (head === null) {
        return res;
    }

    // otherwise, iterate through linked list and save values
    let currNode: LinkedListNode<T> | null = head;
    while(currNode) {
        res.push(currNode.value);
        currNode = currNode.next;
    }

    return res;
}
