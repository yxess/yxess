/*USE:

  loader.load("Heloo!");
  loader.stopLoad(true);

*/

i = 0;
let loaders = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
var loaderObject;

exports.load = function (phrase) {
  loaderObject = setInterval(() => {
    // Here we can't use console.log() as it writes a new line.
    if (i < loaders.length) {
      process.stdout.write(`\r` + loaders[i] + ` ${phrase} `);
    } else {
      i = 0;
    }
    i++;
  }, 100);
};

exports.stopLoad = function (success) {
  process.stdout.write(`\r` + `${success ? "✓" : "🗴"}\n`);
  clearInterval(loaderObject);
};
