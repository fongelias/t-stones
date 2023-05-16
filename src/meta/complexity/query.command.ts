import chalk from 'chalk';
import { COMPLEXITY_REGISTRY } from './registry';


const queryAvailableComplexityConfigs = () => {
  const queryArg = process.argv[2];
  const complexityConfig = COMPLEXITY_REGISTRY.find((config) => config.name === queryArg);

  if(!complexityConfig) {
    console.log(chalk.red(`\nno complexity config found for ${queryArg}\n`));
    return;
  }

  console.log(chalk.green(`\ncomplexity for ${queryArg}:`));
  console.log(complexityConfig);
  console.log('\n');
};

queryAvailableComplexityConfigs();
