import React, { useState, Fragment } from "react";
import { Grid, IconButton, Tooltip } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveIcon from "@material-ui/icons/Remove";
import CalcGenerator from "./CalcGenerator";

const CalcWrapper = () => {
  const [calculatorCount, setCalculatorCount] = useState(1);

  const handleAddCalc = () => {
    setCalculatorCount(calculatorCount + 1);
  };
  const handleRemove = () => {
    setCalculatorCount(
      calculatorCount > 1 ? calculatorCount - 1 : calculatorCount
    );
  };
  return (
    <Fragment>
      <div className={"calc-header"}>
        <Tooltip title={"add calculator"}>
          <IconButton>
            <AddCircleOutlineIcon onClick={handleAddCalc} />
          </IconButton>
        </Tooltip>
        <Tooltip title={"remove calculator"}>
          <IconButton>
            <RemoveIcon onClick={handleRemove} />
          </IconButton>
        </Tooltip>
      </div>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={3}
        style={{ pointerEvents: "none", width: "100%" }}
      >
        <CalcGenerator calculatorCount={calculatorCount} />
      </Grid>
    </Fragment>
  );
};

export default CalcWrapper;
