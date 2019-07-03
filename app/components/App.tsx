import * as React from "react";
//import CssBaseline from "@material-ui/core/CssBaseline";

import NavBar from "./NavBar";
import Tabs from "./Tabs";

import settings from "../settings";
import { createMuiTheme } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";

// declare module "@material-ui/core/styles/createMuiTheme" {
//   interface Theme {
//     palette: Palette;
//   }
//   // allow configuration using `createMuiTheme`
//   interface ThemeOptions {
//     palette?: PaletteOptions;
//   }
// }

const theme = createMuiTheme({
  palette: {
    primary: settings.theme.primaryColor.import,
    secondary: settings.theme.secondaryColor.import,
    type: settings.theme.type
  }
});

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <NavBar />
          <Tabs />
        </MuiThemeProvider>
      </div>
    );
  }
}
