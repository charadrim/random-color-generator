import chalk from 'chalk';
import * as color from 'randomcolor';
import readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question(
  'Enter the desired hue (e.g., "red", "blue", "green", or leave empty for random): ',
  (userHue) => {
    rl.question(
      'Enter the desired luminosity ("light" or "dark", or leave empty for random): ',
      (userLuminosity) => {
        const randomColor = color.randomColor({
          hue: userHue || 'random',
          luminosity: userLuminosity || 'random',
        });

        const output = `###############################
###############################
###############################
#####                     #####
#####       ${randomColor}       #####
#####                     #####
###############################
###############################
###############################`;

        console.log(chalk.hex(randomColor)(output));

        rl.close();
      },
    );
  },
);
