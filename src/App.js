import "./App.css";

import React from "react";

import Grid from "@material-ui/core/Grid";
import Calculator from "./Calculator";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

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
      <div className="App">
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12} md={6} lg={4} xl={3} alignItems="center">
            <Calculator></Calculator>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
