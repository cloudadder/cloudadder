#!/usr/bin/env node
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { exec } from "child_process";

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

exec("cdk --version", (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(chalk.green("CDK version " + `${stdout}` + ""));
});
