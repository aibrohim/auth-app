import { useMemo, useState } from "react";
import useCalculator from "../../hooks/useCalculator";

const addOne = (num) => {
  for (let i = 0; i < 1000000000; i++) {

  }
  return num * 2;
};

const Products = () => {
  const {count, setCount} = useCalculator();
  const [isGreen, setGreen] = useState(false);

  const recounted = useMemo(() => addOne(count), [count]);

  return (
    <>
      <h1>Products</h1>
      <p style={{color: isGreen ? "green" : "black"}}>Raqam: {recounted}</p>
      <button onClick={() => setCount(count + 1)}>Qo'shish</button>
      <button onClick={() => setCount(count - 1)}>Ayirish</button>
      <button onClick={() => setGreen(!isGreen)}>Stilni o'zgartirish</button>
    </>
  );
};

export default Products;