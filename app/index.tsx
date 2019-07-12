import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

import "./index.css";
import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";
import "../scss/custom.scss";

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
