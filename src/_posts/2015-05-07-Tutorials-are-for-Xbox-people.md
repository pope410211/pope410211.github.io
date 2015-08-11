---
layout: post
date: 2015-05-07
title: Tutorials are for Xbox people
categories: TIY-Essay
---


# The TUTORIAL
###### (If you play XBOX or COD..this TUTORIAL may be too difficult, its ok, ask for help).

* What is a script?
-  A script is a program or sequence of instructions that is interpreted or carried out by another program.
* we are going to add a browser-sync script for this TUTORIAL (again XBOX/COD people - it may be difficult to keep up, but you can do it.)

1. First create a `package.json`..
  1. on the Command Line type `npm init`:
    1. Read the instructions - you want to read the docs, add them, if not, delete them.
    2. For which version type 0.0.0 (only it is for your first un published copy)
  2. You created you `package.json` way to go!
2. No open your `package.json` in a word editor such as Atom
  1. ```
  {
    "name": "octocat.github.io",
    "version": "0.0.0",
    "description": "---",
    "main": "index.js",
    "scripts": {
      "tests": "-mocha"
    },
    "repository": {
      "type": "git",
      "url": "https://github.com/octocat.github.io.git"
    },
    "author": "Octocat (The Octocat)",
    "license": "CCO",
    "bugs": {
      "url": "https://github.com/octocat.github.io/issues"
    },
    "homepage": "https://github.com/octocat.github.io"
  }
```
  2. Go to the `"scripts": {

    }`  section.
  3. type `"start": ""browser-sync start --server --files='js/*.js,test/index.html,test/spec/**/*.js' --startPath src/index.html"` This will sync all the files for the local server you have created, with a `startPath` so that
  it knows where the path to open the files are.
  4. It should look like this;
  ```
  ```
  "scripts": {
    "tests": "-mocha",
    "start": ""browser-sync start --server --files='js/*.js,test/index.html,test/spec/**/*.js' --startPath src/index.html"
  },
  ```



    1. You may have noticed a `,` after `"tests": "-mocha"` to separate functions.
  5. On the command line all you will have to do now is type `npm start` and VOILA!


* You can create scripts for almost anything you run in Command Line (such as `node-sass`)
