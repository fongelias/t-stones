import { ComplexityConfigType, DataStructureComplexityConfig } from "meta/complexity/complexity.types";


/**
 * data structure: binary tree
 * what are they?
 * rooted, ordered tree with a maximum of two children per node
 * 
 * what are their properties?
 * has a root node, has a left child, has a right child, each of which may be a subtree. can be balanced:
 * when the tree is balanced, subtrees differ in height by no more than 1.
 * 
 * how do they work?
 * child nodes are traversed from the root node via pointers to the left and right children
 * 
 * what are common applications?
 * searching, sorting, priority queues, combinatorics, decision trees
 */

 export const BINARY_TREE_COMPLEXITY_CONFIG: DataStructureComplexityConfig = {
  name: 'binary-tree',
  type: ComplexityConfigType.DATA_STRUCTURE,
  search: {
    best: 'O(1)',
    base: 'O(log n)',
    worst: 'O(n)',
  },
  mutation: {
    insert: {
      best: 'O(1)',
      base: 'O(log n)',
      worst: 'O(n)',
    },
    delete: {
      best: 'O(1)',
      base: 'O(log n)',
      worst: 'O(n)',
    },
  },
  space: 'O(n)',
}

class BinaryTreeNode {
  constructor(
    public value: number,
    public left: Nullable<BinaryTreeNode> = null,
    public right: Nullable<BinaryTreeNode> = null,
  ) {}
}

export class BinaryTree {
  constructor(
    private root: Nullable<BinaryTreeNode> = null,
  ) {}

  public insert(value: number): void {
    const newNode = new BinaryTreeNode(value);

    // handle empty tree case
    if (!this.root) {
      this.root = newNode;
      return;
    }

    // otherwise, traverse tree to find insertion point
    let currentNode = this.root;
    while(true) {
      if (value < currentNode.value) {
        // go left
        // if there is no left child, insert the new node
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        // if there is, navigate to the left child
        currentNode = currentNode.left;
      } else {
        // go right
        // if there is no right child, insert the new node
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        // if there is, navigate to the right child
        currentNode = currentNode.right;
      }
    }
  }

  public delete(value: number): boolean {
    // handle empty tree case
    if (this.root === null) {
      return false;
    }

    // otherwise, traverse tree to find deletion point
    let previousNode: Nullable<BinaryTreeNode> = null;
    let currentNode: Nullable<BinaryTreeNode> = this.root;

    while (currentNode) {
      // end if value found
      if (currentNode.value === value) {
        break;
      }

      // otherwise, continue traversing
      previousNode = currentNode;

      // if not found, traverse tree
      if (value < currentNode.value) {
        // go left
        currentNode = currentNode.left;
      } else {
        // go right
        currentNode = currentNode.right;
      }
    }

    // if the value was not found, return false
    if (currentNode === null) {
      return false;
    }

    // handle single node case
    if (!previousNode) {
      this.root = null;
      return true;
    }

    // select value to replace deleted node with
    let valueToReplaceWith = null;

    // if the node has no children, delete it
    if (!currentNode.left && !currentNode.right) {
      valueToReplaceWith = null;
    }

    // if the node has one child, replace it with its child
    if (!currentNode.left && currentNode.right) {
      // only has right child
      valueToReplaceWith = currentNode.right;
      
    } else if (currentNode.left && !currentNode.right) {
      // only has left child
      valueToReplaceWith = currentNode.left;
    } else if (currentNode.left && currentNode.right) {
      // if the node has two children, replace with successor
      // find the successor, the leftmost node in the right subtree
      let previousSuccessor: BinaryTreeNode = currentNode;
      let currentSuccessor: BinaryTreeNode = currentNode.right;

      while(currentSuccessor.left) {
        currentSuccessor = currentSuccessor.left;
      }

      valueToReplaceWith = currentSuccessor;
      // delete successor from its current position
      if (previousSuccessor === currentNode) {
        // first node is on the right of the parent
        previousSuccessor.right = null;
      } else {
        // all other nodes are on the left of the parent
        previousSuccessor.left = null;
      }
    }

    // replace the node with the value to replace it with
    if (previousNode.left === currentNode) {
      previousNode.left = valueToReplaceWith;
    } else {
      previousNode.right = valueToReplaceWith;
    }

    return true;
  }

  public search(value: number): boolean {
    let currentNode = this.root;
    
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      if (value < currentNode.value) {
        // go left
        currentNode = currentNode.left;
      } else {
        // go right
        currentNode = currentNode.right;
      }
    }

    return false;
  }
}
