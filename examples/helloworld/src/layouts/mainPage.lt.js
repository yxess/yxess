// Page (layout) file
//! Change this path later
const layer = require("../../../../src/modules/layer.js");

// TODO: CSS
//const button = require("./components/button.co.js");

exports.init = function () {
  let header = new layer.Div();
  header.class += "header";

  let footer = new layer.Div();
  footer.class += "footer";

  console.log(header.style.height);
  return header, footer;
};

exports.init();
