import { generateLinkedListFromArray } from "stones/utils/generateLinkedListFromArray";
import { middleOfLinkedList } from "./middleOfLinkedList";

describe('#middleOfLinkedList', () => {
   it('it should return the middle of the linked list', () => {
    const list = [1, 2, 3, 4, 5];
    const head = generateLinkedListFromArray(list);
    expect(middleOfLinkedList(head)?.value).toEqual(3);
   });

   it('it should return the second middle node of the linked list if there are two middle nodes', () => {
    const list = [1, 2, 3, 4, 5, 6];
    const head = generateLinkedListFromArray(list);
    expect(middleOfLinkedList(head)?.value).toEqual(4);
   });
});
