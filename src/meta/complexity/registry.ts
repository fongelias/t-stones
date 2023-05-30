// complexity files are registered here
import { BINARY_SEARCH_COMPLEXITY_CONFIG } from 'stones/BinarySearch/BinarySearch';
import { BINARY_TREE_COMPLEXITY_CONFIG } from 'stones/BinaryTree/BinaryTree';
import { HEAP_COMPLEXITY_CONFIG } from 'stones/Heap/Heap';
import { LINKED_LIST_COMPLEXITY_CONFIG } from 'stones/LinkedList/LinkedListNode';
import { QUEUE_COMPLEXITY_CONFIG } from 'stones/Queue/Queue';
import { STACK_COMPLEXITY_CONFIG } from 'stones/Stack/Stack';
import { AlgorithmComplexityConfig, ComplexityConfig, DataStructureComplexityConfig } from './complexity.types';


const DATA_STRUCTURE_COMPLEXITY_REGISTRY: DataStructureComplexityConfig[] = [
  LINKED_LIST_COMPLEXITY_CONFIG,
  STACK_COMPLEXITY_CONFIG,
  QUEUE_COMPLEXITY_CONFIG,
  BINARY_TREE_COMPLEXITY_CONFIG,
  HEAP_COMPLEXITY_CONFIG,
];

const ALGORITHM_COMPLEXITY_REGISTRY: AlgorithmComplexityConfig[] = [
  BINARY_SEARCH_COMPLEXITY_CONFIG,
];

export const COMPLEXITY_REGISTRY: ComplexityConfig[] = [
  ...DATA_STRUCTURE_COMPLEXITY_REGISTRY,
  ...ALGORITHM_COMPLEXITY_REGISTRY,
];
