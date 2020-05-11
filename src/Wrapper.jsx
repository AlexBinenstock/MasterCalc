import React, { useState, useEffect, Fragment } from "react";
import {
  Grid,
  Paper,
  ButtonGroup,
  Button,
  IconButton,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveIcon from "@material-ui/icons/Remove";
import CalculatorsHub from "./CalculatorsHub";

const Wrapper = () => {
  const [calculatorCount, setCalculatorCount] = useState(1);

  const handleAddCalc = () => {
    console.log(calculatorCount);
    setCalculatorCount(calculatorCount + 1);
  };
  const handleRemove = () => {
    console.log(calculatorCount);
    setCalculatorCount(calculatorCount - 1);
  };
  return (
    <Fragment>
      <div className={"header"}>
        <span className={"title"}>YO DAWG I HEARD YOU LIKED CALCULATORS</span>
        <IconButton>
          <AddCircleOutlineIcon onClick={handleAddCalc} />
        </IconButton>
        <IconButton>
          <RemoveIcon
            onClick={() =>
              setCalculatorCount(
                calculatorCount > 1 ? calculatorCount - 1 : calculatorCount
              )
            }
          />
        </IconButton>
      </div>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={3}
        style={{ pointerEvents: "none" }}
      >
        <CalculatorsHub calculatorCount={calculatorCount} />
      </Grid>
    </Fragment>
  );
};

export default Wrapper;
