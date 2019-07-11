import * as React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import FormGrid from "./FormGrid";

// const Hello: React.SFC = () => {
//   return <div>Hello</div>;
// };

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/link" component={FormGrid} />
          </Switch>
        </Router>
      </div>
    );
  }
}
