import React, { useState, useEffect, Fragment } from "react";
import {
  Grid,
  Paper,
  ButtonGroup,
  Button,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import Calculator from "./Calculator";
const CalculatorsHub = ({ calculatorCount }) => {
  let calcItemsToRender = [];
  for (var i = 0; i < calculatorCount; i++) {
    calcItemsToRender.push(<Calculator key={i} identifier={i + 1} />);
  }
  return calcItemsToRender;
};

export default CalculatorsHub;
