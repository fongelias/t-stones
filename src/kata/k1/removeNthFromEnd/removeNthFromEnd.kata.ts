import { generateLinkedListFromArray } from "stones/utils/generateLinkedListFromArray";
import { removeNthFromEnd } from "./removeNthFromEnd";

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
    ];

    cases.forEach(({list, n, output}) => {
      const head = generateLinkedListFromArray(list);
      removeNthFromEnd(head, n);

      
    });
  });
});
