export const operators = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  MULTIPLY: "MULTIPLY",
  DIVIDE: "DIVIDE",
};

export const handleNumberButtonClick = (event) => {
  debugger;
  setCalcValue(
    calcValue
      ? calcValue + event.currentTarget.value
      : event.currentTarget.value
  );
};

export const handleAddition = () => {
  setCurrentOperation(operators.ADD);
};
