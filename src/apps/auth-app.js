import { Route, Routes } from "react-router";
import Header from "../components/header/header";
import CalculatorProvider from "../contexts/calculator";
import NotFound from "../pages/404/404";
import Products from "../pages/products/products";
import Users from "../pages/users/users";

const AuthApp = () => {
  return (
    <>
      <Header />
      <CalculatorProvider>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CalculatorProvider>
    </>
  );
};

export default AuthApp;