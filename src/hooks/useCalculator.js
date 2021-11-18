import { useContext } from "react";
import { CalculatorContext } from "../contexts/calculator";

const useCalculator = () => {
  const values = useContext(CalculatorContext);

  if (!values) {
    throw new Error("useCalculator must be called inside CalculatorProvider");
  }

  return values;
};

export default useCalculator;