import "./App.scss";
import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import RouteHandler from "./RouteHandler";
// home brewed theme:
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#E33E7F",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App" style={{ pointerEvents: "none" }}>
        <RouteHandler />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
