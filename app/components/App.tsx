import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import NavBar from "./NavBar";
import Tabs from "./Tabs";

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <CssBaseline />
        <NavBar />
        <Tabs />
      </div>
    );
  }
}
