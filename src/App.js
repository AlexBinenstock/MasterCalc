import "./App.scss";

import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import CalculatorsHub from "./CalculatorsHub";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Wrapper from "./Wrapper";
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
        <Wrapper></Wrapper>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
