import { generateLinkedListFromArray } from "./generateLinkedListFromArray";
import { getLengthOfLinkedList } from "./getLengthOfLinkedList";

describe('#getLengthOfLinkedList', () => {
    it('should get the length of a linked list', () => {
        const arr = [1, 2, 3, 4];
        const head = generateLinkedListFromArray(arr);
        expect(getLengthOfLinkedList(head)).toEqual(arr.length);
    });

    it('should handle null', () => {
        const head = generateLinkedListFromArray([]);
        expect(getLengthOfLinkedList(head)).toEqual(0);
    });
});
