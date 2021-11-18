import { useEffect, useState } from "react";

const List = ({getItems}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
  }, [getItems]);

  return (
    <ul>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
};

export default List;