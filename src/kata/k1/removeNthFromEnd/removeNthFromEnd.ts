import { LinkedListNode } from "stones";
import { getLengthOfLinkedList } from "stones/utils/getLengthOfLinkedList";

// n is assumed to be in bounds
export function removeNthFromEnd<T>(head: LinkedListNode<T> | null, n: number): LinkedListNode<T> | null {
    // get idx to forward to
    const length = getLengthOfLinkedList(head);
    let idx = getLengthOfLinkedList(head) - n;

    // handle length of 1 and empty, must delete only element or delete nothing
    if (length === 1) {
        return null;
    }

    // handle delete first element when length > 1
    if (length > 1 && idx === 0) {
        return head?.next || null;
    }

    // fast-forward and remove
    let prevNode = null;
    let currNode: LinkedListNode<T> | null = head;
    while(idx > 0) {
        prevNode = currNode;
        currNode = currNode?.next || null;
        idx--;
    }

    // remove node and return head
    prevNode!.next = currNode?.next || null; // non-null asserted by length of list
    return head;
};
