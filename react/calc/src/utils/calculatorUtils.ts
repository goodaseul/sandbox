export const preformCalculation = (
  prev: number,
  current: number,
  operation: string
) => {
  switch (operation) {
    case "+":
      return prev + current;
    case "-":
      return prev - current;
    case "*":
      return prev * current;
    case "/":
      return prev / current;
    default:
      return current;
  }
};
export const initailData: CalculatorState = {
  currentNumber: "0",
  previousNumber: "",
  operation: null,
  isNewNumber: true,
};
