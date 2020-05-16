import React from "react";

import Calculator from "./Calculator";
const CalcGenerator = ({ calculatorCount }) => {
  let calcItemsToRender = [];
  for (var i = 0; i < calculatorCount; i++) {
    calcItemsToRender.push(<Calculator key={i} identifier={i + 1} />);
  }
  return calcItemsToRender;
};

export default CalcGenerator;
