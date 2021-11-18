import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

const useUser = () => {
  const values = useContext(AuthContext);

  if (!values) {
    throw new Error("useUser must be called inside AuthProvider")
  }

  return values;
};

export default useUser;