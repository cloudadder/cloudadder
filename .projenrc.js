const { typescript, awscdk } = require("projen");

const project = new typescript.TypeScriptAppProject({
  entrypoint: "src/cli.js",
  bin: { cloudadder: "src/cli.js" },
  bin: "bin/cli",
  defaultReleaseBranch: "main",
  devDeps: ["@types/node", "ts-node", "nodemon", "typescript"],
  name: "projen-aws-sample-project",
  eslintOptions: {
    prettier: true,
  },
  scripts: {
    "install:infra": "cd aws && npm install",
    "build:infra": "cd aws && npm run build",
    "synth:infra": "cd aws && npx cdk synth",
    watchserver:
      "nodemon --ignore test/ --watch src -e ts,tsx --exec ts-node src/cli.ts",
    start: "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/cli.ts",
  },
});
project.synth();

const infrastructure = new awscdk.AwsCdkTypeScriptApp({
  defaultReleaseBranch: "main",
  name: "projen-aws-sample-project-infrastructure",
  parent: project,
  cdkVersion: "2.10.0",
  outdir: "aws",
  eslint: false,
});
infrastructure.synth();
