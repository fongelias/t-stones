export enum ComplexityConfigType {
  DATA_STRUCTURE = 'data-structure',
  ALGORITHM = 'algorithm',
}

export interface ComplexityConfig {
  name: string; // name of data structure or algorithm
  type: ComplexityConfigType;
}

export interface DataStructureComplexityConfig extends ComplexityConfig, Record<string, any> {
  type: ComplexityConfigType.DATA_STRUCTURE;
  space: string;
}

export interface RuntimeCases {
  best: string;
  base: string;
  worst: string;
}

export interface AlgorithmComplexityConfig extends ComplexityConfig {
  type: ComplexityConfigType.ALGORITHM;
  space: string;
  runtime: RuntimeCases;
}
