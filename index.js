#!/usr/bin/env node

import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { exec } from "child_process";
import pkg from 'enquirer';
const { Editable } = pkg;

clear();

console.log(
  chalk.bgGrey(
    figlet.textSync("cloudadder", {
      font: "ogre",
      horizontalLayout: "default",
      verticalLayout: "default",
    })
  )
);

const prompt = new Editable({
  name: 'command',
  message: 'cdk runner',
  choices: [
    {
      name: 'command',
      message: 'cdk command such as: synth, deploy, destroy, ...',
      editable: true,
      validate(value, state) {
        if (value && value.includes('cdk')) {
          this.error = 'no need to include cdk';
          return false;
        }
        this.error = void 0;
        return true;
      }
    }
  ]
});

prompt
  .run()
  .then(value => cdkcommand(value))
  .catch(console.error);

function cdkcommand(value) {
  console.log("cdk command: ", value.command);
  exec("cdk " + value.command, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(chalk.green("CDK output " + `${stdout}` + ""));
  });
}  