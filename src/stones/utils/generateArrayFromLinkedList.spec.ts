import { generateArrayFromLinkedList } from "./generateArrayFromLinkedList";
import { generateLinkedListFromArray } from "./generateLinkedListFromArray";

describe('#generateArrayFromLinkedList', () => {
    it('should generate an array from a linked list', () => {
        const source = [1, 2, 3, 4];
        const head = generateLinkedListFromArray(source);
        expect(generateArrayFromLinkedList(head)).toEqual(source);
    });

    it('should handle null', () => {
        const head = generateLinkedListFromArray([]);
        expect(generateArrayFromLinkedList(head)).toEqual([]);
    });
});
