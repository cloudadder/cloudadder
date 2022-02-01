import { awscdk, javascript } from "projen";

const project = new javascript.NodeProject({
  defaultReleaseBranch: "main",
  name: "cloudadder",
  devDeps: ["chalk", "clear", "figlet"],
  entrypoint: "index.js",
  bin: {
    "cloudadder": "./index.js"
  },
  scripts: {
    "install-global": "npm i -g && cloudadder",
  },
});

project.addFields({"type": "module"});
  
project.synth();