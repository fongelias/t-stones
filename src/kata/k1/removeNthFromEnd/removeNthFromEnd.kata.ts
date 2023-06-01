import { generateLinkedListFromArray } from "stones/utils/generateLinkedListFromArray";
import { removeNthFromEnd } from "./removeNthFromEnd";
import { generateArrayFromLinkedList } from "stones/utils/generateArrayFromLinkedList";

describe('#removeNthFromEnd', () => {
  it('should remove the nth last node', () => {
    const cases = [
      {
        list: [1, 2, 3, 4, 5],
        n: 2,
        output: [1, 2, 3, 5],
      },
      {
        list: [1],
        n: 1,
        output: [],
      },
      {
        list: [1, 2],
        n: 1,
        output: [1],
      },
      {
        list: [1, 2],
        n: 2,
        output: [2],
      },
    ];

    cases.forEach(({list, n, output}) => {
      const head = generateLinkedListFromArray(list);
      const newHead = removeNthFromEnd(head, n);
      const res = generateArrayFromLinkedList(newHead);
      expect(res).toEqual(output);
    });
  });
});
