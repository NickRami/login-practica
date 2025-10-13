import { Route, Routes } from "react-router";
import Login from "../pages/login-page";
import Home from "../pages/home-page";
import SignUp from "../pages/signup-page";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
};
