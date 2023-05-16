import { BinaryTree } from "./BinaryTree";

describe('BinaryTree', () => {
  describe('#insert', () => {
    it('should insert a value into an empty tree', () => {
      const tree = new BinaryTree();
      tree.insert(1);
      expect(tree.search(1)).toBe(true);
    });

    it('should insert a value into a tree with one node', () => {
      const tree = new BinaryTree();
      const firstValue = 1;
      const secondValue = 2;

      // insert
      tree.insert(firstValue);
      tree.insert(secondValue);

      // assert
      expect(tree.search(firstValue)).toBe(true);
      expect(tree.search(secondValue)).toBe(true);
    });

    it('should insert a value into a tree with multiple nodes', () => {
      const tree = new BinaryTree();
      const toInsert = [1, 2, 3];

      // insert
      toInsert.forEach((value) => tree.insert(value));

      // assert
      toInsert.forEach((value) => expect(tree.search(value)).toBe(true));
    });
  });

  describe('#delete', () => {
    it('should return true when it deletes a value from a tree with one node', () => {
      const tree = new BinaryTree();
      const toInsert = 1;

      // insert
      tree.insert(toInsert);

      // assert
      expect(tree.delete(toInsert)).toBe(true);
      expect(tree.search(toInsert)).toBe(false);
    });

    it('should delete a value from a tree with one node', () => {
      const tree = new BinaryTree();
      const toInsert = 1;

      // insert
      tree.insert(toInsert);

      // assert
      expect(tree.delete(toInsert)).toBe(true);
      expect(tree.search(toInsert)).toBe(false);
    });

    it('should delete a value from a tree with multiple nodes', () => {
      const tree = new BinaryTree();
      const toInsert = [1, 2, 3];

      // insert
      toInsert.forEach((value) => tree.insert(value));

      // assert
      toInsert.forEach((value) => expect(tree.search(value)).toBe(true));
    });

    it('should return false if the value does not exist in the tree', () => {
      const tree = new BinaryTree();
      const toInsert = [1, 2, 3];

      // insert
      toInsert.forEach((value) => tree.insert(value));

      // assert
      expect(tree.delete(4)).toBe(false);
    });

    it('should handle deleting in the middle of the tree', () => {
      const tree = new BinaryTree();
      const toInsert = [1, 2, 3];

      // insert
      toInsert.forEach((value) => tree.insert(value));

      // assert deleted
      expect(tree.delete(2)).toBe(true);
      expect(tree.search(2)).toBe(false);
      // assert that rest of tree is not deleted
      expect(tree.search(1)).toBe(true);
      expect(tree.search(3)).toBe(true);
    });
  });

  describe('#search', () => {
    it('should return true if the value exists in the tree', () => {
      const tree = new BinaryTree();
      const toInsert = [1, 2, 3];

      // insert
      toInsert.forEach((value) => tree.insert(value));

      // assert
      toInsert.forEach((value) => expect(tree.search(value)).toBe(true));
    });

    it('should return false if the value does not exist in the tree', () => {
      const tree = new BinaryTree();
      const toInsert = [1, 2, 3];

      // insert
      toInsert.forEach((value) => tree.insert(value));

      // assert
      expect(tree.search(4)).toBe(false);
    });
  });
});
