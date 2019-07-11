import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

import "./index.css";

import "bootstrap/dist/css/bootstrap.css";
import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
