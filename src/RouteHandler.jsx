import "./App.scss";
import React, { useState, Fragment } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CalcWrapper from "./Calculator/CalcWrapper";
import CountDown from "./CountDown/CountDown";

const routes = { CALC: "calculator", COUNTDOWN: "countdown" };

const RouteHandler = () => {
  const [route, setRoute] = useState(routes.COUNTDOWN);

  const renderSwitch = (routeToRender) => {
    switch (routeToRender) {
      case routes.CALC:
        return <CalcWrapper />;
      case routes.COUNTDOWN:
        return <CountDown />;
      default:
        return <CountDown />;
    }
  };

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => setRoute(routes.CALC)} color="inherit">
            Calculator
          </Button>
          <Button onClick={() => setRoute(routes.COUNTDOWN)} color="inherit">
            Count-Down
          </Button>
        </Toolbar>
      </AppBar>
      {renderSwitch(route)}
    </Fragment>
  );
};

export default RouteHandler;
