#!/usr/bin/env node

const compiler = require("./modules/compiler.js");

var yargs = require("yargs");
const chalk = require("chalk");

console.log(`Current directory: ${process.cwd()}`);

var argv = yargs
  .usage("Usage: $0 <command> <file> [options]")
  .command("lint", "Lint a file")
  .example("$0 lint --file src/index.js", "Lint src/index.js")
  .demandCommand(1)
  .alias("f", "file")
  .nargs("f", 1)
  .demandOption(["f"])
  .count("verbose")
  .alias("v", "verbose")
  .help("h")
  .alias("h", "help")
  .epilog("Copyright 2020").argv;

switch (argv._[0]) {
  case "lint":
    compiler.compile();
    break;
}
