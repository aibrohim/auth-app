import useCalculator from "../../hooks/useCalculator";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";

const options = {
  maxDate: "18-11-2021"
};

const Users = () => {
  const {count} = useCalculator();

  const handleCalendarChange = (date) => {
    console.log(date);
  }

  return (
    <>
      <h1>Users</h1>
      <p>Son: {count}</p>
      <Flatpickr options={options} onChange={handleCalendarChange} />
    </>
  );
};

export default Users;