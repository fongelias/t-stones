import { LinkedListNode } from "./LinkedListNode";

describe('LinkedListNode', () => {
  describe('linked list unit functionality', () => {
    describe('base behavior', () => {
      it('should contain a value property', () => {
        const node = new LinkedListNode('test');
        expect(node.value).toBe('test');
      });
  
      it('should contain a pointer to the next node', () => {
        const nextNode = new LinkedListNode('next');
        const firstNode = new LinkedListNode('first', nextNode);

        expect(firstNode.next).toBe(nextNode);
      });
    });

    describe('empty behavior', () => {
      it('can contain an empty value', () => {
        const node = new LinkedListNode(null);
        expect(node.value).toBe(null);
      });

      it('can contain an empty next pointer', () => {
        const node = new LinkedListNode(null);
        expect(node.next).toBe(null);
      });
    });
  });
});
