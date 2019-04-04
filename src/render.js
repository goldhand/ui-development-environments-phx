/* eslint-env browser,commonjs */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mountPoint = document.createElement("div");
document.body.appendChild(mountPoint);

ReactDOM.render(<App />, mountPoint);

if (module && module.hot) {
  module.hot.accept("./App.js", function() {
    ReactDOM.render(<App />, mountPoint);
  });
}
