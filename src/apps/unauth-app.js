import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";

const UnAuthApp = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default UnAuthApp;