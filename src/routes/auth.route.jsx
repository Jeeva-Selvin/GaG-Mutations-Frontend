import React from "react";
import Login from "../pages/authpages/login.jsx";
import Signin from "../pages/authpages/signin.jsx";
import { Route, Routes, Navigate } from "react-router-dom";

const Authrouter = () => {
  return (
    <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default Authrouter;
