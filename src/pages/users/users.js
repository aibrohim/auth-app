import useCalculator from "../../hooks/useCalculator";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import Button from "../../components/button/button";
import { useEffect } from "react";

const options = {
  maxDate: "18-11-2021"
};

const Users = () => {
  const {count} = useCalculator();

  useEffect(() => {
    console.log(`men tug'ildim`);

    return () => {
      console.log(`men o'laman hozir`);
    }
  }, []);

  const handleCalendarChange = (date) => {
    console.log(date);
  }

  return (
    <>
      <h1>Users</h1>
      <p>Son: {count}</p>
      <Flatpickr options={options} onChange={handleCalendarChange} />

      <Button initialCount={5} />
    </>
  );
};

export default Users;