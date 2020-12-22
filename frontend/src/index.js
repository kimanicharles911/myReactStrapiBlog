import React from "react";
import ReactDom from "react-dom";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.querySelector("root")
)