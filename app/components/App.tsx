import * as React from "react";

import NavBar from "./NavBar";
import Tabs from "./Tabs";

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <NavBar />
        <Tabs />
      </div>
    );
  }
}
