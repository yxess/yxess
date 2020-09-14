#!/usr/bin/env node

const compiler = require("./modules/compiler.js");
const loader = require("./modules/loader.js");

var yargs = require("yargs");
const chalk = require("chalk");

// General information
const pwd = process.cwd();

var argv = yargs
  .usage("Usage: $0 <command> [options]")
  .command("compile", "Compile to a static site")
  .example("$0 compile", "Compiles directory")
  .demandCommand(1)
  .help("h")
  .alias("h", "help")
  .epilog("Copyright 2020").argv;

switch (argv._[0]) {
  case "compile":
    compiler.compile(pwd);
    break;
  default:
    console.log("Invalid command specified.");
}
