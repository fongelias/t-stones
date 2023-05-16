import { ComplexityConfigType } from './complexity.types';
import { COMPLEXITY_REGISTRY } from './registry';
import chalk from 'chalk';


const listAvailableComplexityConfigs = () => {
  console.log(chalk.greenBright('\navailable complexity configs:'));
  Object.values(ComplexityConfigType).forEach((type) => {
    const typeColor = type === ComplexityConfigType.DATA_STRUCTURE ? chalk.green : chalk.blue;

    console.log(typeColor(`\t${type}s`));
    COMPLEXITY_REGISTRY
      .filter((config) => config.type === type)
      .forEach((config) => console.log(typeColor(`\t\t${config.name}`)));
  });
  console.log('\n');
};

listAvailableComplexityConfigs();
