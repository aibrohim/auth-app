import { createContext, useState } from "react";

export const CalculatorContext = createContext();

const CalculatorProvider = (props) => {
  const [count, setCount] = useState(0);

  return <CalculatorContext.Provider value={{count, setCount}} {...props} />
};

export default CalculatorProvider