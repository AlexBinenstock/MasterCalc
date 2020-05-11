import "./Calculator.scss";

import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  ButtonGroup,
  Button,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";

const Calculator = ({ identifier }) => {
  const [calcValue, setCalcValue] = useState(null);
  const [eq, setEq] = useState(null);
  const [lastInputWasOperator, setLastInputWasOperator] = useState(null);
  const [calcLabel, setCalcLabel] = useState(`calc ${identifier} label`);
  const [isEditMode, setIsEditMode] = useState(false);
  const [calcInputRef, setCalcInputRef] = useState(null);

  useEffect(() => {
    calcInputRef && calcInputRef.focus();
  }, [calcInputRef]);

  const handleClear = () => {
    setCalcValue(null);
    setEq(null);
  };

  const handleClearNum = () => {
    setCalcValue(null);
  };

  const handleNumberButtonClick = (event) => {
    let newVal = calcValue
      ? calcValue + event.currentTarget.value
      : event.currentTarget.value;
    setCalcValue(newVal);
    setLastInputWasOperator(false);
  };

  const handlePi = () => {
    setCalcValue(Math.PI);
    setLastInputWasOperator(false);
  };

  const getSafeEquation = (equation) => {
    if (lastInputWasOperator) {
      return removeLastOperator(equation);
    } else {
      return equation;
    }
  };

  const removeLastOperator = (eqation) => {
    return eqation.substring(0, eqation.lastIndexOf(" "));
  };

  const handleOperation = (operator) => {
    if (eq !== null) {
      if (lastInputWasOperator) {
        setEq(removeLastOperator(eq) + " " + calcValue + " " + operator);
      } else {
        setEq(eq + " " + calcValue + " " + operator);
      }
    } else {
      setEq(calcValue + " " + operator);
    }
    setCalcValue(null);
    setLastInputWasOperator(true);
  };

  const handleSolve = () => {
    let result;
    let safeEquation = getSafeEquation(eq);

    if (!safeEquation) {
      return;
    }
    if (safeEquation + " " + calcValue === "3 + 6 + 9") {
      setCalcValue("Bitch ass POOSE");
      setEq("Holy shit roasted");
      return;
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

  const handleLabelClick = () => {
    console.log("click!");
    setIsEditMode(true);
  };

  const handleLabelInputBlur = (event) => {
    setCalcLabel(event.target.value);
    setIsEditMode(false);
  };

  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      xl={3}
      alignItems="center"
      style={{ pointerEvents: "none" }}
    >
      <Grid
        className={"calculator-wrapper"}
        item
        xs={12}
        style={{ pointerEvents: "none" }}
      >
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
                onClick={handlePi}
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
          {!isEditMode ? (
            <div onClick={handleLabelClick} class={"calc-label"}>
              <IconButton
                onClick={handleLabelClick}
                aria-label="edit"
                size="small"
              >
                <EditIcon fontSize="inherit" />
              </IconButton>
              <span onClick={handleLabelClick}>{calcLabel}</span>
            </div>
          ) : (
            <span class={"calc-label calc-label-input"}>
              <IconButton
                onClick={handleLabelInputBlur}
                aria-label="edit"
                size="small"
              >
                <SaveIcon fontSize="inherit" />
              </IconButton>
              <input
                onBlur={handleLabelInputBlur}
                placeholder={calcLabel}
                class={""}
                type="text"
                ref={(calcInput) => {
                  setCalcInputRef(calcInput);
                }}
              />
            </span>
          )}
        </Paper>
      </Grid>{" "}
    </Grid>
  );
};

export default Calculator;
