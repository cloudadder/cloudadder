import { awscdk, javascript } from 'projen';

const project = new javascript.NodeProject({
  author: 'cloudadder',
  authorAddress: 'cloudadder.com@gmail.com',
  bin: {
    'cloudadder': './index.js'
  },
  defaultReleaseBranch: 'main',
  devDeps: ['chalk', 'clear', 'figlet'],
  entrypoint: 'index.js',
  homepage: 'http://cloudadder.com',
  name: 'cloudadder',
  npmAccess: 'public',
  repositoryUrl: 'https://github.com/cloudadder/cloudadder.git',
  scripts: {
    'build-install': 'npm run build && npm i -g --force && cloudadder',
  },
});

project.addFields({'type': 'module'});
  
project.synth();