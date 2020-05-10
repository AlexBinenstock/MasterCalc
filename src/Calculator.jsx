import "./Calculator.scss";

import React, { useState } from "react";
import { Grid, Paper, ButtonGroup, Button } from "@material-ui/core";

const Calculator = () => {
  const [calcValue, setCalcValue] = useState(null);
  const [eq, setEq] = useState(null);
  const [lastInputWasOperator, setLastInputWasOperator] = useState(null);

  const handleClear = () => {
    setCalcValue(null);
    setEq(null);
  };

  const handleClearNum = () => {
    setCalcValue(null);
  };

  const handleNumberButtonClick = (event) => {
    debugger;
    let newVal = calcValue
      ? calcValue + event.currentTarget.value
      : event.currentTarget.value;
    setCalcValue(newVal);
    setLastInputWasOperator(false);
  };

  const handleOperation = (operator) => {
    if (eq !== null) {
      setEq(eq + " " + calcValue + " " + operator);
    } else {
      setEq(calcValue + " " + operator);
    }
    setCalcValue(null);
    setLastInputWasOperator(true);
  };

  const handleSolve = () => {
    let result;
    let safeEquation;
    if (lastInputWasOperator) {
      safeEquation = eq.substring(0, eq.lastIndexOf(" "));
    } else {
      safeEquation = eq;
    }
    if (calcValue !== null) {
      result = eval(safeEquation + " " + calcValue);
    } else {
      result = eval(safeEquation);
    }
    setCalcValue(result);
    setEq(null);
  };

  const handleInvert = () => {
    setCalcValue(calcValue * -1);
  };

  return (
    <Grid className={"calculator-wrapper"} item xs={12}>
      <Paper elevation={3} className={"calculator-background"}>
        <div className={"eq-display"}>{eq}</div>
        <div className={"screen"}>{calcValue}</div>
        <div className={"calc-body"}>
          <Grid
            container
            className={"button-row"}
            justify="flex-end"
            alignItems="center"
          >
            <Button
              onClick={handleNumberButtonClick}
              value={Math.PI}
              variant="outlined"
              color="primary"
              className={"calc-button"}
            >
              <mi>π</mi>
            </Button>
            <Button
              onClick={handleClearNum}
              variant="outlined"
              color="primary"
              className={"calc-button"}
            >
              CE
            </Button>
            <Button
              onClick={handleClear}
              variant="outlined"
              color="primary"
              className={"calc-button"}
            >
              C
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={"calc-button button-right"}
              onClick={() => handleOperation("/")}
            >
              &divide;
            </Button>
          </Grid>
          <Grid
            container
            className={"button-row"}
            justify="center"
            alignItems="center"
          >
            <ButtonGroup
              size="large"
              color="primary"
              aria-label="large outlined primary button group"
            >
              <Button
                onClick={handleNumberButtonClick}
                value={7}
                className={"calc-button"}
              >
                7
              </Button>
              <Button
                onClick={handleNumberButtonClick}
                value={8}
                className={"calc-button"}
              >
                8
              </Button>
              <Button
                onClick={handleNumberButtonClick}
                value={9}
                className={"calc-button"}
              >
                9
              </Button>
            </ButtonGroup>

            <Button
              variant="outlined"
              color="primary"
              className={"calc-button button-right"}
              onClick={() => handleOperation("*")}
            >
              &times;
            </Button>
          </Grid>
          <Grid
            container
            className={"button-row"}
            justify="center"
            alignItems="center"
          >
            <ButtonGroup
              size="large"
              color="primary"
              aria-label="large outlined primary button group"
            >
              <Button
                onClick={handleNumberButtonClick}
                value={4}
                className={"calc-button"}
              >
                4
              </Button>
              <Button
                onClick={handleNumberButtonClick}
                value={5}
                className={"calc-button"}
              >
                5
              </Button>
              <Button
                onClick={handleNumberButtonClick}
                value={6}
                className={"calc-button"}
              >
                6
              </Button>
            </ButtonGroup>

            <Button
              variant="outlined"
              color="primary"
              className={"calc-button button-right"}
              onClick={() => handleOperation("-")}
            >
              &minus;
            </Button>
          </Grid>
          <Grid
            container
            className={"button-row"}
            justify="center"
            alignItems="center"
          >
            <ButtonGroup
              size="large"
              color="primary"
              aria-label="large outlined primary button group"
            >
              <Button
                onClick={handleNumberButtonClick}
                value={1}
                className={"calc-button"}
              >
                1
              </Button>
              <Button
                onClick={handleNumberButtonClick}
                value={2}
                className={"calc-button"}
              >
                2
              </Button>
              <Button
                onClick={handleNumberButtonClick}
                value={3}
                className={"calc-button"}
              >
                3
              </Button>
            </ButtonGroup>

            <Button
              variant="outlined"
              color="primary"
              className={"calc-button button-right"}
              onClick={() => handleOperation("+")}
            >
              +
            </Button>
          </Grid>
          <Grid
            container
            className={"button-row"}
            justify="center"
            alignItems="center"
          >
            <ButtonGroup
              size="large"
              color="primary"
              aria-label="large outlined primary button group"
            >
              <Button onClick={handleInvert} className={"calc-button"}>
                &plusmn;
              </Button>
              <Button
                onClick={handleNumberButtonClick}
                value={0}
                className={"calc-button"}
              >
                0
              </Button>
              <Button
                onClick={handleNumberButtonClick}
                value={"."}
                className={"calc-button"}
              >
                .
              </Button>
            </ButtonGroup>

            <Button
              onClick={handleSolve}
              variant="outlined"
              color="primary"
              className={"calc-button button-right"}
            >
              =
            </Button>
          </Grid>
        </div>
      </Paper>
    </Grid>
  );
};

export default Calculator;
