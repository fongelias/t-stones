import { generateLinkedListFromArray } from "./generateLinkedListFromArray";

describe('#generateLinkedListFromArray', () => {
  it('should generate a linked list from an array and return the head of the list', () => {
    const list = [1, 2, 3, 4, 5];
    let head = generateLinkedListFromArray(list);

    for(let i = 0; i < list.length; i++) {
      expect(head?.value).toEqual(list[i]);
      head = head?.next || null;
    }
  });

  it('should handle an empty array', () => {
    const head = generateLinkedListFromArray([]);
    expect(head).toBeNull();
  });

  it('should handle an array with one value', () => {
    const list = [1];
    let head = generateLinkedListFromArray(list);
    expect(head?.value).toEqual(list[0]);
  });
});
