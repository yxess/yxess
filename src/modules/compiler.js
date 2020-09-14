//! TODO:
/*
Add files for detection:
 - src/layouts
 - src/layouts/index.lt.js
*/

const chalk = require("chalk");

const fs = require("fs");

// Default statuses
const error = chalk.black.bgRed("ERROR:");
const warn = chalk.black.bgYellow("WARNING:");
const good = chalk.black.bgGreen("GOOD:");

exports.compile = function (pwd) {
  let status = detect(pwd);
  // Warn user about no Git files
  if (status.includes("noGit")) {
    console.log(`
${warn} Git configuration not found. Git is recommended for all programming projects. 
Yxess doesn't require git, but highly recommends it. 
Start git by executing ${chalk.inverse("git init")}. 
Find out more about Git at https://git-scm.com.`);
  }
};

function detect(pwd) {
  // End status; to be returned
  let status = [];

  // Check if git is being used.
  let git = fs.existsSync(`${pwd}/.git`);
  if (!git) {
    console.log(`${warn} git not found.`);
    status.push("noGit");
  } else {
    console.log(`${good} git found.`);
  }

  // Check if yxess.json exists
  let configContent;
  let configPretty;
  let config = fs.existsSync(`${pwd}/yxess.json`);
  if (!config) {
    console.log(`${error} yxess.json not found.`);
    status.push("noConfig");
    status.push("failed");
    return status, 1;
  } else {
    console.log(`${good} yxess.json exists.`);
    const json = fs.readFileSync(`${pwd}/yxess.json`);
    configContent = JSON.parse(json);
    configPretty = JSON.stringify(configContent, null, 4);
    console.log(`${good} config content found:\n`);
    console.log(configPretty);
    console.log();
  }

  // Find src/
  let files = [];
  let src = fs.existsSync(`${pwd}/src/`);
  if (!src) {
    console.log(`${error} no src directory found.`);
    status.push("noSrc");
    return status, 1;
  } else {
    console.log(`${good} src directory exists.`);
    fs.readdirSync(`${pwd}/src/`).forEach((file) => {
      files.push(file);
    });
  }

  // Check if files exist in src/
  if (!files.length) {
    console.log(`${error} src directory is empty.`);
    status.push("noSrcFiles");
    return status, 1;
  } else {
    console.log(`${good} source files found!\n`);
    files.forEach((file) => {
      console.log(` - ${file}`);
    });
  }

  console.log(`
${good} detection complete! Seems like you have a functioning system. The exact status we have is ${
    !status.length
      ? `empty (${chalk.inverse("[]")}), so you're clean!`
      : `"${status}"`
  }.
`);

  return status;
}
