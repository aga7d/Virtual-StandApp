import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import { Route } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <Root>
    <Route path="/" component={App} />
  </Root>,
  document.querySelector("#root")
);
