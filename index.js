#!/usr/bin/env node
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

clear();

console.log(chalk.bgGrey(figlet.textSync('cloudadder', {font: 'ogre', horizontalLayout: 'default', verticalLayout: 'default'}))); 
