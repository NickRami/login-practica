import { Route, Routes } from "react-router";
import Home from "../pages/home-page";
import SignUp from "../pages/signup-page";
import Login from "../pages/login-page";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};
