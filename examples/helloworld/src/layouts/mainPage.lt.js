// Page (layout) file
const React = require("react");
const Button = require("./components/button.co.js");

// TODO: CSS
//const button = require("./components/button.co.js");

exports.init = function () {
  const title = React.createElement(
    "div",
    { className: "shopping-list" },
    React.createElement(Button.Title /* ... h1 children ... */),
    React.createElement("ul" /* ... ul children ... */)
  );
  return title.props.children[0].type.render();
};
